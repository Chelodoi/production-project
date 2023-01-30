import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, //файлы с каким расширением обрабатываются
    use: 'ts-loader', //какой loader используется для этого
    exclude: /node_modules/, // исключения
  };
  return [typescriptLoader];
}
