---
id: commandguard-permissions
title: Права
sidebar_position: 7
---

# Права

| Право | Опис |
|-------|------|
| `commandguard.admin` | Доступ до всіх команд `/cg` та `/cgv` |
| `commandguard.bypass.commands` | Обхід блокування команд |
| `commandguard.bypass.tab` | Обхід фільтрації tab-complete |
| `commandguard.tab.<група>` | Призначити гравцю tab-групу |

:::tip
Щоб видати гравцю групу `vip` з конфігу, дайте йому право
`commandguard.tab.vip`. Група `default` діє на всіх автоматично й не потребує права.
:::

:::note
На Spigot гравці з правами OP обходять блокування команд за замовчуванням.
Для них проксі-команди в мережевому режимі все одно показуються в автодоповненні.
:::
