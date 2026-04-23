---
id: commandguard-intro
title: Introduction
sidebar_position: 1
---

# CommandGuard

**CommandGuard** is a cross-platform Minecraft plugin that lets you control which commands players can execute and see in tab-complete — on Spigot/Paper, Velocity, and Waterfall.

## Platforms

| Platform | Versions | Support |
|----------|----------|---------|
| Paper / Spigot | 1.13+ | ✅ |
| Velocity | 3.1+ | ✅ |
| Waterfall | 1.18+ | ✅ |

**Java:** 17+

## Key Features

- **Tab-complete filtering** — players only see commands they're allowed to use
- **Command blocking** — block commands with custom actions (message, title, sound, kick, potion effect...)
- **Whitelist mode** — flip the list to allow only specific commands, block everything else
- **Permission groups** — create groups with different command lists, assign via LuckPerms
- **Group inheritance** — groups can extend other groups recursively
- **Group merging** — groups with equal priority are merged together
- **Per-server groups** — restrict a group to specific backend servers (proxy only)
- **Cross-server sync (TabSync)** — proxy pushes its allowed commands to backend via plugin messaging
- **Spy-client protection** — blocks tab-complete packet responses for hidden commands
- **Multi-language** — `en_EN`, `ru_RU` bundled, add your own
- **Configurable prefix** — change the plugin prefix in the lang file, no restart needed
- **`/cg check <player>`** — inspect which group and commands a player has
- **`/cg updategroup <player>`** — push updated tab list to a player instantly

## Quick Navigation

- [Installation](./01-installation.md)
- [Configuration](./02-configuration.md)
- [Permission Groups](./03-groups.md)
- [Cross-Server Setup](./04-network.md)
- [Commands](./05-commands.md)
- [Permissions](./06-permissions.md)
- [Localization](./07-localization.md)
