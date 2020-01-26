const path = require('path')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV !== 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 8111,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    }
  },
  css: {
    loaderOptions: {
      // scss全局变量
      scss: {
        prependData: `@import "~@/styles/variables.scss";`
      }
    }
  },
  configureWebpack: config => {
    let plugins = []
    if (isDev) {

    } else {
      plugins = [
        // 去除console
        new UglifyjsWebpackPlugin({
          uglifyOptions: {
            warnings: false,
            compress: {
              drop_debugger: true,
              drop_console: true,
              pure_funcs: ['console.log']
            }
          },
          sourceMap: false,
          parallel: true
        }),
        // gZip
        new CompressionWebpackPlugin({
          filename: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.(js|css|json|html|ico|svg)(\?.*)?$/i,
          threshold: 10240,
          minRatio: 0.8
        }),
        // 打包分析
        new BundleAnalyzerPlugin()
      ]
    }
    config.plugins = [
      ...config.plugins,
      ...plugins
    ]
  },
  chainWebpack(config) {
    // 禁止预加载
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')

    // 路径简写
    config.resolve.alias
      .set('@', resolve('src'))

    // 开发环境源码映射
    config
      .when(
        process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )
  }
}
