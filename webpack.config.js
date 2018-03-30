module.exports = {
  framework: 'html',
  devtool: 'source-map',
  entry: {
    include: 'page',
    template: 'layout/layout.html'
  },
  alias: {
    asset: 'asset',
    vue: 'vue/dist/vue.js'
  },
  externals: {
    jquery: 'window.$'
  },
  loaders: {
    less: true,   // 默认开启，如不需要泽关闭，减少编译时间
    nunjucks: {
      options: {
        searchPaths: ['./view']
      }
    }
  },
  plugins: {},
  options: {
    devServer: {
      hot: true,
      inline: true,
      progress: true,
      proxy: {
        host:  'http://localhost:8888',
        match: /\/debug/,
        changeOrigin: false, //  默认false，如需要可开启
        secure: false
      },
    }
  },
  publicPath: '',
  done() {

  }
};
