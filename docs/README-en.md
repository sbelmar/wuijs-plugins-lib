> [!IMPORTANT]
> The GitHub account `@wuiproject` was migrated to `@wui-js` to match the name with the NPM account.

[English](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/README-en.md) |
[Español](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/README-es.md)
---

# wuijs-plugins-lib

<p align="center">
	<img src="https://github.com/wui-js/wuijs-plugins-lib/blob/main/imgs/logo/wuijs-plugins-logotype-color.svg" width="220" height="220">
</p>

|                      | |
| -------------------- | --- |
| **Library name**     | `wuijs-plugins-lib` |
| **Library version**  | `0.14.0` ([Change Log](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/CHANGELOG-en.md)) |
| **NPM package**      | `@wui-js/plugins` ([npm](https://www.npmjs.com/package/@wui-js/plugins)) |
| **Document version** | `0.14.0.20260901.0` |
| **License**          | `Apache License 2.0` |
| **Author**           | `Sergio E. Belmar V. <wuijs.project@gmail.com>` |
| **Repository**       | [https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib) |
| **Documentation**    | [https://docs.wuijs.dev](https://docs.wuijs.dev) |
| **Website**          | [https://wuijs.dev](https://wuijs.dev) |

## Index

*   [Overview](#overview)
*   [Installation](#install)
*   [Plugins](#plugins)
	*   [WUIPluginBodyTheme](#wuiplugin-bodytheme)
	*   [WUIPluginFormValidation](#wuiplugin-formvalidation)
	*   [WUIPluginFormHttp](#wuiplugin-formhttp)
	*   [WUIPluginSelector](#wuiplugin-selector) (deprecated)
*   [Demos](#demos) (CodeSandbox)

<a name="overview"></a>

## Overview

WUI/JS Plugins Lib is an open-source JavaScript/CSS library that provides a collection of plugins for WUI/JS Main Lib classes, making it easier to quickly develop web applications.

### About the WUI/JS Project

WUI/JS Plugins Lib is part of the WUI/JS project, which currently consists of 4 repositories:

-	[https://github.com/wui-js/wuijs-main-lib](https://github.com/wui-js/wuijs-main-lib)<br>
	UI Main library.<br><br>
-	[https://github.com/wui-js/wuijs-environment-lib](https://github.com/wui-js/wuijs-environment-lib)<br>
	UI Bridge library between a web environments and native web rendering engines.<br><br>
-	[https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib)<br>
	UI Plugins library.<br><br>
-	[https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos)<br>
	Repository with demos and usage examples for the project libraries.<br><br>

### Table of Plugins

| Plugin Name                                             | Version | Description |
| ------------------------------------------------------- |:-------:| ----------- |
| [WUIPluginBodyTheme](#wuiplugin-bodytheme)              | `0.13`  | Plugin for managing pre-designed themes and light and dark modes. |
| [WUIPluginFormValidation](#wuiplugin-formvalidation)    | `0.2`   | Input validation extension for WUIForm. |
| [WUIPluginFormHttp](#wuiplugin-formhttp)                | `0.1`   | Data transport extension for WUIForm (JSON submission). |
| [WUIPluginSelector](#wuiplugin-selector) `(deprecated)` | `0.4`   | Modal selector based on WUIModal. |

### Directory Map

```bash
wuijs-lib/
├── docs/
├── imgs/
│   └── logo/
├── legacy/
│   └── wui-js/
│       └── plugins/
├── src/
│   └── wui-js/
│       └── plugins/
└── tools/
```

| Path                                                                                                  | Description |
| ----------------------------------------------------------------------------------------------------- | ----------- |
| [docs](https://github.com/wui-js/wuijs-plugins-lib/tree/main/docs/)                                   | Documentation. |
| [imgs](https://github.com/wui-js/wuijs-plugins-lib/tree/main/imgs/)                                   | Images used in the documentation. |
| [imgs/logo](https://github.com/wui-js/wuijs-plugins-lib/tree/main/imgs/logo/)                         | Project logo and isotype in SVG and PNG format. |
| [legacy](https://github.com/wui-js/wuijs-plugins-lib/tree/main/legacy/)                               | Deprecated sources with previous versions. |
| [legacy/wui-js](https://github.com/wui-js/wuijs-plugins-lib/tree/main/legacy/wui-js/)                 | WUI/JS Project directory. |
| [legacy/wui-js/plugins](https://github.com/wui-js/wuijs-plugins-lib/tree/main/legacy/wui-js/plugins/) | WUI/JS Plugins library (previous versions). |
| [src](https://github.com/wui-js/wuijs-plugins-lib/tree/main/src/)                                     | Main sources of the latest version. |
| [src/wui-js](https://github.com/wui-js/wuijs-plugins-lib/tree/main/src/wui-js)                        | WUI/JS Project directory. |
| [src/wui-js/plugins](https://github.com/wui-js/wuijs-plugins-lib/tree/main/src/wui-js/plugins/)       | WUI/JS Plugins library. |
| [tools](https://github.com/wui-js/wuijs-plugins-lib/tree/main/tools/)                                 | Complementary tools. |

<a name="install"></a>

## Install

**Option 1: Install from source**

To install the WUI/JS Plugins library, it must be cloned from the official GitHub repository (`wui-js/wuijs-plugins-lib`).
Assuming the project where it will be deployed has a source directory: `./src` and within that, a `./src/libraries` library directory, you must type the following in the terminal:

```bash
git clone https://git@github.com/wui-js/wuijs-plugins-lib.git
cp -r ./wuijs-plugins-lib/src/wui-js/ ../src/libraries/
```

Optionally, it can be downloaded from the same repository in ZIP format.

```bash
wget https://github.com/wui-js/wuijs-plugins-lib/archive/refs/heads/main.zip
unzip main.zip
cp -r ./wuijs-plugins-lib/src/wui-js/ ../src/libraries/
```

> [!TIP]
> It is recommended that the `/plugins` directory be located in the same directory as the main library `/main`.

**Option 2: Install via npm**

To install the WUI/JS library via npm:

```bash
npm i @wui-js/plugins
```

The resources will be available in the `./node_modules/@wui-js/plugins` directory.

<a name="plugins"></a>

## Plugins

<a name="wuiplugin-bodytheme"></a>

### WUIPluginBodyTheme

Version: `0.13`

Plugin for managing pre-designed themes and light and dark modes.

#### Description

WUIPluginBodyTheme provides a theming system for web applications through two layers of CSS variables.
Unlike a standalone plugin class, it extends the `WUIBody` class from `wuijs-main-lib`: on load, it attaches a `theme` namespace to `WUIBody.prototype`, exposing `getScheme`, `getCurrentScheme`, `getTheme` and `setScheme` on any `WUIBody` instance as `body.theme.*`.

#### Covered Components

WUIPluginBodyTheme provides theme support for the following WUI/JS Main Lib components:

- `wui-scrolly`
- `wui-icon`
- `wui-loader`
- `wui-tooltip`
- `wui-modal`
- `wui-paging`
- `wui-slider`
- `wui-tabs`
- `wui-menubar`
- `wui-list`
- `wui-table`
- `wui-form`
- `wui-datepicker`
- `wui-timepicker`
- `wui-colorpicker`
- `wui-switch`
- `wui-intensity`
- `wui-button`
- `wui-codebox` (lab package)
- `wui-markdown` (lab package)
- `wui-tree` (lab package)

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.13.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.13.css) |
| JS   | [src/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.13.js](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.13.js) |
| CSS  | [src/wui-js/plugins/bodytheme/default/settings-0.13.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/bodytheme/default/settings-0.13.css) |
| CSS  | [src/wui-js/plugins/bodytheme/default/light-0.13.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/bodytheme/default/light-0.13.css) |
| CSS  | [src/wui-js/plugins/bodytheme/default/dark-0.13.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/bodytheme/default/dark-0.13.css) |

#### Dependencies

| Class     | Version | Description |
| --------- |:-------:| ----------- |
| `WUIBody` | `0.5`   | Base class extended by the plugin. Required. |

#### Constructor

It does not add a constructor; it extends the `WUIBody` prototype. Instantiate `WUIBody` directly (`new WUIBody([properties])`).

#### Class Properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| version | `string` | Plugin version. |

#### Instance Properties

It does not have instance properties.

#### Methods

`WUIBody.prototype.theme` is a read-only namespace getter. Its methods are called as `body.theme.*` on a `WUIBody` instance:

| Method           | Return type | Description |
| ---------------- | ----------- | ----------- |
| getScheme        | `string`    | `theme.getScheme()`<br><br>Returns the value of the CSS `color-scheme` property defined on the `<html>` element. Possible values: `"light"`, `"dark"`, `"light dark"`, `""`. |
| getCurrentScheme | `string`    | `theme.getCurrentScheme()`<br><br>Returns the operating system's preferred color scheme, regardless of the scheme configured in the application. Possible values: `"light"`, `"dark"`. |
| getTheme         | `string`    | `theme.getTheme()`<br><br>Returns the active theme name based on the CSS classes present on `document.body`. |
| setScheme        | `void`      | `theme.setScheme(scheme)`<br><br>Sets the application's color scheme. Updates the CSS classes on `document.body` and the `color-scheme` attribute on the `<html>` element. If the new scheme differs from the current one, automatically activates the background transition. The transition duration is controlled by the CSS variable `--wuiplugin-bodytheme-transition-delay` (default value: `0.4s`). Possible values: `"light"`, `"dark"`, `"light dark"`, `"system"`. |

#### Predefined themes

| Name      | Description |
| --------- | ----------- |
| `default` | Default theme. |

#### CSS Variables

The theme setting variables are defined in the file `src/wui-js/plugins/bodytheme/{theme-name}/{version}.css` and are organized in two suffix variants: `{variable}-light` for light mode and `{variable}-dark` for dark mode.
Values without a suffix are common to both modes.

**Colors (with variations by color mode):**

| Base variable                                                 | Description |
| ------------------------------------------------------------- | ----------- |
| `--wuiplugin-bodytheme-graycolor-max-(light\|dark)`           | Maximum gray (white in light, black in dark). |
| `--wuiplugin-bodytheme-graycolor-high-(light\|dark)`          | High gray. |
| `--wuiplugin-bodytheme-graycolor-half-(light\|dark)`          | Mid gray. |
| `--wuiplugin-bodytheme-graycolor-low-(light\|dark)`           | Low gray. |
| `--wuiplugin-bodytheme-graycolor-min-(light\|dark)`           | Minimum gray (black in light, white in dark). |
| `--wuiplugin-bodytheme-shadowcolor-high-(light\|dark)`        | Strong shadow color. |
| `--wuiplugin-bodytheme-shadowcolor-low-(light\|dark)`         | Soft shadow color. |
| `--wuiplugin-bodytheme-bordercolor-max-(light\|dark)`         | Maximum border color. |
| `--wuiplugin-bodytheme-bordercolor-high-(light\|dark)`        | High border color. |
| `--wuiplugin-bodytheme-bordercolor-low-(light\|dark)`         | Low border color. |
| `--wuiplugin-bodytheme-bgcolor-overlay-(light\|dark)`         | Overlay background color. |
| `--wuiplugin-bodytheme-bgcolor-box-(light\|dark)`             | Dialog and panel background color. |
| `--wuiplugin-bodytheme-bgcolor-out-(light\|dark)`             | Background color in normal state. |
| `--wuiplugin-bodytheme-bgcolor-over-(light\|dark)`            | Background color in hover or selected state. |
| `--wuiplugin-bodytheme-bgcolor-scroll-(light\|dark)`          | Scrollbar color. |
| `--wuiplugin-bodytheme-bgcolor-icon-(light\|dark)`            | Icon fill color. |
| `--wuiplugin-bodytheme-bgcolor-highcontrast-(light\|dark)`    | High-contrast background color (tooltips, etc.). |
| `--wuiplugin-bodytheme-textcolor-title-(light\|dark)`         | Title text color. |
| `--wuiplugin-bodytheme-textcolor-active-(light\|dark)`        | Active state text color. |
| `--wuiplugin-bodytheme-textcolor-focus-(light\|dark)`         | Focused state text color. |
| `--wuiplugin-bodytheme-utilitycolor-hightlight-(light\|dark)` | Primary accent color (links, buttons, selections). |
| `--wuiplugin-bodytheme-utilitycolor-warning-(light\|dark)`    | Warning or error color. |
| `--wuiplugin-bodytheme-utilitycolor-disabled-(light\|dark)`   | Disabled element color. |
| `--wuiplugin-bodytheme-intencitycolor-low-(light\|dark)`      | Low intensity color. |
| `--wuiplugin-bodytheme-intencitycolor-half-(light\|dark)`     | Medium intensity color. |
| `--wuiplugin-bodytheme-intencitycolor-high-(light\|dark)`     | High intensity color. |

**Typography and metrics (common, no color mode variant):**

| Variable                                      | Default value                           | Description |
| --------------------------------------------- | --------------------------------------- | ----------- |
| `--wuiplugin-bodytheme-borderradius-low`      | `10px`                                  | Low border radius. |
| `--wuiplugin-bodytheme-borderradius-half`     | `15px`                                  | Medium border radius. |
| `--wuiplugin-bodytheme-borderradius-high`     | `17px`                                  | High border radius. |
| `--wuiplugin-bodytheme-borderradius-round`    | `50%`                                   | Circular border radius. |
| `--wuiplugin-bodytheme-titlefont`             | `Arial, Helvetica, Verdana, sans-serif` | Font family for titles. |
| `--wuiplugin-bodytheme-input-opener-iconsize` | `30px`                                  | Opener icon size for form fields. |
| `--wuiplugin-bodytheme-transition-delay`      | `0.4s`                                  | Color scheme transition duration. |

#### Implementation

There are two implementation modes:

**Using generated CSS files**:

Use only the generated CSS files (`[light|dark]-{version}.css`) located in the theme directory (`src/wui-js/plugins/bodytheme/{name}/`).
Recommended if dynamic switching between light and dark modes is not required.

HTML head:

```html
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/bodytheme/default/dark-0.13.css">
```

HTML code:

```html
<body class="wuiplugin-bodytheme default dark"></body>
```

**Using JS class instantiation:**

It requires the implementation of the JS class `WUIBody`, the plugin JS/CSS files `wuiplugin-bodytheme-0.13.{js,css}` and the theme settings CSS file `wui-js/plugins/bodytheme/{name}/settings-{version}.css`.
Additionally, the viewer where it is displayed must support the CSS function `light-dark()` [https://www.w3schools.com/cssref/func_light-dark.php](https://www.w3schools.com/cssref/func_light-dark.php)

CSS code:

```css
html,
body {
	height: 100%;
	margin: 0;
	padding: 0;
}

nav {
	display: flex;
	margin: 10px;
	align-items: center;
	gap: 10px;
}
```

HTML head:

```html
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/main/switch/wui-switch-0.7.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.13.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/bodytheme/default/settings-0.13.css">
<script type="text/javascript" src="./libraries/wui-js/main/body/wui-body-0.5.js"></script>
<script type="text/javascript" src="./libraries/wui-js/main/switch/wui-switch-0.7.js"></script>
<script type="text/javascript" src="./libraries/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.13.js"></script>
```

> [!TIP]
> When using the plugin, it is not necessary to load the `.root.css` files of the components.

HTML code:

```html
<body class="wuiplugin-bodytheme default light">
	<nav>
		<div class="wui-switch my-switch">
			<input type="checkbox" name="mySwitch">
		</div>
	</nav>
</body>
```

JS code:

```js
const init = () => {
	const body = new WUIBody();
	const switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: false,
		onChange: (value, activated) => {
			body.theme.setScheme(activated ? "dark" : "light");
		}
	});
	switchbox.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-bodytheme-switchmode&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-bodytheme-switchmode&lang=en).

#### Theme Cloning Tool

The `tools/bodytheme-clone.py` script creates a new theme by copying the configuration file of an existing theme and replacing its CSS selector. It is the recommended starting point before running `bodytheme-css-maker.py`.

```bash
python ./bodytheme-clone.py -n <new-theme-name>

python ./bodytheme-clone.py -d <themes-directory> -s <source-theme> -n <new-theme-name> -v <theme-version>
```

| Option                 | Default value                                                  | Description |
| ---------------------- | -------------------------------------------------------------- | ----------- |
| `-p`,<br>`--plugin`    | `../src/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.13.css` | Path to the bodytheme plugin CSS source file. |
| `-d`,<br>`--directory` | `../src/wui-js/plugins/bodytheme`                              | Themes base directory. |
| `-s`,<br>`--source`    | `default`                                                      | Name of the theme to clone. |
| `-n`,<br>`--name`      | _(required)_                                                   | Name of the new theme. |
| `-v`,<br>`--version`   | `0.1`                                                          | Theme version. |

The output file is generated at `{directory}/{name}/settings-{version}.css` with the CSS selector updated to the new name.

#### Theme Generation Tool

The `tools/bodytheme-css-maker.py` makes standardized CSS files by resolving all `var()` references in the source file, producing a flat CSS file for each color mode. It reads the variable configuration from `{directory}/{name}/settings-{version}.css`.

```bash
python ./bodytheme-css-maker.py

python ./bodytheme-css-maker.py -p <plugin-css-path> -d <themes-directory> -n <theme-name> -v <theme-version>
```

| Option                 | Default value                                                  | Description |
| ---------------------- | -------------------------------------------------------------- | ----------- |
| `-p`,<br>`--plugin`    | `../src/wui-js/plugins/bodytheme/wuiplugin-bodytheme-0.13.css` | Path to the bodytheme plugin CSS source file. |
| `-d`,<br>`--directory` | `../src/wui-js/plugins/bodytheme`                              | Themes base directory. |
| `-n`,<br>`--name`      | `default`                                                      | Theme name. |
| `-v`,<br>`--version`   | `0.12`                                                         | Theme version. |

Output files are generated in `{directory}/{name}/` with the names `light-{version}.css` and `dark-{version}.css`.

#### Customizing predefined themes

```css
body.wuiplugin-bodytheme.default {
	--wuiplugin-bodytheme-utilitycolor-hightlight-light: #e91e63;
    --wuiplugin-bodytheme-utilitycolor-hightlight-dark: #f06292;
    --wuiplugin-bodytheme-bgcolor-out-light: #fff8f9;
    --wuiplugin-bodytheme-bgcolor-out-dark: #1a0a0d;
}
```

> [!IMPORTANT]
> For the changes to be applied, it is important to include the root element, in this case `<body>`, with the class `wuiplugin-bodytheme` and the theme name. This way, the definition will have greater specificity and will be applied to the definitions of the specified theme.

> [!TIP]
> To maintain the standard proposed by the WUI/JS library documentation, this customization can be done in the `WUI.css` file.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-bodytheme-customtheme&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-bodytheme-customtheme&lang=en).

#### Customization of your own themes

**Step 1 — Clone an existing theme as a base:**

Run from the `tools/` directory:

```bash
python bodytheme-clone.py -n my-theme
```

This creates `src/wui-js/plugins/bodytheme/my-theme/settings-0.1.css` with the selector updated to `.wuiplugin-bodytheme.my-theme` and all variables from the `default` theme as a starting point.

**Step 2 — Edit the new theme variables:**

Modify `src/wui-js/plugins/bodytheme/my-theme/settings-0.1.css` with the desired values. The file structure is:

```css
.wuiplugin-bodytheme.my-theme {

	/* global */

	--wuiplugin-bodytheme-name: "my-theme";

	/* common */

	--wuiplugin-bodytheme-borderradius-low: 10px;
	--wuiplugin-bodytheme-borderradius-half: 15px;
	--wuiplugin-bodytheme-borderradius-high: 17px;
	--wuiplugin-bodytheme-borderradius-round: 50%;
	--wuiplugin-bodytheme-titlefont: Arial, Helvetica, Verdana, sans-serif;
	--wuiplugin-bodytheme-input-opener-iconsize: 30px;
	--wuiplugin-bodytheme-transition-delay: .4s;

	/* light mode */

	--wuiplugin-bodytheme-graycolor-max-light: #fff;
	--wuiplugin-bodytheme-graycolor-high-light: #ccc;
	--wuiplugin-bodytheme-graycolor-half-light: #888;
	--wuiplugin-bodytheme-graycolor-low-light: #444;
	--wuiplugin-bodytheme-graycolor-min-light: #000;
	--wuiplugin-bodytheme-shadowcolor-high-light: #304d63;
	--wuiplugin-bodytheme-shadowcolor-low-light: #959da5;
	--wuiplugin-bodytheme-bordercolor-max-light: #b5bbc1;
	--wuiplugin-bodytheme-bordercolor-high-light: #d5dce3;
	--wuiplugin-bodytheme-bordercolor-low-light: #f0f0f3;
	--wuiplugin-bodytheme-bgcolor-overlay-light: #010203;
	--wuiplugin-bodytheme-bgcolor-box-light: #efeff6;
	--wuiplugin-bodytheme-bgcolor-out-light: #fdfdfe;
	--wuiplugin-bodytheme-bgcolor-over-light: #f6f6f6;
	--wuiplugin-bodytheme-bgcolor-scroll-light: #353a40;
	--wuiplugin-bodytheme-bgcolor-icon-light: #353a40;
	--wuiplugin-bodytheme-bgcolor-highcontrast-light: #1f2429;
	--wuiplugin-bodytheme-textcolor-title-light: #000;
	--wuiplugin-bodytheme-textcolor-active-light: #2d3a47;
	--wuiplugin-bodytheme-textcolor-focus-light: #1f2937;
	--wuiplugin-bodytheme-utilitycolor-hightlight-light: #1e90ff;
	--wuiplugin-bodytheme-utilitycolor-warning-light: #f44343;
	--wuiplugin-bodytheme-utilitycolor-disabled-light: #d5dce3;
	--wuiplugin-bodytheme-intencitycolor-low-light: mediumaquamarine;
	--wuiplugin-bodytheme-intencitycolor-half-light: darkorange;
	--wuiplugin-bodytheme-intencitycolor-high-light: orangered;

	/* dark mode */

	--wuiplugin-bodytheme-graycolor-max-dark: #000;
	--wuiplugin-bodytheme-graycolor-high-dark: #444;
	--wuiplugin-bodytheme-graycolor-half-dark: #888;
	--wuiplugin-bodytheme-graycolor-low-dark: #ccc;
	--wuiplugin-bodytheme-graycolor-min-dark: #fff;
	--wuiplugin-bodytheme-shadowcolor-high-dark: #2f3a48;
	--wuiplugin-bodytheme-shadowcolor-low-dark: #1f2937;
	--wuiplugin-bodytheme-bordercolor-max-dark: #4b5563;
	--wuiplugin-bodytheme-bordercolor-high-dark: #4b5563;
	--wuiplugin-bodytheme-bordercolor-low-dark: #374151;
	--wuiplugin-bodytheme-bgcolor-overlay-dark: #000;
	--wuiplugin-bodytheme-bgcolor-box-dark: #2f3a48;
	--wuiplugin-bodytheme-bgcolor-out-dark: #1f2937;
	--wuiplugin-bodytheme-bgcolor-over-dark: #374151;
	--wuiplugin-bodytheme-bgcolor-scroll-dark: #9fa8b6;
	--wuiplugin-bodytheme-bgcolor-icon-dark: #d1d5db;
	--wuiplugin-bodytheme-bgcolor-highcontrast-dark: #f9fafb;
	--wuiplugin-bodytheme-textcolor-title-dark: #fff;
	--wuiplugin-bodytheme-textcolor-active-dark: #f3f4f6;
	--wuiplugin-bodytheme-textcolor-focus-dark: #fff;
	--wuiplugin-bodytheme-utilitycolor-hightlight-dark: #1e90ff;
	--wuiplugin-bodytheme-utilitycolor-warning-dark: #f44343;
	--wuiplugin-bodytheme-utilitycolor-disabled-dark: #4b5563;
	--wuiplugin-bodytheme-intencitycolor-low-dark: mediumaquamarine;
	--wuiplugin-bodytheme-intencitycolor-half-dark: darkorange;
	--wuiplugin-bodytheme-intencitycolor-high-dark: orangered;
}
```

**Step 3 — Activate the theme:**

For dynamic mode, activate the theme on the root element and include the configuration file in the HTML head:

```html
<body class="wuiplugin-bodytheme my-theme light">
```

```html
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/bodytheme/my-theme/settings-0.1.css">
```

**Step 4 — Generate pre-compiled files (static mode):**

Run from the `tools/` directory:

```bash
python bodytheme-css-maker.py -n my-theme
```

The files `light-0.1.css` and `dark-0.1.css` are generated in `src/wui-js/plugins/bodytheme/my-theme/`.

<a name="wuiplugin-formvalidation"></a>

### WUIPluginFormValidation

Version: `0.2`

Input validation extension for WUIForm.

#### Description

WUIPluginFormValidation extends `WUIForm`, attaching a `validation` namespace to `WUIForm.prototype`. It operates on form fields marked with the `.validate` class, toggling an `invalid` state on the field and its trailing `.wui-icon` based on external validation results, and provides helpers for password visibility toggling and focus management.

Array-type inputs (`name="...[]"`) are supported transparently: every method resolves each occurrence by its position among inputs sharing the same name, matching the `position` parameter added in `WUIForm` `0.11`.

> [!NOTE]
> The complete documentation for the `WUIForm` class can be found in the `wuijs-main-lib` project at the following link: [https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-form](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-form).

#### Dependencies

| Class     | Version | Description |
| --------- |:-------:| ----------- |
| `WUIForm` | `0.11`  | Base class extended by the plugin. Required. |

#### Sources

| Type | File |
| ---- | ---- |
| JS   | [src/wui-js/plugins/formvalidation/wuiplugin-formvalidation-0.2.js](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/formvalidation/wuiplugin-formvalidation-0.2.js) |

#### Constructor

It does not add a constructor; it extends the `WUIForm` prototype. Instantiate `WUIForm` directly (`new WUIForm([properties])`).

#### Class Properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| version | `string` | Plugin version. |

#### Instance Properties

It does not have instance properties.

#### Methods

`WUIForm.prototype.validation` is a read-only namespace getter. Its methods are called as `form.validation.*` on a `WUIForm` instance:

| Method            | Return type | Description |
| ----------------- | ----------- | ----------- |
| getNames          | `array`     | `validation.getNames()`<br><br>Returns the `name` attribute of every input marked with the `.validate` class within the form body. |
| getValues         | `object`    | `validation.getValues()`<br><br>Returns a `{ name: value }` map built from `getNames()` and `getValue(name, position)`. For array-type inputs (`name="...[]"`), the value at that key is an `array` holding one entry per occurrence, indexed by position. |
| prepare           | `void`      | `validation.prepare()`<br><br>Wires each `.validate` input: on `focus`, clears its `invalid` state (resetting password inputs and toggling the trailing `.wui-icon`); for inputs whose name matches `/password/i`, also wires a click handler on the trailing icon to toggle the input's `type` between `password` and `text`. |
| clear             | `void`      | `validation.clear()`<br><br>Removes the `invalid` class from every `.invalid` field. |
| reset             | `void`      | `validation.reset()`<br><br>Removes the `invalid` class from every `.invalid` field and leave the input value empty. |
| resetAll          | `void`      | `validation.resetAll()`<br><br>Removes the `invalid` class from each field with `.validate` data input. and leave the input value empty. |
| validate          | `void`      | `validation.validate(validations)`<br><br>Parameters:<br>**• validations:** `array` of field-name prefixed validation error identifiers.<br><br>Marks each `.validate` field whose name matches an entry in `validations` as `invalid`, activating the trailing `.wui-icon` error state (or adjusting the password visibility icon). |
| focusFirst        | `void`      | `validation.focusFirst()`<br><br>Focuses the first `.validate` input in the form, if any. |
| focusFirstInvalid | `void`      | `validation.focusFirstInvalid(validations)`<br><br>Parameters:<br>**• validations:** `array` of field-name prefixed validation error identifiers.<br><br>Focuses the first `.validate` input whose name matches an entry in `validations`. |

#### Implementation

HTML head:

```html
<script type="text/javascript" src="./libraries/wui-js/main/form/wui-form-0.11.js"></script>
<script type="text/javascript" src="./libraries/wui-js/plugins/formvalidation/wuiplugin-formvalidation-0.2.js"></script>
```

HTML code:

```html
<form class="wui-form my-form">
	<div class="field">
		<input type="email" name="email" class="validate">
		<div class="wui-icon error-circle-fill"></div>
	</div>
	<div class="field">
		<input type="password" name="password" class="validate">
		<div class="wui-icon eye-fill"></div>
	</div>
</form>
```

JS code:

```js
const init = () => {
	const form = new WUIForm({ selector: ".wui-form.my-form" });
	form.init();
	form.validation.prepare();
};

window.addEventListener("DOMContentLoaded", init);
```

<a name="wuiplugin-formhttp"></a>

### WUIPluginFormHttp

Version: `0.1`

Data transport extension for WUIForm (JSON submission).

#### Description

WUIPluginFormHttp extends `WUIForm`, attaching an `http` namespace to `WUIForm.prototype`. It is meant to grow with additional data-exchange operations for the form (e.g. file downloads, response handling), starting with JSON submission.

> [!NOTE]
> The namespace is `http`, not `submit`, since `WUIForm` already exposes a `submit` property (boolean, get/set) that controls native form submission.

> [!NOTE]
> The complete documentation for the `WUIForm` class can be found in the `wuijs-main-lib` project at the following link: [https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-form](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-form).

#### Dependencies

| Class     | Version | Description |
| --------- |:-------:| ----------- |
| `WUIForm` | `0.11`  | Base class extended by the plugin. Required. |

#### Sources

| Type | File |
| ---- | ---- |
| JS   | [src/wui-js/plugins/formhttp/wuiplugin-formhttp-0.1.js](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/formhttp/wuiplugin-formhttp-0.1.js) |

#### Constructor

It does not add a constructor; it extends the `WUIForm` prototype. Instantiate `WUIForm` directly (`new WUIForm([properties])`).

#### Class Properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| version | `string` | Plugin version. |

#### Instance Properties

It does not have instance properties.

#### Methods

`WUIForm.prototype.http` is a read-only namespace getter. Its methods are called as `form.http.*` on a `WUIForm` instance:

| Method     | Return type.        | Description |
| ---------- | ------------------- | ----------- |
| submitJson | `Promise<object>` | `http.submitJson(options)`<br><br>Parameters:<br>**• options:** `object`. Submission options, sharing the same properties accepted by `fetch()`.<br>&nbsp;&nbsp;- **url:** `string`. Endpoint to submit to.<br>&nbsp;&nbsp;- **token:** `string` *optional*. When provided, sent as `Authorization: Bearer {token}` header.<br><br>Sends the form data as JSON via `POST`, building the body from `getFormData()`. If the response is not `ok`, returns `{ status: "error" }`. If it is, attempts to parse the body as JSON and returns it as-is (expected to carry its own `status` key); on parse failure, returns `{ status: "error", content: <response text> }`. |

> [!TIP]
> Use `form.closeKeyboard()` (available directly on `WUIForm` since version `0.10` of `wuijs-main-lib`) to close the on-screen keyboard on mobile devices before or after submitting.

#### Implementation

HTML head:

```html
<script type="text/javascript" src="./libraries/wui-js/main/form/wui-form-0.11.js"></script>
<script type="text/javascript" src="./libraries/wui-js/plugins/formhttp/wuiplugin-formhttp-0.1.js"></script>
```

JS code:

```js
const init = () => {
	const form = new WUIForm({ selector: ".wui-form.my-form" });
	form.init();
	form.closeKeyboard();
	form.http.submitJson({ url: "/api/login", token: miTokenAuth});
};

window.addEventListener("DOMContentLoaded", init);
```

<a name="wuiplugin-selector"></a>

### WUIPluginSelector `(deprecated)`

> [!WARNING]
> This plugin is deprecated. Replace its usage with the `hidden` mode of `WUISelectpicker`, introduced in version `0.8` of the component and version `0.8.1` of `wuijs-main-lib`. See the [Change Log](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/CHANGELOG-en.md) for details. Documentation for this plugin has been removed; refer to an earlier revision of this file if needed.

<a name="demos"></a>

## Demos

This section contains examples of the implementations from the documentation and other complementary demos, all available in the **WUI/JS Demos** repository [https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos).

1.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-bodytheme-switchmode&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-bodytheme-switchmode&lang=en)<br>
	This demo shows the use of WUIPluginBodyTheme's switch light and dark mode functionality.<br><br>
2.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-bodytheme-customtheme&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-bodytheme-customtheme&lang=en)<br>
	This demo shows the use of WUIPluginBodyTheme's custom predefined themes.<br><br>

> [!NOTE]
> All demos from the [wuijs-demos](https://github.com/wui-js/wuijs-demos) repository can be reviewed on CodeSandbox at the following link [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wuiplugin](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wuiplugin).
