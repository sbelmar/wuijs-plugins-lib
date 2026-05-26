import os
import re
import argparse

# Default arguments
default_source_path = "../src/wui-js/plugins/themes/wuiplugin-themes-0.8.css"
default_themes_dir  = "../src/wui-js/plugins/themes"
default_name        = "default"
default_version     = "0.8"

# Get arguments
parser = argparse.ArgumentParser(
    description="Make CSS themes from WUIPluginThemes CSS files.",
    formatter_class=argparse.ArgumentDefaultsHelpFormatter
)
parser.add_argument("-p", "--plugin",    type=str, help="Path to the themes plugin CSS source file.", default=default_source_path)
parser.add_argument("-d", "--directory", type=str, help="Themes base directory.", default=default_themes_dir)
parser.add_argument("-n", "--name",      type=str, help="Theme name.", default=default_name)
parser.add_argument("-v", "--version",   type=str, help="Theme version.", default=default_version)
args = parser.parse_args()

def resolve_value(value, lookup):
    """
    Replaces var(--name) in value with the value from lookup.
    """
    pattern = r'var\((--[a-zA-Z0-9-]+)\)'

    # helper for re.sub
    def repl(match):
        var_name = match.group(1)
        # If var_name is in lookup, use it. Otherwise keep original var(...)
        return lookup.get(var_name, match.group(0))

    new_value = re.sub(pattern, repl, value)
    return new_value

