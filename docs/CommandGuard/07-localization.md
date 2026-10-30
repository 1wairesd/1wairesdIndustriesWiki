---
id: commandguard-localization
title: Локалізація
sidebar_position: 8
---

# Локалізація

CommandGuard підтримує кілька мов. Усі повідомлення, зокрема префікс плагіна,
задаються в мовних файлах.

## Вибір мови

У `config.yml` вкажіть ім'я мовного файлу без розширення:

```yaml
lang: en_EN
```

У комплекті: `en_EN` (англійська) і `ru_RU` (російська).

## Розташування мовних файлів

При першому запуску плагін розпаковує мовні файли на диск:

```
plugins/CommandGuard/lang/en_EN.yml
plugins/CommandGuard/lang/ru_RU.yml
```

Їх можна вільно редагувати — при перезапуску вони не перезаписуються.

## Додавання своєї мови

1. Створіть `plugins/CommandGuard/lang/uk_UA.yml` (або будь-який код мови).
2. Скопіюйте вміст `en_EN.yml` як основу.
3. Перекладіть усі значення.
4. Вкажіть `lang: uk_UA` у `config.yml`.
5. Виконайте `/cg reload` або `/cgv reload`.

## Зміна префікса

Префікс задається в мовному файлі, а не в `config.yml`:

```yaml
prefix: "&8[&cCommand&fGuard&8]"
```

Підтримуються кольорові коди (`&a`, `&c`...) та hex-кольори (`#ff5555`):

```yaml
prefix: "&8[&6CG&8]"
prefix: "&5&lCommandGuard &8»"
```

Після зміни виконайте `/cg reload` — новий префікс одразу застосується до всіх
повідомлень.

## Плейсхолдери

| Плейсхолдер | Опис |
|-------------|------|
| `%player%` | Ім'я гравця |
| `%count%` | Число (кількість команд / гравців у TabSync) |
| `%groups%` | Активна група (групи) |
| `%commands%` | Список дозволених команд |
| `%server%` | Назва сервера |
| `%sound%` | Назва звуку (у повідомленні про помилку) |

## Приклад мовного файлу

```yaml
# Префікс плагіна (у всіх повідомленнях)
prefix: "&8[&cCommand&fGuard&8]"

# Повідомлення команд
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

# Інше
misc.invalid_sound: "&fSound &c%sound% &fis not valid. Change it in the config!"
```
