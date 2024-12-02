/* 
Этот файл используется для настройки TailwindCSS.
В нем задаются пути для поиска
классов, темы, экраны (breakpoints), шрифты, цвета и подключаемые плагины.
*/

/** @type {import('tailwindcss').Config} */
module.exports = {

  // Указание файлов, в которых будут сканироваться классы TailwindCSS
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",      // Все файлы в папке pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Все файлы в папке components
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Все файлы в папке app
  ],

  theme: {
    // Настройка контейнера (центрирование и отступы)
    container: {
      center: true,    // Центрирует контейнер
      padding: "8px", // Добавляет внутренний отступ
    },

    // Определение экранных размеров (breakpoints)
    screens: {
      sm: "640px",  // @media (min-width: 640px)
      md: "768px",  // @media (min-width: 768px)
      lg: "1024px", // @media (min-width: 1024px)
      xl: "1280px"  // @media (min-width: 1280px)
    },

    // Определение шрифтов
    fontFamily: {
      primary: "var(--font-jetbrainsMono)", // Используем шрифт из globals.css
    },

    extend: {
      // Добавление собственных цветов
      colors: {
        primary: "#1c1c22",   // Основной цвет
        accent: {
          DEFAULT: "#0081a7", // Акцентный цвет по умолчанию
          hover: "#00e187",   // Цвет при наведении
        },
      },
    },
  },
  // Список подключаемых плагинов (по мере необходимости)
  plugins: [],
};