/*
 * @file wuiplugin-selector-0.3.js
 * @class WUIPluginSelector
 * @version 0.3
 * @author Sergio E. Belmar V. (wuijs.project@gmail.com)
 * @copyright Sergio E. Belmar V. (wuijs.project@gmail.com)
 */

class WUIPluginSelector extends WUIModal {

	static version = "0.3";
	static #defaults = {
		value: "",
		options: [],
		multiple: false,
		separatorValue: ",",
		separatorText: ", ",
		emptyText: "",
		selecteableText: false,
		acceptButton: null,
		acceptVisible: true,
		acceptData: {},
		acceptText: "",
		acceptOnClick: null,
		cancelButton: null,
		cancelVisible: true,
		cancelData: {},
		cancelText: "",
		cancelOnClick: null,
		onSelect: null
	};

	#properties = {};
	#htmlElements = {
		box: null,
		options: null,
		footer: null,
		cancelButton: null,
		acceptButton: null
	};
	#input;

	constructor(properties = {}) {
		super(properties);
		const defaults = structuredClone(WUIPluginSelector.#defaults);
		Object.entries(defaults).forEach(([name, value]) => {
			this[name] = name in properties ? properties[name] : value;
		});
		this.#input = null;
	}

	get value() {
		return this.#properties.value;
	}

	get options() {
		return this.#properties.options;
	}

	get multiple() {
		return this.#properties.multiple;
	}

	get separatorValue() {
		return this.#properties.separatorValue;
	}

	get separatorText() {
		return this.#properties.separatorText;
	}

	get emptyText() {
		return this.#properties.emptyText;
	}

	get selecteableText() {
		return this.#properties.selecteableText;
	}

	get acceptButton() {
		return this.#properties.acceptButton;
	}

	get acceptVisible() {
		return this.#properties.acceptVisible;
	}

	get acceptData() {
		return this.#properties.acceptData;
	}

	get acceptText() {
		return this.#properties.acceptText;
	}

	get acceptOnClick() {
		return this.#properties.acceptOnClick;
	}

	get cancelButton() {
		return this.#properties.cancelButton;
	}

	get cancelVisible() {
		return this.#properties.cancelVisible;
	}

	get cancelData() {
		return this.#properties.cancelData;
	}

	get cancelText() {
		return this.#properties.cancelText;
	}

	get cancelOnClick() {
		return this.#properties.cancelOnClick;
	}

	get onSelect() {
		return this.#properties.onSelect;
	}

	set value(value) {
		if (typeof (value) == "string") {
			this.#properties.value = value;
		}
	}

	set options(value) {
		if (Array.isArray(value)) {
			this.#properties.options = value;
		}
	}

	set multiple(value) {
		if (typeof (value) == "boolean") {
			this.#properties.multiple = value;
		}
	}

	set separatorValue(value) {
		if (typeof (value) == "string") {
			this.#properties.separatorValue = value;
		}
	}

	set separatorText(value) {
		if (typeof (value) == "string") {
			this.#properties.separatorText = value;
		}
	}

	set emptyText(value) {
		if (typeof (value) == "string") {
			this.#properties.emptyText = value;
		}
	}

	set selecteableText(value) {
		if (typeof (value) == "boolean") {
			this.#properties.selecteableText = value;
		}
	}

	set acceptButton(value) {
		if (typeof (value) == "object" && value != null && value.constructor.name == "WUIButton") {
			this.#properties.acceptButton = value;
		}
	}

	set acceptVisible(value) {
		if (typeof (value) == "boolean") {
			this.#properties.acceptVisible = value;
		}
	}

	set acceptData(value) {
		if (typeof (value) == "object") {
			this.#properties.acceptData = value;
		}
	}

	set acceptText(value) {
		if (typeof (value) == "string") {
			this.#properties.acceptText = value;
		}
	}

	set acceptOnClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.acceptOnClick = value;
		}
	}

	set cancelButton(value) {
		if (typeof (value) == "object" && value != null && value.constructor.name == "WUIButton") {
			this.#properties.cancelButton = value;
		}
	}

	set cancelVisible(value) {
		if (typeof (value) == "boolean") {
			this.#properties.cancelVisible = value;
		}
	}

	set cancelData(value) {
		if (typeof (value) == "object") {
			this.#properties.cancelData = value;
		}
	}

	set cancelText(value) {
		if (typeof (value) == "string") {
			this.#properties.cancelText = value;
		}
	}

	set cancelOnClick(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.cancelOnClick = value;
		}
	}

	set onSelect(value) {
		if (typeof (value) == "function" || value == null) {
			this.#properties.onSelect = value;
		}
	}

	#initHTML() {
		if (!document.querySelector(this.selector + " > .box")) {
			this.#buildHTML();
		} else {
			this.#loadHTML();
		}
	}

	#buildHTML() {
		this.#htmlElements.box = document.createElement("div");
		this.#htmlElements.options = document.createElement("div");
		this.#htmlElements.footer = document.createElement("div");
		this.#htmlElements.cancelButton = document.createElement("button");
		this.#htmlElements.acceptButton = document.createElement("button");
		this.getElement().classList.add("wui-modal", "wuiplugin-selector", "mobile", "priority");
		this.getElement().appendChild(this.#htmlElements.box);
		this.#htmlElements.box.classList.add("box");
		this.#htmlElements.box.appendChild(this.#htmlElements.options);
		this.#htmlElements.box.appendChild(this.#htmlElements.footer);
		this.#htmlElements.options.classList.add("options");
		this.#htmlElements.footer.classList.add("footer");
		this.#htmlElements.footer.appendChild(this.#htmlElements.cancelButton);
		this.#htmlElements.footer.appendChild(this.#htmlElements.acceptButton);
		this.#htmlElements.cancelButton.classList.add("wui-button", "cancel", "wui-language", "flat");
		this.#htmlElements.cancelButton.textContent = this.#properties.cancelText;
		this.#htmlElements.acceptButton.classList.add("wui-button", "submit", "wui-language");
		this.#htmlElements.acceptButton.textContent = this.#properties.acceptText;
		Object.entries(this.#properties.cancelData).forEach(([key, value]) => {
			this.#htmlElements.cancelButton.dataset[key] = value;
		});
		Object.entries(this.#properties.acceptData).forEach(([key, value]) => {
			this.#htmlElements.acceptButton.dataset[key] = value;
		});
	}

	#loadHTML() {
		this.#htmlElements.box = document.querySelector(this.selector + " > .box");
		this.#htmlElements.options = document.querySelector(this.selector + " > .box > .options");
		this.#htmlElements.footer = document.querySelector(this.selector + " > .box > .footer");
		this.#htmlElements.cancelButton = document.querySelector(this.selector + " > .box > .footer > button.cancel");
		this.#htmlElements.acceptButton = document.querySelector(this.selector + " > .box > .footer > button.submit");
	}

	init() {
		this.#initHTML();
		super.init();
		this.acceptButton = new WUIButton({ selector: this.selector + " > .box > .footer > button.submit" });
		this.cancelButton = new WUIButton({ selector: this.selector + " > .box > .footer > button.cancel" });
		this.acceptButton.onClick = () => {
			let indexes = [];
			let values = [];
			let texts = [];
			this.#htmlElements.options.querySelectorAll(".option.selected").forEach(option => {
				indexes.push(option.dataset.index);
				values.push(option.dataset.value);
				texts.push(option.dataset.text);
			});
			this.value = values.join(this.separatorValue);
			if (this.#input != null) {
				if (this.multiple) {
					Array.from(this.#input.options).forEach(option => {
						option.selected = values.includes(option.value);
					});
				} else {
					this.#input.value = this.value;
				}
				this.#input.dispatchEvent(new Event("change"));
			}
			if (typeof (this.acceptOnClick) == "function") {
				this.acceptOnClick(indexes.join(this.separatorValue), this.value, texts.join(this.separatorText));
			}
			this.close();
		};
		this.acceptButton.init();
		this.cancelButton.onClick = () => {
			if (typeof (this.cancelOnClick) == "function") {
				this.cancelOnClick();
			}
			this.close();
		};
		this.cancelButton.init();
	}

	prepareInput(input, options = {}) {
		if (typeof (input) == "object" && input instanceof HTMLElement && input.tagName.toLowerCase() == "select") {
			const defaults = {
				emptyText: this.emptyText,
				direction: "ltr",
				force: false
			};
			Object.entries(defaults).forEach(([name, value]) => {
				if (typeof (options[name]) == "undefined") {
					options[name] = value;
				}
			});
			input.style.position = "relative";
			input.style.zIndex = 1;
			input._touches = [];
			input._drag = false;
			input.addEventListener("touchstart", event => {
				input._touches = event.touches || event.targetTouches;
				input._drag = false;
			});
			input.addEventListener("touchmove", () => {
				input._touches = [];
				input._drag = true;
			});
			input.addEventListener("touchend", event => {
				const mobile = Boolean(window.matchMedia("(max-width: 767px)").matches);
				if (mobile || options.force) {
					if (!input._drag) {
						if (event.cancelable) {
							event.preventDefault();
						}
						const values = input.value.split(",");
						const rect = input.getBoundingClientRect();
						const rightTouch = event.target.clientWidth - (input._touches[0].clientX - rect.left);
						input.setAttribute("dir", options.direction);
						input.querySelectorAll("option").forEach(option => {
							option.style.display = "none";
						});
						if (rightTouch <= 30) {
							this.#input = input;
							this.value = input.value;
							this.options = [];
							this.selecteableText = false;
							this.#input.querySelectorAll("option").forEach(option => {
								this.options.push({
									icon: null,
									text: option.text || options.emptyText || "",
									value: option.value || "",
									selected: values.indexOf(option.value) > -1 ? true : false
								});
							});
							this.acceptVisible = true;
							this.cancelVisible = true;
							this.open();
						}
					}
				}
			});
		}
	}

	open() {
		const options = this.#htmlElements.box.querySelector(".options");
		let index = 0;
		options.innerHTML = "";
		if (Array.isArray(this.options)) {
			this.options.forEach((opt, i) => {
				const option = document.createElement("div");
				const icon = document.createElement("div");
				const text = document.createElement("div");
				const enabled = typeof (opt.enabled) == "boolean" && !opt.enabled ? false : true;
				const selected = Boolean(opt.selected);
				icon.className = "icon " + (typeof (opt.icon) == "string" && opt.icon != "" ? opt.icon : "wui-icon check-line");
				text.className = "text " + (this.selecteableText ? "selecteable" : "");
				text.innerHTML = opt.value == "" ? "<i class='empty'>" + this.emptyText + "</i>" : opt.text;
				option.className = "option" + (selected ? " selected" : "");
				option.dataset.index = i;
				option.dataset.value = opt.value;
				option.dataset.text = opt.text;
				option.addEventListener("click", () => {
					if (enabled) {
						const index = option.dataset.index;
						const value = option.dataset.value;
						options.querySelectorAll(".option").forEach((opt, j) => {
							if (opt.dataset.value == value) {
								opt.classList.add("selected");
								this.options[j].selected = true;
							} else {
								opt.classList.remove("selected");
								opt.dataset.selected = false;
							}
						});
						if (typeof (this.onSelect) == "function") {
							this.onSelect(value, index);
						}
					}
				});
				option.appendChild(icon);
				option.appendChild(text);
				if (!enabled) {
					option.classList.add("disabled");
				}
				options.appendChild(option);
				if (selected) {
					index = i;
				}
			});
		}
		if (this.acceptVisible || this.cancelVisible) {
			this.getFooter().classList.remove("hidden");
		} else {
			this.getFooter().classList.add("hidden");
		}
		if (this.acceptVisible) {
			this.acceptButton.getElement().classList.remove("hidden");
		} else {
			this.acceptButton.getElement().classList.add("hidden");
		}
		if (this.cancelVisible) {
			this.cancelButton.getElement().classList.remove("hidden");
		} else {
			this.cancelButton.getElement().classList.add("hidden");
		}
		super.open(() => {
			const top = index * this.#htmlElements.options.querySelectorAll(".option")[index].offsetHeight;
			options.scrollTop = top;
		});
	}

	close() {
		super.close();
		if (this.#input != null) {
			this.#input.setAttribute("dir", "ltr");
			this.#input.querySelectorAll("option").forEach(opt => {
				opt.style.display = "block";
			});
		}
		this.#properties.acceptVisible = true;
		this.#properties.acceptOnClick = null;
		this.#properties.cancelVisible = true;
		this.#properties.cancelOnClick = null;
		this.onOpen = null;
		this.onClose = null;
		this.#properties.onSelect = null;
		this.#input = null;
	}

	destroy() {
		if (this.getElement() instanceof HTMLElement) {
			Object.entries(this.#htmlElements).forEach(([key, element]) => {
				if (element) {
					element.remove();
				}
				this.#htmlElements[key] = null;
			});
		}
		Object.keys(this.#properties).forEach(name => {
			delete this.#properties[name];
		});
		this.#input = undefined;
		super.destroy();
	}
}

/*
HTML output:
<div class="wui-modal [priority] wuiplugin-selector">
	<div class="box">
		<div class="options">
			<div class="option"></div>
			[...]
		</div>
		<div class="footer">
			<button class="wui-button cancel flat wui-language" data-key="buttons.cancel"></button>
			<button class="wui-button submit wui-language" data-key="buttons.accept"></button>
		</div>
	</div>
</div>
*/