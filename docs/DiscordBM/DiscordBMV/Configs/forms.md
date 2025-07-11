---
sidebar_position: 1
id: dscordbmv-main-forms
title: forms.yml
---

# Документация по forms.yml

В этом разделе описаны все возможности для создания форм, которые используются в командах DiscordBM.

---

## Общая структура

```yaml
forms:
  <form_name>:
    title: "<Заголовок формы>"
    fields:
      - label: "<Название поля>"
        placeholder: "<Текст-подсказка>"
        type: "SHORT | PARAGRAPH"
        required: true | false
        variable: "<имя_переменной>"
```

---

## Описание полей

- **form_name** — уникальное имя формы, по которому она вызывается в командах.
- **title** — заголовок формы, отображается пользователю.
- **fields** — список полей формы:
  - **label** — название поля (вопрос к пользователю).
  - **placeholder** — текст-подсказка внутри поля.
  - **type** — тип поля: `SHORT` (короткий ответ) или `PARAGRAPH` (развёрнутый ответ).
  - **required** — обязательно ли поле для заполнения (`true`/`false`).
  - **variable** — имя переменной, в которую будет сохранён ответ пользователя.

---

## Примеры форм

### feedback-form

```yaml
feedback-form:
  title: "Feedback"
  fields:
    - label: "What is your nickname?"
      placeholder: "wairesd"
      type: "SHORT"
      required: true
      variable: "username"
    - label: "Rate the server from 1 to 10"
      placeholder: "10"
      type: "SHORT"
      required: true
      variable: "rating"
    - label: "What did you like or dislike?"
      placeholder: "You can be detailed"
      type: "PARAGRAPH"
      required: false
      variable: "review"
```

### register-form

```yaml
register-form:
  title: "Registration"
  fields:
    - label: "Your Minecraft nickname"
      placeholder: "For example, wairesd"
      type: "SHORT"
      required: true
      variable: "nick"
    - label: "Your Telegram (optional)"
      placeholder: "@username"
      type: "SHORT"
      required: false
      variable: "telegram"
    - label: "Do you accept the rules?"
      placeholder: "Type 'yes'"
      type: "SHORT"
      required: true
      variable: "accept"
```

### poll-form

```yaml
poll-form:
  title: "Poll"
  fields:
    - label: "Which game mode do you like more?"
      placeholder: "Survival, SkyBlock, Anarchy..."
      type: "SHORT"
      required: true
      variable: "mode"
    - label: "Would you recommend our server to a friend?"
      placeholder: "Yes / No"
      type: "SHORT"
      required: true
      variable: "recommend"
```