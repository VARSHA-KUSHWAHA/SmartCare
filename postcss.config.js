module.exports = {
  plugins: [
    require('@tailwindcss/postcss')(), // 👈 use this instead
    require('autoprefixer'),
  ],
};