/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'Microsoft YaHei', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(45, 212, 191, 0.26)',
        magenta: '0 0 28px rgba(244, 114, 182, 0.24)',
      },
    },
  },
  plugins: [],
};
