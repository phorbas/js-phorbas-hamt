import rpi_jsy from 'rollup-plugin-jsy'
import rpi_dgnotify from 'rollup-plugin-dgnotify'
import rpi_resolve from '@rollup/plugin-node-resolve'

const _rpis_ = defines => [
  rpi_jsy({defines}),
  rpi_resolve(),
  rpi_dgnotify()]

const cfg_with = {
  external: [],
  plugins: _rpis_({PLAT_ESM: true})}

const _out_ = { sourcemap: true }


export default [
  ... add_jsy('index'),
]


function * add_jsy(src_name, opt={}) {
  const input = `code/${src_name}${opt.ext || '.jsy'}`

  yield ({ ... cfg_with, input,
    output: { ..._out_, file: `esm/${src_name}.mjs`, format: 'es' }})
}
