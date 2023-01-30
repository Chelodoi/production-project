import path from 'path';
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'), //старт приложения
  output: {
    //куда и как идет сборка приложения
    filename: '[name].[contenthash].js', //[] динамическое название для файлов
    path: path.resolve(__dirname, 'build'),
    clean: true,
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
  module: {
    rules: [
      //правила loader предназначены для обработки не JS файлов
      {
        test: /\.tsx?$/, //файлы с каким расширением обрабатываются
        use: 'ts-loader', //какой loader используется для этого
        exclude: /node_modules/, // исключения
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], //расширения тех файлов в которых при импорте можно не указывать расширение
  },
};

export default config;
