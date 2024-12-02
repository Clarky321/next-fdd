/* 
Этот файл используется для настройки PostCSS,
который обрабатывает стили с помощью TailwindCSS.
*/

/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {}, // Подключение TailwindCSS
  },
};

export default config;