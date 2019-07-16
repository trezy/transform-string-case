import { sizeSnapshot } from 'rollup-plugin-size-snapshot'
import babel from 'rollup-plugin-babel'
import notify from 'rollup-plugin-notify'
import progress from 'rollup-plugin-progress'
import resolve from 'rollup-plugin-node-resolve'
import visualizer from 'rollup-plugin-visualizer'





export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'transform-string-case',
  },
  plugins: [
    progress(),
    resolve(),
    babel({ exclude: 'node_modules/**' }),
    sizeSnapshot(),
    visualizer(),
    notify(),
  ],
}
