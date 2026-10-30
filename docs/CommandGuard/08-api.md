---
id: commandguard-api
title: API для розробників
sidebar_position: 9
---

# API для розробників

CommandGuard має **єдиний API-модуль для обох платформ**. Доступ до tab-груп і
перевірка команд — однаковий код і для Spigot, і для Velocity. Відрізняється лише
**подія блокування команди** — вона своя на кожній платформі.

## Один артефакт на обидві платформи

Точка входу — інтерфейс `CGAPI`, який ви отримуєте через `CGAPIProvider.get()`.
Він однаковий і на Spigot, і на Velocity:

```java
CGAPI api = CGAPIProvider.get();

api.getCommandManager();   // перевірка блокування команд
api.getTabGroupManager();  // робота з tab-групами
api.getPlatform();         // платформа (Bukkit / Velocity), версія, logger
```

:::warning
`CGAPIProvider.get()` кидає `IllegalStateException`, якщо CommandGuard ще не
увімкнено. Переконайтесь, що ваш плагін залежить від CommandGuard і звертається до
API вже після його запуску.
:::

## Підключення

Артефакт публікується на [JitPack](https://jitpack.io/#1wairesd/CommandGuard).
Підключається **однаково для Spigot і Velocity** — це той самий `api`. Замініть
`VERSION` на тег релізу або `main-SNAPSHOT` для останнього коміту.

### Gradle

```groovy
repositories {
    maven { url = "https://jitpack.io" }
}

dependencies {
    compileOnly 'com.github.1wairesd:CommandGuard:VERSION:api'
}
```

### Maven

```xml
<repository>
    <id>jitpack.io</id>
    <url>https://jitpack.io</url>
</repository>

<dependency>
    <groupId>com.github.1wairesd</groupId>
    <artifactId>CommandGuard</artifactId>
    <version>VERSION</version>
    <classifier>api</classifier>
    <scope>provided</scope>
</dependency>
```

## Що спільне для обох платформ

### Перевірка команди

```java
CommandManager cm = CGAPIProvider.get().getCommandManager();
// логіка блокування за конфігом — однакова на Spigot і Velocity
```

### Робота з tab-групами

```java
TabGroupManager tgm = CGAPIProvider.get().getTabGroupManager();

// Дозволені команди для набору прав гравця
// serverName = null, якщо фільтр по серверу не потрібен
List<String> allowed = tgm.getTabCommands(permissions, serverName);

// Активні групи гравця (щонайменше ["default"])
List<String> groups = tgm.getActiveGroupNames(permissions, serverName);
```

## Що відрізняється: подія блокування

Подія блокування команди успадковує різні базові типи платформи, тому клас свій на
кожній:

### Spigot — `BukkitCommandBlockedEvent`

Звичайна Bukkit-подія, що реалізує `Cancellable`.

```java
@EventHandler
public void onCommandBlocked(BukkitCommandBlockedEvent event) {
    event.getPlayer().sendMessage("Заблоковано: " + event.getFullCommand());
    event.setCancelled(true); // пропустити команду попри блокування
}
```

### Velocity — `VelocityCommandBlockedEvent`

Реалізує `ResultedEvent<GenericResult>`.

```java
@Subscribe
public void onCommandBlocked(VelocityCommandBlockedEvent event) {
    event.getPlayer().sendMessage(Component.text("Заблоковано: " + event.getFullCommand()));
    event.setResult(ResultedEvent.GenericResult.denied()); // дозволити команду
}
```

Обидві події дають `getPlayer()` і `getFullCommand()`. Жодної бізнес-логіки в
події немає — лише дані та результат.

## Підсумок

| Частина API | Spigot | Velocity |
|-------------|--------|----------|
| `CGAPIProvider.get()` / `CGAPI` | спільний | спільний |
| `CommandManager`, `TabGroupManager`, `Platform` | спільний | спільний |
| Подія блокування | `BukkitCommandBlockedEvent` | `VelocityCommandBlockedEvent` |
