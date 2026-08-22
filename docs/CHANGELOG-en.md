> [!IMPORTANT]
> The GitHub account `@wuiproject` was migrated to `@wui-js` to match the name with the NPM account.

[English](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/CHANGELOG-en.md) |
[Español](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/CHANGELOG-es.md)
---

# Change Log

## [v0.13.3] - 2026-08-21

Features:

1. Updated WUIPluginFormValidation class version to `0.3`.

## [v0.13.2] - 2026-08-22

Features:

1. Synchronized with `wuijs-main-lib` version `0.13.2`.
2. Updated WUIPluginFormValidation class version to `0.2`.
	- Added `reset()` method.
	- Added `resetAll()` method.
	- Added support for array-type inputs (`[name="...[]"]`), matching the `position` parameter added in `WUIForm` `0.11`.

## [v0.13.1] - 2026-07-20

Features:

1. Synchronized with `wuijs-main-lib` version `0.13.1`.
2. Updated WUIPluginThemes (ex WUIPluginThemes) class version to `0.12`.
	- Converted class into an extension of the `WUIBody` class from the `wuijs-main-lib` library.
	- Renamed `WUIPluginThemes` class to `WUIPluginBodyThemes`.
	- Renamed `--wuiplugin-theme(s)*`CSS vars prefix to `--wuiplugin-bodytheme*`.
	- Removed `--wui-selectpicker-box-button-textsize` CSS var.
	- Removed `css-theme-maker.py` tool to `bodytheme-css-maker.py`.
	- Removed `clone-theme.py` tool to `bodytheme-clone.py`.
3. Added WUIPluginFormValidation class `0.1` version.
4. Added WUIPluginFormHttp class `0.1` version.
5. Deprecated WUIPluginSelector class.

## [v0.12.0] - 2026-06-24

Features:

1. Synchronized with `wuijs-main-lib` version `0.12.0`.
2. Updated WUIPluginThemes class version to `0.11`.
	- Refactored JS code.
	- Added the functionality to add different themes to different elements of the same HTML document.

## [v0.11.0] - 2026-06-12

Features:

1. Synchronized with `wuijs-main-lib` version `0.11.0`.
2. WUIPluginThemes version class update to `0.10`.
	- Updated `wuiplugin-themes-0.10.css` file with the updating of the CSS variable values ​​of the `WUITabs`, `WUIMenubar` and `WUIButton` components.

## [v0.10.0] - 2026-06-01

Features:

1. Synchronized with `wuijs-main-lib` version `0.10.0`.

## [v0.9.2] - 2026-05-28

Features:

1. Synchronized with `wuijs-main-lib` version `0.9.2`.

## [v0.9.1] - 2026-05-28

Features:

1. Synchronized with `wuijs-main-lib` version `0.9.1`.

## [v0.9.0] - 2026-05-28

Features:

1. Synchronized with `wuijs-main-lib` version `0.9.0`.

> [!IMPORTANT]
> It is suggested to replace the use of `WUIPluginSelector` with the `hidden` mode of `WUISelectpicker`, introduced in version `0.8` of the component and version `0.8.1` of `wuijs-main-lin`.
> The `WUIPluginSelector` plugin will be deprecated in subsequent versions.

## [v0.8.1] - 2026-05-28

Features:

1. Synchronized with `wuijs-main-lib` version `0.8.1`.

## [v0.8.0] - 2026-05-26

Features:

1. Synchronized with `wuijs-main-lib` version `0.8.0`.
2. WUIPluginThemes version class update to `0.8`.
	- Updated `wuiplugin-themes-0.8.css` file with the update of the default values of the CSS variables of type `scroll`.

## [v0.7.1] - 2026-05-16

Features:

1. Synchronized with `wuijs-main-lib` version `0.7.1`.
2. WUIPluginThemes version class update to `0.7`.
	- Updated `wuiplugin-themes-0.7.css` file with default CSS variable values for the `wui-menubar`, `wui-selectpicker`, `wui-datepicker` and `wui-timepicker` components.

## [v0.7.0] - 2026-05-14

