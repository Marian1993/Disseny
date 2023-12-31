const {src,watch, dest, series, paralel} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
//var link = require('gulp-coffeelint');


function compilaFlex() {
    return src('flex-grid/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('flex-grid/css'));
}

function compilaFlexKitten() {
    return src('kittens/scss/**/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('kittens/css'));
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
function compilaColors() {
    return src('colors/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('colors/css'));
}

function vigilaColors(){
    watch('colors/*.scss', compilaColors);
}
//watch('scss/**/*.scss',{ interval:1000 usePolling:true}, compilaFlex); >ficar dinsuna function

function vigilaSCSS(){
    watch('flex-grid/scss/**/*.scss', compilaFlex);
}

function vigilaSCSSKitten(){
    watch('kittens/scss/**/*.scss', compilaFlexKitten);
}
exports.compilaEstils = compilaSCSS;
exports.default = defaultTask;
exports.compilaflex = compilaFlex;
exports.vigila = vigilaSCSS;
exports.moixos = vigilaSCSSKitten;
exports.colors = vigilaColors;