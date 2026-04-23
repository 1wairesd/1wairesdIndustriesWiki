---
id: commandguard-configuration
title: Configuration
sidebar_position: 3
---

# Configuration

## config.yml (Backend — Paper/Spigot)

```yaml
# Language: en_EN or ru_RU (files in plugins/CommandGuard/lang/)
lang: en_EN

# Tab-complete groups
tab:
  default:
    priority: 0
    commands: []
  vip:
    priority: 1
    extends: default   # inherits commands from 'default'
    commands:
      - "/home"

# Actions when a blocked command is used
blocked_command_default_actions:
  - "message: &cYou can't use that command."
  - "playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1"

# true = commands list is a whitelist (only listed commands are allowed)
use_commands_as_whitelist: false

# Set true if ECB is also on the proxy — enables TabSync
is_network: false

# Enable update notifications for OP players on join
update_notify: true

# Enable legacy 1.12- support (requires ProtocolLib)
legacy_support: false

# Block all commands containing ":"
block_colon_commands: false

# Commands to block (or allow, if use_commands_as_whitelist: true)
commands:
  - "/plugins"
  - "/pl"
  - "/version"
  - "/ver"

# Custom actions per command group
custom_commands_actions:
  example1:
    commands:
      - "/version"
    actions:
      - "console_command: kick %player% No peeking!"
```

## velocity-config.yml / bungee-config.yml (Proxy)

Same structure as backend config, with two extra options:

```yaml
lang: en_EN

# true = push allowed proxy commands to backend via plugin messaging
is_network: false

# Delay (ms) before sending TabSync after player connects (default 500, usually fine)
tab_sync_delay: 500
```

## Available Actions

| Action | Format | Example |
|--------|--------|---------|
| `message` | `message: <text>` | `message: &cNo permission!` |
| `title` | `title: fadeIn;stay;fadeOut;title;subtitle` | `title: 20;40;20;&cBlocked;&7Don't do that` |
| `playsound` | `playsound: SOUND;volume;pitch` | `playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1` |
| `console_command` | `console_command: <cmd>` | `console_command: kick %player% Bye` |
| `give_potion_effect` | `give_potion_effect: TYPE;duration;level` | `give_potion_effect: BLINDNESS;100;1` |
