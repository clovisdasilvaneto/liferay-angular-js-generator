'use strict';

const gulp = require('gulp');
const liferayThemeTasks = require('liferay-theme-tasks');
const concat = require('gulp-concat');

const libsFolder = "./node_modules/";

liferayThemeTasks.registerTasks({
	gulp: gulp,
	hookFn: function(gulp) {
		gulp.hook('before:build:src', function(done){
			gulp.src([libsFolder+'angular/angular.min.js', libsFolder+'angular-ui-router/release/angular-ui-router.min.js'])
				.pipe(concat('angular-libs.js'))
				.pipe(gulp.dest('./src/js'));
			done();
		});
	}
});
