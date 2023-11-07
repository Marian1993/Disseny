const {src,watch, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//var link = require('gulp-coffeelint');


function compilaFlex() {
    return src('flex-grid/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('flex-grid/css'));
}
function compilaSCSS() {
    return src('scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('dist/css'));
}
function defaultTask(cb) {
    // place code for your default task here
    cb();
}
//watch('scss/**/*.scss',{ interval:1000 usePolling:true}, compilaFlex); >ficar dinsuna function

function vigilaSCSS(){
    watch('flex-grid/scss/**/*.scss', compilaFlex);
}
exports.compilaEstils = compilaSCSS;
exports.default = defaultTask;
exports.compilaflex = compilaFlex;
exports.vigila = vigilaSCSS;
