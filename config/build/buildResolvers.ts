import { ResolveOptions } from 'webpack';

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], //расширения тех файлов в которых при импорте можно не указывать расширение
  };
}
