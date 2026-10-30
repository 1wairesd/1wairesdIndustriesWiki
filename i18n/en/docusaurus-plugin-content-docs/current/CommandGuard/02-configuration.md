---
id: commandguard-configuration
title: Configuration
sidebar_position: 3
---

# Configuration

Below is the `config.yml` reference. Some keys are shared between Spigot and
Velocity, some apply to a single platform. This is noted where relevant.

## Common keys

### `lang`

The lang file from the `lang/` folder. `en_EN` and `ru_RU` are bundled. To add your
own language, copy one of the files, translate it and set its name here.

```yaml
lang: en_EN
```

### `tab`

Tab-complete groups. A player gets a group via the `commandguard.tab.<groupName>`
permission. The `default` group applies to everyone.

```yaml
tab:
  default:
    priority: 0
    commands: []
  vip:
    priority: 1
    extends: default
    commands:
      - "/home"
```

See [Permission Groups](./03-groups.md) for priority and inheritance details.

### `blocked_command_default_actions`

Actions run when a player uses a blocked command and no specific rule matches it.

```yaml
blocked_command_default_actions:
  - "message: &8[&b&lCG&8] &cYou don't have permission to use that command."
  - "playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1"
  - "title: 20;40;20;&cWhat are you doing?;&7Don't use that command!"
```

Available action types: `message`, `title`, `playsound`, `console_command`,
`give_potion_effect`.

### `update_notify`

Show update notifications. On Spigot — to OP players on join; on Velocity — in the
console.

```yaml
update_notify: true
```

### `use_commands_as_whitelist`

When `true`, the `commands` list becomes a **whitelist** (allowed) instead of a
blacklist (blocked).

```yaml
use_commands_as_whitelist: false
```

### `commands`

List of commands to block (or allow, if whitelist mode is on).

```yaml
commands:
  - "/ver"
  - "/version"
  - "/plugins"
  - "/pl"
```

### `block_colon_commands`

Block any command containing `:` (prevents the `namespace:command` bypass).

```yaml
block_colon_commands: false
```

### `custom_commands_actions`

Per-command action overrides. On Spigot, commands listed here must also be present
in the `commands` list.

```yaml
custom_commands_actions:
  example1:
    commands:
      - "/ver"
      - "/version"
    actions:
      - "console_command: kick %player% You can't see the server version!"
```

## TabSync (network)

These keys exist in both configs but behave differently per platform.

### `is_network`

- **Velocity:** `true` — the proxy pushes its allowed proxy-command list to backend
  servers (TabSync) when a player joins.
- **Spigot:** `true` — the server receives that list from the proxy and **merges**
  it with its local tab list so proxy commands show up in autocomplete.

```yaml
is_network: false
```

### `tab_sync_delay`

Reserved key (value in milliseconds). Present in the config but currently has no
effect: TabSync is sent and applied without this delay. Kept for config
compatibility.

```yaml
tab_sync_delay: 500
```

See [Cross-Server Setup](./04-network.md) for how the proxy and backend work together.
