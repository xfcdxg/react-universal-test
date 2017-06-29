import ruleConfig     from './rules'
import pluginConfig   from './plugins'
import aliasConfig    from './alias'
// import postcssConfig  from './postcss'
import checkEnv       from './env'
import { SRC_PATH } from '../../path.config'

const hashName =  process.env.NODE_ENV === 'production' ? 'chunkhash:8': 'hash:8'

const config = {
  entry : {
    vendor: [ 'babel-polyfill', 'react', 'react-redux', 'react-router', 'redux', 'react-dom' ]
  },
  output: {
    filename     : `scripts/bundle.[${ hashName }].js`,
    chunkFilename: `scripts/[name].[${ hashName }].chunk.js`
  },
  plugins: pluginConfig,
  module : {
    rules: ruleConfig
  },
  resolve: {
    modules: [ 'node_modules', 'src' ],
    alias: aliasConfig
  }
}

export default checkEnv(config)
