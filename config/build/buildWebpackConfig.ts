import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { paths, mode, isDev } = options;
    return {
        mode,
        entry: paths.entry, // старт приложения
        output: {
            // куда и как идет сборка приложения
            filename: '[name].[contenthash].js', // [] динамическое название для файлов
            path: paths.build,
            clean: true,
        },

        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(options), // правила loader предназначены для обработки не JS файлов
        },
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    };
}
