
import gulp from 'gulp'

import gulpSass from 'gulp-sass'
import sassCompiler from 'sass'

const sass = gulpSass(sassCompiler)

function CompileScss(){
    return gulp.src('./src/scssFiles/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
}

function watcher(){
    gulp.watch(['./src/scssFiles/*.scss'], CompileScss)
}

export default gulp.series(CompileScss, watcher)