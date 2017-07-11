import { configServer } from './config'
import { PORT } from '../../server.config'

configServer().listen(PORT, () => {
  console.log('server run at %s', PORT)
})
