---
id: commandguard-localization
title: Localization
sidebar_position: 8
---

# Localization

CommandGuard supports multiple languages. All messages, including the plugin prefix, are defined in lang files.

## Selecting a Language

In `config.yml` (backend) or `velocity-config.yml` / `bungee-config.yml` (proxy):

```yaml
lang: en_EN
```

Bundled languages: `en_EN`, `ru_RU`.

## Lang File Location

On first start the plugin extracts the bundled lang files to:

```
plugins/CommandGuard/lang/en_EN.yml
plugins/CommandGuard/lang/ru_RU.yml
```

You can edit them freely — they won't be overwritten on restart.

## Adding a Custom Language

1. Create `plugins/CommandGuard/lang/uk_UA.yml` (or any code you want)
2. Copy the contents of `en_EN.yml` as a base
3. Translate all values
4. Set `lang: uk_UA` in config
5. Run `/cg reload` or `/cgv reload`

## Changing the Prefix

The prefix is defined inside the lang file, not in `config.yml`:

```yaml
# en_EN.yml
prefix: "&8[&cCommand&fGuard&8]"
```

Change it to anything you like — color codes (`&a`, `&c`...) and hex colors (`#ff5555`) are supported:

```yaml
prefix: "&8[&6CG&8]"
prefix: "#ff5555[CommandGuard]"
prefix: "&5&lCommandGuard &8»"
```

After editing run `/cg reload` — the new prefix takes effect immediately for all messages.

## Available Placeholders

| Placeholder | Description |
|-------------|-------------|
| `%prefix%` | Plugin prefix (auto-available in all messages) |
| `%player%` | Player name |
| `%version%` | Plugin version |
| `%count%` | Number (used in tabsync sent, command count) |
| `%groups%` | Active group name(s) |
| `%commands%` | List of allowed commands |
| `%server%` | Server name |
| `%sound%` | Sound name (error message) |

## Full File Reference

```yaml
# Plugin prefix
prefix: "&8[&cCommand&fGuard&8]"

# Commands
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

# Update notifications
update.available: "&fNew version available. &8(&c%version%&8)"
update.download: "&fDownload: &chttps://modrinth.com/plugin/commandguard"

# Console
console.enabled: "&eEnabled! &fVersion: &c%version%"
console.disabled: "&eDisabled! &fVersion: &c%version%"
console.update_available: "&fNew version: &c%version%"
console.update_download: "&fDownload: &chttps://modrinth.com/plugin/commandguard"
console.update_error: "&cError while checking for updates."

# Misc
misc.invalid_sound: "&fSound &c%sound% &fis not valid. Change it in the config!"
```
