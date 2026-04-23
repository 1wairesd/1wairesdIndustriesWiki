---
id: commandguard-groups
title: Permission Groups
sidebar_position: 4
---

# Permission Groups

Groups let you show different commands to different players in tab-complete.

## How It Works

1. Define groups in `config.yml` under `tab:`
2. Assign the permission `commandguard.tab.<group>` to players via LuckPerms
3. The plugin picks the group with the **highest priority** the player has

## Example

```yaml
tab:
  default:
    priority: 0
    commands:
      - "/spawn"
      - "/help"

  vip:
    priority: 1
    extends: default      # inherits /spawn and /help
    commands:
      - "/home"
      - "/tpa"

  admin:
    priority: 2
    extends: vip
    commands:
      - "/gamemode"
      - "/tp"
```

Give a player the `vip` group:
```
/lp user <player> permission set commandguard.tab.vip true
```

## Priority & Merging

- If a player has **one** group → that group is used
- If a player has **multiple** groups → the one with the **highest priority** wins
- If two groups have the **same priority** → their command lists are **merged**

## Per-Server Groups (Proxy only)

Restrict a group to specific backend servers:

```yaml
tab:
  survival-admin:
    priority: 2
    servers:
      - survival
      - survival2
    commands:
      - "/gamemode"
```

This group only applies when the player is on `survival` or `survival2`.

## Group Inheritance

Use `extends` to inherit commands from another group without repeating them:

```yaml
tab:
  moderator:
    priority: 3
    extends: vip        # gets all vip commands
    commands:
      - "/ban"
      - "/mute"
```

Inheritance is recursive — `moderator` → `vip` → `default`.
