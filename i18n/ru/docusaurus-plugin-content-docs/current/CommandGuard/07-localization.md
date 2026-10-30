---
id: commandguard-localization
title: Локализация
sidebar_position: 8
---

# Локализация

CommandGuard поддерживает несколько языков. Все сообщения, включая префикс плагина,
задаются в языковых файлах.

## Выбор языка

В `config.yml` укажите имя языкового файла без расширения:

```yaml
lang: en_EN
```

В комплекте: `en_EN` (английский) и `ru_RU` (русский).

## Расположение языковых файлов

При первом запуске плагин распаковывает языковые файлы на диск:

```
plugins/CommandGuard/lang/en_EN.yml
plugins/CommandGuard/lang/ru_RU.yml
```

Их можно свободно редактировать — при перезапуске они не перезаписываются.

## Добавление своего языка

1. Создайте `plugins/CommandGuard/lang/uk_UA.yml` (или любой код языка).
2. Скопируйте содержимое `en_EN.yml` как основу.
3. Переведите все значения.
4. Укажите `lang: uk_UA` в `config.yml`.
5. Выполните `/cg reload` или `/cgv reload`.

## Изменение префикса

Префикс задаётся в языковом файле, а не в `config.yml`:

```yaml
prefix: "&8[&cCommand&fGuard&8]"
```

Поддерживаются цветовые коды (`&a`, `&c`...) и hex-цвета (`#ff5555`):

```yaml
prefix: "&8[&6CG&8]"
prefix: "&5&lCommandGuard &8»"
```

После изменения выполните `/cg reload` — новый префикс сразу применится ко всем
сообщениям.

## Плейсхолдеры

| Плейсхолдер | Описание |
|-------------|----------|
| `%player%` | Имя игрока |
| `%count%` | Число (количество команд / игроков в TabSync) |
| `%groups%` | Активная группа (группы) |
| `%commands%` | Список разрешённых команд |
| `%server%` | Название сервера |
| `%sound%` | Название звука (в сообщении об ошибке) |

## Пример языкового файла

```yaml
# Префикс плагина (во всех сообщениях)
prefix: "&8[&cCommand&fGuard&8]"

# Сообщения команд
cmd.no_permission: "&cYou don't have permission to use this command."
cmd.help.header: "&fCommands:"
cmd.help.reload: " &c/cg reload &7— &freload config and refresh tab for all players"
cmd.help.check: " &c/cg check <player> &7— &fshow active tab group for a player"
cmd.help.updategroup: " &c/cg updategroup <player> &7— &fpush updated tab list to a player"
cmd.reload.success: "&aConfig reloaded!"
cmd.reload.tabsync_sent: "&aTabSync sent to &f%count% &aonline players."
cmd.check.not_found: "&cPlayer &f%player% &cnot found."
cmd.check.player: "&fPlayer: &c%player%"
cmd.check.server: "&fServer: &c%server%"
cmd.check.groups: "&fActive group(s): &c%groups%"
cmd.check.commands: "&fAllowed commands &8(&c%count%&8): &f%commands%"
cmd.updategroup.not_found: "&fPlayer &c%player% &fnot found."
cmd.updategroup.success: "&fTab list updated for &c%player%."
cmd.usage.check: "&fUsage: &c/cg check <player>"
cmd.usage.updategroup: "&fUsage: &c/cg updategroup <player>"

# Прочее
misc.invalid_sound: "&fSound &c%sound% &fis not valid. Change it in the config!"
```
