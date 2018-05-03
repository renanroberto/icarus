module.exports = {
  plugins: [
    require('precss'),
    process.env.NODE_ENV === 'production' ? require('cssnano') : '',
    require('postcss-import'),
    require('postcss-cssnext')({
      features: {
        autoprefixer: { grid: true }
      }
    })
  ]
}
