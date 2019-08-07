// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/go-music-movistar/'
    : '/',
  outputDir : 'docs'
}
