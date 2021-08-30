import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { DEFAULT_EXTENSIONS } from '@babel/core';

export default {
  input: 'src/icons/index.tsx',
  output: {
    file: 'lib/index.esm.js',
    format: 'esm',
  },
  plugins: [
    typescript(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
      retainLines: true,
    }),
  ],
  external: ['react', 'react-dom'],
};
