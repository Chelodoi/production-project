import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, //файлы с каким расширением обрабатываются
    use: 'ts-loader', //какой loader используется для этого
    exclude: /node_modules/, // исключения
  };
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  };
  return [typescriptLoader, scssLoader];
}
