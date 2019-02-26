// webpack.base.conf.js 文件
const path = require('path');
const APP_PATH = path.resolve(__dirname, '../src');
const DIST_PATH = path.resolve(__dirname, '../dist');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        app: './src/index.js',
        framework: ['react', 'react-dom'],
    },
    output: {
        filename: "js/bundle.js",
        path: DIST_PATH
    },
    module: {
        rules: [{
                test: /(\.jsx|\.js)$/,
                use: "babel-loader",
                include: APP_PATH
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                            loader: "css-loader" //获取引用资源，如@import,url()
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ]
                })
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader" //自动加前缀
                        },
                        {
                            loader: "less-loader"
                        }
                    ]
                })
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader:"style-loader"
                    },
                    {
                        loader: "css-loader"
                    },
                    {
                        loader: "postcss-loader"
                    },
                    {
                        loader: "sass-loader"
                    }
                ]
            }
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.esm.js',
            '@': APP_PATH,
            'src': APP_PATH,
            'components': 'src/components'
        }
    },
    plugins: [
        new ExtractTextPlugin('css/[name].[hash].css')
    ]
};