---
sidebar_position: 1
id: velocity-main-settings
title: settings.yml
---

# Документация по настройке settings.yml

Этот файл содержит описание всех параметров конфига для интеграции с Discord-ботом и сервером.

---

## Discord

**Описание:** Настройки Discord-бота.

- **Bot-token** — токен вашего Discord-бота. Никому не показывайте свой токен!
- **activity** — настройки активности бота (то, что отображается в статусе).
  - `type`: Тип активности (`playing`, `listening`, `watching` и т.д.)
  - `message`: Сообщение, которое будет отображаться.

**Пример:**
```yaml
Discord:
  Bot-token: "your-bot-token"
  activity:
    type: "playing"
    message: "DiscordBM"
```

> ⚠️ **Безопасность:** Никогда не публикуйте свой реальный токен в открытом доступе!

---

## netty

**Описание:** Настройки сетевого соединения.
- `ip`: IP-адрес, на котором будет работать сервер (по умолчанию: `127.0.0.1`).
- `port`: Порт для входящих соединений (например, `8080`).

**Пример:**
```yaml
netty:
  ip: "127.0.0.1"
  port: "8080"
```
> ⚠️ **Безопасность:** Не разглашайте данные подключения, это важно для безопасности.

---

## forwarding-secret-file

**Описание:** Путь к файлу с секретным ключом, который требует хостинг для подключения клиента.

**Пример:**
```yaml
forwarding-secret-file: "secret.complete.code"
```

---

## debug

**Описание:** Группа параметров для включения/отключения различных режимов отладки.

- `debug-connections`: Логировать подключения и отключения клиентов.
- `debug-client-responses`: Логировать запросы и ответы от клиентов.
- `debug-plugin-connections`: Логировать подключения аддонов.
- `debug-command-registrations`: Логировать события регистрации команд.
- `debug-command-received`: Логировать полученные slash-команды.
- `debug-command-execution`: Логировать выполнение пользовательских команд.
- `debug-resolved-messages`: Логировать обработанные сообщения из плейсхолдеров.
- `debug-request-processing`: Логировать обработку запросов/ответов с отслеживанием хуков.
- `debug-command-not-found`: Логировать предупреждения, когда команда не найдена.
- `debug-sendmessage-action`: Логировать действия отправки сообщений.
- `debug-sendmessage-to-channel`: Логировать отправку сообщений в канал.
- `debug-authentication`: Логировать попытки аутентификации и их результаты.
- `debug-netty-start`: Логировать запуск Netty-сервера.
- `debug-errors`: Логировать ошибки и исключения.
- `debug-button-register`: Логировать регистрацию кнопок.

**Пример:**
```yaml
debug:
  debug-connections: true
  debug-client-responses: true
  debug-plugin-connections: true
  debug-command-registrations: false
  debug-command-received: true
  debug-command-execution: true
  debug-resolved-messages: false
  debug-request-processing: true
  debug-command-not-found: false
  debug-sendmessage-action: true
  debug-sendmessage-to-channel: false
  debug-authentication: true
  debug-netty-start: false
  debug-errors: true
  debug-button-register: false
```

---

## mysql

**Описание:** Настройки подключения к базе данных MySQL.

- **enabled** — включить или отключить использование MySQL (`true`/`false`).
- **host** — адрес сервера базы данных (например, `localhost`).
- **port** — порт для подключения (обычно `3306`).
- **database** — имя базы данных.
- **username** — имя пользователя для подключения.
- **password** — пароль пользователя.
- **params** — дополнительные параметры строки подключения (например, `?useSSL=false&serverTimezone=UTC`).

**Пример:**
```yaml
mysql:
  enabled: false
  host: localhost
  port: 3306
  database: discordbmv
  username: root
  password: password
  params: '?useSSL=false&serverTimezone=UTC'
  # example:
  # jdbc:mysql://localhost:3306/discordbmv?user=root&password=password&useSSL=false&serverTimezone=UTC
```

---

## Полный пример конфига

```yaml
Discord:
  Bot-token: <Ваш токен>
  activity:
    type: "playing"
    message: "BatMine"

netty:
  ip : "127.0.0.1"
  port: 23234 

forwarding-secret-file: "secret.complete.code"

debug:
  debug-connections: true            # Логировать подключения и отключения клиентов
  debug-client-responses: true       # Логировать запросы и ответы от клиентов
  debug-plugin-connections: true     # Логировать подключения аддонов
  debug-command-registrations: false # Логировать события регистрации команд
  debug-command-received: true       # Логировать полученные slash-команды
  debug-command-execution: true      # Логировать выполнение пользовательских команд
  debug-resolved-messages: false     # Логировать обработанные сообщения из плейсхолдеров
  debug-request-processing: true     # Логировать обработку запросов/ответов с отслеживанием хуков
  debug-command-not-found: false     # Логировать предупреждения, когда команда не найдена
  debug-sendmessage-action: true     # Логировать действия отправки сообщений
  debug-sendmessage-to-channel: false # Логировать отправку сообщений в канал
  debug-authentication: true         # Логировать попытки аутентификации и их результаты
  debug-netty-start: false           # Логировать запуск Netty-сервера
  debug-errors: true                 # Логировать ошибки и исключения
  debug-button-register: false       # Логировать регистрацию кнопок

mysql:
  enabled: false
  host: localhost
  port: 3306
  database: discordbmv
  username: root
  password: password
  params: '?useSSL=false&serverTimezone=UTC'
  # example:
  # jdbc:mysql://localhost:3306/discordbmv?user=root&password=password&useSSL=false&serverTimezone=UTC
```
