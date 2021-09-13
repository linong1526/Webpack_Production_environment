const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
module.exports={
    //webpack的核心配置
    mode:'development',
    //1.入口entry : String | Array | Object
    //一个也可以多个
    entry:'./src/index.js',

    //2.出口output:把编译后的代码输出到指定目录
    output:{
        path:path.join(__dirname,'dist')
    },
    //3.加载器
    module:{
        rules:[
            //babel-loader + @babel/core
            {
                test:/\.js$/,
                //loader:'babel-loader',//简写
                use:{
                    loader:'babel-loader',
                    options:{
                        // plugins:[],//插件
                        presets:['@babel/preset-react']//插件集合
                    }
                }

            },
            //css加载器：css-loader + style-loader
            {
                test:/\.css$/,
                use:['css-loader','style-loader']
                // use:[{
                //     loader:'css-loader'
                // },{
                //     loader:'style-loader',
                //     options:[]
                // }]
            },
            //sass加载器：sass-loader + sass
            {
                test:/\.s[ac]ss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            //文件加载器 url-loader + file-loader
            {
                test:/\.(png|jep?g|gif|webp)/i,
                use:{
                    loader:'url-loader',
                    options:{
                        //设置一个文件大小临界值：
                        //* 小于等于这个值的图片会自动转成base64编码
                        // * 大于这个值，采用url形式
                        limit:10000,
                        //格式化图片名称：该目录相对于output输出目录
                        name:'img/[name].[hash:5].[ext]'
                    }
                }
            }
        ]
    },
    //4.pluigi插件
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            //改名
            //filename:'login.html'
            hash:true,
        })
    ],

    //5.开发服务器
    devServer:{
        static:{
            directory:path.join(__dirname,'public'),
        }
    }
}