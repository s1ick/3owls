# 🦉 3owls — Modern Angular E-Commerce Demo

[![Angular](https://img.shields.io/badge/Angular-20-DD0031?logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Standalone](https://img.shields.io/badge/Components-Standalone-28A745)](https://angular.io/guide/standalone-components)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-181717?logo=github)](https://github.com/s1ick/3owls)

---

## 🎯 О проекте

Современное SPA-приложение интернет-магазина на **Angular 20**.  
Демонстрация лучших практик разработки с использованием **Standalone Components**, **Signals** и современных возможностей фреймворка.

**Ключевые особенности:**
- ✅ Angular 20 с Standalone компонентами  
- ✅ Signals для реактивного состояния  
- ✅ Drag & Drop перетаскивание  
- ✅ Infinite Scroll с плавной подгрузкой  
- ✅ Полная адаптивность под мобильные устройства  

---

## 🚀 Быстрый старт

### 🧩 Клонирование и установка
```bash
git clone https://github.com/s1ick/3owls.git
cd 3owls
npm install
```

### 💻 Запуск development сервера
```bash
npm start
# или
ng serve
```

### 🏗️ Production сборка
```bash
npm run build
```

### 📘 Storybook (документация компонентов)
```bash
npm run storybook
```

---

## 🛠 Технологический стек

### **Frontend Framework**
- **Angular 20** — последняя версия фреймворка  
- **Standalone Components** — современная архитектура без NgModules  
- **TypeScript 5.8** — строгая типизация  

### **State Management**
- **Angular Signals** — реактивное управление состоянием  
- **RxJS** — для асинхронных операций  

### **UI & Interaction**
- **Angular CDK** — Drag & Drop и accessibility  
- **SCSS с CSS-переменными** — современные стили  
- **ngx-infinite-scroll** — бесконечная прокрутка  

### **Performance**
- **Intersection Observer API** — ленивая загрузка изображений  
- **WebP** — современный формат изображений  
- **ChangeDetection.OnPush** — оптимизация рендеринга  

---

## ⚡ Реактивность и состояние

```typescript
// Modern Signals вместо классических свойств

products = signal<Product[]>([]);
loading = signal(false);

const canLoadMore = computed(() =>
  !loading() && visibleProducts().length < allProducts().length
);
```

---

## 💡 Особенности реализации

### **Modern Angular Patterns**
- **Standalone Components** — полный отказ от NgModules  
- **Inject Function** — современный dependency injection  
- **Signal-based State** — реактивное управление состоянием  
- **Typed Templates** — улучшенная типобезопасность  

### **Performance Optimizations**
- **OnPush Detection** + **Signals** — максимальная производительность  
- **Lazy Image Loading** — Intersection Observer для изображений  
- **Efficient Re-renders** — минимальные обновления DOM  
- **Optimized Bundles** — tree-shakable standalone components  

### **Developer Experience**
- **TypeScript Strict** — полная типобезопасность  
- **SCSS Variables** — единая система дизайна  
- **Storybook** — документация компонентов  
- **Modern Tooling** — Angular CLI 20, ESLint, Prettier  

---

## 📱 Адаптивность

- **Mobile First подход** — приоритет мобильных устройств  
- **CSS Grid и Flexbox** — современные layout-технологии  
- **Container Queries** — адаптивность на основе контейнера  
- **Touch-friendly интерфейс** — оптимизация для сенсорных устройств  

---

## 🔧 Скрипты

```bash
npm start                # Запуск development сервера
npm run build            # Production сборка
npm test                 # Запуск тестов
npm run storybook        # Запуск Storybook
npm run build-storybook  # Сборка Storybook
```

---

## 👨‍💻 Автор

**Иван**  
[![GitHub](https://img.shields.io/badge/GitHub-s1ick-181717?logo=github)](https://github.com/s1ick)  
[![Telegram](https://img.shields.io/badge/Telegram-@estheticmadness-26A5E4?logo=telegram)](https://t.me/estheticmadness)  
[![Email](https://img.shields.io/badge/Email-berkut89@list.ru-D14836?logo=gmail)](mailto:berkut89@list.ru)

---

## 📄 Лицензия

MIT License — смотри файл [LICENSE](LICENSE) для деталей.

---

> **Примечание:** Проект демонстрирует современные подходы к разработке на Angular 20 и может использоваться как основа для реальных приложений.
