import { resolve }       from 'path'
import os                from 'os'
import webpack           from 'webpack'
import htmlWebpackPlugin from 'html-webpack-plugin'
import extractTextPlugin from 'extract-text-webpack-plugin'
import isomorphicPlugin  from 'webpack-isomorphic-tools/plugin'
import happyPack         from 'happypack'
import { ASSET_PATH }    from '../../path.config'

//webpack common plugins
const happyThreadPool = happyPack.ThreadPool({ size: os.cpus().length });
const isProduction    = process.env.NODE_ENV === 'production'
const hashName        = isProduction ? 'chunkhash:8': 'hash:8'

const plugin = [
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
    id: 'happybabel',
    loaders: ['babel-loader'],
    threadPool: happyThreadPool,
    cache: true,
    verbose: true
  }),
  new happyPack({
    id: 'happystyle',
    loaders: [ 'style', 'css', 'postcss', 'sass' ],
    threadPool: happyThreadPool,
    cache: true,
    verbose: true
  }),
  new extractTextPlugin('style/[name].css', { allChunks: true }),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new isomorphicPlugin({
    assets: {
      images: {
        extensions: ['png', 'jpg', 'gif', 'ico', 'svg']
      }
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name     : 'vendor',
    filename : `scripts/vendor.bundle.[${ hashName }].js`,
    minChunks: 'Infinity'
  })
]

export default plugin
