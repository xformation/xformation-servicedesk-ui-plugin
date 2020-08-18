const sass = require('node-sass');

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: {
                    'src/css/servicedesk.dark.css': 'src/sass/servicedesk.dark.scss',
                    'src/css/servicedesk.light.css': 'src/sass/servicedesk.light.scss',
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
};
