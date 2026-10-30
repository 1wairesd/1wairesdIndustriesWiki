---
id: commandguard-permissions
title: Права
sidebar_position: 7
---

# Права

| Право | Описание |
|-------|----------|
| `commandguard.admin` | Доступ ко всем командам `/cg` и `/cgv` |
| `commandguard.bypass.commands` | Обход блокировки команд |
| `commandguard.bypass.tab` | Обход фильтрации tab-complete |
| `commandguard.tab.<группа>` | Назначить игроку tab-группу |

:::tip
Чтобы выдать игроку группу `vip` из конфига, дайте ему право
`commandguard.tab.vip`. Группа `default` действует на всех автоматически и не
требует права.
:::

:::note
На Spigot игроки с правами OP обходят блокировку команд по умолчанию. Прокси-команды
в сетевом режиме им всё равно показываются в автодополнении.
:::
