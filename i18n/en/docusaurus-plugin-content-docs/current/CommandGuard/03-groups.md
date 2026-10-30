---
id: commandguard-groups
title: Permission Groups
sidebar_position: 4
---

# Permission Groups

Groups let you show different commands to different players in tab-complete. A
player joins a group via the `commandguard.tab.<groupName>` permission. The
`default` group applies to everyone.

## How it works

1. Groups are defined in `config.yml` under `tab:`.
2. A player is given the `commandguard.tab.<group>` permission (e.g. via LuckPerms
   or any permissions plugin).
3. The plugin picks the group with the **highest priority** the player has.

## Basic example

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

Give a player the `vip` group (LuckPerms example):

```
/lp user <player> permission set commandguard.tab.vip true
```

:::note
`commandguard.tab.<group>` is a plain Bukkit permission. LuckPerms is just an
example here; any permissions system works.
:::

## Priority & merging

- If a player has **one** group — that group is used.
- If a player has **multiple** groups — the one with the **highest priority** wins.
- If two groups share the **same** priority — their command lists are **merged**.

## Inheritance (`extends`)

`extends` adds another group's commands to the current one, without repeating them:

```yaml
tab:
  moderator:
    priority: 3
    extends: vip        # gets all vip commands
    commands:
      - "/ban"
      - "/mute"
```

Inheritance is recursive: `moderator` → `vip` → `default`.

## Per-server groups (`servers`) — proxy only

On the proxy a group can be restricted to specific backend servers via `servers`:

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

This group only applies when the player is on `survival` or `survival2`. If
`servers` is omitted, the group applies on all servers.

## Whitelist mode

By default `commands` in `config.yml` is a blacklist (blocked). Turn on whitelist
mode and it's the opposite: only the listed commands are allowed.

```yaml
use_commands_as_whitelist: true
commands:
  - "/spawn"
  - "/msg"
```

Now only `/spawn` and `/msg` work, everything else is blocked.

## Spy-client protection

CommandGuard filters raw `TAB_COMPLETE` packets, so hack clients can't pull hidden
commands outside normal autocomplete. Hidden commands stay hidden even for modified
clients.
