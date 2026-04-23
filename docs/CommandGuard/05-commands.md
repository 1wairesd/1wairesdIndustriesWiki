---
id: commandguard-commands
title: Commands
sidebar_position: 6
---

# Commands

## Backend (Paper/Spigot) — `/cg`

| Command | Description | Permission |
|---------|-------------|------------|
| `/cg reload` | Reload config, refresh tab for all players | `commandguard.admin` |
| `/cg check <player>` | Show active group and allowed commands for a player | `commandguard.admin` |
| `/cg updategroup <player>` | Refresh tab-complete for a specific player | `commandguard.admin` |

## Proxy (Velocity/Waterfall) — `/cgv`

| Command | Description | Permission |
|---------|-------------|------------|
| `/cgv reload` | Reload config, push TabSync to all online players | `commandguard.admin` |
| `/cgv check <player>` | Show active group, server, and allowed commands | `commandguard.admin` |
| `/cgv updategroup <player>` | Push updated TabSync to a specific player | `commandguard.admin` |

## Example Output of `/cgv check`

```
[CommandGuard] Player: Steve
               Server: lobby
               Active group(s): vip
               Allowed commands (5): /hub, /server, /skin, /home, /spawn
```
