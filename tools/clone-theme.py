import os
import re
import argparse

# Default arguments
default_source_path = "../src/wui-js/plugins/themes/wuiplugin-themes-0.11.css"
default_themes_dir  = "../src/wui-js/plugins/themes"
default_source      = "default"
default_version     = "0.1"

# Get arguments
parser = argparse.ArgumentParser(
    description="Clone an existing WUIPluginThemes theme as a starting point for a new one.",
    formatter_class=argparse.ArgumentDefaultsHelpFormatter
)
parser.add_argument("-p", "--plugin",    type=str, help="Path to the themes plugin CSS source file.", default=default_source_path)
parser.add_argument("-d", "--directory", type=str, help="Themes base directory.", default=default_themes_dir)
parser.add_argument("-s", "--source",    type=str, help="Name of the theme to clone.", default=default_source)
parser.add_argument("-n", "--name",      type=str, help="Name of the new theme.", required=True)
parser.add_argument("-v", "--version",   type=str, help="Theme version.", default=default_version)
args = parser.parse_args()

def main():
    source_dir    = os.path.join(args.directory, args.source)
    target_dir    = os.path.join(args.directory, args.name)
    settings_file = f"settings-{args.version}.css"
    source_path   = os.path.join(source_dir, settings_file)
    target_path   = os.path.join(target_dir, settings_file)

    if not os.path.isfile(source_path):
        print(f"Error: source settings file not found: {source_path}")
        exit(1)

    if os.path.exists(target_path):
        print(f"Error: target already exists: {target_path}")
        exit(1)

    os.makedirs(target_dir, exist_ok=True)

    with open(source_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace the theme selector
    content = re.sub(
        r'(\.wuiplugin-themes\.)' + re.escape(args.source) + r'\b',
        r'\g<1>' + args.name,
        content
    )

    with open(target_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Cloned '{args.source}' → '{args.name}'")
    print(f"Created: {target_path}")
    print(f"Next: edit {target_path}, then run css-theme-maker.py -n {args.name}")

if __name__ == "__main__":
    main()
