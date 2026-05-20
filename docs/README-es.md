> [!IMPORTANT]
> La cuenta de GitHub `@wuiproject` se migró a `@wui-js` para que coincidiera con el nombre de la cuenta de NPM.

[English](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/README-en.md) |
[Español](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/README-es.md)
---

# wuijs-plugins-lib

<p align="center">
	<img src="https://github.com/wui-js/wuijs-plugins-lib/blob/main/imgs/logo/wuijs-plugins-logotype-color.svg" width="220" height="220">
</p>

|                       | |
| --------------------- | --- |
| **Nombre librería**   | `wuijs-plugins-lib` |
| **Versión librería**  | `0.7.1` ([Registro de Cambios](https://github.com/wui-js/wuijs-plugins-lib/blob/main/docs/CHANGELOG-es.md)) |
| **Paquete npm**       | `@wui-js/plugins` ([npm](https://www.npmjs.com/package/@wui-js/plugins)) |
| **Versión documento** | `0.7.1.20260516.0` |
| **Licencia**          | `Licencia Apache 2.0` |
| **Autor**             | `Sergio E. Belmar V. <wuijs.project@gmail.com>` |
| **Repositorio**       | [https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib) |
| **Documentación**     | [https://docs.wuijs.dev](https://docs.wuijs.dev) |
| **Sitio web**         | [https://wuijs.dev](https://wuijs.dev) |

## Índice

*   [Descripción General](#overview)
*   [Instalación](#install)
*   [Plugins](#plugins)
	*   [WUIPluginThemes](#wuiplugin-themes)
	*   [WUIPluginSelector](#wuiplugin-selector)
*   [Demos](#demos) (CodeSandbox)

<a name="overview"></a>

## Descripción General

WUI/JS Plugins Lib es una librería JavaScript/CSS de código abierto que proporciona una colección de complementos para las clases de WUI/JS Main Lib, lo que facilita el desarrollo rápido de aplicaciones web.

### Acerca del Proyecto WUI/JS

WUI/JS Plugins Lib es parte del proyecto WUI/JS, que consta actualmente de 4 repositorios:

-	[https://github.com/wui-js/wuijs-main-lib](https://github.com/wui-js/wuijs-main-lib)<br>
	Librería Principal UI.<br><br>
-	[https://github.com/wui-js/wuijs-environment-lib](https://github.com/wui-js/wuijs-environment-lib)<br>
	Librería Puente UI entre entornos web y motores de renderizado web nativos.<br><br>
-	[https://github.com/wui-js/wuijs-plugins-lib](https://github.com/wui-js/wuijs-plugins-lib)<br>
	Librería de Complementos UI.<br><br>
-	[https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos)<br>
	Repositorio con demos y ejemplos de uso de las librerías del proyecto.<br><br>

### Tabla de Plugins

| Nombre Plugin                            | Versión | Descripción |
| ---------------------------------------- | -------:| ----------- |
| [WUIPluginThemes](#wuiplugin-themes)     | `0.7`   | Plugin para el manejo de temas prediseñados y modo claro y oscuro. |
| [WUIPluginSelector](#wuiplugin-selector) | `0.4`   | Selector modal basado en WUIModal. |

### Mapa de Directorios

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

| Ruta                                                                                                  | Descripción |
| ----------------------------------------------------------------------------------------------------- | ----------- |
| [docs](https://github.com/wui-js/wuijs-plugins-lib/tree/main/docs/)                                   | Documentación. |
| [imgs](https://github.com/wui-js/wuijs-plugins-lib/tree/main/imgs/)                                   | Imágenes utilizadas en la documentación. |
| [imgs/logo](https://github.com/wui-js/wuijs-plugins-lib/tree/main/imgs/logo/)                         | Logotipo e isotipo del proyecto en formato SVG y PNG. |
| [legacy](https://github.com/wui-js/wuijs-plugins-lib/tree/main/legacy/)                               | Fuentes obsoletas con versiones anteriores. |
| [legacy/wui-js](https://github.com/wui-js/wuijs-plugins-lib/tree/main/legacy/wui-js/)                 | Directorio del proyecto WUI/JS. |
| [legacy/wui-js/plugins](https://github.com/wui-js/wuijs-plugins-lib/tree/main/legacy/wui-js/plugins/) | Librería WUI/JS Plugins (versiones anteriores). |
| [src](https://github.com/wui-js/wuijs-plugins-lib/tree/main/src/)                                     | Fuentes principales de la última versión. |
| [src/wui-js](https://github.com/wui-js/wuijs-plugins-lib/tree/main/src/wui-js)                        | Directorio del proyecto WUI/JS. |
| [src/wui-js/plugins](https://github.com/wui-js/wuijs-plugins-lib/tree/main/src/wui-js/plugins/)       | Librería WUI/JS Plugins. |
| [tools](https://github.com/wui-js/wuijs-plugins-lib/tree/main/tools/)                                 | Herramientas complementarias. |

<a name="install"></a>

## Instalación

**Opción 1: Instalar desde fuente**

Para instalar la biblioteca WUI/JS Plugins, debe ser clonada desde el repositorio oficial en GitHib (`wui-js/wuijs-plugins-lib`).
Suponiendo que el proyecto donde se implementará tenga un directorio de código fuente `./src` y, dentro de este, un directorio de librerías `./src/libraries`, debe escribir lo siguiente en la terminal:

```bash
git clone https://git@github.com/wui-js/wuijs-plugins-lib.git
cp -r ./wuijs-plugins-lib/src/wui-js/ ../src/libraries/
```

Opcionalmente puede ser descargada desde los mismos repositorios en formato ZIP.

```bash
wget https://github.com/wui-js/wuijs-plugins-lib/archive/refs/heads/main.zip
unzip main.zip
cp -r ./wuijs-plugins-lib-main/src/wui-js/ ../src/libraries/
```

> [!TIP]
> Es recomendable que el directorio `/plugins` se aloje en el mismo directorio que la biblioteca principal `/main`.

**Opción 2: Instalar vía npm**

Para instalar la librería WUI/JS mediante npm:

```bash
npm i @wui-js/plugins
```

Los recursos quedarán disponibles en la ruta `./node_modules/@wui-js/plugins`.

<a name="plugins"></a>

## Plugins

<a name="wuiplugin-themes"></a>

### WUIPluginThemes

Versión: `0.7`

Plugin para el manejo de temas prediseñados y modo claro y oscuro.

#### Descripción

WUIPluginThemes provee un sistema de temas para aplicaciones web mediante dos capas de variables CSS.

#### Componentes cubiertos

WUIPluginThemes provee soporte de temas para los siguientes componentes de WUI/JS Main Lib:

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

También provee soporte de temas para el plugin `wuiplugin-selector`.

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/wui-js/plugins/themes/wuiplugin-themes-0.7.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/wuiplugin-themes-0.7.css) |
| JS   | [src/wui-js/plugins/themes/wuiplugin-themes-0.7.js](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/wuiplugin-themes-0.7.js) |
| CSS  | [src/wui-js/plugins/themes/default/settings-0.7.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/default/settings-0.7.css) |
| CSS  | [src/wui-js/plugins/themes/default/light-0.7.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/default/light-0.7.css) |
| CSS  | [src/wui-js/plugins/themes/default/dark-0.7.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/themes/default/dark-0.7.css) |

#### Constructor

| Tipo            | Descripción |
| --------------- | ----------- |
| WUIPluginThemes | `WUIPluginThemes()` |

#### Propiedades de la Clase

| Nombre  | Tipo     | Descripción |
| ------- | -------- | ----------- |
| version | `string` | Versión del plugin. |

#### Propiedades de la Instancia

No posee propiedades de instancia.

#### Métodos

| Método           | Return type | Descripción |
| ---------------- | ----------- | ----------- |
| getScheme        | `string`    | `getScheme()`<br><br>Retorna el valor de la propiedad CSS `color-scheme` definida en el elemento `<html>`. Valores posibles: `"light"`, `"dark"`, `"light dark"`, `""`. |
| getCurrentScheme | `string`    | `getCurrentScheme()`<br><br>Retorna el esquema de color preferido del sistema operativo, independientemente del esquema configurado en la aplicación. Valores posibles: `"light"`, `"dark"`. |
| getTheme         | `string`    | `getTheme()`<br><br>Retorna el nombre del tema activo según las clases CSS presentes en `document.body`. |
| setScheme        | `void`      | `setScheme(scheme)`<br><br>Establece el esquema de color de la aplicación. Actualiza las clases CSS en `document.body` y el atributo `color-scheme` en el elemento `<html>`. Si el esquema nuevo difiere del actual, activa automáticamente la transición de fondo. La duración de la transición está controlada por la variable CSS `--wuiplugin-theme-transition-delay` (valor por defecto: `0.4s`). Valores posibles: `"light"`, `"dark"`, `"light dark"`, `"system"`. |

#### Temas Predefinidos

| Nombre    | Descripción |
| --------- | ----------- |
| `default` | Tema predeterminado. |

#### Variables CSS

Las variables de configuración de tema se definen en el archivo `src/wui-js/plugins/themes/{theme-name}/{version}.css` y se organizan en dos variantes de sufijo: `{variable}-light` para modo claro y `{variable}-dark` para modo oscuro.
Los valores sin sufijo son comunes a ambos modos.

**Colores (con variante por modo de color):**

| Variable base                                             | Descripción |
| --------------------------------------------------------- | ----------- |
| `--wuiplugin-theme-graycolor-max-(light\|dark)`           | Color gris máximo (blanco en claro, negro en oscuro). |
| `--wuiplugin-theme-graycolor-high-(light\|dark)`          | Color gris alto. |
| `--wuiplugin-theme-graycolor-half-(light\|dark)`          | Color gris medio. |
| `--wuiplugin-theme-graycolor-low-(light\|dark)`           | Color gris bajo. |
| `--wuiplugin-theme-graycolor-min-(light\|dark)`           | Color gris mínimo (negro en claro, blanco en oscuro). |
| `--wuiplugin-theme-shadowcolor-high-(light\|dark)`        | Color de sombra fuerte. |
| `--wuiplugin-theme-shadowcolor-low-(light\|dark)`         | Color de sombra suave. |
| `--wuiplugin-theme-bordercolor-max-(light\|dark)`         | Color de borde máximo. |
| `--wuiplugin-theme-bordercolor-high-(light\|dark)`        | Color de borde alto. |
| `--wuiplugin-theme-bordercolor-low-(light\|dark)`         | Color de borde bajo. |
| `--wuiplugin-theme-bgcolor-overlay-(light\|dark)`         | Color de fondo del overlay. |
| `--wuiplugin-theme-bgcolor-box-(light\|dark)`             | Color de fondo de cuadros de diálogo y paneles. |
| `--wuiplugin-theme-bgcolor-out-(light\|dark)`             | Color de fondo en estado normal. |
| `--wuiplugin-theme-bgcolor-over-(light\|dark)`            | Color de fondo en estado hover o seleccionado. |
| `--wuiplugin-theme-bgcolor-scroll-(light\|dark)`          | Color de la barra de desplazamiento. |
| `--wuiplugin-theme-bgcolor-icon-(light\|dark)`            | Color de relleno de íconos. |
| `--wuiplugin-theme-bgcolor-highcontrast-(light\|dark)`	| Color de fondo de alto contraste (tooltips, etc.). |
| `--wuiplugin-theme-textcolor-title-(light\|dark)`         | Color de texto de títulos. |
| `--wuiplugin-theme-textcolor-active-(light\|dark)`        | Color de texto en estado activo. |
| `--wuiplugin-theme-textcolor-focus-(light\|dark)`         | Color de texto en estado de foco. |
| `--wuiplugin-theme-utilitycolor-hightlight-(light\|dark)` | Color de acento principal (links, botones, selecciones). |
| `--wuiplugin-theme-utilitycolor-warning-(light\|dark)`    | Color de advertencia o error. |
| `--wuiplugin-theme-utilitycolor-disabled-(light\|dark)`   | Color de elementos deshabilitados. |
| `--wuiplugin-theme-intencitycolor-low-(light\|dark)`      | Color de intensidad baja. |
| `--wuiplugin-theme-intencitycolor-half-(light\|dark)`     | Color de intensidad media. |
| `--wuiplugin-theme-intencitycolor-high-(light\|dark)`     | Color de intensidad alta. |

**Tipografía y métricas (comunes, sin variante por modo de color):**

| Variable                                  | Valor por defecto                       | Descripción |
| ----------------------------------------- | --------------------------------------- | ----------- |
| `--wuiplugin-theme-borderradius-low`      | `10px`                                  | Radio de borde bajo. |
| `--wuiplugin-theme-borderradius-half`     | `15px`                                  | Radio de borde medio. |
| `--wuiplugin-theme-borderradius-high`     | `17px`                                  | Radio de borde alto. |
| `--wuiplugin-theme-borderradius-round`    | `50%`                                   | Radio de borde circular. |
| `--wuiplugin-theme-titlefont`             | `Arial, Helvetica, Verdana, sans-serif` | Familia tipográfica para títulos. |
| `--wuiplugin-theme-input-opener-iconsize` | `30px`                                  | Tamaño del ícono de apertura en campos de formulario. |
| `--wuiplugin-theme-transition-delay`      | `0.4s`                                  | Duración de la transición de esquema de color. |

#### Implementación

Existen dos modos de implementación:

**Usando archivos CSS generados:**

Utiliza únicamente los archivos CSS generados (`[light|dark]-{versión}.css`) ubicados en el directorio del tema (`src/wui-js/plugins/themes/{nombre}/`).
Recomendado si no se requiere cambiar entre modos claro y oscuro dinámicamente.

Cabecera HTML:

```html
<link rel="stylesheet" href="./libreries/wui-js/plugins/themes/default/light-0.7.css">
```

Código HTML:

```html
<body class="wuiplugin-themes default light"></body>
```

**Usando instanciamiento de la clase JS:**

Requiere la implementación de la clase JS `WUIPluginThemes`, el archivo CSS fuente `wuiplugin-themes-0.7.css` y el archivo CSS de configuración del tema `wui-js/plugins/themes/{nombre}/settings-{versión}.css`.
Adicionalmente el visualizador donde se despliegue debe tener soporte para la función CSS `light-dark()` [https://www.w3schools.com/cssref/func_light-dark.php](https://www.w3schools.com/cssref/func_light-dark.php)

Código CSS:

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

Cabecera HTML:

```html
<link rel="stylesheet" href="./libraries/wui-js/main/switch/wui-switch-0.6.root.css">
<link rel="stylesheet" href="./libraries/wui-js/main/switch/wui-switch-0.6.css">
<link rel="stylesheet" href="./libraries/wui-js/plugins/themes/wuiplugin-themes-0.7.css">
<link rel="stylesheet" href="./libraries/wui-js/plugins/themes/default/settings-0.7.css">
<script type="text/javascript" src="./libraries/wui-js/main/switch/wui-switch-0.6.js"></script>
<script type="text/javascript" src="./libraries/wui-js/plugins/themes/wuiplugin-themes-0.7.js"></script>
```

Código HTML:

```html
<body class="wuiplugin-themes default light">
	<nav>
		<div class="wui-switch my-switch">
			<input type="checkbox" name="mySwitch">
		</div>
	</nav>
</body>
```

Código JS:

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
> Puede revisar este ejemplo funcional en CodeSandbox en el enlace: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/plugin/themes/switchmode](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/plugin/themes/switchmode).

#### Herramienta de clonación de temas

El script `tools/clone-theme.py` crea un nuevo tema copiando el archivo de configuración de un tema existente y reemplazando su selector CSS. Es el punto de partida recomendado antes de ejecutar `css-theme-maker.py`.

```bash
python ./clone-theme.py -n <nombre-nuevo-tema>

python ./clone-theme.py -d <directorio-temas> -s <tema-origen> -n <nombre-nuevo-tema> -v <versión-tema>
```

| Opción                 | Predeterminado                                          | Descripción |
| ---------------------- | ------------------------------------------------------- | ----------- |
| `-p`,<br>`--plugin`    | `../src/wui-js/plugins/themes/wuiplugin-themes-0.7.css` | Ruta al archivo CSS fuente del plugin themes. |
| `-d`,<br>`--directory` | `../src/wui-js/plugins/themes`                          | Directorio base de temas. |
| `-s`,<br>`--source`    | `default`                                               | Nombre del tema a clonar. |
| `-n`,<br>`--name`      | _(requerido)_                                           | Nombre del nuevo tema. |
| `-v`,<br>`--version`   | `0.1`                                                   | Versión del tema. |

El archivo de salida se genera en `{directorio}/{nombre}/settings-{versión}.css` con el selector CSS actualizado al nuevo nombre.

#### Herramienta de generación de temas

El script `tools/css-theme-maker.py` crea archivos CSS estandarizados resolviendo todas las referencias a `var()` del archivo fuente, produciendo un CSS plano por cada modo de color. Lee la configuración de variables desde el archivo `{directorio}/{nombre}/settings-{versión}.css`.

```bash
python ./css-theme-maker.py

python ./css-theme-maker.py -p <ruta-css-plugin> -d <directorio-temas> -n <nombre-tema> -v <versión-tema>
```

| Opción                 | Predeterminado                                          | Descripción |
| ---------------------- | ------------------------------------------------------- | ----------- |
| `-p`,<br>`--plugin`    | `../src/wui-js/plugins/themes/wuiplugin-themes-0.7.css` | Ruta al archivo CSS fuente del plugin themes. |
| `-d`,<br>`--directory` | `../src/wui-js/plugins/themes`                          | Directorio base de temas. |
| `-n`,<br>`--name`      | `default`                                               | Nombre del tema. |
| `-v`,<br>`--version`   | `0.6`                                                   | Versión del tema. |

Los archivos de salida se generan en `{directorio}/{nombre}/` con los nombres `light-{versión}.css` y `dark-{versión}.css`.

#### Personalización de temas predefinidos

```css
body.wuiplugin-themes.default {
	--wuiplugin-theme-utilitycolor-hightlight-light: #e91e63;
    --wuiplugin-theme-utilitycolor-hightlight-dark: #f06292;
    --wuiplugin-theme-bgcolor-out-light: #fff8f9;
    --wuiplugin-theme-bgcolor-out-dark: #1a0a0d;
}
```

> [!IMPORTANT]
> Para que los cambios sean aplicados es importante incluir el elemento raíz, en este caso `<body>`, con la clase `wuiplugin-themes` y el nombre del tema, de esta manera la definición tendrá mayor especificidad y se aplicará sobre las definiciones del tema especificado.

> [!TIP]
> Para mantener el estándar propuesto por la documentación de la librería WUI/JS, esta personalización puede realizarse en el archivo `WUI.css`.

> [!TIP]
> Puede revisar este ejemplo funcional en CodeSandbox en el enlace: [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/plugin/themes/customtheme](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/plugin/themes/customtheme).

```html
<body class="wuiplugin-themes default light"></body>
```

#### Personalización de temas propios

**Paso 1 — Clonar un tema existente como base:**

Ejecuta desde el directorio `tools/`:

```bash
python clone-theme.py -n my-theme
```

Esto crea `src/wui-js/plugins/themes/my-theme/settings-0.1.css` con el selector actualizado a `.wuiplugin-themes.my-theme` y todas las variables del tema `default` como punto de partida.

**Paso 2 — Editar las variables del nuevo tema:**

Modifica `src/wui-js/plugins/themes/my-theme/settings-0.1.css` con los valores deseados. La estructura del archivo es:

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
	--wuiplugin-theme-bgcolor-scroll-dark: #4b5563;
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

**Paso 3 — Activar el tema:**

Para el modo dinámico, activa el tema en el elemento raíz e incluye el archivo de configuración en la cabecera HTML:

```html
<body class="wuiplugin-themes my-theme light">
```

```html
<link rel="stylesheet" href="./libraries/wui-js/plugins/themes/my-theme/settings-0.1.css">
```

**Paso 4 — Generar archivos pregenerados (modo estático):**

Ejecuta desde el directorio `tools/`:

```bash
python css-theme-maker.py -n my-theme
```

Los archivos `light-0.1.css` y `dark-0.1.css` se generan en `src/wui-js/plugins/themes/my-theme/`.

<a name="wuiplugin-selector"></a>

### WUIPluginSelector

Versión: `0.4`

Selector modal de lista de opciones basado en WUIModal.

#### Descripción

WUIPluginSelector extiende `WUIModal` e implementa un selector de lista de opciones de tipo modal.
Está optimizado para entornos móviles e intercepta el evento táctil sobre elementos `<select>` nativos para reemplazar el selector del sistema por un panel de selección personalizado.
También puede utilizarse de forma programática independientemente de un input nativo `<select>` en entornos responsivos.

> [!NOTE]
> La documentación completa de la clase `WUIModal` se encuentra en el proyecto `wuijs-main-lib` en el enlace: [https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-modal](https://github.com/wui-js/wuijs-main-lib/blob/main/docs/README-es.md#wui-modal).

#### Dependencias

| Clase       | Versión | Descripción |
| ----------- | :-----: | ----------- |
| `WUIIcon`   | `0.4`   | Requerida para el ícono de las opciones seleccionadas. |
| `WUIModal`  | `0.5`   | Clase base del modal. Requerida. |
| `WUIButton` | `0.7`   | Utilizada internamente para los botones de aceptar y cancelar. Requerida. |

#### Fuentes

| Tipo | Archivo |
| ---- | ------- |
| CSS  | [src/wui-js/plugins/selector/wuiplugin-selector-0.4.css](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/selector/wuiplugin-selector-0.4.css) |
| JS   | [src/wui-js/plugins/selector/wuiplugin-selector-0.4.js](https://github.com/wui-js/wuijs-plugins-lib/blob/main/src/wui-js/plugins/selector/wuiplugin-selector-0.4.js) |

#### Constructor

| Tipo              | Descripción |
| ----------------- | ----------- |
| WUIPluginSelector | `WUIPluginSelector([properties])`<br><br>Parámetros:<br>**• properties:** `object` *opcional* |

#### Propiedades de la Clase

| Nombre  | Tipo     | Descripción |
| ------- | -------- | ----------- |
| version | `string` | Versión del plugin. |

#### Propiedades de la Instancia

| Propiedad       | Tipo             | Valor predeterminado | Descripción |
| --------------- | ---------------- | -------------------- | ----------- |
| value           | `string`         | `""`                 | (get/set)<br>Valor actual seleccionado. En selección múltiple, los valores se unen con `separatorValue`. |
| options         | `array`          | `[]`                 | (get/set)<br>Array de objetos de opción. Ver estructura en la sección de implementación. |
| multiple        | `boolean`        | `false`              | (get/set)<br>Indica si la selección es múltiple. Afecta cómo se actualizan las opciones del `<select>` vinculado al aceptar. |
| separatorValue  | `string`         | `","`                | (get/set)<br>Separador usado para unir los valores seleccionados en la propiedad `value` y en el parámetro `values` del callback `acceptOnClick`. |
| separatorText   | `string`         | `", "`               | (get/set)<br>Separador usado para unir los textos seleccionados en el parámetro `texts` del callback `acceptOnClick`. |
| emptyText       | `string`         | `""`                 | (get/set)<br>Texto alternativo para opciones con `value` vacío. |
| selecteableText | `boolean`        | `false`              | (get/set)<br>Si es `true`, permite al usuario seleccionar y copiar el texto de las opciones. Se aplica únicamente a las opciones seleccionadas. |
| acceptButton    | `WUIButton`      | `null`               | (get/set)<br>Instancia del botón de aceptar. Se asigna automáticamente en `init()`. El setter solo acepta instancias de `WUIButton`. |
| acceptVisible   | `boolean`        | `true`               | (get/set)<br>Indica si el botón de aceptar es visible. Se restablece a `true` al cerrar el selector. |
| acceptData      | `object`         | `{}`                 | (get/set)<br>Atributos `data-*` a aplicar en el botón de aceptar (por ejemplo `{ key: "buttons.accept" }` para WUILanguage). |
| acceptText      | `string`         | `""`                 | (get/set)<br>Texto del botón de aceptar. |
| acceptOnClick   | `function\|null` | `null`               | (get/set)<br>Función ejecutada al pulsar el botón de aceptar. Firma: `acceptOnClick(indexes, values, texts)`. Se restablece a `null` al cerrar el selector. |
| cancelButton    | `WUIButton`      | `null`               | (get/set)<br>Instancia del botón de cancelar. Se asigna automáticamente en `init()`. El setter solo acepta instancias de `WUIButton`. |
| cancelVisible   | `boolean`        | `true`               | (get/set)<br>Indica si el botón de cancelar es visible. Se restablece a `true` al cerrar el selector. |
| cancelData      | `object`         | `{}`                 | (get/set)<br>Atributos `data-*` a aplicar en el botón de cancelar. |
| cancelText      | `string`         | `""`                 | (get/set)<br>Texto del botón de cancelar. |
| cancelOnClick   | `function\|null` | `null`               | (get/set)<br>Función ejecutada al pulsar el botón de cancelar. Se restablece a `null` al cerrar el selector. |
| onSelect        | `function\|null` | `null`               | (get/set)<br>Función ejecutada al pulsar una opción de la lista. Firma: `onSelect(value, index)`. Se restablece a `null` al cerrar el selector. |

Además, hereda todas las propiedades de `WUIModal` (`selector`, `openDelay`, `onStartOpen`, `onOpen`, `onScrolling`, `onStartClose`, `onClose`, etc.).

#### Métodos

| Método         | Return type | Descripción |
| -------------- | ----------- | ----------- |
| init           | `void`      | `init()`<br><br>Construye la estructura HTML interna del selector si no existe (o la carga si ya existe en el DOM), inicializa el modal base e instancia los botones de aceptar y cancelar. |
| prepareInput   | `void`      | `prepareInput(input[, options])`<br><br>Vincula el selector a un elemento `<select>` nativo para reemplazar su comportamiento en pantallas móviles. Parámetros:<br>**• input:** `HTMLSelectElement`. Elemento a vincular.<br>**• options:** `object` *opcional*. Opciones de configuración:<br>&nbsp;&nbsp;&nbsp;**- emptyText:** `string` *(predeterminado: `this.emptyText`)* – Texto para opciones de valor vacío.<br>&nbsp;&nbsp;&nbsp;**- direction:** `"ltr"\|"rtl"` *(predeterminado: `"ltr"`)* – Dirección del texto del input.<br>&nbsp;&nbsp;&nbsp;**- force:** `boolean` *(predeterminado: `false`)* – Si `true`, activa el selector en todos los tamaños de pantalla, no solo en móvil (≤767px).<br><br>Al abrirse, puebla automáticamente `this.options` con los `<option>` del `<select>` y establece la selección actual. Al aceptar, actualiza el valor del `<select>` y dispara su evento `change`. |
| open           | `void`      | `open()`<br><br>Abre el selector. Renderiza la lista de opciones desde `this.options` y desplaza la vista hasta la primera opción seleccionada. Muestra u oculta los botones según `acceptVisible` y `cancelVisible`. |
| close          | `void`      | `close()`<br><br>Cierra el selector y restaura las opciones del `<select>` vinculado si existe. Restablece `acceptVisible`, `cancelVisible`, `acceptOnClick`, `cancelOnClick`, `onOpen`, `onClose` y `onSelect` a sus valores predeterminados, y desvincula el input. |
| destroy        | `void`      | `destroy()`<br><br>Destructor. Elimina todos los elementos HTML internos y libera las propiedades del objeto. |

Los métodos de instancia de `WUIModal` (`getElement()`, `getBox()`, `getFooter()`, `getStatus()`, `isOpen()`, `responsive()`) también están disponibles.

#### Clases CSS

| Clase                | Elemento     | Descripción |
| -------------------- | ------------ | ----------- |
| `wuiplugin-selector` | `.wui-modal` | Clase principal del plugin. Identifica el componente. |
| `mobile`             | `.wui-modal` | Activa la presentación modal de tipo móvil en WUIModal. Agregada automáticamente por `init()`. |
| `priority`           | `.wui-modal` | Asigna prioridad de apilamiento (z-index) al modal. Agregada automáticamente por `init()`. |

#### Variables CSS

| Variable                                         | Descripción |
| ------------------------------------------------ | ----------- |
| `--wuiplugin-selector-box-width`                 | Ancho de la caja del selector. |
| `--wuiplugin-selector-box-bgcolor`               | Color de fondo de la caja del selector. |
| `--wuiplugin-selector-option-bordercolor-out`    | Color de borde de la opción en estado normal. |
| `--wuiplugin-selector-option-bordercolor-over`   | Color de borde de la opción en estado hover. |
| `--wuiplugin-selector-option-bgcolor-out`        | Color de fondo de la opción en estado normal. |
| `--wuiplugin-selector-option-bgcolor-over`       | Color de fondo de la opción en estado hover. |
| `--wuiplugin-selector-option-iconcolor-out`      | Color del ícono de la opción en estado normal. |
| `--wuiplugin-selector-option-iconcolor-over`     | Color del ícono de la opción en estado hover. |
| `--wuiplugin-selector-option-iconcolor-disabled` | Color del ícono de la opción deshabilitada. |
| `--wuiplugin-selector-option-textcolor-out`      | Color del texto de la opción en estado normal. |
| `--wuiplugin-selector-option-textcolor-over`     | Color del texto de la opción en estado hover. |
| `--wuiplugin-selector-option-textcolor-selected` | Color del texto de la opción seleccionada (solo cuando `selecteableText = true`). |
| `--wuiplugin-selector-option-textcolor-disabled` | Color del texto de la opción deshabilitada. |
| `--wuiplugin-selector-button-bordercolor`        | Color del borde del pie de botones en modo móvil. |

> [!NOTE]
> Los valores predeterminados de estas variables también estan soportados por WUIPluginThemes. Ver sección [WUIPluginThemes](#wuiplugin-themes).

#### Estructura HTML

El elemento contenedor debe ser un `<div>` con la clase `wui-modal wuiplugin-selector`. La estructura interna es construida automáticamente por `init()`:

```html
<div class="wui-modal wuiplugin-selector mobile priority">
	<div class="box">
		<div class="options">
			<div class="option [selected] [disabled]">
				<div class="icon wui-icon check-line"></div>
				<div class="text [selecteable]">Texto de la opción</div>
			</div>
		</div>
		<div class="footer">
			<button class="wui-button cancel flat wui-language"></button>
			<button class="wui-button submit wui-language"></button>
		</div>
	</div>
</div>
```

#### Implementación

Cabecera HTML:

```html
<link type="text/css" rel="stylesheet" href="./libraries/wui/icon/wui-icon-0.4.root.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/icon/wui-icon-0.4.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/modal/wui-modal-0.5.root.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/modal/wui-modal-0.5.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/button/wui-button-0.7.root.css">
<link type="text/css" rel="stylesheet" href="./libraries/wui/button/wui-button-0.7.css">
<link type="text/css" rel="stylesheet" href="./libraries/wuiplugin/selector/wuiplugin-selector-0.4.root.css">
<link type="text/css" rel="stylesheet" href="./libraries/wuiplugin/selector/wuiplugin-selector-0.4.css">
<script type="text/javascript" src="./libraries/wui/icon/wui-icon-0.4.js"></script>
<script type="text/javascript" src="./libraries/wui/modal/wui-modal-0.5.js"></script>
<script type="text/javascript" src="./libraries/wui/button/wui-button-0.7.js"></script>
<script type="text/javascript" src="./libraries/wuiplugin/selector/wuiplugin-selector-0.4.js"></script>
```

**Uso programático:**

Código HTML:

```html
<div class="wui-modal wuiplugin-selector my-selector"></div>
```

Código JS:

```js
const init = () => {
	const selector = new WUIPluginSelector({
		selector: ".wui-modal.my-selector",
		acceptText: "aceptar",
		cancelText: "cancelar"
	});
	selector.init();
	selector.options = [
		{ icon: null, text: "opción 1", value: "1", selected: false },
		{ icon: null, text: "opción 2", value: "2", selected: true },
		{ icon: null, text: "opción 3", value: "3", selected: false, enabled: false }
	];
	selector.acceptOnClick = (indexes, values, texts) => {
		console.log(values);
	};
	selector.open();
};

window.addEventListener("DOMContentLoaded", init);
```

**Vinculado a un `<select>` nativo (`prepareInput`):**

Código HTML:

```html
<select class="my-select">
	<option value="">— selecciona —</option>
	<option value="1">opción 1</option>
	<option value="2">opción 2</option>
	<option value="3">opción 3</option>
</select>

<div class="wui-modal wuiplugin-selector my-selector"></div>
```

Código JS:

```js
const init = () => {
	const selector = new WUIPluginSelector({
		selector: ".wui-modal.my-selector",
		acceptText: "aceptar",
		cancelText: "cancelar",
		emptyText: "— selecciona —"
	});
	selector.init();
	selector.prepareInput(document.querySelector(".my-select"), {
		force: false
	});
};

window.addEventListener("DOMContentLoaded", init);
```

> [!NOTE]
> `prepareInput` intercepta el `<select>` únicamente en pantallas móviles (≤767px) salvo que `force` sea `true`. En escritorio, el `<select>` conserva su comportamiento nativo.

<a name="demos"></a>

## Demos

Esta sección recoge los ejemplos de las implementaciones de la documentación y otros demos complementarios, todos disponibles en el repositorio **WUI/JS Demos** [https://github.com/wui-js/wuijs-demos](https://github.com/wui-js/wuijs-demos).

1.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/plugin/themes/switchmode](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/plugin/themes/switchmode)<br>
	Esta demostración muestra el uso de la funcionalidad de cambiar entre modo claro y oscuro de WUIPluginThemes.<br><br>
2.	[https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/plugin/themes/customtheme](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/plugin/themes/customtheme)<br>
	Esta demostración muestra el uso de los temas predefinidos personalizados de WUIPluginThemes.<br><br>

> [!NOTE]
> Todos los demos del repositorio [wuijs-demos](https://github.com/wui-js/wuijs-demos) se pueden revisar en CodeSandbox en el enlace [https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wuiplugin](https://codesandbox.io/p/sandbox/github/wui-js/wuijs-demos/tree/main/demos/wuiplugin).
