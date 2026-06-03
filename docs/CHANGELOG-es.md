> [!IMPORTANT]
> La cuenta de GitHub `@wuiproject` se migró a `@wui-js` para que coincidiera con el nombre de la cuenta de NPM.

[English](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/CHANGELOG-en.md) |
[Español](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/CHANGELOG-es.md)
---

# Registro de Cambios

## [v0.10.0] - 2026-06-01

Características:

1. Se sincronizó la versión con la versión `0.10.0` de la librería `wuijs-main-lib`.

## [v0.9.2] - 2026-05-28

Características:

1. Se sincronizó la versión con la versión `0.9.2` de la librería `wuijs-main-lib`.

## [v0.9.1] - 2026-05-28

Características:

1. Se sincronizó la versión con la versión `0.9.1` de la librería `wuijs-main-lib`.

## [v0.9.0] - 2026-05-28

Características:

1. Se sincronizó la versión con la versión `0.9.0` de la librería `wuijs-main-lib`.

> [!IMPORTANT]
> Se sugiere reemplazar el uso de `WUIPluginSelector` por em modo `hidden` de `WUISelectpicker` introducido en la versión `0.8` del componente y versión `0.8.1` de `wuijs-main-lin`.
> El plugin `WUIPluginSelector` será deprecado en las seguientes versiones.

## [v0.8.1] - 2026-05-28

Características:

1. Se sincronizó la versión con la versión `0.8.1` de la librería `wuijs-main-lib`.

## [v0.8.0] - 2026-05-26

Características:

1. Se sincronizó la versión con la versión `0.8.0` de la librería `wuijs-main-lib`.
2. Se actualizó versión clase WUIPluginThemes a `0.8`.
	- Se actualizó el archivo `wuiplugin-themes-0.8.css` con la actualiación de los valores de las variables CSS de tipo `scroll`.

## [v0.7.1] - 2026-05-16

Características:

1. Se sincronizó la versión con la versión `0.7.1` de la librería `wuijs-main-lib`.
2. Se actualizó versión clase WUIPluginThemes a `0.7`.
	- Se actualizó el archivo `wuiplugin-themes-0.7.css` con los valores por defecto de las variables CSS de los componentes `wui-menubar`, `wui-selectpicker`, `wui-datepicker` y `wui-timepicker`.

## [v0.7.0] - 2026-05-14

Características:

1. Se sincronizó la versión con la versión `0.7.0` de la librería `wuijs-main-lib`.
2. Se actualizó versión clase WUIPluginSelector a `0.4`.
	- Se agregó archivo `.root.css` con los valores por defecto de las variables CSS.

## [v0.6.2] - 2026-05-08

1. Se sincronizó la versión con la versión `0.6.2` de la librería `wuijs-main-lib`.

Características:

## [v0.6.1] - 2026-05-06

Características:

1. Se sincronizó la versión con la versión `0.6.1` de la librería `wuijs-main-lib`.
2. Liberación del sitio oficial de documentación de WUI/JS: [https://docs.wuijs.dev](https://docs.wuijs.dev)
3. Se actualizó versión clase WUIPluginThemes a `0.6`.
	- Se agregó la variable CSS asociadas al componente `wui-codebox` (paquete lab).
	- Se agregó la variable CSS asociadas al componente `wui-markdown` (paquete lab).
	- Se sincronizó la versión del template `default` con el de la versión del plugin.

## [v0.6.0] - 2026-05-01

Características:

1. Se sincronizó la versión con la versión `0.6.0` de la librería `wuijs-main-lib`.
2. Se actualizó versión clase WUIPluginThemes a `0.5`.
	- Se agregó la variable CSS `--wui-table-width`.
	- Se agregó la variable CSS `--wui-table-column-bordercolor-disabled`.
	- Se agregó la variable CSS `--wui-table-column-bgcolor-disabled`.
	- Se agregó la variable CSS `--wui-button-default-borderwidth`.
	- Se agregó la variable CSS `--wui-button-default-horizpadding`.
	- Se agregó la variable CSS `--wui-button-default-vertpadding`.
	- Se agregó la variable CSS `--wui-button-mobile-default-minwidth`.
	- Se renombró la variable CSS `--wui-table-column-bordercolor-width` a `--wui-table-column-borderwidth`.
	- Se renombró la variable CSS `--wui-form-button-minwidth` a `--wui-form-button-minwidth`.
	- Se eliminó la variable CSS `--wui-switch-bordercolor-invalid`.

## [v0.5.2] - 2026-04-19

Características:

1. Se sincronizó la versión de la librería `wuijs-plugins-lib` con la de `wuijs-main-lib` con el fin de mantener la integridad del proyecto y mejorar la lectura de compatibilidad entre librerías.
2. Se actualizó versión clase WUIPluginThemes a `0.4`.
	- Se agregó la variable CSS `--wui-modal-mobile-page-box-topmargin` para mejorar compatibilidad con pantallas iPhone.
	- Se agregó la variable CSS `--wui-modal-mobile-page-box-borderradius-maximized` para mejorar compatibilidad con pantallas iPhone.
	- Se agregó la variable CSS `--wui-menubar-mobile-bar-horizpadding` para mejorar compatibilidad con pantallas iPhone.
	- Se agregó la variable CSS `--wui-menubar-mobile-bar-vertpadding` para mejorar compatibilidad con pantallas iPhone.

## [v0.4.0] - 2026-04-09

Características:

> [!NOTE]
> Se cambió el dueño del repositorio oficial de **@wuijsproject** a **@wui-js** con el fin de tener integridad entre las cuentas en GitHub y NPM.

1. Habilitación de instalación vía NPM.
2. Cambio de nombre del directorio fuente de `src/wuiplugins` a `src/wui-js/plugins` para dar soporte a integración con otras librerías del proyecto WUI/JS.
3. Se actualizó versión clase WUIPluginThemes a `0.3`.
	- Se agregó la variable global CSS `--wuiplugin-theme-name` para identificar el tema activo.
	- Se actualizó el método `getTheme()` para que devuelva el valor de la variable global CSS `--wuiplugin-theme-name` del tema activo.

## [v0.3.0] - 2026-03-20

Características:

1. Se renombraron los directorios y archivos fuente a minúscula (ej: `src/WUIPlugin/Themes/WUIPluginTheme-0.1.js` → `src/wuiplugin/themes/wuiplugin-themes-0.2.js`).
2. Se agregó la carpeta `legacy/` con versiones anteriores de los archivos fuente (`WUIPluginThemes-0.1`, `WUIPluginSelector-0.2`).
3. Se renombró el directorio `src/wuiplugin/` (antes `src/WUIPlugins/`) para usar una convención de nombres en minúscula consistente.
4. Se renombró el directorio `legacy/WUIPlugin/` (antes `legacy/WUIPlugins/`) para usar una convención de nombres en singular consistente.
5. Se actualizó versión clase WUIPluginThemes a `0.2`.
	- Se renombró el directorio y archivos a minúscula.
	- Se cambió la opacidad de la variable CSS `--wui-modal-message-box-bgcolor` de `80%` a `100%` en el tema base.
6. Se actualizó versión clase WUIPluginSelector a `0.3`.
	- Se renombró el directorio y archivos a minúscula.

## [v0.1.0] - 2025-10-15

Características:

1. Versión de lanzamiento.