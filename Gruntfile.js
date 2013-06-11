/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      dustjs: {
        compile: {
          files: {
            "js/templates.js": ["templates/**/*.dust"]
          }
        }
      },

      watch: {
        scripts: {
          files: ['templates/**/*.dust'],
          tasks: ['dustjs']
        }
      }
    });

    grunt.loadTasks("tasks");

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-dustjs');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['dustjs', 'watch']);

};
