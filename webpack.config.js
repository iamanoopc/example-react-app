module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        modules: [__dirname, 'node_modules'],
        alias: {
            Message: 'src/components/Message.js',
            Form: 'src/components/Form.js',
            AppComponent : 'src/components/AppComponent.js',
            Nav : 'src/components/Nav.js',
            Weather : 'src/components/Weather.js',
            WeatherForm : 'src/components/WeatherForm.js',
            WeatherMessage : 'src/components/WeatherMessage.js',
            openWeather : 'src/components/openWeather.js',
            About : 'src/components/About.js' 
        },
        extensions: ['.js']
    },
    module : {
        loaders: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['react', 'es2015', 'stage-0']
                }
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
}