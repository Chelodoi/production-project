import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, //файлы с каким расширением обрабатываются
    use: 'ts-loader', //какой loader используется для этого
    exclude: /node_modules/, // исключения
  };

  const svgLoader = {
    test: /\.svg$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }],
  };
  const babelLoader = {
    test: /\.(ts|tsx|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          ['i18next-extract', { locales: ['ru', 'en'], keyAsDefaultValue: true }],
          // […] your other plugins […]
        ],
      },
    },
  };
  const fileLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  };

  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module'),
            localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };
  return [fileLoader, svgLoader, babelLoader, typescriptLoader, scssLoader];
}
