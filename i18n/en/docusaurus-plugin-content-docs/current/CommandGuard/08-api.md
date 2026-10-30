---
id: commandguard-api
title: Developer API
sidebar_position: 9
---

# Developer API

CommandGuard has a **single API module for both platforms**. Accessing tab groups
and checking commands is the same code on Spigot and Velocity. Only the **command
blocked event** differs — it's platform-specific.

## One artifact for both platforms

The entry point is the `CGAPI` interface, obtained via `CGAPIProvider.get()`. It's
identical on Spigot and Velocity:

```java
CGAPI api = CGAPIProvider.get();

api.getCommandManager();   // command blocking checks
api.getTabGroupManager();  // tab-group access
api.getPlatform();         // platform (Bukkit / Velocity), version, logger
```

:::warning
`CGAPIProvider.get()` throws `IllegalStateException` if CommandGuard isn't enabled
yet. Make sure your plugin depends on CommandGuard and accesses the API only after
it has started.
:::

## Adding the dependency

The artifact is published on [JitPack](https://jitpack.io/#1wairesd/CommandGuard).
It's added **the same way for Spigot and Velocity** — it's the same `api`. Replace
`VERSION` with a release tag, or `main-SNAPSHOT` for the latest commit.

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

## Shared between both platforms

### Checking a command

```java
CommandManager cm = CGAPIProvider.get().getCommandManager();
// blocking logic from the config — same on Spigot and Velocity
```

### Working with tab groups

```java
TabGroupManager tgm = CGAPIProvider.get().getTabGroupManager();

// Allowed commands for a player's permission set
// serverName = null if no per-server filtering is needed
List<String> allowed = tgm.getTabCommands(permissions, serverName);

// Active groups of the player (at least ["default"])
List<String> groups = tgm.getActiveGroupNames(permissions, serverName);
```

## What differs: the blocked event

The command blocked event extends different platform base types, so the class is
different on each:

### Spigot — `BukkitCommandBlockedEvent`

A regular Bukkit event implementing `Cancellable`.

```java
@EventHandler
public void onCommandBlocked(BukkitCommandBlockedEvent event) {
    event.getPlayer().sendMessage("Blocked: " + event.getFullCommand());
    event.setCancelled(true); // let the command through despite the block
}
```

### Velocity — `VelocityCommandBlockedEvent`

Implements `ResultedEvent<GenericResult>`.

```java
@Subscribe
public void onCommandBlocked(VelocityCommandBlockedEvent event) {
    event.getPlayer().sendMessage(Component.text("Blocked: " + event.getFullCommand()));
    event.setResult(ResultedEvent.GenericResult.denied()); // allow the command
}
```

Both events expose `getPlayer()` and `getFullCommand()`. There's no business logic
in the event — only data and the result.

## Summary

| API part | Spigot | Velocity |
|----------|--------|----------|
| `CGAPIProvider.get()` / `CGAPI` | shared | shared |
| `CommandManager`, `TabGroupManager`, `Platform` | shared | shared |
| Blocked event | `BukkitCommandBlockedEvent` | `VelocityCommandBlockedEvent` |
