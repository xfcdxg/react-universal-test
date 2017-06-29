import { resolve } from 'path'

export const ROOT_PATH   = resolve(__dirname)
export const SRC_PATH    = resolve(ROOT_PATH, 'app')
export const SERVER_PATH = resolve(SRC_PATH, 'server')
export const CLIENT_PATH = resolve(SRC_PATH, 'client')
export const STATIC_PATH = resolve(ROOT_PATH, 'static')
export const SVC_PATH    = resolve(SRC_PATH , 'services')
export const DIST_PATH   = resolve(ROOT_PATH, 'dist')
export const IMG_PATH    = resolve(SRC_PATH, 'images')
export const SVG_PATH    = resolve(IMG_PATH, 'svg')
export const ASSET_PATH  = resolve(ROOT_PATH, 'assets')
export const MODULE_PATH = resolve(ROOT_PATH, 'node_modules')
