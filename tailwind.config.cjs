/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'midnight': '#0D0D1A',
        'charcoal': '#2D2D2D',
        'silver': '#C0C0C0',
        'moonlight': '#E8E8E8',
        'violet': '#7B68EE',
        'teal': '#00CED1',
        'hotpink': '#FF69B4',
        'textlight': '#F0F0F0',
      },
      fontFamily: {
        heading: ['"UnifrakturMaguntia"', 'cursive'],
        body: ['"Dancing Script"', 'cursive'],
        accent: ['"MedievalSharp"', 'cursive'],
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.2', transform: 'scale(0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 5px #7B68EE, 0 0 10px #7B68EE' },
          'to': { boxShadow: '0 0 20px #7B68EE, 0 0 40px #7B68EE' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px #FF69B4, 0 0 10px #FF69B4' },
          '50%': { boxShadow: '0 0 20px #FF69B4, 0 0 40px #FF69B4, 0 0 60px #FF69B4' },
        },
      },
    },
  },
  plugins: [],
};
