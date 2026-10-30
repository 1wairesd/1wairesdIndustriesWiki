---
id: commandguard-configuration
title: Конфігурація
sidebar_position: 3
---

# Конфігурація

Нижче розібрано `config.yml`. Частина ключів спільна для Spigot і Velocity,
частина — лише для однієї платформи. Це позначено окремо.

## Загальні ключі

### `lang`

Мовний файл із теки `lang/`. У комплекті `en_EN` і `ru_RU`. Щоб додати свою мову,
скопіюйте один із файлів, перекладіть і вкажіть його ім'я тут.

```yaml
lang: en_EN
```

### `tab`

Групи tab-complete. Гравець отримує групу через право
`commandguard.tab.<назваГрупи>`. Група `default` діє на всіх.

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

Детально про пріоритети та наслідування — у розділі
[Групи прав](./03-groups.md).

### `blocked_command_default_actions`

Дії, що виконуються, коли гравець викликає заблоковану команду і для неї немає
окремого правила.

```yaml
blocked_command_default_actions:
  - "message: &8[&b&lCG&8] &cУ вас немає прав на цю команду."
  - "playsound: BLOCK_NOTE_BLOCK_PLING;10;0.1"
  - "title: 20;40;20;&cЩо ви робите?;&7Не використовуйте цю команду!"
```

Доступні типи дій: `message`, `title`, `playsound`, `console_command`,
`give_potion_effect`.

### `update_notify`

Показувати сповіщення про оновлення. На Spigot — OP-гравцям при вході, на
Velocity — у консолі.

```yaml
update_notify: true
```

### `use_commands_as_whitelist`

Якщо `true`, список `commands` стає **білим списком** (дозволені), а не чорним
(заблоковані).

```yaml
use_commands_as_whitelist: false
```

### `commands`

Список команд для блокування (або дозволу, якщо увімкнено whitelist).

```yaml
commands:
  - "/ver"
  - "/version"
  - "/plugins"
  - "/pl"
```

### `block_colon_commands`

Блокувати будь-яку команду, що містить `:` (запобігання обходу через
`namespace:command`).

```yaml
block_colon_commands: false
```

### `custom_commands_actions`

Окремі дії для конкретних команд. На Spigot команди звідси мають також бути
присутні в списку `commands`.

```yaml
custom_commands_actions:
  example1:
    commands:
      - "/ver"
      - "/version"
    actions:
      - "console_command: kick %player% Вам не можна бачити версію сервера!"
```

## TabSync (мережа)

Ці ключі є в обох конфігах, але поводяться по-різному залежно від платформи.

### `is_network`

- **Velocity:** `true` — проксі надсилає дозволений список проксі-команд на
  бекенд-сервери (TabSync) при вході гравця.
- **Spigot:** `true` — сервер приймає цей список від проксі й **об'єднує** його зі
  своїм локальним tab-списком, щоб проксі-команди було видно в автодоповненні.

```yaml
is_network: false
```

### `tab_sync_delay`

Зарезервований ключ (значення в мілісекундах). Присутній у конфізі, але наразі
не впливає на роботу: TabSync надсилається й застосовується без цієї затримки.
Залишений для сумісності конфігів.

```yaml
tab_sync_delay: 500
```

Докладніше про сумісну роботу проксі та бекенда — у розділі
[Робота в мережі](./04-network.md).
