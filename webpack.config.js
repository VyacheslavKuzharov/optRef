var webpack = require('webpack');

var config = {
    entry: './index.js',
    output: {
        path: './dist',
        filename: (process.env.NODE_ENV === 'production') ? 'build.min.js' : 'build.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'ng-annotate', exclude: '/node_modules/'},
            {test: /\.html$/, loader: 'raw', exclude: '/node_modules/'},
            {test: /\.scss$/, loader: 'style!css!sass', exclude: '/node_modules/'}
        ]
    },

    plugins: [
        new webpack.DefinePlugin({
            ON_TEST: process.env.NODE_ENV === 'test'
        })
    ],

    watch: true,
    watchOptions: {
        aggregateTimeout: 100
    }
};

if(process.env.NODE_ENV === 'production'){
    config.output.path = './dist';
    config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;