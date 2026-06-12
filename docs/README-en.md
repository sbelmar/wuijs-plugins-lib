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
| **Library version**  | `0.11.0` ([Change Log](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/CHANGELOG-en.md)) |
| **NPM package**      | `@wui-js/plugins` ([npm](https://www.npmjs.com/package/@wui-js/plugins)) |
| **Document version** | `0.11.0.20260612.0` |
| **License**          | `Apache License 2.0` |
| **Author**           | `Sergio E. Belmar V. <wuijs.project@gmail.com>` |
| **Repository**       | [https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib) |
| **Documentation**    | [https://docs.wuijs.dev](https://docs.wuijs.dev) |
| **Website**          | [https://wuijs.dev](https://wuijs.dev) |

## Index

*   [Overview](#overview)
*   [Installation](#install)
*   [Plugins](#plugins)
	*   [WUIPluginThemes](#wuiplugin-themes)
	*   [WUIPluginSelector](#wuiplugin-selector)
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

| Plugin Name                              | Version | Description |
| ---------------------------------------- | :------:| ----------- |
| [WUIPluginThemes](#wuiplugin-themes)     | `0.10`  | Plugin for managing pre-designed themes and light and dark modes. |
| [WUIPluginSelector](#wuiplugin-selector) | `0.4`   | Modal selector based on WUIModal. |

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

<a name="wuiplugin-themes"></a>

### WUIPluginThemes

Version: `0.10`

Plugin for managing pre-designed themes and light and dark modes.

#### Description

WUIPluginThemes provides a theming system for web applications through two layers of CSS variables.

#### Covered Components

WUIPluginThemes provides theme support for the following WUI/JS Main Lib components:

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
- `wui-selectpicker`
- `wui-datepicker`
- `wui-timepicker`
- `wui-colorpicker`
- `wui-switch`
- `wui-intensity`
- `wui-button`
- `wuiplugin-selector`

It also provides theme support for the `wuiplugin-selector` plugin.

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/wui-js/plugins/themes/wuiplugin-themes-0.10.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/wuiplugin-themes-0.10.css) |
| JS   | [src/wui-js/plugins/themes/wuiplugin-themes-0.10.js](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/wuiplugin-themes-0.10.js) |
| CSS  | [src/wui-js/plugins/themes/default/settings-0.10.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/default/settings-0.10.css) |
| CSS  | [src/wui-js/plugins/themes/default/light-0.10.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/default/light-0.10.css) |
| CSS  | [src/wui-js/plugins/themes/default/dark-0.10.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/default/dark-0.10.css) |

#### Constructor

| Tipo            | Descripción |
| --------------- | ----------- |
| WUIPluginThemes | `WUIPluginThemes()` |

#### Class Properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| version | `string` | Plugin version. |

#### Instance Properties

It does not have instance properties.

#### Methods

| Method           | Return type | Description |
| ---------------- | ----------- | ----------- |
| getScheme        | `string`    | `getScheme()`<br><br>Returns the value of the CSS `color-scheme` property defined on the `<html>` element. Possible values: `"light"`, `"dark"`, `"light dark"`, `""`. |
| getCurrentScheme | `string`    | `getCurrentScheme()`<br><br>Returns the operating system's preferred color scheme, regardless of the scheme configured in the application. Possible values: `"light"`, `"dark"`. |
| getTheme         | `string`    | `getTheme()`<br><br>Returns the active theme name based on the CSS classes present on `document.body`. |
| setScheme        | `void`      | `setScheme(scheme)`<br><br>Sets the application's color scheme. Updates the CSS classes on `document.body` and the `color-scheme` attribute on the `<html>` element. If the new scheme differs from the current one, automatically activates the background transition. The transition duration is controlled by the CSS variable `--wuiplugin-theme-transition-delay` (default value: `0.4s`). Possible values: `"light"`, `"dark"`, `"light dark"`, `"system"`. |

#### Predefined themes

| Name      | Description |
| --------- | ----------- |
| `default` | Default theme. |

#### CSS Variables

The theme setting variables are defined in the file `src/wui-js/plugins/themes/{theme-name}/{version}.css` and are organized in two suffix variants: `{variable}-light` for light mode and `{variable}-dark` for dark mode.
Values without a suffix are common to both modes.

**Colors (with variations by color mode):**

| Base variable                                             | Description |
| --------------------------------------------------------- | ----------- |
| `--wuiplugin-theme-graycolor-max-(light\|dark)`           | Maximum gray (white in light, black in dark). |
| `--wuiplugin-theme-graycolor-high-(light\|dark)`          | High gray. |
| `--wuiplugin-theme-graycolor-half-(light\|dark)`          | Mid gray. |
| `--wuiplugin-theme-graycolor-low-(light\|dark)`           | Low gray. |
| `--wuiplugin-theme-graycolor-min-(light\|dark)`           | Minimum gray (black in light, white in dark). |
| `--wuiplugin-theme-shadowcolor-high-(light\|dark)`        | Strong shadow color. |
| `--wuiplugin-theme-shadowcolor-low-(light\|dark)`         | Soft shadow color. |
| `--wuiplugin-theme-bordercolor-max-(light\|dark)`         | Maximum border color. |
| `--wuiplugin-theme-bordercolor-high-(light\|dark)`        | High border color. |
| `--wuiplugin-theme-bordercolor-low-(light\|dark)`         | Low border color. |
| `--wuiplugin-theme-bgcolor-overlay-(light\|dark)`         | Overlay background color. |
| `--wuiplugin-theme-bgcolor-box-(light\|dark)`             | Dialog and panel background color. |
| `--wuiplugin-theme-bgcolor-out-(light\|dark)`             | Background color in normal state. |
| `--wuiplugin-theme-bgcolor-over-(light\|dark)`            | Background color in hover or selected state. |
| `--wuiplugin-theme-bgcolor-scroll-(light\|dark)`          | Scrollbar color. |
| `--wuiplugin-theme-bgcolor-icon-(light\|dark)`            | Icon fill color. |
| `--wuiplugin-theme-bgcolor-highcontrast-(light\|dark)`    | High-contrast background color (tooltips, etc.). |
| `--wuiplugin-theme-textcolor-title-(light\|dark)`         | Title text color. |
| `--wuiplugin-theme-textcolor-active-(light\|dark)`        | Active state text color. |
| `--wuiplugin-theme-textcolor-focus-(light\|dark)`         | Focused state text color. |
| `--wuiplugin-theme-utilitycolor-hightlight-(light\|dark)` | Primary accent color (links, buttons, selections). |
| `--wuiplugin-theme-utilitycolor-warning-(light\|dark)`    | Warning or error color. |
| `--wuiplugin-theme-utilitycolor-disabled-(light\|dark)`   | Disabled element color. |
| `--wuiplugin-theme-intencitycolor-low-(light\|dark)`      | Low intensity color. |
| `--wuiplugin-theme-intencitycolor-half-(light\|dark)`     | Medium intensity color. |
| `--wuiplugin-theme-intencitycolor-high-(light\|dark)`     | High intensity color. |

**Typography and metrics (common, no color mode variant):**

| Variable                                  | Default value                           | Description |
| ----------------------------------------- | --------------------------------------- | ----------- |
| `--wuiplugin-theme-borderradius-low`      | `10px`                                  | Low border radius. |
| `--wuiplugin-theme-borderradius-half`     | `15px`                                  | Medium border radius. |
| `--wuiplugin-theme-borderradius-high`     | `17px`                                  | High border radius. |
| `--wuiplugin-theme-borderradius-round`    | `50%`                                   | Circular border radius. |
| `--wuiplugin-theme-titlefont`             | `Arial, Helvetica, Verdana, sans-serif` | Font family for titles. |
| `--wuiplugin-theme-input-opener-iconsize` | `30px`                                  | Opener icon size for form fields. |
| `--wuiplugin-theme-transition-delay`      | `0.4s`                                  | Color scheme transition duration. |

#### Implementation

There are two implementation modes:

**Using generated CSS files**:

Use only the generated CSS files (`[light|dark]-{version}.css`) located in the theme directory (`src/wui-js/plugins/themes/{name}/`).
Recommended if dynamic switching between light and dark modes is not required.

HTML head:

```html
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/themes/default/dark-0.10.css">
```

HTML code:

```html
<body class="wuiplugin-themes default dark"></body>
```

**Using JS class instantiation:**

It requires the implementation of the JS class `WUIPluginThemes`, the source CSS file `wuiplugin-themes-0.10.css` and the theme settings CSS file `wui-js/plugins/themes/{name}/settings-{version}.css`.
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
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/themes/wuiplugin-themes-0.10.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/themes/default/settings-0.10.css">
<script type="text/javascript" src="./libraries/wui-js/main/switch/wui-switch-0.7.js"></script>
<script type="text/javascript" src="./libraries/wui-js/plugins/themes/wuiplugin-themes-0.10.js"></script>
```

> [!TIP]
> When using the plugin, it is not necessary to load the `.root.css` files of the components.

HTML code:

```html
<body class="wuiplugin-themes default light">
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
	const themes = new WUIPluginThemes();
	const switchbox = new WUISwitch({
		selector: ".wui-switch.my-switch",
		value: "1",
		activated: false,
		onChange: (value, activated) => {
			themes.setScheme(activated ? "dark" : "light");
		}
	});
	switchbox.init();
}

window.addEventListener("DOMContentLoaded", init);
```

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-themes-switchmode&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-themes-switchmode&lang=en).

#### Theme Cloning Tool

The `tools/clone-theme.py` script creates a new theme by copying the configuration file of an existing theme and replacing its CSS selector. It is the recommended starting point before running `css-theme-maker.py`.

```bash
python ./clone-theme.py -n <new-theme-name>

python ./clone-theme.py -d <themes-directory> -s <source-theme> -n <new-theme-name> -v <theme-version>
```

| Option                 | Default value                                           | Description |
| ---------------------- | ------------------------------------------------------- | ----------- |
| `-p`,<br>`--plugin`    | `../src/wui-js/plugins/themes/wuiplugin-themes-0.10.css` | Path to the themes plugin CSS source file. |
| `-d`,<br>`--directory` | `../src/wui-js/plugins/themes`                          | Themes base directory. |
| `-s`,<br>`--source`    | `default`                                               | Name of the theme to clone. |
| `-n`,<br>`--name`      | _(required)_                                            | Name of the new theme. |
| `-v`,<br>`--version`   | `0.1`                                                   | Theme version. |

The output file is generated at `{directory}/{name}/settings-{version}.css` with the CSS selector updated to the new name.

#### Theme Generation Tool

The `tools/css-theme-maker.py` makes standardized CSS files by resolving all `var()` references in the source file, producing a flat CSS file for each color mode. It reads the variable configuration from `{directory}/{name}/settings-{version}.css`.

```bash
python ./css-theme-maker.py

python ./css-theme-maker.py -p <plugin-css-path> -d <themes-directory> -n <theme-name> -v <theme-version>
```

| Option                 | Default value                                           | Description |
| ---------------------- | ------------------------------------------------------- | ----------- |
| `-p`,<br>`--plugin`    | `../src/wui-js/plugins/themes/wuiplugin-themes-0.10.css` | Path to the themes plugin CSS source file. |
| `-d`,<br>`--directory` | `../src/wui-js/plugins/themes`                          | Themes base directory. |
| `-n`,<br>`--name`      | `default`                                               | Theme name. |
| `-v`,<br>`--version`   | `0.9`                                                   | Theme version. |

Output files are generated in `{directory}/{name}/` with the names `light-{version}.css` and `dark-{version}.css`.

#### Customizing predefined themes

```css
body.wuiplugin-themes.default {
	--wuiplugin-theme-utilitycolor-hightlight-light: #e91e63;
    --wuiplugin-theme-utilitycolor-hightlight-dark: #f06292;
    --wuiplugin-theme-bgcolor-out-light: #fff8f9;
    --wuiplugin-theme-bgcolor-out-dark: #1a0a0d;
}
```

> [!IMPORTANT]
> For the changes to be applied, it is important to include the root element, in this case `<body>`, with the class `wuiplugin-themes` and the theme name. This way, the definition will have greater specificity and will be applied to the definitions of the specified theme.

> [!TIP]
> To maintain the standard proposed by the WUI/JS library documentation, this customization can be done in the `WUI.css` file.

> [!TIP]
> You can check this working example at the link: [http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-themes-customtheme&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-themes-customtheme&lang=en).

#### Customization of your own themes

**Step 1 — Clone an existing theme as a base:**

Run from the `tools/` directory:

```bash
python clone-theme.py -n my-theme
```

This creates `src/wui-js/plugins/themes/my-theme/settings-0.1.css` with the selector updated to `.wuiplugin-themes.my-theme` and all variables from the `default` theme as a starting point.

**Step 2 — Edit the new theme variables:**

Modify `src/wui-js/plugins/themes/my-theme/settings-0.1.css` with the desired values. The file structure is:

```css
.wuiplugin-themes.my-theme {

	/* global */

	--wuiplugin-theme-name: "my-theme";

	/* common */

	--wuiplugin-theme-borderradius-low: 10px;
	--wuiplugin-theme-borderradius-half: 15px;
	--wuiplugin-theme-borderradius-high: 17px;
	--wuiplugin-theme-borderradius-round: 50%;
	--wuiplugin-theme-titlefont: Arial, Helvetica, Verdana, sans-serif;
	--wuiplugin-theme-input-opener-iconsize: 30px;
	--wuiplugin-theme-transition-delay: .4s;

	/* light mode */

	--wuiplugin-theme-graycolor-max-light: #fff;
	--wuiplugin-theme-graycolor-high-light: #ccc;
	--wuiplugin-theme-graycolor-half-light: #888;
	--wuiplugin-theme-graycolor-low-light: #444;
	--wuiplugin-theme-graycolor-min-light: #000;
	--wuiplugin-theme-shadowcolor-high-light: #304d63;
	--wuiplugin-theme-shadowcolor-low-light: #959da5;
	--wuiplugin-theme-bordercolor-max-light: #b5bbc1;
	--wuiplugin-theme-bordercolor-high-light: #d5dce3;
	--wuiplugin-theme-bordercolor-low-light: #f0f0f3;
	--wuiplugin-theme-bgcolor-overlay-light: #010203;
	--wuiplugin-theme-bgcolor-box-light: #efeff6;
	--wuiplugin-theme-bgcolor-out-light: #fdfdfe;
	--wuiplugin-theme-bgcolor-over-light: #f6f6fa;
	--wuiplugin-theme-bgcolor-scroll-light: #353a40;
	--wuiplugin-theme-bgcolor-icon-light: #353a40;
	--wuiplugin-theme-bgcolor-highcontrast-light: #1f2429;
	--wuiplugin-theme-textcolor-title-light: #000;
	--wuiplugin-theme-textcolor-active-light: #2d3a47;
	--wuiplugin-theme-textcolor-focus-light: #1f2937;
	--wuiplugin-theme-utilitycolor-hightlight-light: #1e90ff;
	--wuiplugin-theme-utilitycolor-warning-light: #f44343;
	--wuiplugin-theme-utilitycolor-disabled-light: #d5dce3;
	--wuiplugin-theme-intencitycolor-low-light: mediumaquamarine;
	--wuiplugin-theme-intencitycolor-half-light: darkorange;
	--wuiplugin-theme-intencitycolor-high-light: orangered;

	/* dark mode */

	--wuiplugin-theme-graycolor-max-dark: #000;
	--wuiplugin-theme-graycolor-high-dark: #444;
	--wuiplugin-theme-graycolor-half-dark: #888;
	--wuiplugin-theme-graycolor-low-dark: #ccc;
	--wuiplugin-theme-graycolor-min-dark: #fff;
	--wuiplugin-theme-shadowcolor-high-dark: #2f3a48;
	--wuiplugin-theme-shadowcolor-low-dark: #1f2937;
	--wuiplugin-theme-bordercolor-max-dark: #4b5563;
	--wuiplugin-theme-bordercolor-high-dark: #4b5563;
	--wuiplugin-theme-bordercolor-low-dark: #374151;
	--wuiplugin-theme-bgcolor-overlay-dark: #000;
	--wuiplugin-theme-bgcolor-box-dark: #2f3a48;
	--wuiplugin-theme-bgcolor-out-dark: #1f2937;
	--wuiplugin-theme-bgcolor-over-dark: #374151;
	--wuiplugin-theme-bgcolor-scroll-dark: #9fa8b6;
	--wuiplugin-theme-bgcolor-icon-dark: #d1d5db;
	--wuiplugin-theme-bgcolor-highcontrast-dark: #f9fafb;
	--wuiplugin-theme-textcolor-title-dark: #fff;
	--wuiplugin-theme-textcolor-active-dark: #f3f4f6;
	--wuiplugin-theme-textcolor-focus-dark: #fff;
	--wuiplugin-theme-utilitycolor-hightlight-dark: #1e90ff;
	--wuiplugin-theme-utilitycolor-warning-dark: #f44343;
	--wuiplugin-theme-utilitycolor-disabled-dark: #4b5563;
	--wuiplugin-theme-intencitycolor-low-dark: mediumaquamarine;
	--wuiplugin-theme-intencitycolor-half-dark: darkorange;
	--wuiplugin-theme-intencitycolor-high-dark: orangered;
}
```

**Step 3 — Activate the theme:**

For dynamic mode, activate the theme on the root element and include the configuration file in the HTML head:

```html
<body class="wuiplugin-themes my-theme light">
```

```html
<link type="text/css" rel="stylesheet" href="./libraries/wui-js/plugins/themes/my-theme/settings-0.1.css">
```

**Step 4 — Generate pre-compiled files (static mode):**

Run from the `tools/` directory:

```bash
python css-theme-maker.py -n my-theme
```

The files `light-0.1.css` and `dark-0.1.css` are generated in `src/wui-js/plugins/themes/my-theme/`.

<a name="wuiplugin-selector"></a>

### WUIPluginSelector

Version: `0.4`

Modal list selector based on WUIModal.

#### Description

WUIPluginSelector extends `WUIModal` and implements a modal list selector.
It is optimized for mobile environments and intercepts touch events on native `<select>` elements to replace the system picker with a custom selection panel.
It can also be used programmatically, independently of a native input `<select>` in responsive environments.

> [!NOTE]
> The complete documentation for the `WUIModal` class can be found in the `wuijs-main-lib` project at the following link: [https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-modal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-en.md#wui-modal).

#### Dependencies

| Class       | Version | Description |
| ----------- | :-----: | ----------- |
| `WUIIcon`   | `0.5`   | Required for the selected option checkmark icon. |
| `WUIModal`  | `0.6`   | Base modal class. Required. |
| `WUIButton` | `0.7`   | Used internally for the accept and cancel buttons. Required. |

#### Sources

| Type | File |
| ---- | ---- |
| CSS  | [src/wui-js/plugins/selector/wuiplugin-selector-0.4.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/selector/wuiplugin-selector-0.4.css) |
| JS   | [src/wui-js/plugins/selector/wuiplugin-selector-0.4.js](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/selector/wuiplugin-selector-0.4.js) |

#### Constructor

| Type              | Description |
| ----------------- | ----------- |
| WUIPluginSelector | `WUIPluginSelector([properties])`<br><br>Parameters:<br>**• properties:** `object` *optional* |

#### Class Properties

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| version | `string` | Plugin version. |

#### Instance Properties

| Property        | Type             | Default value | Description |
| --------------- | ---------------- | ------------- | ----------- |
| value           | `string`         | `""`          | (get/set)<br>Current selected value. In multiple selection mode, values are joined with `separatorValue`. |
| options         | `array`          | `[]`          | (get/set)<br>Array of option objects. See structure in the implementation section. |
| multiple        | `boolean`        | `false`       | (get/set)<br>Indicates whether multiple selection is enabled. Affects how the linked `<select>` options are updated on accept. |
| separatorValue  | `string`         | `","`         | (get/set)<br>Separator used to join selected values in the `value` property and in the `values` parameter of the `acceptOnClick` callback. |
| separatorText   | `string`         | `", "`        | (get/set)<br>Separator used to join selected texts in the `texts` parameter of the `acceptOnClick` callback. |
| emptyText       | `string`         | `""`          | (get/set)<br>Fallback text for options with an empty `value`. |
| selecteableText | `boolean`        | `false`       | (get/set)<br>If `true`, allows the user to select and copy option text. Applies only to selected options. |
| acceptButton    | `WUIButton`      | `null`        | (get/set)<br>Accept button instance. Assigned automatically by `init()`. The setter only accepts `WUIButton` instances. |
| acceptVisible   | `boolean`        | `true`        | (get/set)<br>Indicates whether the accept button is visible. Reset to `true` when the selector closes. |
| acceptData      | `object`         | `{}`          | (get/set)<br>`data-*` attributes to apply to the accept button (e.g. `{ key: "buttons.accept" }` for WUILanguage). |
| acceptText      | `string`         | `""`          | (get/set)<br>Accept button label. |
| acceptOnClick   | `function\|null` | `null`        | (get/set)<br>Function executed when the accept button is pressed. Signature: `acceptOnClick(indexes, values, texts)`. Reset to `null` when the selector closes. |
| cancelButton    | `WUIButton`      | `null`        | (get/set)<br>Cancel button instance. Assigned automatically by `init()`. The setter only accepts `WUIButton` instances. |
| cancelVisible   | `boolean`        | `true`        | (get/set)<br>Indicates whether the cancel button is visible. Reset to `true` when the selector closes. |
| cancelData      | `object`         | `{}`          | (get/set)<br>`data-*` attributes to apply to the cancel button. |
| cancelText      | `string`         | `""`          | (get/set)<br>Cancel button label. |
| cancelOnClick   | `function\|null` | `null`        | (get/set)<br>Function executed when the cancel button is pressed. Reset to `null` when the selector closes. |
| onSelect        | `function\|null` | `null`        | (get/set)<br>Function executed when an option is tapped. Signature: `onSelect(value, index)`. Reset to `null` when the selector closes. |

All `WUIModal` properties (`selector`, `openDelay`, `onStartOpen`, `onOpen`, `onScrolling`, `onStartClose`, `onClose`, etc.) are also inherited.

#### Methods

| Method       | Return type | Description |
| ------------ | ----------- | ----------- |
| init         | `void`      | `init()`<br><br>Builds the internal HTML structure of the selector if it does not exist (or loads it if already present in the DOM), initializes the base modal, and instantiates the accept and cancel buttons. |
| prepareInput | `void`      | `prepareInput(input[, options])`<br><br>Links the selector to a native `<select>` element to replace its behavior on mobile screens. Parameters:<br>**• input:** `HTMLSelectElement`. The element to link.<br>**• options:** `object` *optional*. Configuration options:<br>&nbsp;&nbsp;&nbsp;**- emptyText:** `string` *(default: `this.emptyText`)* – Text for empty-value options.<br>&nbsp;&nbsp;&nbsp;**- direction:** `"ltr"\|"rtl"` *(default: `"ltr"`)* – Text direction attribute for the input.<br>&nbsp;&nbsp;&nbsp;**- force:** `boolean` *(default: `false`)* – If `true`, activates the selector on all screen sizes, not only mobile (≤767px).<br><br>On open, automatically populates `this.options` from the `<select>` `<option>` elements and sets the current selection. On accept, updates the `<select>` value and dispatches its `change` event. |
| open         | `void`      | `open()`<br><br>Opens the selector. Renders the option list from `this.options` and scrolls to the first selected option. Shows or hides buttons based on `acceptVisible` and `cancelVisible`. |
| close        | `void`      | `close()`<br><br>Closes the selector and restores the linked `<select>` options if one exists. Resets `acceptVisible`, `cancelVisible`, `acceptOnClick`, `cancelOnClick`, `onOpen`, `onClose`, and `onSelect` to their default values, and unlinks the input. |
| destroy      | `void`      | `destroy()`<br><br>Destructor. Removes all internal HTML elements and releases the object's properties. |

The `WUIModal` instance methods (`getElement()`, `getBox()`, `getFooter()`, `getStatus()`, `isOpen()`, `responsive()`) are also available.

#### CSS Classes

| Class                | Element      | Description |
| -------------------- | ------------ | ----------- |
| `wuiplugin-selector` | `.wui-modal` | Main plugin class. Identifies the component. |
| `mobile`             | `.wui-modal` | Activates the mobile-style modal presentation in WUIModal. Added automatically by `init()`. |
| `priority`           | `.wui-modal` | Assigns stack priority (z-index) to the modal. Added automatically by `init()`. |

#### CSS Variables

| Variable                                         | Description |
| ------------------------------------------------ | ----------- |
| `--wuiplugin-selector-box-width`                 | Width of the selector box. |
| `--wuiplugin-selector-box-bgcolor`               | Background color of the selector box. |
| `--wuiplugin-selector-option-bordercolor-out`    | Option border color in normal state. |
| `--wuiplugin-selector-option-bordercolor-over`   | Option border color in hover state. |
| `--wuiplugin-selector-option-bgcolor-out`        | Option background color in normal state. |
| `--wuiplugin-selector-option-bgcolor-over`       | Option background color in hover state. |
| `--wuiplugin-selector-option-iconcolor-out`      | Option icon color in normal state. |
| `--wuiplugin-selector-option-iconcolor-over`     | Option icon color in hover state. |
| `--wuiplugin-selector-option-iconcolor-disabled` | Disabled option icon color. |
| `--wuiplugin-selector-option-textcolor-out`      | Option text color in normal state. |
| `--wuiplugin-selector-option-textcolor-over`     | Option text color in hover state. |
| `--wuiplugin-selector-option-textcolor-selected` | Selected option text color (only when `selecteableText = true`). |
| `--wuiplugin-selector-option-textcolor-disabled` | Disabled option text color. |
| `--wuiplugin-selector-button-bordercolor`        | Button footer border color in mobile mode. |

> [!NOTE]
> Default values for these variables are also supported by WUIPluginThemes. See the [WUIPluginThemes](#wuiplugin-themes) section.

#### HTML Structure

The container element must be a `<div>` with the class `wui-modal wuiplugin-selector`. The internal structure is built automatically by `init()`:

```html
<div class="wui-modal wuiplugin-selector mobile priority">
	<div class="box">
		<div class="options">
			<div class="option [selected] [disabled]">
				<div class="icon wui-icon check-line"></div>
				<div class="text [selecteable]">Option text</div>
			</div>
		</div>
		<div class="footer">
			<button class="wui-button cancel flat wui-language"></button>
			<button class="wui-button submit wui-language"></button>
		</div>
	</div>
</div>
```

#### Implementation

HTML head:

```html
<link type="text/css" rel="stylesheet" href="./libraries/wui/icon/wui-icon-0.5.root.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/icon/wui-icon-0.5.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/modal/wui-modal-0.6.root.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/modal/wui-modal-0.6.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/button/wui-button-0.7.root.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/button/wui-button-0.7.css">
<link type="text/css" rel="stylesheet" href="./libraries/wuiplugin/selector/wuiplugin-selector-0.4.root.css">
<link type="text/css" rel="stylesheet" href="./libraries/wuiplugin/selector/wuiplugin-selector-0.4.css">
<script type="text/javascript" src="./libraries/wui/icon/wui-icon-0.5.js"></script>
<script type="text/javascript" src="./libraries/wui/modal/wui-modal-0.6.js"></script>
<script type="text/javascript" src="./libraries/wui/button/wui-button-0.7.js"></script>
<script type="text/javascript" src="./libraries/wuiplugin/selector/wuiplugin-selector-0.4.js"></script>
```

**Programmatic use:**

HTML code:

```html
<div class="wui-modal wuiplugin-selector my-selector"></div>
```

JS code:

```js
const init = () => {
	const selector = new WUIPluginSelector({
		selector: ".wui-modal.my-selector",
		acceptText: "accept",
		cancelText: "cancel"
	});
	selector.init();
	selector.options = [
		{ icon: null, text: "option 1", value: "1", selected: false },
		{ icon: null, text: "option 2", value: "2", selected: true },
		{ icon: null, text: "option 3", value: "3", selected: false, enabled: false }
	];
	selector.acceptOnClick = (indexes, values, texts) => {
		console.log(values);
	};
	selector.open();
};

window.addEventListener("DOMContentLoaded", init);
```

**Linked to a native `<select>` (`prepareInput`):**

HTML code:

```html
<select class="my-select">
	<option value="">— select —</option>
	<option value="1">option 1</option>
	<option value="2">option 2</option>
	<option value="3">option 3</option>
</select>

<div class="wui-modal wuiplugin-selector my-selector"></div>
```

JS code:

```js
const init = () => {
	const selector = new WUIPluginSelector({
		selector: ".wui-modal.my-selector",
		acceptText: "accept",
		cancelText: "cancel",
		emptyText: "— select —"
	});
	selector.init();
	selector.prepareInput(document.querySelector(".my-select"), {
		force: false
	});
};

window.addEventListener("DOMContentLoaded", init);
```

> [!NOTE]
> `prepareInput` intercepts the `<select>` only on mobile screens (≤767px) unless `force` is `true`. On desktop, the `<select>` retains its native behavior.

<a name="demos"></a>

## Demos

This section contains examples of the implementations from the documentation and other complementary demos, all available in the **WUI/JS Demos** repository [https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos).

1.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-themes-switchmode&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-themes-switchmode&lang=en)<br>
	This demo shows the use of WUIPluginThemes's switch light and dark mode functionality.<br><br>
2.	[http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-themes-customtheme&lang=en](http://docs.wuijs.dev/pages/docs/home/?id=wuijs-demos-plugin-themes-customtheme&lang=en)<br>
	This demo shows the use of WUIPluginThemes's custom predefined themes.<br><br>

> [!NOTE]
> All demos from the [wuijs-demos](https://github.com/wui-js/wuijs-demos) repository can be reviewed on CodeSandbox at the following link [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wuiplugin](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wuiplugin).
