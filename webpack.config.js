var Webpack = require("webpack");
var path = require("path");

module.exports = {
    //entry: ["./entry.js"],
    entry: './src/main',
    output: {
        //path: __dirname,
        path: path.join(__dirname, './dist'),
        //filename: "bundle.js"
        filename: 'mix.js',  //[name]这里是webpack提供的根据入口文件自动生成的名字
        publicPath: './dist' //公共文件生成的地址
    },
    // 服务器配置
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    module: {
    	loaders: [
            // html模板
            { test: /\.(html|tpl)$/, loader: 'html-loader' },
            // css 
    		{ test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer'},
            // scss
            { test: /\.scss/, loader: 'style!css!sass?sourceMap'},
            // 图片加载
            // 限制大小为300k，添加到这！并且会按照文件大小, 或者转化为 base64, 或者单独作为文件
            // 在大小限制后可以加上&name=./[name].[ext]，会将我们的文件生成在设定的文件夹下。
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'url-loader?limit=307200'},
            // 解析.vue文件
            { test: /\.vue$/, loader: 'vue-loader' },
            // 转化ES6的语法
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            
    	]
  	},
    plugins: [
        new Webpack.BannerPlugin("这里是打包文件头部注释！")
    ],
    // 转化成es5的语法
    // babel: {
    //     presets: ['es2015'],
    //     plugins: ['transform-runtime']
    // },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['.js', '.vue']
    }
}