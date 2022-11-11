import scss from "rollup-plugin-scss";

export default {
  input: "./src/main.js",
  output: {
    file: "./public/main.bundle.js",
    format: "es",
    // sourcemap: "true",
  },
  plugins: [scss()],
};
