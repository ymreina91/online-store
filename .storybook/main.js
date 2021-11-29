const path = require("path");

module.exports = {
  stories: ['../pages/*.stories.@(ts|tsx|js|jsx|mdx)'],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              auto: true,
            },
          },
        },
        'sass-loader',
      ],
      include: path.resolve(__dirname, '../'),
    });
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../components"),
      "@lib": path.resolve(__dirname, "../lib"),
      "@redux": path.resolve(__dirname, "../redux"),
      "@pages": path.resolve(__dirname, "../pages"),
      "@styles": path.resolve(__dirname, "../styles"),
      "@hooks": path.resolve(__dirname, "../hooks"),
    };
    return config;
  },
};
