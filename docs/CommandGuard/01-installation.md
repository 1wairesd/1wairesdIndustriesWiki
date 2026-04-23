---
id: commandguard-installation
title: Installation
sidebar_position: 2
---

# Installation

## Requirements

- Java 21+
- One of: Paper/Spigot 1.13+, Velocity 3.x, Waterfall

## Steps

1. Download `CommandGuard-2025.04.1.jar`
2. Place it in the `plugins/` folder of your server
3. Start the server — the plugin will generate its config files
4. Edit `plugins/CommandGuard/config.yml` to your needs
5. Run `/cg reload` (backend) or `/cgv reload` (proxy)

## Soft Dependencies

| Dependency | Required | Purpose |
|------------|----------|---------|
| ProtocolLib | Optional | Legacy 1.12- tab-complete support |
| ViaVersion | Optional | Detect legacy clients on modern servers |

:::tip
If you run a network (proxy + backend), install CommandGuard on **both** the proxy and each backend server, then set `is_network: true` on both sides.
:::
