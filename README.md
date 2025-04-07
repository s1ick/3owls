Вот чистый и честный README без упоминания Lighthouse и недоказанных метрик:

# **3owls - Тестовое задание по вёрстке**

[![GitHub](https://img.shields.io/badge/GitHub-Repo-blue)](https://github.com/s1ick/3owls)
[![Figma](https://img.shields.io/badge/Figma-Maket-purple)](https://www.figma.com/file/Xiosbk2l4FnvnftignRf9e/Untitled)

Адаптивная вёрстка интернет-магазина одежды с использованием современных веб-технологий.

## **📌 Технические требования (выполнены)**

- **БЭМ методология** - Чёткое разделение на блоки, элементы и модификаторы
- **Формат изображений** - Все изображения конвертированы в `.webp`
- **Иконка избранного** - Реализована через SVG с CSS-анимацией
- **Выравнивание цен** - Блоки цен строго на одной оси
- **Адаптивность** - Полная адаптация под мобильные устройства

## **🚀 Особенности реализации**

### **Производительность**
- Нативная ленивая загрузка через Intersection Observer API
- Оптимизированные изображения в формате WebP
- Эффективная стратегия ChangeDetection.OnPush в Angular

### **Интерактивность**
- Анимация hover-эффектов
- Интерактивный выбор размера товара
- Добавление в избранное без перезагрузки страницы

## **🛠 Технологический стек**

- **Angular** v17+ (Standalone Components)
- **SCSS** с CSS-переменными
- **Адаптивная верстка** (Mobile First)
- **Intersection Observer API** для lazy loading
- **EditorConfig** для единого стиля кода

## **🚀 Установка и запуск**

1. Клонировать репозиторий:
```bash
git clone https://github.com/s1ick/3owls.git
cd 3owls
```

2. Установить зависимости:
```bash
npm install
```

3. Запустить development server:
```bash
npm start
```

4. Сборка production версии:
```bash
npm run build
```

## **📂 Структура проекта**

```
src/
├── app/
│   ├── product/               # Компонент карточки товара
│   │   ├── interfaces/        # Типы TypeScript
│   │   ├── product.component.ts
│   │   ├── product.component.html
│   │   └── product.component.scss
│   └── products.data.ts       # Мок-данные товаров
├── assets/
│   ├── images/                # Оптимизированные изображения
│   └── styles/                # Глобальные стили
└── main.ts                    # Точка входа
```

## **📝 Ключевые решения**

1. **Компонентный подход** - Изолированная логика карточки товара
2. **Оптимизация загрузки** - Изображения грузятся только при попадании в viewport
3. **Доступность** - Семантическая верстка и ARIA-атрибуты

## **📧 Контакты**

- **Автор**: Иван
- **GitHub**: [s1ick](https://github.com/s1ick)
- **Email**: [berkut89@list.ru](mailto:berkut89@list.ru)
- **Telegram**: [@estheticmadness](https://t.me/estheticmadness)

---

> Тестовое задание выполнено с акцентом на качество кода и производительность. Готов ответить на любые вопросы по реализации!