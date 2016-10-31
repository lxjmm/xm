var gulp=require('gulp');
var fs=require('fs');
//本地服务器模块
var connect=require('gulp-connect');
//本地服务器编译响应
var respond=require('gulp-respond');
//压缩js
var uglify=require('gulp-uglify');
//合并js
var concat=require('gulp-concat');

var ngAnnotate=require('gulp-ng-annotate');
var ngmin=require('gulp-ngmin'); 

gulp.task('build',function(){
	gulp.src(['./src/js/app.js','./src/js/config.js','./src/js/directive.js','./src/js/controller.js','./src/often/js/zepto.min.js','./src/js/IScroll.js','./src/js/swiper.min.js'])
		.pipe(ngAnnotate())
		.pipe(ngmin())
		.pipe(uglify())
		.pipe(concat('ng.min.js'))
		.pipe(gulp.dest('./src/YZ/'))
})
gulp.task('connect',function(){ 
	var params={};
	connect.server({
		root:['./bower_components','./node_modules','./src/often','./src/css','./src/js','./src/music','./src/view'],
		port:8002,
		liverload:true,
		middleware:function(){
			return [function(req, res, next){
				console.log('开始操作');
				next();
				},function(req,res){
				var path=req.url.split('?').shift();
					/*path=path=='/' ? './first.html':path;
					url='angular5'+path; 
					if(!fs.existsSync(url)){
						url='bower_components'+path;
					}*/
				
				if(path == "/"){
					path = "/index.html"
				}
				if(/bower/.test(path)){
					url = "." + path;
				}else{
					url = "./src" + path;
				}
				
				
				gulp.src(url)
					  .pipe(respond(res))
			}]
			
		}
	})
})

gulp.task('server',['build','connect'])



/*
	1.ajax渲染
	2.gulp 压缩 监听 加密
	3.首页判断密码
	4.跨域请求数据
	
*/