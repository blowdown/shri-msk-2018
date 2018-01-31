const webpack = require('webpack');

module.exports = {
    entry: __dirname + '/src/index.jsx',
    output: {
        path: __dirname + '/build',
        publicPath: '/build/',
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: __dirname,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                include: __dirname,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin()
    ],
    devtool: 'source-map'
};
