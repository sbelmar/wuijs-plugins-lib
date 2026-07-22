/*
 * @file wuiplugin-bodytheme-0.12.js
 * @class WUIPluginBodyTheme
 * @version 0.12
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIPluginBodyTheme {

	static version = "0.12";
	static #privates = new WeakMap();

	static #getPrivate(body) {
		if (!this.#privates.has(body)) {
			this.#privates.set(body, {
				colorScheme: "",
				api: null
			});
		}
		return this.#privates.get(body);
	}

	static {
		Object.defineProperty(WUIBody.prototype, "theme", {
			get() {
				const store = WUIPluginBodyTheme.#getPrivate(this);
				const body = this;
				if (!store.api) {
					store.api = {
						getScheme: () => WUIPluginBodyTheme.getScheme(),
						getCurrentScheme: () => WUIPluginBodyTheme.getCurrentScheme(),
						getTheme: () => WUIPluginBodyTheme.getTheme(),
						setScheme: (value) => WUIPluginBodyTheme.setScheme(body, value)
					};
				}
				return store.api;
			}
		});
	}

	static getScheme() {
		return getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim();
	}

	static getCurrentScheme() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}

	static getTheme() {
		return getComputedStyle(document.body).getPropertyValue("--wuiplugin-bodytheme-name").trim().replace(/^"|"$/g, "");
	}

	static setScheme(body, value) {
		if (typeof (value) === "string" && value.trim().match(/^(light|only light|dark|only dark|light dark|dark light|system)$/i)) {
			const colorScheme = value.match(/dark light|system/i) ? "light dark" : value.toLowerCase().replace("only ", "").trim();
			if (this.#getPrivate(body).colorScheme !== colorScheme) {
				const colorClass = colorScheme.replace("light dark", "system");
				let delay = getComputedStyle(document.documentElement).getPropertyValue("--wuiplugin-bodytheme-transition-delay").trim() || "0";
				delay = (delay.match(/\d+s$/) ? 1000 : 1) * parseFloat(delay.replace(/m?s$/, ""));
				document.documentElement.querySelectorAll(".wuiplugin-bodytheme").forEach(element => {
					element.classList.add("transition");
				});
				document.documentElement.dataset.colorScheme = colorScheme;
				document.documentElement.style.colorScheme = colorScheme;
				document.documentElement.querySelectorAll(".wuiplugin-bodytheme").forEach(element => {
					element.classList.remove("system", "light", "dark");
					element.classList.add(colorClass);
				});
				this.#getPrivate(body).colorScheme = colorScheme;
				setTimeout(() => {
					document.documentElement.querySelectorAll(".wuiplugin-bodytheme").forEach(element => {
						element.classList.remove("transition");
					});
				}, delay);
			}
		}
	}
}