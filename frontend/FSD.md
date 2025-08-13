# FSD Architecture для AI Task Manager

## 📌 Слои и зависимость

shared  →  entities  →  features  →  widgets  →  pages  →  app

> **Принцип:** 
> - Чем левее, тем более универсальный и переиспользуемый код
> - Чем правее, тем более конкретный и привязанный к проекту

## 1. Shared Layer

🔹 **Характеристики:**
- Мелкие, переиспользуемые в любом проекте части
- Не зависят от бизнес-логики
- Могут использовать друг друга

**Примеры:**
- `shared/ui/button`
- `shared/ui/input`
- `shared/ui/icon`
- `shared/ui/icon-link`
- `shared/lib/date-format.ts`
- `shared/config/theme.ts`

## 2. Entities Layer

🔹 **Характеристики:**
- Описывают основные бизнес-сущности
- Собирают UI + модель данных для задач, пользователей
- Могут использовать shared, но не features

**Примеры:**
- `entities/task/ui/task-card`
- `entities/task/model/task.model.ts`
- `entities/user/ui/user-avatar`
- `entities/user/model/user.model.ts`

## 3. Features Layer

🔹 **Характеристики:**
- Описывают законченную пользовательскую возможность
- Обычно — одна целевая функция
- Могут использовать entities и shared

**Примеры:**
- `features/add-task`
- `features/edit-task`
- `features/login`
- `features/change-theme`

## 4. Widgets Layer

🔹 **Характеристики:**
- Большие композиции, объединяющие несколько features и entities
- Часто являются блоками страницы
- Могут использовать всё, что левее

**Примеры:**
- `widgets/header`
- `widgets/sidebar`
- `widgets/task-list`
- `widgets/task-details-panel`

## 5. Pages Layer

🔹 **Характеристики:**
- Конкретные страницы приложения
- Собирают widgets и features в готовый экран
- Могут использовать всё, что левее

**Примеры:**
- `pages/dashboard`
- `pages/settings`
- `pages/login`

## 6. App Layer

🔹 **Характеристики:**
- Корневой модуль приложения
- Роутинг, провайдеры, глобальная конфигурация
- Обычно в `src/app`

## 📜 Правила зависимости

### Можно импортировать:
- Код только из слоёв, которые находятся левее по схеме

**Примеры:**
- `features/add-task` → может использовать `entities/task` и `shared/ui/button`
- `widgets/header` → может использовать `features/login` и `shared/ui/icon-link`

### Нельзя:
- Импортировать код из слоёв, расположенных правее
- Например:
  - `shared/ui/icon` не может знать про `entities/task`
  - `entities/task` не может импортировать что-то из `features/add-task`