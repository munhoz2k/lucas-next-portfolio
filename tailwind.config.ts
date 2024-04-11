import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'light-shades': '#F3F4F4',
        'light-accent': '#E19E6E',
        'brand-color': '#934B62',
        'dark-accent': '#7C7E97',
        'dark-shades': '#372A40',
      },
      boxShadow: {
        'style-1': `rgba(0, 0, 0, 0.15) 5px 5px, rgba(0, 0, 0, 0.15) 10px 10px,
        rgba(0, 0, 0, 0.10) 15px 15px, rgba(0, 0, 0, 0.05) 20px 20px`,

        'style-2': `rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px`,

        'hover-1': `0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);`
      }
    },
  },
  plugins: [],
}
export default config