def parse_settings_file(filepath, target_theme):
    """
    Reads a theme settings CSS file (e.g. settings-0.2.css) and extracts
    all setting CSS variable declarations inside the block that matches the
    given target_theme selector.

    Returns:
        header   (list[str])   header comment lines from the file
        settings (dict)        { '--var-name': 'value', ... }
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    header   = []
    settings = {}

    # State flags
    in_header     = True
    in_settings   = False

    # Regexes
    # Matches:  .wuiplugin-themes.theme-default {
    # or:       .wuiplugin-themes:is(.theme-1, .theme-default) {
    settings_start = re.compile(r'^\.wuiplugin-themes(?::is\((.+)\)|(\.[\w-]+))\s*{')
    block_end      = re.compile(r'^\s*}\s*$')
    var_decl       = re.compile(r'^\s*(--[a-zA-Z0-9-]+):\s*(.+?);\s*$')

    for line in lines:
        stripped = line.strip()

        # Capture header block (leading /* ... */ comment)
        if in_header:
            if stripped.startswith('/*') or stripped.startswith('*') or stripped == '':
                if stripped != '':
                    header.append(line)
            else:
                in_header = False

        # Detect start of the target theme block
        sett_match = settings_start.match(line)
        if sett_match:
            selectors = sett_match.group(1) or sett_match.group(2)
            if f".{target_theme}" in selectors or target_theme in selectors:
                in_settings = True
            continue

        # Detect block end
        if block_end.match(line):
            if in_settings:
                in_settings = False
            continue

        # Collect setting variable declarations
        if in_settings:
            m = var_decl.match(line)
            if m:
                name, val = m.groups()
                settings[name] = val

    return header, settings

def parse_css_file(filepath):
    """
    Reads the base CSS file (e.g. WUIPluginThemes-0.1.css) and extracts:
      - header  : leading comment block
      - components : list of items (vars, comments, empty lines) inside
                     the .wuiplugin-themes { } block

    Note: setting variable blocks (.wuiplugin-themes:is(...)) are intentionally
          ignored here — they are now read from a separate file via parse_settings_file().
    """
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    header     = []
    components = []

    # State flags
    in_header     = True
    in_settings   = False   # skip :is(...) blocks
    in_components = False

    # Regexes
    settings_start  = re.compile(r'^\.wuiplugin-themes:is\((.+)\)\s*{')
    components_start = re.compile(r'^\.wuiplugin-themes\s*{')
    block_end        = re.compile(r'^\s*}\s*$')
    var_decl         = re.compile(r'^\s*(--[a-zA-Z0-9-]+):\s*(.+?);\s*$')
    comment_line     = re.compile(r'^\s*/\*\s*(.+)\s*\*/\s*$')

    for line in lines:
        stripped = line.strip()

        # Header capture
        if in_header:
            if stripped.startswith('/*') or stripped.startswith('*') or stripped == '':
                if stripped != '':
                    header.append(line)
            else:
                in_header = False

        # Skip setting blocks (handled by parse_settings_file)
        if settings_start.match(line):
            in_settings = True
            continue

        # Detect component block start
        if components_start.match(line):
            in_components = True
            continue

        # Detect block end
        if block_end.match(line):
            if in_settings:
                in_settings = False
            elif in_components:
                in_components = False
            continue

        # Collect component variable declarations
        if in_components:
            if comment_line.match(line):
                components.append({'type': 'comment', 'content': line})
            elif var_decl.match(line):
                m = var_decl.match(line)
                if m:
                    name, val = m.groups()
                    # Only keep --wui-* variables
                    if name.startswith('--wui-') or name.startswith('--wuiplugin-'):
                        indent = re.findall(r'^\s*', line)[0]
                        components.append({'type': 'var', 'name': name, 'value': val, 'indent': indent})
            elif stripped == '':
                components.append({'type': 'empty', 'content': line})

    return header, components

def generate_theme(mode, theme_name, header, settings, components, output_path):
    # 1. Build resolved settings lookup for this mode
    suffix = f"-{mode}"

    resolved_settings = {}

    # Add common variables (no -light / -dark suffix)
    for name, value in settings.items():
        if not name.endswith('-light') and not name.endswith('-dark'):
            resolved_settings[name] = value

    # Override with mode-specific variables (strip the suffix to get the base name)
    for name, value in settings.items():
        if name.endswith(suffix):
            base_name = name[:-len(suffix)]
            resolved_settings[base_name] = value

    # 2. Build output
    output_filename = os.path.basename(output_path)
    output_lines = []
    for line in header:
        line = re.sub(r'(@file\s+)\S+', lambda m: m.group(1) + output_filename, line)
        output_lines.append(line)
    output_lines.append("\n")  # spacing

    class_name = f".wuiplugin-themes.{theme_name}.{mode} " + "{\n"
    output_lines.append(class_name)
    output_lines.append("\n")
    output_lines.append("	/* wuiplugin-theme */\n")
    output_lines.append("\n")
    output_lines.append(f'	--wuiplugin-theme-name: "{theme_name}";\n')

    # Lookup starts with resolved settings; grows with each resolved component var
    lookup = resolved_settings.copy()

    for item in components:
        if item['type'] == 'comment':
            output_lines.append(item['content'])
        elif item['type'] == 'empty':
            output_lines.append(item['content'])
        elif item['type'] == 'var':
            name    = item['name']
            raw_val = item['value']
            resolved = resolve_value(raw_val, lookup)

            indent = item['indent']
            output_lines.append(f"{indent}{name}: {resolved};\n")

            # Store for future self-reference within the same block
            lookup[name] = resolved

    output_lines.append("}\n")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.writelines(output_lines)
    print(f"Generated {output_path}")

def main():
    # Derive paths from --directory, --name and --version
    out_dir       = os.path.join(args.directory, args.name)
    settings_path = os.path.join(out_dir, f"settings-{args.version}.css")

    # Create output directory if it doesn't exist
    os.makedirs(out_dir, exist_ok=True)

    # Parse setting variables from the theme file
    sett_header, settings = parse_settings_file(settings_path, args.name)

    if not settings:
        print(f"Warning: No setting variables found for theme '{args.name}' in '{settings_path}'.")
        print("Check that the theme selector exists in that file.")

    # Parse component variables from the base CSS file
    base_header, components = parse_css_file(args.plugin)

    # Use the settings file header for the output files
    header = sett_header if sett_header else base_header

    # Generate Light  →  e.g. light-0.2.css
    light_file = os.path.join(out_dir, f"light-{args.version}.css")
    generate_theme('light', args.name, header, settings, components, light_file)

    # Generate Dark   →  e.g. dark-0.2.css
    dark_file = os.path.join(out_dir, f"dark-{args.version}.css")
    generate_theme('dark', args.name, header, settings, components, dark_file)

if __name__ == "__main__":
    main()
