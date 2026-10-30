---
id: commandguard-installation
title: Встановлення
sidebar_position: 2
---

# Встановлення

## Швидкий старт

1. Завантажте jar для вашої платформи з [Modrinth](https://modrinth.com/plugin/commandguard).
2. Покладіть файл у теку `plugins/`.
3. Запустіть сервер — конфіг і мовні файли створяться автоматично.
4. Відредагуйте `plugins/CommandGuard/config.yml` під свої потреби.
5. Застосуйте зміни командою `/cg reload` (Spigot) або `/cgv reload` (Velocity).

:::tip
Після будь-якої зміни конфігу не потрібно перезапускати сервер — достатньо
виконати `reload`. Плагін перечитає налаштування й оновить tab для всіх онлайн-гравців.
:::

## Що з'явиться після першого запуску

```
plugins/CommandGuard/
├── config.yml        # основні налаштування
└── lang/
    ├── en_EN.yml     # англійська (за замовчуванням)
    └── ru_RU.yml     # російська
```

Конфіг на Spigot і на Velocity має однакову назву — `config.yml`.

## Робота на мережі

Якщо CommandGuard стоїть і на проксі Velocity, і на бекенд-серверах Spigot/Paper,
вони можуть працювати разом. Для цього у `config.yml` увімкніть `is_network: true`
на обох сторонах. Докладніше — у розділі [Робота в мережі](./04-network.md).