Features:

1. Synchronized with `wuijs-main-lib` version `0.7.0`.
2. WUIPluginSelector version class update to `0.4`.
	- Added `.root.css` file with CSS default variable values.

## [v0.6.2] - 2026-05-08

Features:

1. Synchronized with `wuijs-main-lib` version `0.6.2`.

## [v0.6.1] - 2026-05-06

Features:

1. Synchronized with `wuijs-main-lib` version `0.6.1`.
2. Release of the official documentation site for WUI/JS: [https://docs.wuijs.dev](https://docs.wuijs.dev)
3. WUIPluginThemes version class update to `0.6`.
	- Added CSS variables associated with the `wui-codebox` component (lab package).
	- Added CSS variables associated with the `wui-markdown` component (lab package).
	- Synchronized the `default` theme template version with the plugin version.

## [v0.6.0] - 2026-05-01

Features:

1. Synchronized with `wuijs-main-lib` version `0.6.0`.
2. WUIPluginThemes version class update to `0.6`.
	- Added `--wui-table-width` CSS var.
	- Added `--wui-table-column-bordercolor-disabled` CSS var.
	- Added `--wui-table-column-bgcolor-disabled` CSS var.
	- Added `--wui-button-default-borderwidth` CSS var.
	- Added `--wui-button-default-horizpadding` CSS var.
	- Added `--wui-button-default-vertpadding` CSS var.
	- Added `--wui-button-mobile-default-minwidth` CSS var.
	- Renamed `--wui-table-column-bordercolor-width` CSS var to `--wui-table-column-borderwidth`.
	- Removed `--wui-switch-bordercolor-invalid` CSS var.

## [v0.5.2] - 2026-04-19

Features:

1. Synchronized the version of the `wuijs-plugins-lib` library with that of `wuijs-main-lib` in order to maintain the integrity of the project and improve the reading of compatibility between libraries.
2. WUIPluginThemes version class update to `0.4`.
	- Added `--wui-modal-mobile-page-box-topmargin` CSS var to improve compatibility with iPhone screens.
	- Added `--wui-modal-mobile-page-box-borderradius-maximized` CSS var to improve compatibility with iPhone screens.
	- Added `--wui-menubar-mobile-bar-horizpadding` CSS var to improve compatibility with iPhone screens.
	- Added `--wui-menubar-mobile-bar-vertpadding` CSS var to improve compatibility with iPhone screens.

## [v0.4.0] - 2026-04-09

> [!NOTE]
> The owner of the official repository changed from **@wuijsproject** to **@wui-js** in order to have integrity between the GitHub and NPM accounts.

1. Enable installation via NPM.
2. Change of source directory name from `src/wuiplugins` to `src/wui-js/plugins` to support integration with other WUI/JS project libraries.
3. WUIPluginThemes version class update to `0.3`.
	- Added `--wuiplugin-theme-name` global CSS var to identify the active theme.
	- Updated `getTheme()` method to return the value of the global CSS variable `--wuiplugin-theme-name` of the active theme.

## [v0.3.0] - 2026-03-20

Features:

1. Renamed source directories and files to lowercase (e.g. `src/WUIPlugin/Themes/WUIPluginTheme-0.1.js` → `src/wuiplugin/themes/wuiplugin-themes-0.2.js`).
2. Added `legacy/` folder with previous versions of source files (`WUIPluginThemes-0.1`, `WUIPluginSelector-0.2`).
3. Renamed `src/wuiplugin/` directory (previously `src/WUIPlugins/`) to use consistent lowercase naming convention.
4. Renamed `legacy/WUIPlugin/` directory (previously `legacy/WUIPlugins/`) to use consistent singular naming convention.
5. WUIPluginThemes version class update to `0.2`.
	- Renamed the directory and files to lowercase.
	- Changed `--wui-modal-message-box-bgcolor` CSS var opacity from `80%` to `100%` in the base theme.
6. WUIPluginSelector version class update to `0.3`.
	- Renamed the directory and files to lowercase.

## [v0.1.0] - 2025-10-15

Features:

1. Release version.