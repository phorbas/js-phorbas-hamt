import rpi_jsy from 'rollup-plugin-jsy'
import rpi_dgnotify from 'rollup-plugin-dgnotify'
import rpi_resolve from '@rollup/plugin-node-resolve'

const _cfg_ = {
  external: [],
  plugins: [
    rpi_jsy({defines: {PLAT_ESM: true}}),
    rpi_resolve(),
    rpi_dgnotify(),
  ]}

const _out_ = { sourcemap: true }


const configs = []
export default configs

add_jsy('index')


function add_jsy(src_name, opt={}) {
  const input = `code/${src_name}${opt.ext || '.jsy'}`

  configs.push({ ... _cfg_, input,
    output: { ..._out_, file: `esm/${src_name}.mjs`, format: 'es' }})
}
