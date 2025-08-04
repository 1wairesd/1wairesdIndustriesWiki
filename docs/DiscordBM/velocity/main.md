---
sidebar_position: 1
id: velocity-main
title: Главная
---

# DiscordBMV

**DiscordBMV** - мощный хостинг для Дискорд Бота, работающий на серверах Velocity, имеет большой функционал, сделан упор на расширяемость и производительность



# Особенности
  - Discord
    - Подключени по Bot Token
    - Синхронизация действий и обработка команд
  - оптимизация 
    - обработка сообщений между серверами (Клиентами)
    - получения сообщений меньше секунды (зависит от вашего соединения)
  - собственный Netty сервер
    - настраиваемое подключение к порту/айпи
  - кастомные команды
  - кастомные настройки webhook
  - кастомные настройки form
  - кастомные настройки страниц
  - настройка публичности/приватности
  - настройка внутренних сообщений
  - настройка логов

# Поддержка
  - MySQL
  - Netty io
  - embed-сообщений
  - кнопок
  - модальных форм
  - приватных/публичных сообщений
  - Текстовые игры
  - информация о пользователях
  - управление ролями
  - проверка разрешений
  - отправка/редактирование сообщений
  - ответ на сообщение
  - ответ рандомным сообщением
  - шанс выполнения

# Команды (Minecraft)
  - /dbmv help - помощь
  - /dbmv reload - перезагрузка
  - /dbmv webhook `<webhook_name>` `<true/false>` - управление webhook
  - /dbmv commands custom - кастомные команды
  - /dbmv commands addons - команды аддонов
  - /dbmv editor - редактировать команды на сайте (сайт полностью не готов)
  - /dbmv applyedits - загрузить изменения из сайта (сайт полностью не готов)

# 📥 Загрузка

Выберите версию DiscordBM Velocity для загрузки:

<div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem'}}>

<a href="https://github.com/1wairesd/DiscordBM/releases/latest/download/DiscordBM-Velocity.jar" 
   style={{
     display: 'inline-flex',
     alignItems: 'center',
     gap: '0.5rem',
     padding: '0.75rem 1.5rem',
     backgroundColor: 'var(--ifm-color-primary)',
     color: 'white',
     textDecoration: 'none',
     borderRadius: '8px',
     fontWeight: '600',
     transition: 'all 0.2s ease',
     border: 'none',
     cursor: 'pointer'
   }}
   onMouseOver={(e) => {
     e.target.style.transform = 'translateY(-2px)';
     e.target.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.3)';
   }}
   onMouseOut={(e) => {
     e.target.style.transform = 'translateY(0)';
     e.target.style.boxShadow = 'none';
   }}
>
  🚀 Последняя версия
</a>

<a href="https://github.com/1wairesd/DiscordBM/releases/download/Releaseee/DiscordBM-Velocity-1.0.jar" 
   style={{
     display: 'inline-flex',
     alignItems: 'center',
     gap: '0.5rem',
     padding: '0.75rem 1.5rem',
     backgroundColor: 'transparent',
     color: 'var(--ifm-color-primary)',
     textDecoration: 'none',
     borderRadius: '8px',
     fontWeight: '600',
     transition: 'all 0.2s ease',
     border: '2px solid var(--ifm-color-primary)',
     cursor: 'pointer'
   }}
   onMouseOver={(e) => {
     e.target.style.backgroundColor = 'var(--ifm-color-primary)';
     e.target.style.color = 'white';
     e.target.style.transform = 'translateY(-2px)';
   }}
   onMouseOut={(e) => {
     e.target.style.backgroundColor = 'transparent';
     e.target.style.color = 'var(--ifm-color-primary)';
     e.target.style.transform = 'translateY(0)';
   }}
>
  📦 Версия 1.0
</a>

<a href="https://github.com/1wairesd/DiscordBM/releases" 
   style={{
     display: 'inline-flex',
     alignItems: 'center',
     gap: '0.5rem',
     padding: '0.75rem 1.5rem',
     backgroundColor: 'transparent',
     color: 'var(--ifm-color-primary)',
     textDecoration: 'none',
     borderRadius: '8px',
     fontWeight: '600',
     transition: 'all 0.2s ease',
     border: '2px solid var(--ifm-color-primary)',
     cursor: 'pointer'
   }}
   onMouseOver={(e) => {
     e.target.style.backgroundColor = 'var(--ifm-color-primary)';
     e.target.style.color = 'white';
     e.target.style.transform = 'translateY(-2px)';
   }}
   onMouseOut={(e) => {
     e.target.style.backgroundColor = 'transparent';
     e.target.style.color = 'var(--ifm-color-primary)';
     e.target.style.transform = 'translateY(0)';
   }}
>
  📋 Все версии
</a>

</div>

> 💡 **Совет:** Рекомендуется использовать последнюю версию для получения всех обновлений и исправлений.