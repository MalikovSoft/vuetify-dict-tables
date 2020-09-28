module.exports = {
  transpileDependencies: ['vuetify'],
  productionSourceMap: false,
  configureWebpack: {
    // No need for splitting
    optimization: {
      splitChunks: false,
    },
  },
};
