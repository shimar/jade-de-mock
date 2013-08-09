module.exports = function(grunt) {

  // project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          pretty: true
        },
        files: {
          "dst/index.html": ["src/jade/index.jade"]
        }
      }
    },
    less: {
      compile: {
        options: {
          compress: true,
          syncimport: true
        },
        files: {
          "dst/stylesheets/<%= pkg.name %>.min.css": "src/less/jade-de-mock.less"
        }
      }
    },
    coffee: {
      compile: {
        files: {
          "dst/javascripts/<%= pkg.name %>.js": "src/coffee/*.coffee"
        }
      }
    },
    clean: {
      build: ["dst"]
    }
  });

  // load npm tasks.
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // define default tasks.
  grunt.registerTask('default', ['clean', 'jade', 'less', 'coffee']);

};
