const production = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    require('postcss-import'),
    require('precss'),
    require('postcss-cssnext')({
      features: {
        autoprefixer: { grid: true }
      }
    }),
    production ? require('cssnano') : '',
  ]
}
