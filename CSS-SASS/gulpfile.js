const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));


function compilaSCSS() {
    return gulp.src('scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}
function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.compilaEstils = compilaSCSS;
exports.default = defaultTask;
