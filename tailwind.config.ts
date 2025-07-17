module.exports = {
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 10px #0065FB, 0 0 20px #0065FB',
      },
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { boxShadow: '0 0 10px #0065FB, 0 0 20px #0065FB' },
          '50%': { boxShadow: '0 0 20px #0065FB, 0 0 40px #0065FB' },
        },
      },
    },
  },
}
