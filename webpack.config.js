const path = require('path');

module.exports = {
    target: 'web',
    entry: ['./src/main.ts','./src/scss/main.scss'],
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            },
            {
                test: /\.s(a|c)ss$/,
                use: [ {
                    loader: 'file-loader',
                    options: {outputPath: 'css', name: '[name].min.css'}
                    },
                    'sass-loader',
                ],
                include: [path.resolve(__dirname,'src')]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        hot: false,
        liveReload: true,
        watchFiles: {
            paths: ['src/**/*', 'public/**/*']
        },
    }
}