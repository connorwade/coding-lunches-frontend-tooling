const sass = require("esbuild-plugin-sass");

require("esbuild")
  .build({
    logLevel: "info",
    entryPoints: ["src/main.js"],
    bundle: true,
    outfile: "./public/main.bundle.js",
    plugins: [sass()],
  })
  .catch(() => process.exit(1));
