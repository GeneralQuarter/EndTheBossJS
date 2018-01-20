var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
    var tsResult = tsProject.src().pipe(tsProject());

    return tsResult.js.pipe(gulp.dest("dist"));
});

gulp.task("copy-client", function () {
    return gulp.src([
        "../client/src/model/**/*.ts",
        "../client/src/game-settings.ts",
        "../client/src/utils/logger.ts"
    ], {base: "../client/src/"}).pipe(gulp.dest("src/client"));
});