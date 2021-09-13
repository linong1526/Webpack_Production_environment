* 项目 node环境之下
   * npm install
   * npm run server
   * npm run bulid 
* webpack
    * 什么是webpack
       * 模块打包工具  
    * 工作原理： JSX -> webpack(babel) -> React.createElement -> 输出到浏览器
    * 从0搭建基于webpack到react项目环境
        * 创建目录
        * 安装依赖
        * 配置webpack 
        * 启动项目 
    * webpack与gulp
        * gulp:是一个基于任务的构建工具(命令式工具)  
         ```javascript
             //gulp:sass-> scc
             //创建一个任务
                gulp.task('buildSass',(done)=>{
                    //编译sass需要手动编译代码去实现(命令式编程)
                    //1.匹配sass文件
                    gulp.src('./src/sass/*.scss')
                    //2.编译sass
                    .pipe(sass())
                    //3.输出为压缩版本
                    .pipe(gulp.dest('./dist))
                    //4.输出压缩版本并改名

                })
              //编译sass:运行这个任务
              // gulp buildSass
              export.compileEs6=function(){
                  
              }
         ```
    * webpack:基于配置的构建工具
          > 在项目根目录下创建`webpack.config.js`(是一个符合commonJS规范的模块)
    * webpack 常用加载器
       * js:babel-loader 
       * css:css-loader + style-loader
       * sass:sass-loader
       * less:less-loader
       * 文件: file-loader


## 从零搭建基于webpack的React环境

### 1. 创建目录结构

* dist
* public
* src
* webpack.config.js
* package.json

### 2. 安装依赖npm

* react & react-dom
* @babel/core & babel-loader & @babel/preset-react
* webpack & webpack-cli & webpack-dev-server
* html-webpack-plugin

### 3. webpack配置

* entry
* output
* devServer
* loader
  > module.rules
* plugins
* alias
  > resolve.alias