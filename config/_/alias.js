import { resolve } from 'path'

import { SRC_PATH, SVC_PATH, MODULE_PATH, IMG_PATH, SVG_PATH } from '../../path.config'

const alias = {
  'images'   : IMG_PATH,
  'svg'      : SVG_PATH,
  'services' : SVC_PATH,
  'common'   : resolve(SRC_PATH, 'common'),
  'styles'   : resolve(SRC_PATH, 'styles')
}

export default alias
