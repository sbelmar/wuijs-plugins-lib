/*
 * @file wuiplugin-themes-0.6.js
 * @class WUIPluginThemes
 * @version 0.6
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIPluginThemes {

	static version = "0.6";

	getScheme() {
		return getComputedStyle(document.documentElement).getPropertyValue("color-scheme").trim();
	}

	getCurrentScheme() {
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}

	getTheme() {
		return getComputedStyle(document.body).getPropertyValue("--wuiplugin-theme-name").trim().replace(/^"|"$/g, "");
	}

	setScheme(value) {
		if (typeof (value) == "string" && value.trim().match(/^(light|only light|dark|only dark|light dark|dark light|system)$/i)) {
			const colorScheme = value.match(/dark light|system/i) ? "light dark" : value.toLowerCase().replace("only ", "").trim();
			if (this._colorScheme != colorScheme) {
				const className = colorScheme.replace("light dark", "system");
				let delay = getComputedStyle(document.documentElement).getPropertyValue("--wuiplugin-theme-transition-delay").trim() || "0";
				delay = (delay.match(/\d+s$/) ? 1000 : 1) * parseFloat(delay.replace(/m?s$/, ""));
				document.documentElement.querySelectorAll(".wuiplugin-themes").forEach(element => {
					element.classList.add("transition");
				});
				document.documentElement.style.colorScheme = colorScheme;
				document.body.classList.remove("system", "light", "dark");
				document.body.classList.add(className);
				this._colorScheme = colorScheme;
				setTimeout(() => {
					document.documentElement.querySelectorAll(".wuiplugin-themes").forEach(element => {
						element.classList.remove("transition");
					});
				}, delay);
			}
		}
	}
}