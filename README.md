# Chat Messenger

Мессенджер для общения построенный на Vanilla JavaScript и Handlebars.

## 🌐 Демо

**Развернутый проект:** [https://chat-messenger-sprint-1.netlify.app/](https://chat-messenger-sprint-1.netlify.app/)

## 🚀 Быстрый старт

```bash
# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Сборка и запуск продакшена
npm run start

# Сборка для продакшена
npm run build

# Просмотр собранной версии
npm run preview

# Линтинг и форматирование
npm run lint          # ESLint с автофиксом
npm run lint:check     # Проверка без автофикса
npm run format         # Форматирование Prettier
npm run format:check   # Проверка форматирования
```

## 📁 Структура проекта

```
src/
├── pages/           # Страницы приложения
│   ├── auth/        # Авторизация и регистрация
│   ├── chats/       # Список чатов
│   ├── profile/     # Профиль пользователя
│   └── error/       # Страницы ошибок
├── shared/          # Общие компоненты и утилиты
│   ├── consts.js    # Константы
│   ├── utils/       # Утилиты
│   └── ui/          # UI компоненты
└── styles/          # Глобальные стили
```

## 🛠 Технологии

- **Vite** - сборщик и dev сервер
- **Handlebars** - шаблонизатор
- **SCSS** - препроцессор CSS
- **Vanilla JavaScript** - основная логика
- **ESLint** - линтинг кода
- **Prettier** - форматирование кода

## 📝 Особенности архитектуры

- **MPA** - мультистраничное приложение с .hbs шаблонами
- **HBS шаблоны** - отдельные файлы шаблонов Handlebars
- **Модульная структура** - каждая страница как отдельный модуль
- **SCSS** - стили с переменными и миксинами
- **Алиасы импортов** - `@shared`, `@utils`, `@pages`, `@styles`
- **Автоматическая сборка** - .hbs файлы копируются в dist при сборке

## 🎯 Доступные страницы

- **[Главная](https://chat-messenger-sprint-1.netlify.app/)** - навигация по всем страницам
- **[Авторизация](https://chat-messenger-sprint-1.netlify.app/src/pages/auth/login/login.html)** - вход в систему
- **[Регистрация](https://chat-messenger-sprint-1.netlify.app/src/pages/auth/registration/registration.html)** - создание аккаунта
- **[Чаты](https://chat-messenger-sprint-1.netlify.app/src/pages/chats/chats.html)** - список всех чатов
- **[Профиль](https://chat-messenger-sprint-1.netlify.app/src/pages/profile/profile.html)** - информация о пользователе
- **[404](https://chat-messenger-sprint-1.netlify.app/src/pages/error/404/404.html)** - страница не найдена
- **[500](https://chat-messenger-sprint-1.netlify.app/src/pages/error/500/500.html)** - внутренняя ошибка сервера

## 🔧 Разработка

Проект настроен для работы с ES6 модулями и поддерживает hot reload в режиме разработки.

### Качество кода

- **ESLint** - автоматическое исправление при сохранении
- **Prettier** - форматирование кода по стандартам

### Добавление новой страницы:

1. Создайте папку в `src/pages/`
2. Добавьте `.hbs` шаблон
3. Создайте `template.js` с данными
4. Создайте `.html` файл для загрузки template.js
5. Добавьте стили `.scss`
