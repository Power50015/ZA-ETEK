module.exports = {
  src: "src/**/*",
  tmp: "tmp",
  dist: "dist",
  images: {
    srcImgs: "src/img/**/*.{png,jpg,,svg}",
    tmpImgs: "tmp/img/",
    distImgs: "dist/img/"
  },
  styles: {
    srcCSS: "src/css/*.css",
    tmpCSS: "tmp/css/",
    distCSS: "dist/css/",
    injectTmpCss: "tmp/css/*.css",
    injectDistCss: "dist/css/*.min.css"
  },
  scripts: {
    srcJS: "src/js/*.js",
    tmpJS: "tmp/js/",
    distJS: "dist/js/",
    injectTmpJs: "tmp/js/*.js",
    injectDistJs: "dist/js/*.min.js"
  },
  templates: {
    srcHTML: "src/html/*.html",
    tmpIndex: "tmp/index.html",
    distIndex: "dist/index.html"
  }
}