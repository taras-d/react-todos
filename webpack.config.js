module.exports = {
    entry: './src/app.jsx',
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
                test: /\.jsx$/, 
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react'] }
                }
            }
        ]
    }
}