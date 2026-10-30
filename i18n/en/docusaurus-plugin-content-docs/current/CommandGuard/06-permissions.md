---
id: commandguard-permissions
title: Permissions
sidebar_position: 7
---

# Permissions

| Permission | Description |
|------------|-------------|
| `commandguard.admin` | Access to all `/cg` and `/cgv` commands |
| `commandguard.bypass.commands` | Bypass command blocking |
| `commandguard.bypass.tab` | Bypass tab-complete filtering |
| `commandguard.tab.<group>` | Assign a player to a tab group |

:::tip
To give a player the `vip` group from the config, grant the
`commandguard.tab.vip` permission. The `default` group applies to everyone
automatically and needs no permission.
:::

:::note
On Spigot, OP players bypass command blocking by default. Proxy commands are still
shown to them in autocomplete in network mode.
:::
