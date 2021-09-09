const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

// gulp.task -> gorev olusturmak icin
// gulp.src -> kaynak dosyalari
// gulp.dest -> hedef dizinimiz
// gulp.watch -> izleme ve gorev calistirma
// pipe -> modify

gulp.task('message',()=>{
    console.log("Gulp running..");
});


gulp.task('kopyaHtml',()=>{
    gulp.src('src/index.html')
        .pipe(gulp.dest('./dist/'));
})

gulp.task('jsMin',()=>{
    gulp.src('src/assets/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('cssMin',()=>{
    gulp.src('src/assets/css/style.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('jsCon',()=>{
    gulp.src('src/assets/js/script.js')
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('sass',()=>{
    gulp.src('src/assets/sass/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('izle',()=>{
    gulp.watch('src/assets/css/style.css');
    gulp.watch('src/assets/js/script.js');
})

gulp.task('default',['message','imageMin','kopyaHtml','cssMin' ,'jsCon' , 'sass']);