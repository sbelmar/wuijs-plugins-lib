/*
 * @file wuiplugin-formvalidation-0.3.js
 * @class WUIPluginFormValidation
 * @version 0.3
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIPluginFormValidation {

	static version = "0.3";
	static #privates = new WeakMap();

	static #escapeRegExp(str) {
		return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	}

	static #getPrivate(form) {
		if (!this.#privates.has(form)) {
			this.#privates.set(form, {
				api: null,
				defaultInputName: "wuiDefaultInput[]"
			});
		}
		return this.#privates.get(form);
	}

	static {
		Object.defineProperty(WUIForm.prototype, "validation", {
			get() {
				const store = WUIPluginFormValidation.#getPrivate(this);
				const form = this;
				if (!store.api) {
					store.api = {
						getNames: () => WUIPluginFormValidation.getNames(form),
						getValues: () => WUIPluginFormValidation.getValues(form),
						prepare: () => WUIPluginFormValidation.prepare(form),
						clear: () => WUIPluginFormValidation.clear(form),
						reset: () => WUIPluginFormValidation.reset(form),
						resetAll: () => WUIPluginFormValidation.resetAll(form),
						validate: validations => WUIPluginFormValidation.validate(form, validations),
						focusFirst: () => WUIPluginFormValidation.focusFirst(form),
						focusFirstInvalid: validations => WUIPluginFormValidation.focusFirstInvalid(form, validations)
					};
				}
				return store.api;
			}
		});
	}

	static getNames(form) {
		const inputs = [...form.getBody().querySelectorAll(".validate")];
		const names = inputs.map(input => input.name);
		inputs.forEach((input, i) => {
			if (!input.name) {
				input.name = this.#getPrivate(form).defaultInputName;
				names[i] = input.name;
			}
		});
		return names;
	}

	static getNamesPositions(form) {
		const positions = {};
		let names = [];
		this.getNames(form).forEach(name => {
			const position = !name.match(/\[\]$/) ? 0 : positions[name] || 0;
			names.push({ name, position });
			positions[name] = position + 1;
		});
		return names;
	}

	static getValues(form) {
		const values = {};
		this.getNamesPositions(form).forEach(({ name, position }) => {
			const value = form.getValue(name, position);
			if (name.match(/\[\]$/)) {
				if (!Array.isArray(values[name])) {
					values[name] = [];
				}
				values[name][position] = value;
			} else {
				values[name] = value;
			}
		});
		return values;
	}

	static prepare(form) {
		this.getNamesPositions(form).forEach(({ name, position }) => {
			const field = form.getField(name, position);
			const input = form.getInput(name, position);
			const icon = field.querySelector(".wui-icon:last-child");
			input.addEventListener("focus", () => {
				if (field.classList.contains("invalid")) {
					if (name.match(/password/i)) {
						field.classList.remove("invalid");
						input.value = "";
						if (input.type.match(/password/i)) {
							icon.classList.add("eye-fill");
						} else if (input.type.match(/text/i)) {
							icon.classList.add("eye-slash-fill");
						}
					} else {
						icon.wuiFadeout({
							callback: () => {
								field.classList.remove("invalid");
								icon.classList.remove("error-circle-fill");
							}
						});
					}
				}
			});
			if (icon && name.match(/password/i)) {
				icon.addEventListener("click", () => {
					if (input.type.match(/password/i)) {
						input.type = "text";
						icon.classList.remove("eye-fill");
						icon.classList.add("eye-slash-fill");
					} else if (input.type.match(/text/i)) {
						input.type = "password";
						icon.classList.remove("eye-slash-fill");
						icon.classList.add("eye-fill");
					}
				});
			}
		});
	}

	static clear(form) {
		this.getNamesPositions(form).forEach(({ name, position }) => {
			form.getField(name, position).classList.remove("invalid");
		});
	}

	static reset(form) {
		this.getNamesPositions(form).forEach(({ name, position }) => {
			const field = form.getField(name, position);
			if (field.classList.contains("invalid")) {
				field.classList.remove("invalid");
				form.setValue(name, "", position);
			}
		});
	}

	static resetAll(form) {
		this.getNamesPositions(form).forEach(({ name, position }) => {
			form.getField(name, position).classList.remove("invalid");
			form.setValue(name, "", position);
		});
	}

	static validate(form, validations) {
		this.getNamesPositions(form).forEach(({ name, position }) => {
			if (validations.filter(val => val.match(new RegExp("^" + this.#escapeRegExp(name)))).length > 0) {
				const field = form.getField(name, position);
				const input = form.getInput(name, position);
				const icon = field.querySelector(".wui-icon:last-child");
				field.classList.add("invalid");
				if (icon) {
					icon.classList.add("error-circle-fill");
					if (name.match(/password/i)) {
						if (input.type.match(/password/i)) {
							icon.classList.remove("eye-fill");
						} else if (input.type.match(/text/i)) {
							icon.classList.remove("eye-slash-fill");
						}
					} else {
						icon.wuiFadein();
					}
				}
			}
		});
	}

	static focusFirst(form) {
		const namesPositions = this.getNamesPositions(form);
		if (namesPositions.length > 0) {
			form.focus(namesPositions[0].name, namesPositions[0].position);
		}
	}

	static focusFirstInvalid(form, validations) {
		this.getNamesPositions(form).some(({ name, position }) => {
			if (validations.filter(val => val.match(new RegExp("^" + this.#escapeRegExp(name)))).length > 0) {
				form.focus(name, position);
				return true;
			}
			return false;
		});
	}
}