---
id: commandguard-installation
title: Installation
sidebar_position: 2
---

# Installation

## Quick start

1. Download the jar for your platform from [Modrinth](https://modrinth.com/plugin/commandguard).
2. Drop it into the `plugins/` folder.
3. Start the server — the config and lang files are generated automatically.
4. Edit `plugins/CommandGuard/config.yml` to fit your needs.
5. Apply the changes with `/cg reload` (Spigot) or `/cgv reload` (Velocity).

:::tip
You don't need to restart the server after a config change — just run `reload`.
The plugin re-reads the settings and refreshes tab for all online players.
:::

## What appears on first start

```
plugins/CommandGuard/
├── config.yml        # main settings
└── lang/
    ├── en_EN.yml     # English (default)
    └── ru_RU.yml     # Russian
```

The config file has the same name — `config.yml` — on both Spigot and Velocity.

## Running on a network

If CommandGuard is installed on both the Velocity proxy and the Spigot/Paper
backends, they can work together. Set `is_network: true` in `config.yml` on both
sides. See [Cross-Server Setup](./04-network.md) for details.
