import path from 'path'
import extractTextPlugin from 'extract-text-webpack-plugin'
import { SRC_PATH, MODULE_PATH } from '../../path.config'
// const svgDirs = [
//   require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
// ]
//webpack loaders
const loader =
[
  {
    test: /\.jsx?$/,
    loader: 'happypack/loader?id=happybabel',
    include: [ SRC_PATH, MODULE_PATH ]
  },
  {
    test: /\.(css|scss|sass)$/,
    include: [ SRC_PATH, MODULE_PATH ],
    loader: 'happypack/loader?id=happystyle'
  },
  {
    test: /\.(png|jpg|gif)$/,
    include: [ SRC_PATH, MODULE_PATH ],
    loader: 'url',
    query : {
      limit: 1,
      name : 'images/[name].[ext]?[hash:8]'
    }
  },
  // {
  //   test: /\.(svg)$/i,
  //   loader: 'svg-sprite',
  //   include: [
  //     require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  //     require.resolve('@boluome/oto_saas_web_app_component').replace(/index\.js$/, ''),
  //     SRC_PATH,  // 2. 自己私人的 svg 存放目录
  //     MODULE_PATH
  //     ]
  // },
]

export default loader
