import * as path from "path";

export default {
  webpack(config, env, helpers) {
    /** https://github.com/preactjs/preact-cli/blob/master/packages/cli/lib/lib/webpack/webpack-base-config.js#L173 */
    config.module.rules[4].include = [
      path.resolve(__dirname, "src", "pages"),
      path.resolve(__dirname, "src", "components"),
    ];

    config.module.rules[5].exclude = [
      path.resolve(__dirname, "src", "pages"),
      path.resolve(__dirname, "src", "components"),
    ];
  },
};
