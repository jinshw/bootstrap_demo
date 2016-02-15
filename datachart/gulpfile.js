var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var replace = require('gulp-replace');
var clean = require('gulp-clean');
var addsrc = require('gulp-add-src');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
var routeList = require('./config/route.json');
//var config = require('./config/config.js');
var path={
    htmlHead:'src/html/head.html',
    htmlFoot:'src/html/foot.html',
    jsSpec:'src/static/**/*.js',
    jsCore:'src/core/*.js',
    jsTool:'src/tool/**/*.js',
    pagelet:'src/pagelet/',
    jsStart:'src/start/*.js',
    htmlDist:'datachart/staticpage',
    jsDist:'datachart/static/js',
    cssDist:'datachart/static/css'
}
//1. 合并html
gulp.task('concatHTML',function(){
    routeList.routelist.forEach(function(route){
        var a = [path.htmlHead];
        route.pagelet.forEach(function(pname){
            var _path = path.pagelet+'data/'+ pname;
            a.push(_path);
        });
        var htmlPaths = a.concat(path.htmlFoot);
        console.log(htmlPaths);
        gulp.src(htmlPaths)
            .pipe(concat(route.path))
            .pipe(replace(/__TITLE__/,route.title))
            .pipe(replace(/__HEAD__CSS__/,route.path.replace('.html','')+'.css'))
            .pipe(gulp.dest(path.htmlDist));
    });

});

//2. 合并js
gulp.task('concatJS',function(){
    var _paths = [
        path.jsSpec,
        path.jsTool,
        path.pagelet+'js/*.js'
    ];
    gulp.src(_paths)
        .pipe(concat('datachart.js'))
        .pipe(gulp.dest(path.jsDist));
});

// 3.合并CSS
gulp.task('concatCSS',function(){
    routeList.routelist.forEach(function(route){
        var _path = route.css;
        var _pathTemp = [];
        var cssName = route.path.replace('.html','')+'.css';
        console.log("concatCSS--cssName="+cssName);
        _path.forEach(function(cssPath){
            _pathTemp.push("src/css/"+cssPath);
        });
        console.log(_pathTemp);
        gulp.src(_pathTemp)
            .pipe(concat(cssName))
            .pipe(gulp.dest(path.cssDist));
    });
});


//4.去除console、压缩

//5.clean、liverload、watch
gulp.task('connect',function(){
   connect.server({
       root:'datachart',
       port:'8444',
       liverload:true
   });
});

gulp.task('cleanHTML',function(){
    return gulp.src(path.htmlDist + '/*.html',{read:false}).pipe(clean({force:true}));
});
gulp.task('cleanJS',function(){
    return gulp.src(path.jsDist+'/*.js',{
            read:false
        })
        .pipe(clean({force:true}));
});
gulp.task('cleanCSS',function(){
    return gulp.src(path.cssDist+'/*.css',{
            read:false
        })
        .pipe(clean({force:true}));
});

gulp.task('watch',function(){
    var _temp = [path.jsSpec,path.jsTool,path.pagelet+'/js/*.js'];
    gulp.watch(['./src/**/*.html'],['reloadHTML']);
    gulp.watch(_temp,['reloadJS']);
    gulp.watch('./config/*.*',['reloadJS','reloadHTML']);
    gulp.watch('./src/css/*.css',['reloadCSS']);
});

gulp.task('clean',['cleanHTML','cleanJS','cleanCSS']);
gulp.task('reloadHTML',['cleanHTML','concatHTML']);
gulp.task('reloadJS',['cleanJS','concatJS']);
gulp.task('reloadCSS',['cleanCSS','concatCSS']);
gulp.task('default',['clean','concatHTML','concatJS','concatCSS','connect','watch']);

