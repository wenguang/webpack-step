var Webpack = require("webpack");
module.exports = {
    entry: ["./entry.js"],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
    	loaders: [
    		{test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.png|jpg|jpeg$/, loader: 'url-loader?limit=307200'} 
            //限制大小为300k，添加到这！并且会按照文件大小, 或者转化为 base64, 或者单独作为文件
            //在大小限制后可以加上&name=./[name].[ext]，会将我们的文件生成在设定的文件夹下。
    	]
  	},
    plugins: [
        new Webpack.BannerPlugin("这里是打包文件头部注释！")
    ]
}