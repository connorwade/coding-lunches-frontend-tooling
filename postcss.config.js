import cssnano from "cssnano";
import level4 from "level4";

export default {
  plugins: [
    level4(),
    cssnano({
      preset: "default",
    }),
  ],
};
