---
id: commandguard-commands
title: Commands
sidebar_position: 6
---

# Commands

All commands require the `commandguard.admin` permission.

## Spigot

| Command | Description |
|---------|-------------|
| `/cg reload` | Reload the config and refresh tab for all players |
| `/cg check <player>` | Show a player's active tab group and allowed commands |
| `/cg updategroup <player>` | Push an updated tab list to a player |

Command alias: `/cg` (full name — `/commandguard`).

## Velocity

| Command | Description |
|---------|-------------|
| `/cgv reload` | Reload the config and push TabSync to all online players |
| `/cgv check <player>` | Show a player's active tab group and allowed commands |
| `/cgv updategroup <player>` | Push TabSync to a player |

:::tip
`/cg check` is handy for diagnostics: it shows which group and how many commands a
specific player currently sees.
:::
