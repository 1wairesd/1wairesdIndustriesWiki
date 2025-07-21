---
sidebar_position: 1
id: dbmdonatecase-main
title: DBMDonateCase
---

import Admonition from '@theme/Admonition';

<Admonition type="danger" title="Внимание!">
Для работы данного аддона <b>обязательно</b> требуется установленный и настроенный плагин <a href="https://modrinth.com/plugin/donatecase" target="_blank">DonateCase</a>.<br/>
<b>Без него аддон не запустится и не будет функционировать!</b>
</Admonition>

## Команды DBMDonateCase

| Команда | Описание |
|---------|----------|
| `/dcstats <player>` | Показывает статистику по ключам и открытиям кейсов для указанного игрока. Выводит количество ключей и сколько кейсов какого типа открыто. |
| `/dccases` | Показывает список всех доступных кейсов DonateCase на сервере. |
| `/dctopcases` | Показывает топ-10 кейсов по количеству открытий среди всех игроков. |
| `/dctopplayers <case>` | Показывает топ-10 игроков по количеству открытий выбранного кейса. |
| `/dctopplayersall` | Показывает топ-10 игроков по общему количеству открытых кейсов всех типов. |
| `/dclastdrops` | Показывает последние 10 открытий кейсов на сервере (кто, что, когда). |
| `/dchistory <player>` | Показывает последние 10 открытий кейсов игроком (что и когда выпало, какой кейс). |
| `/dchelp` | Показывает список всех доступных команд аддона и краткое описание их назначения. |

**Примеры использования:**
- `/dcstats 1wairesd` — покажет статистику игрока 1wairesd
- `/dctopplayers EpicCase` — топ-10 игроков по открытиям кейса EpicCase
- `/dchistory 1wairesd` — последние 10 открытий кейсов игроком 1wairesd

---

## Конфигурация DBMDonateCase

Вся настройка аддона производится через файл `config.yml` в папке аддона. Основной раздел — `webhook_triggers`, который позволяет настраивать различные события для отправки webhook-сообщений в Discord.

<details>
<summary>plugins/DBMDonateCase/config.yml</summary>

```yaml
webhook_triggers:
  - type: case_open_count
    case: "*" # * — для всех кейсов, либо название конкретного кейса
    count: 100
    webhook: "DBMDonateCase_open"
    message: "Игрок {player} открыл {count} кейсов {case}!"
    enabled: true

  - type: drop_obtained
    case: "*"
    drop: "Legendary Sword"
    webhook: "DBMDonateCase_open"
    message: "Игрок {player} выбил {drop} из кейса {case}!"
    enabled: true

  - type: first_open
    case: "EpicCase"
    webhook: "DBMDonateCase_open"
    message: "Игрок {player} впервые открыл кейс {case}!"
    enabled: true

  - type: open_in_period
    case: "*"
    period: "day"
    count: 10
    webhook: "DBMDonateCase_open"
    message: "Игрок {player} открыл 10 кейсов {case} за день!"
    enabled: true

  - type: rare_drop
    case: "*"
    chance_below: 1
    webhook: "DBMDonateCase_open"
    message: "Игрок {player} выбил ОЧЕНЬ редкий дроп {drop} ({chance}%) из кейса {case}!"
    enabled: true

  - type: player_open
    case: "*"
    player: "1wairesd"
    webhook: "DBMDonateCase_open"
    message: "VIP игрок {player} открыл кейс {case}!"
    enabled: true

  - type: global_open_count
    case: "*"
    count: 11
    webhook: "DBMDonateCase_open"
    message: "На сервере открыли уже 10 000 кейсов {case}!"
    enabled: true
```

</details>

<details>
<summary>plugins/DBMDonateCase/messages.yml</summary>

```yaml

no_cases: "Нет доступных кейсов."
no_case_data: "Нет данных по открытиям кейсов."
no_case_data_specific: "Нет данных по открытиям кейса %caseType%."
no_player_data: "У игрока %player% нет ключей и не открыто кейсов."
no_case_type: "Укажите тип кейса!"
no_player: "Укажите ник игрока!"
top_cases_title: "Топ 10 кейсов по открытиям"
top_players_title: "Топ 10 игроков по кейсу %caseType%"
top_players_all_title: "Топ 10 игроков по всем кейсам"
stats_title: "Статистика игрока %player%"
keys_section: "Ключи:"
opened_section: "Открыто кейсов:"
top_entry: "%index%. %name% (открытий: %count%)"
cases_title: "Список кейсов"
dchistory_title: "История открытий игрока %player%"
dchistory_no_data: "Нет открытий кейсов у этого игрока."
dclastdrops_title: "Последние 10 открытий кейсов"
dclastdrops_no_data: "Нет открытий кейсов на сервере."
dchelp_title: "DBMDonateCase — команды"
dchelp_list: |
**Доступные команды DBMDonateCase:**
/dchelp — Помощь по командам
/dcstats <player> — Показать количество ключей DonateCase у игрока
/dccases — Список всех кейсов DonateCase
/dctopcases — Топ 10 кейсов по количеству открытий
/dctopplayers <case> — Топ 10 игроков по открытию выбранного кейса
/dctopplayersall — Топ 10 игроков по всем открытым кейсам
/dclastdrops — Последние 10 открытий кейсов на сервере (кто, что, когда)
/dchistory <player> — Последние 10 открытий кейсов игроком (что и когда выпало, какой кейс)
dcstats_no_player: "Не указан игрок."
dcstats_no_player_data: "Нет данных по игроку %player%."
dcstats_title: "Статистика игрока %player%"
dcstats_keys_section: "Ключи:"
dcstats_opened_section: "Открыто кейсов:"
dcstats_no_case_data: "Нет данных по кейсам."
dcstats_no_case_data_specific: "Нет данных по кейсу %caseType%."
dcstats_top_entry: "%index%. %name% (открытий: %count%)"
dcstats_top_cases_title: "Топ 10 кейсов по количеству открытий"
dcstats_top_players_title: "Топ 10 игроков по открытию кейса %caseType%"
dcstats_top_players_all_title: "Топ 10 игроков по всем открытым кейсам"
```
</details>
  
