module.exports = {
    entry: './src/index.js',
    module: 
    {
        rules: 
        [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!less-loader'
            }
        ]
    },
    resolve: 
    {
        extensions: ['*', '.js', '.jsx']
    },
    output: 
    {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: 
    {
        contentBase: './dist'
    }
}