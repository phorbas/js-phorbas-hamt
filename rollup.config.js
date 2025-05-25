import rpi_jsy from 'rollup-plugin-jsy'
import rpi_resolve from '@rollup/plugin-node-resolve'

const external = id => /^\w+:|^#/.test(id)

export const pkg_cfg = {
  plugins: [ rpi_jsy(), rpi_resolve() ],
  external,
  output: { dir: 'esm', format: 'es', sourcemap: true },
  input: {
    'index': './code/index.jsy',
  },
}

export const pkg_test_cfg = {
  plugins: [ rpi_jsy(), rpi_resolve() ],
  external,
  output: { dir: 'esm-test', format: 'es', sourcemap: true },
  input: './test/unittest.js',
}

export default [
  pkg_cfg,
  pkg_test_cfg,
]

