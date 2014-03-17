'use strict';

/*
 *	Commands available for building
 *	- "grunt": run this command to build your site.
 */

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    pageData: grunt.file.readJSON('src/data.json'),

    jade: {
      dist: {
        options: {
          pretty: true,
          data: {
            data: '<%= pageData %>'
          }
        },
        files: {
          "demo/index.html": "src/index.jade"
        }
      }
    }
	
  });

  grunt.registerTask('default', ['jade']);
};