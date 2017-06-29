import { resolve } from 'path'
import { CLIENT_PATH, DIST_PATH, ASSET_PATH, SRC_PATH } from '../path.config'
import config from './_'

export const define = name => {
  const outputPath         = resolve(DIST_PATH, name)
  config.entry.app         = CLIENT_PATH
  config.output.path       = outputPath
  config.output.publicPath = `/${ name }/`
  if(config.devServer) { //测试
    config.devServer.historyApiFallback = { index: `/${ name }/` }
  }

  return config
}

export default config
