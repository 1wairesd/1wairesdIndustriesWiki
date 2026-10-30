---
id: commandguard-localization
title: Localization
sidebar_position: 8
---

# Localization

CommandGuard supports multiple languages. All messages, including the plugin
prefix, are defined in lang files.

## Selecting a language

In `config.yml`, set the lang file name without extension:

```yaml
lang: en_EN
```

Bundled: `en_EN` (English) and `ru_RU` (Russian).

## Lang file location

On first start the plugin extracts the lang files to disk:

```
plugins/CommandGuard/lang/en_EN.yml
plugins/CommandGuard/lang/ru_RU.yml
```

You can edit them freely — they are not overwritten on restart.

## Adding a custom language

1. Create `plugins/CommandGuard/lang/uk_UA.yml` (or any language code).
2. Copy the contents of `en_EN.yml` as a base.
3. Translate all values.
4. Set `lang: uk_UA` in `config.yml`.
5. Run `/cg reload` or `/cgv reload`.

## Changing the prefix

The prefix is defined in the lang file, not in `config.yml`:

```yaml
prefix: "&8[&cCommand&fGuard&8]"
```

Color codes (`&a`, `&c`...) and hex colors (`#ff5555`) are supported:

```yaml
prefix: "&8[&6CG&8]"
prefix: "&5&lCommandGuard &8»"
```

After editing run `/cg reload` — the new prefix takes effect immediately for all
messages.

## Placeholders

| Placeholder | Description |
|-------------|-------------|
| `%player%` | Player name |
| `%count%` | Number (command count / players in TabSync) |
| `%groups%` | Active group(s) |
| `%commands%` | List of allowed commands |
| `%server%` | Server name |
| `%sound%` | Sound name (in the error message) |

## Example lang file

```yaml
# Plugin prefix (used in all messages)
prefix: "&8[&cCommand&fGuard&8]"

# Command messages
cmd.no_permission: "&cYou don't have permission to use this command."
cmd.help.header: "&fCommands:"
cmd.help.reload: " &c/cg reload &7— &freload config and refresh tab for all players"
cmd.help.check: " &c/cg check <player> &7— &fshow active tab group for a player"
cmd.help.updategroup: " &c/cg updategroup <player> &7— &fpush updated tab list to a player"
cmd.reload.success: "&aConfig reloaded!"
cmd.reload.tabsync_sent: "&aTabSync sent to &f%count% &aonline players."
cmd.check.not_found: "&cPlayer &f%player% &cnot found."
cmd.check.player: "&fPlayer: &c%player%"
cmd.check.server: "&fServer: &c%server%"
cmd.check.groups: "&fActive group(s): &c%groups%"
cmd.check.commands: "&fAllowed commands &8(&c%count%&8): &f%commands%"
cmd.updategroup.not_found: "&fPlayer &c%player% &fnot found."
cmd.updategroup.success: "&fTab list updated for &c%player%."
cmd.usage.check: "&fUsage: &c/cg check <player>"
cmd.usage.updategroup: "&fUsage: &c/cg updategroup <player>"

# Misc
misc.invalid_sound: "&fSound &c%sound% &fis not valid. Change it in the config!"
```
