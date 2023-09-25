import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroud: {
        "white": "white",
        "softbg":"#f0f0f0",
      },
      colors:{
        "soft-text":"#626262"
      },
      numbers:{
        "9xl":"1536px"
      }
    },
  },
  plugins: [],
}
export default config
