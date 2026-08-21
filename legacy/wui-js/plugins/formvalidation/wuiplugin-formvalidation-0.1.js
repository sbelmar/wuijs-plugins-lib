/*
 * @file wuiplugin-formvalidation-0.1.js
 * @class WUIPluginFormValidation
 * @version 0.1
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIPluginFormValidation {

	static version = "0.1";
	static #privates = new WeakMap();

	static #getPrivate(form) {
		if (!this.#privates.has(form)) {
			this.#privates.set(form, { api: null });
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
						getInputNames: () => WUIPluginFormValidation.getInputNames(form),
						getInputValues: () => WUIPluginFormValidation.getInputValues(form),
						prepareInputs: () => WUIPluginFormValidation.prepareInputs(form),
						clearInputs: () => WUIPluginFormValidation.clearInputs(form),
						validateInputs: validations => WUIPluginFormValidation.validateInputs(form, validations),
						focusFirstInput: () => WUIPluginFormValidation.focusFirstInput(form),
						focusFirstInvalidInput: validations => WUIPluginFormValidation.focusFirstInvalidInput(form, validations)
					};
				}
				return store.api;
			}
		});
	}

	static getInputNames(form) {
		return [...form.getBody().querySelectorAll(".validate")].map(input => input.name);
	}

	static getInputValues(form) {
		const values = {};
		this.getInputNames(form).forEach(name => {
			values[name] = form.getValue(name);
		});
		return values;
	}

	static prepareInputs(form) {
		this.getInputNames(form).forEach(name => {
			const field = form.getField(name);
			const input = form.getInput(name);
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
			if (name.match(/password/i)) {
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

	static clearInputs(form) {
		this.getInputNames(form).forEach(name => {
			form.getField(name).classList.remove("invalid");
		});
	}

	static validateInputs(form, validations) {
		this.getInputNames(form).forEach(name => {
			if (validations.filter(val => val.match(new RegExp("^" + name))).length > 0) {
				const field = form.getField(name);
				const input = form.getInput(name);
				const icon = field.querySelector(".wui-icon:last-child");
				field.classList.add("invalid");
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
		});
	}

	static focusFirstInput(form) {
		const names = this.getInputNames(form);
		if (names.length > 0) {
			form.focus(names[0]);
		}
	}

	static focusFirstInvalidInput(form, validations) {
		this.getInputNames(form).some(name => {
			if (validations.filter(val => val.match(new RegExp("^" + name))).length > 0) {
				form.focus(name);
				return true;
			}
			return false;
		});
	}
}