---
id: commandguard-intro
title: Overview
sidebar_position: 1
sidebar_custom_props:
  icon: FaHome
---

# CommandGuard

**CommandGuard** controls which commands players can see and run on your server.
It works on two levels at once:

- **Command blocking** — a blocked command never runs; instead a configured action
  fires (message, sound, title, console command, potion effect).
- **Tab-complete filtering** — the autocomplete list shows only the commands a
  player is allowed to use. Hidden commands don't appear even as hints.

Runs on a standalone Spigot/Paper server and on a Velocity proxy.

## Platforms

| Platform        | Versions |
|-----------------|----------|
| Paper / Spigot  | 1.16.5+  |
| Velocity        | 3.x      |

Minimum Java version depends on the platform: Spigot — Java 17, Velocity — Java 21.

## Spigot vs Velocity — who handles what

Each version works with its own set of commands:

- **Spigot (backend)** handles the backend server's commands. It blocks any command
  a player types based on the `config.yml` list and filters tab-complete for
  commands registered on that server.
- **Velocity (proxy)** handles **only proxy commands** (those registered on Velocity
  itself). It never touches backend commands — Spigot takes care of those.

With the plugin installed on both sides they don't duplicate work, they complement
each other. See [Cross-Server Setup](./04-network.md) for details.

## Key Features

- **Tab-complete filtering** — players only see commands they're allowed to use.
- **Command blocking** with actions: `message`, `title`, `sound`, `console_command`,
  `give_potion_effect`.
- **Whitelist mode** — allow only specific commands, block everything else.
- **Permission groups** with priority, inheritance (`extends`) and same-priority
  merging.
- **Per-server groups** (`servers`) — different tab lists per backend (proxy only).
- **Cross-server TabSync** — the proxy pushes its allowed proxy commands to the
  backend via plugin messaging.
- **Spy-client protection** — filters raw TAB_COMPLETE packets so hack clients
  can't discover hidden commands.
- **Multi-language** — `en_EN` and `ru_RU` bundled, add your own in
  `plugins/CommandGuard/lang/`.
- **Colon command blocking** — optionally block all `namespace:command` bypasses.

## Quick Navigation

- [Installation](./01-installation.md) — how to install and start the plugin.
- [Configuration](./02-configuration.md) — the `config.yml` reference.
- [Permission Groups](./03-groups.md) — priority, inheritance, per-server.
- [Cross-Server Setup](./04-network.md) — TabSync between proxy and backend.
- [Commands](./05-commands.md) — command list.
- [Permissions](./06-permissions.md) — permission list.
- [Localization](./07-localization.md) — lang files and the prefix.