### Подробное описание типов триггеров

#### type: `case_open_count`
**Описание:** Срабатывает, когда игрок открывает определённое количество кейсов.
- **case** — название кейса или `*` для всех кейсов
- **count** — число открытий, при достижении которого сработает триггер
- **Пример:**
  ```yaml
  - type: case_open_count
    case: "EpicCase"
    count: 50
    ...
  ```
  Сработает, когда игрок откроет 50 кейсов EpicCase.

#### type: `drop_obtained`
**Описание:** Срабатывает, когда игрок получает определённый дроп из кейса.
- **case** — название кейса или `*`
- **drop** — название предмета
- **Пример:**
  ```yaml
  - type: drop_obtained
    case: "*"
    drop: "Legendary Sword"
    ...
  ```
  Сработает, когда игрок получит Legendary Sword из любого кейса.

#### type: `first_open`
**Описание:** Срабатывает при первом открытии кейса игроком.
- **case** — название кейса
- **Пример:**
  ```yaml
  - type: first_open
    case: "EpicCase"
    ...
  ```
  Сработает, когда игрок впервые откроет кейс EpicCase.

#### type: `open_in_period`
**Описание:** Срабатывает, если игрок открыл определённое количество кейсов за указанный период (например, за день).
- **case** — название кейса или `*`
- **period** — период времени (`day`, `hour`, `month`)
- **count** — количество открытий за период
- **Пример:**
  ```yaml
  - type: open_in_period
    case: "*"
    period: "day"
    count: 10
    ...
  ```
  Сработает, если игрок откроет 10 кейсов любого типа за день.

#### type: `rare_drop`
**Описание:** Срабатывает, если игрок получает дроп с шансом ниже указанного значения.
- **case** — название кейса или `*`
- **chance_below** — шанс выпадения (в процентах)
- **Пример:**
  ```yaml
  - type: rare_drop
    case: "*"
    chance_below: 1
    ...
  ```
  Сработает, если игрок получит дроп с шансом ниже 1%.

#### type: `player_open`
**Описание:** Срабатывает, если указанный игрок открыл кейс.
- **case** — название кейса или `*`
- **player** — ник игрока
- **Пример:**
  ```yaml
  - type: player_open
    case: "*"
    player: "1wairesd"
    ...
  ```
  Сработает, если игрок с ником 1wairesd откроет любой кейс.

#### type: `global_open_count`
**Описание:** Срабатывает, когда на сервере открыто определённое количество кейсов (всеми игроками).
- **case** — название кейса или `*`
- **count** — общее количество открытий
- **Пример:**
  ```yaml
  - type: global_open_count
    case: "*"
    count: 10000
    ...
  ```
  Сработает, когда на сервере будет открыто 10 000 кейсов любого типа.

### Описание общих параметров
- **webhook** — название webhook для отправки
- **message** — сообщение с поддержкой плейсхолдеров: `{player}`, `{case}`, `{count}`, `{drop}`, `{chance}`
- **enabled** — включен ли триггер (true/false)

### Особенности работы open_in_period
Триггер `open_in_period` позволяет отслеживать, сколько раз игрок открыл определённый кейс за указанный период (например, за день). **Важно:**

- Для корректной работы этого триггера используется история открытий кейсов, которая хранится в основной настройке DonateCase.
- Параметр, отвечающий за размер хранимой истории — `history-data-size`. Он настраивается в файле `plugins/DonateCase/cases/<case>/settings.yml` соответствующего кейса в DonateCase, например:

```yaml
history-data-size: 10000 # Сколько последних открытий хранить (0 — отключить)
```

- Если размер истории слишком мал, триггер может не сработать корректно, так как не все открытия будут учтены.
- Рекомендуется устанавливать `history-data-size` с запасом, чтобы покрыть нужный период и количество открытий.

#### Пример:
Если вы хотите отслеживать 10 открытий за день, а на сервере открывают кейсы очень часто, установите `history-data-size` на достаточно большое значение (например, 10000), чтобы история не обрезалась раньше времени.

---

**Внимание:**
- Параметр `open_in_period` напрямую зависит от настройки `history-data-size` в DonateCase. Если история будет слишком короткой, события могут не фиксироваться.
- Все остальные параметры триггеров стандартны и не требуют дополнительных зависимостей.

---

Для получения дополнительной информации по настройке кейсов и истории открытий смотрите [документацию](https://wiki.jodex.xyz/ru/docs/2.0.0/DonateCase/donatecase-main) основного плагина [DonateCase](https://modrinth.com/plugin/donatecase).
