var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/index.js',

    output: {
        filename: "all.js",
        path: './dst'
    },

    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },

    resolve: { // 现在你require文件的时候可以直接使用require('file')，不用使用require('file.coffee')
        extensions: ['', '.js', '.json', 'vue'],
        fallback: [path.join(__dirname, './node_modules')],
        alias: {
            'vue$': 'vue/dist/vue',
            // 'vue-router$': 'vue-router/dist/vue-router',
            'src': path.resolve(__dirname, './src'),
            'assets': path.resolve(__dirname, './src/assets'),
            'components': path.resolve(__dirname, './src/components')
        }
    },

    resolveLoader: {
        fallback: [path.join(__dirname, './node_modules')]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by zhaoda')
    ]
}