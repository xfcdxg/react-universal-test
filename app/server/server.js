import { configServer } from './config'
import { PORT } from '../../server.config'

const server = configServer()

server.listen(PORT, () => {
  console.log('server run at %s', PORT)
})
