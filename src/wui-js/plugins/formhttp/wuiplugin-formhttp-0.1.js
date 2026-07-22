/*
 * @file wuiplugin-formhttp-0.1.js
 * @class WUIPluginFormHttp
 * @version 0.1
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIPluginFormHttp {

	static version = "0.1";
	static #privates = new WeakMap();

	static #getPrivate(form) {
		if (!this.#privates.has(form)) {
			this.#privates.set(form, { api: null });
		}
		return this.#privates.get(form);
	}

	static {
		Object.defineProperty(WUIForm.prototype, "http", {
			get() {
				const store = WUIPluginFormHttp.#getPrivate(this);
				const form = this;
				if (!store.api) {
					store.api = {
						submitJson: (options) => WUIPluginFormHttp.submitJson(form, options)
					};
				}
				return store.api;
			}
		});
	}

	static async submitJson(form, options) {
		const url = options.url;
		const token = options.token;
		options.method = "POST";
		options.headers ??= {};
		options.headers["Content-Type"] = "application/json";
		options.body = JSON.stringify(Object.fromEntries(form.getFormData()));
		if (typeof token === "string") {
			options.headers["Authorization"] = `Bearer ${token}`;
		}
		["url", "token"].forEach(opt => {
			if (opt in options) {
				delete options[opt];
			}
		});
		const response = await fetch(url, options);
		if (!response.ok) {
			throw response.status;
		}
		try {
			return await response.json();
		} catch (error) {
			return {
				status: "error",
				content: await response.text()
			};
		}
	}
}
