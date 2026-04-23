---
id: commandguard-permissions
title: Permissions
sidebar_position: 7
---

# Permissions

## Admin

| Permission | Description |
|------------|-------------|
| `commandguard.admin` | Access to all `/cg` and `/cgv` commands |

## Bypass

| Permission | Description |
|------------|-------------|
| `commandguard.bypass.commands` | Skip command blocking entirely |
| `commandguard.bypass.tab` | Skip tab-complete filtering entirely |

## Tab Groups

| Permission | Description |
|------------|-------------|
| `commandguard.tab.default` | Applied to all players automatically (no need to assign) |
| `commandguard.tab.<group>` | Assign a custom tab group to a player |

### Assigning a Group via LuckPerms

```bash
/lp user <player> permission set commandguard.tab.vip true
/lp group vip permission set commandguard.tab.vip true
```

:::tip
The `default` group applies to everyone who doesn't have any other group permission. You don't need to assign it manually.
:::
