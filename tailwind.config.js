/* 
Этот файл используется для настройки TailwindCSS.
В нем задаются пути для поиска
классов, темы, экраны (breakpoints), шрифты, цвета и подключаемые плагины.
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	// Указание файлов, в которых будут сканироваться классы TailwindCSS
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}", // Все файлы в папке pages
		"./components/**/*.{js,ts,jsx,tsx,mdx}", // Все файлы в папке components
		"./app/**/*.{js,ts,jsx,tsx,mdx}", // Все файлы в папке app
	],

	theme: {
		container: {
			center: 'true',
			padding: '16px'
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px'
		},
		fontFamily: {
			primary: 'var(--font-jetbrainsMono)'
		},
		extend: {
			colors: {
				primary: '#1c1c22',
				accent: {
					DEFAULT: '#0081a7',
					hover: '#0fc7ff'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	// Список подключаемых плагинов (по мере необходимости)
	plugins: [require("tailwindcss-animate")],
};