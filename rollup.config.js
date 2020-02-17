import typescript from 'rollup-plugin-typescript2';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';

import pkg from './package.json';

export default {
  input: 'src/js/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named',
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    resolve({
      browser: true,
    }),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: '**/stories/**',
      clean: true,
    }),
    commonjs({
      include: ['node_modules/**'],
      exclude: ['**/*.stories.js'],
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render'],
      },
    }),
    sass({
      insert: true,
    }),
  ],
};
