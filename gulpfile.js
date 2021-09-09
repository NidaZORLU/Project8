const gulp = require("gulp");
const {series} = require("gulp");
const cleanCss = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");

const sass = require('gulp-sass')(require('sass'));


jsMin = (cb)=>{
    gulp.src("./src/scripts/*.scripts")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/scripts/"));
    cb();
}

cssMin = (cb)=>{
    gulp.src("./src/styles/*.styles")
        .pipe(cleanCss())
        .pipe(gulp.dest('./dist/styles'  ));
    cb();
}

htmlMin = (cb)=>{
    gulp.src("./src/*.html")
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest("./dist/"));
    cb();
}

sassCom = (cb) => {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest( './dist/styles' + './src/styles'));
    cb();
}


exports.default= series(jsMin, cssMin, htmlMin, sassCom);