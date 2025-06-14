module.exports = {
  content: {
    files: ['./**/*.{html,js}'], // ou o caminho correto do seu projeto
    breakpoints: true,           // 👈 ativa o uso de max-[breakpoint]
  },
  theme: {
    extend: {},
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
