# Doula Alsu Hakim — birth guide

Лендинг для специалиста-доулы **Alsu Hakim**. Одностраничный сайт с информацией
о специалисте, услугами и ценами, отзывами и формой связи. Дизайн выдержан
в фирменном стиле из брендбука: тёплая земляная палитра, растительный логотип
и элегантная антиква (Cormorant Garamond + Jost).

## Стек

- [Astro](https://astro.build) — статический генератор, без клиентских фреймворков
- Чистый CSS (scoped-стили компонентов + дизайн-система в `src/styles/global.css`)
- Google Fonts: Cormorant Garamond, Jost

## Структура

```
src/
  layouts/Layout.astro        — каркас, шрифты, reveal-анимации
  components/
    Sprig.astro               — фирменный знак-росток (inline SVG)
    Header.astro              — шапка + мобильное меню
    Hero.astro                — первый экран
    About.astro               — о специалисте + статистика
    Services.astro            — услуги и цены (карточки)
    Reviews.astro             — отзывы
    Contact.astro             — контакты + форма связи
    Footer.astro              — подвал
  pages/index.astro           — сборка секций
public/favicon.svg            — иконка (тот же знак-росток)
```

## Команды

```bash
npm install      # установка зависимостей
npm run dev      # локальный сервер → http://localhost:4321
npm run build    # сборка в ./dist
npm run preview  # предпросмотр собранной версии
```

## Что стоит заменить перед публикацией

- **Контакты** в `src/components/Contact.astro` и `Footer.astro` (телефон,
  Telegram, WhatsApp, Instagram, город) — сейчас там placeholder-значения.
- **Тексты и цены** в `Services.astro`, **отзывы** в `Reviews.astro`,
  **биографию и цифры** в `About.astro`.
- **Отправка формы**: сейчас форма работает в демо-режиме (показывает
  подтверждение на стороне клиента). Для реальной отправки подключите
  бэкенд — например, [Formspree](https://formspree.io), Telegram-бота или
  свой обработчик — в скрипте внизу `src/components/Contact.astro`.
- **Фото**: hero и портрет сейчас собраны на градиентах в фирменных цветах.
  При наличии фотографий их можно добавить в `public/` и подставить фоном.

## Доступность и прогрессивное улучшение

Анимации появления включаются только при работающем JavaScript
(`html.js`), поэтому без JS весь контент сразу виден. Есть страховочный
таймер, который показывает все секции, даже если `IntersectionObserver`
не сработал. Учитывается `prefers-reduced-motion`.
