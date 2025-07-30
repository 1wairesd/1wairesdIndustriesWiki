---
sidebar_position: 1
id: bukkit-main-settings
title: settings.yml
---

# Документация по настройкам Bukkit

В этом разделе описаны параметры конфигурации для интеграции с сервером Bukkit.

---

## velocity

**Описание:** Настройки подключения к прокси-серверу Velocity(host).

- **secret** — секретный ключ для подключения к Velocity.
- **host** — IP-адрес прокси-сервера (например, `127.0.0.1`).
- **port** — порт для подключения (например, `8080`).

**Пример:**
```yaml
velocity:
  secret: "YourSercretCod"
  host: "127.0.0.1"
  port: "8080"
```

> ⚠️ **Безопасность:** Никогда не публикуйте данные для подключения!

---

## server

**Описание:** Имя сервера, отображаемое в системе.

- **server** — название вашего сервера (например, `YourNameServer`).

**Пример:**
```yaml
server: "YourNameServer"
```

---

## debug

**Описание:** Параметры для включения/отключения различных режимов отладки.

- **debug-registered-services** — логировать регистрацию сервисов.
- **debug-connections** — логировать подключения и отключения.
- **debug-client-responses** — логировать запросы и ответы от клиентов.
- **debug-command-registrations** — логировать события регистрации команд.
- **debug-errors** — логировать ошибки и исключения.

**Пример:**
```yaml
debug:
  debug-registered-services: false
  debug-connections: false            # Логировать подключения и отключения
  debug-client-responses: false       # Логировать запросы и ответы от клиентов
  debug-command-registrations: false  # Логировать события регистрации команд
  debug-errors: true                  # Логировать ошибки и исключения
```