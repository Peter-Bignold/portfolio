module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        spartan: ['Spartan', 'sans-serif'],
      },
      keyframes: {
        'fade-in-0': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-1': {
          '0%, 10%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-2': {
          '0%, 25%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-3': {
          '0%, 40%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-half': {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '1' },
        },
        'move-down': {
          '0%': { transform: 'translateY(-50px)' },
          '100%': { transform: 'translateY(0)' },
        },
        'move-up': {
          '0%': { opacity: '0', transform: 'translateY(300px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-in-0': 'fade-in-0 1s ease forwards',
        'fade-in-1': 'fade-in-1 1s ease forwards',
        'fade-in-2': 'fade-in-2 1s ease forwards',
        'fade-in-3': 'fade-in-3 1.5s ease forwards',
        'fade-in-half': 'fade-in-half 0.75s ease forwards',
        'move-down': 'move-down 0.75s ease forwards',
        'move-up': 'move-up 1s ease forwards',
      },
      boxShadow: {
        soft: '0 0 8px 0 rgba(0, 0, 0, 0.075)',
        panel: '0 0 8px 0 rgba(0, 0, 0, 0.05)',
        gallery: '0 0 8px 2px rgba(0, 0, 0, 0.075)',
        footer: '0 0 50px 15px #0f0f0f',
      },
    },
  },
  plugins: [],
};