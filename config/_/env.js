import webpack from 'webpack'
// import appCachePlugin from 'appcache-webpack-plugin'

const checkEnv = config => process.env.NODE_ENV === 'production' ? prod(config) : dev(config)

export default checkEnv

//测试环境config处理
const dev = config => {
  config.devServer = {
    port  : '9021',
    host  : '0.0.0.0',
    hot   : true,
    inline: true,
    historyApiFallback: true
  }

  config.plugins = config.plugins.concat([
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ])
  return config
}
//生产环境config处理
const prod = config => {
  config.devtool = false
  config.plugins = config.plugins.concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      exclude:/\.min\.js$/,
      mangle:true,
      output: {
        comments: false,  // remove all comments
      },
      compress: {
        warnings: false
      }
    })
    // new appCachePlugin({
    //   cache: ['bundle.js', 'vendor.bundle.js'],
    //   network: ['*'],  // No network access allowed!
    //   fallback: ['index.html'],
    //   settings: [],
    //   exclude: [],  // Exclude file.txt and all .js files
    //   output: 'manifest.appcache'
    // })
  ])
  return config
}
