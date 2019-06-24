//npm install --save-dev grunt-contrib-watch grunt-contrib-uglify grunt-postcss pixrem autoprefixer grunt-contrib-imagemin grunt-contrib-sass grunt-contrib-clean grunt-contrib-jshint grunt-notify

module.exports = function(grunt) {

    grunt.initConfig({

        // Watch
        watch: {
            livereload: {
                files: [
                    '**/*.css',
                    '**/*.html'
                ],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
};
