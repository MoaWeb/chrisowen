/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#114084', // Blue color for branding
        secondary: '#F2A922', // Gold/Yellow accent color
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: '#114084',
          secondary: '#F2A922',
          accent: '#1E88E5',
          'base-100': '#FFFFFF',
          'base-200': '#F9FAFB',
          'base-300': '#EDF2F7',
        },
      },
    ],
  },
} 