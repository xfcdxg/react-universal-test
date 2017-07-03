import { resolve }       from 'path'
import os                from 'os'
import webpack           from 'webpack'
import htmlWebpackPlugin from 'html-webpack-plugin'
import extractTextPlugin from 'extract-text-webpack-plugin'
import happyPack         from 'happypack'
import { ASSET_PATH }    from '../../path.config'

//webpack common plugins
const happyThreadPool = os.cpus().length
const isProduction    = process.env.NODE_ENV === 'production'
const hashName        = isProduction ? 'chunkhash:8': 'hash:8'

const plugin = [
  new webpack.LoaderOptionsPlugin({
    options: {
      eslint: {
        configFile: './.eslintrc.js',
        failOnWarning: true, // eslint报warning了就终止webpack编译
        failOnError: true   // eslint报error了就终止webpack编译
      }
    }
  }),
  new htmlWebpackPlugin({
    template: resolve(ASSET_PATH, 'index.ejs'),
    inject  : true,
    cache   : true,
    minify  : {    //压缩HTML文件
      removeComments    : true,    //移除HTML中的注释
      collapseWhitespace: true,   //删除空白符与换行符
      minifyJS          : true
    },
    isProduction,
    reactComponent: '',
    serviceName: 'OTOSaaS - Lib'
  }),
  new happyPack({
    loaders: [
      'babel-loader'
    ],
    threads: happyThreadPool,
    id: 'happybabel',
    cache: true,
    verbose: true
  }),
  new happyPack({
    loaders: [
      'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'
    ],
    threads: happyThreadPool,
    id: 'happystyle',
    cache: true,
    verbose: true
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name     : 'vendor',
    filename : `scripts/vendor.bundle.[${ hashName }].js`,
    minChunks: 'Infinity'
  })
]

export default plugin
