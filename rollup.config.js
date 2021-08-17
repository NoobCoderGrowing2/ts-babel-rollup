import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import { DEFAULT_EXTENSIONS } from "@babel/core";
import resolve from "rollup-plugin-node-resolve";

export default {
  input: "src/components/index.tsx",
  output: {
    file: "dist/index.esm.js",
    format: "esm",
  },
  plugins: [
    resolve(),
    typescript(),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
      extensions: [...DEFAULT_EXTENSIONS, ".ts", ".tsx"],
    }),
  ],
  external: ["react", "react-dom"],
};
