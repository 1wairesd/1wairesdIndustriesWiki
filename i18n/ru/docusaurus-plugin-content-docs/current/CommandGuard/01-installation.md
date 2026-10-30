---
id: commandguard-installation
title: Установка
sidebar_position: 2
---

# Установка

## Быстрый старт

1. Скачайте jar для вашей платформы с [Modrinth](https://modrinth.com/plugin/commandguard).
2. Положите файл в папку `plugins/`.
3. Запустите сервер — конфиг и языковые файлы создадутся автоматически.
4. Отредактируйте `plugins/CommandGuard/config.yml` под свои нужды.
5. Примените изменения командой `/cg reload` (Spigot) или `/cgv reload` (Velocity).

:::tip
После изменения конфига перезапускать сервер не нужно — достаточно выполнить
`reload`. Плагин перечитает настройки и обновит tab для всех онлайн-игроков.
:::

## Что появится после первого запуска

```
plugins/CommandGuard/
├── config.yml        # основные настройки
└── lang/
    ├── en_EN.yml     # английский (по умолчанию)
    └── ru_RU.yml     # русский
```

Конфиг на Spigot и на Velocity имеет одинаковое имя — `config.yml`.

## Работа в сети

Если CommandGuard стоит и на прокси Velocity, и на бэкенд-серверах Spigot/Paper,
они могут работать вместе. Для этого установите `is_network: true` в `config.yml`
на обеих сторонах. Подробнее — в разделе [Работа в сети](./04-network.md).
