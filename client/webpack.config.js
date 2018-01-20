const path = require('path');

module.exports = {
    entry: './src/end-the-boss.ts',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js' ]
    },
    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, 'dist')
    }
};