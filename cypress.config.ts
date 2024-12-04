import { defineConfig } from "cypress";
import * as path from "path";

export default defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
      webpackConfig: {
        resolve: {
          alias: {
            "@frontend": path.resolve(__dirname, "./src"),
          },
        },
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: [
                {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-typescript'],
                    plugins: [
                      ['@babel/plugin-proposal-decorators', { legacy: true }],
                      ['@babel/plugin-proposal-class-properties', { loose: true }]
                    ]
                  }
                }
              ],
              exclude: /node_modules/
            }
          ]
        }
      },
    },
  },
});
