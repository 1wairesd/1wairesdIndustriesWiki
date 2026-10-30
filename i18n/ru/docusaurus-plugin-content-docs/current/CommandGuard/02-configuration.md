---
id: commandguard-configuration
title: Конфигурация
sidebar_position: 3
---

# Конфигурация

Ниже разобран `config.yml`. Часть ключей общая для Spigot и Velocity, часть —
только для одной платформы. Это отмечено отдельно.

## Общие ключи

### `lang`

Языковой файл из папки `lang/`. В комплекте `en_EN` и `ru_RU`. Чтобы добавить свой
язык, скопируйте один из файлов, переведите и укажите его имя здесь.

```yaml
lang: en_EN
```

### `tab`

Группы tab-complete. Игрок получает группу через право
`commandguard.tab.<имяГруппы>`. Группа `default` действует на всех.

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

Подробнее о приоритетах и наследовании — в разделе [Группы прав](./03-groups.md).

### `blocked_command_default_actions`

Действия, выполняемые, когда игрок вызывает заблокированную команду и для неё нет
отдельного правила.

```yaml
blocked_command_default_actions:
  - "message: &8[&b&lCG&8] &cУ вас нет прав на эту команду."
  - "playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1"
  - "title: 20;40;20;&cЧто вы делаете?;&7Не используйте эту команду!"
```

Доступные типы действий: `message`, `title`, `playsound`, `console_command`,
`give_potion_effect`.

### `update_notify`

Показывать уведомления об обновлениях. На Spigot — OP-игрокам при входе, на
Velocity — в консоли.

```yaml
update_notify: true
```

### `use_commands_as_whitelist`

Если `true`, список `commands` становится **белым списком** (разрешённые), а не
чёрным (заблокированные).

```yaml
use_commands_as_whitelist: false
```

### `commands`

Список команд для блокировки (или разрешения, если включён whitelist).

```yaml
commands:
  - "/ver"
  - "/version"
  - "/plugins"
  - "/pl"
```

### `block_colon_commands`

Блокировать любую команду, содержащую `:` (предотвращение обхода через
`namespace:command`).

```yaml
block_colon_commands: false
```

### `custom_commands_actions`

Отдельные действия для конкретных команд. На Spigot команды отсюда должны также
присутствовать в списке `commands`.

```yaml
custom_commands_actions:
  example1:
    commands:
      - "/ver"
      - "/version"
    actions:
      - "console_command: kick %player% Вам нельзя видеть версию сервера!"
```

## TabSync (сеть)

Эти ключи есть в обоих конфигах, но ведут себя по-разному в зависимости от
платформы.

### `is_network`

- **Velocity:** `true` — прокси отправляет разрешённый список прокси-команд на
  бэкенд-серверы (TabSync) при входе игрока.
- **Spigot:** `true` — сервер принимает этот список от прокси и **объединяет** его
  со своим локальным tab-списком, чтобы прокси-команды были видны в автодополнении.

```yaml
is_network: false
```

### `tab_sync_delay`

Зарезервированный ключ (значение в миллисекундах). Присутствует в конфиге, но пока
не влияет на работу: TabSync отправляется и применяется без этой задержки. Оставлен
для совместимости конфигов.

```yaml
tab_sync_delay: 500
```

Подробнее о совместной работе прокси и бэкенда — в разделе
[Работа в сети](./04-network.md).
