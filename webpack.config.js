const UPLOAD_CDN = process.env.UPLOAD_CDN;

module.exports = {
  framework: 'html',
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
    less: true,   // 默认开启，如果不需要则关闭，减少编译时间
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
      }
    }
  },
  publicPath: UPLOAD_CDN === 'dev' ? '../../' : 'public',
  done() {

  }
};
