---
sidebar_position: 1
id: dscordbmv-main-commands
title: commands.yml
---

# Документация по функциям команд

В этом разделе описаны все доступные функции (действия, условия, опции) для настройки команд в конфиге DiscordBM.

---

## Основные поля команды

- **name** — имя команды (обязательное).
- **description** — описание команды.
- **context** — где доступна команда: `server`, `dm` или `both`.
- **ephemeral** — делать ли ответы эфемерными (по умолчанию: false).
- **options** — параметры, которые пользователь может указать при вызове команды.
- **conditions** — условия, при которых команда или действие выполняется.
- **actions** — действия, которые выполняются при успешном выполнении команды.
- **fail-actions** — действия, которые выполняются при ошибке или невыполнении условий.

---

## Опции (options)

Позволяют добавить параметры для команды.

- **name** — имя опции.
- **type** — тип (`STRING`, `USER`, `CHANNEL`, `INTEGER`, `BOOLEAN`, `ROLE`, `MENTIONABLE`).
- **description** — описание опции.
- **required** — обязательна ли опция (`true`/`false`).

**Пример:**
```yaml
options:
  - name: "target"
    type: "STRING"
    description: "Кого поприветствовать"
    required: true
```

---

## Условия (conditions)

Позволяют ограничить выполнение команды или действия.

- **type: permission** — проверка роли пользователя.
  - `role_id`: ID роли
- **type: chance** — случайное выполнение с вероятностью.
  - `percent`: вероятность (0-100)

**Пример:**
```yaml
conditions:
  - type: "permission"
    role_id: "1234567890123456789"
  - type: "chance"
    percent: 10
```

---

## Действия (actions)

### type: send_message
Отправляет сообщение пользователю или в канал.
- **message** — текст сообщения (поддерживаются плейсхолдеры).
- **response_type** — тип ответа (`reply`, `edit_message`, `random_reply`, `MODAL`, `REPLY_MODAL`, `DIRECT`, `CHANNEL`).
- **label** — метка для дальнейших действий (например, для удаления).
- **embed** — объект embed-сообщения (см. ниже).

**Пример:**
```yaml
actions:
  - type: send_message
    message: "Hello, {user}!"
    response_type: REPLY
    label: welcome_message
```

---

### type: send_message
Отправить рандомный ответ.
- **responses** — рандомные ответы.

**Пример:**
```yaml
actions:
  - type: send_message
    response_type: random_reply
    responses:
      - "Привет!"
      - "Здравствуй!"
      - "Хай!"
      - "Добрый день!"
```

---

### type: send_to_channel
Отправляет сообщение или embed в указанный канал.
- **message** — текст сообщения.
- **embed** — объект embed-сообщения.
- **label** — метка для дальнейших действий.

**Пример:**
```yaml
actions:
  - type: send_to_channel
    message: "Привет, канал!"
    label: specific_message
```

---

### type: button
Добавляет кнопку к сообщению.
- **label** — текст на кнопке.
- **style** — стиль (`PRIMARY`, `DANGER`, `LINK` `SUCCESS`, `SECONDARY`).
- **id** — уникальный идентификатор кнопки.
- **url** — ссылка (для стиля LINK).
- **emoji** — эмодзи на кнопке.
- **disabled** — отключена ли кнопка.
- **form_name** — имя формы для открытия по кнопке.
- **required_role** — ID роли, необходимой для нажатия.
- **message** — сообщение при нажатии.
- **timeout** — время жизни кнопки (ms или `infinite`).

**Пример:**
```yaml
actions:
  - type: button
    label: "Open the site"
    style: "LINK"
    url: "https://example.com"
    emoji: "🔗"
    disabled: false
```

---

### type: edit_component
Редактирует компонент (например, кнопку) в сообщении.
- **target_message** — метка сообщения.
- **component_id** — ID компонента (например, кнопки).
- **label** — новый текст.
- **style** — новый стиль.
- **disabled** — отключить/включить компонент.

**Пример:**
```yaml
actions:
  - type: edit_component
    target_message: "welcome_message"
    component_id: "btn_click"
    label: "Updated Button"
    style: DANGER
    disabled: false
```

---

### type: delete_message
Удаляет сообщение по метке.
- **label** — метка сообщения.
- **delete_all** - удалять все сообщения с меткой (true) или только последнее (false), если (delete_all) не указан то по умолчанию true
- **response_message** — сообщение-ответ после удаления.

**Пример:**
```yaml
actions:
  - type: delete_message
    label: test_message
    delete_all: true
    response_message: "Test message has been deleted."
```

---

### type: send_form
Открывает форму для пользователя.
- **form_name** — имя формы.

**Пример:**
```yaml
actions:
  - type: send_form
    form_name: "feedback-form"
```

---

### type: add_role
Добавляет роль пользователю.
- **role_id** — ID роли.

**Пример:**
```yaml
actions:
  - type: add_role
    role_id: "1234567890123456789"
```

---

### type: remove_role
Удалить роль у пользователя.
- **role_id** — ID роли.

**Пример:**
```yaml
actions:
  - type: remove_role
    role_id: "1234567890123456789"
```

---

### type: resolve_placeholders
Вставляет значения плейсхолдеров в шаблон.
- **template** — строка-шаблон с плейсхолдерами.
- **player** — имя игрока или переменная.

**Пример:**
```yaml
actions:
  - type: resolve_placeholders
    template: "Привет, %player_name%!"
    player: "{player}"
```

---

### type: send_page
Отправляет страницу по ID.
- **page_id** — идентификатор страницы.

**Пример:**
```yaml
actions:
  - type: send_page
    page_id: "1-embed"
```

---

## Пример полной команды

```yaml
- name: "hello"
  description: "Says hello to the user"
  context: "server"
  options:
    - name: "target"
      type: "STRING"
      description: "Who to greet"
      required: true
  conditions:
    - type: "permission"
      role_id: "1234567890123456789"
  actions:
    - type: "send_message"
      message: "Hello, {user}! You greeted {target}."
  fail-actions:
    - type: send_message
      message: "No Permission"
```
