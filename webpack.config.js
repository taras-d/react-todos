module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devtool: 'source-map',
    module: {
        rules: [
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'] }
                }
            }
        ]
    }
}