module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['.tmp/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> ' +
                '<%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    jasmine: {
        src: 'src/features/**/*.js',
        options: {
            specs: 'test/**/*.js',
        }
    },
    jshint: {
      files: [
          'Gruntfile.js',
          'src/features/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish'),
        globals: {
          angular: true,
          console: true,
          module: true,
          document: true
        }
      },
      test: {
          options: {
              jshintrc: 'test/.jshintrc'
          },
          src: ['test/**/*.js']
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'jasmine'],
      karma: {
          files: ['src/features/**/*.js', 'test/**/*.js'],
          tasks: ['karma:unit:run']
      }
    },
    wiredep: {
        task: {
            src: [
                'src/index.html'
            ],
            options: {
            }
        }
    },
    connect: {
        server: {
            options: {
                port: 9000,
                base: 'src',
                keepalive: true,
                livereload: true
            }
        }
    },
    karma: {
        unit: {
            configFile: 'karma.conf.js',
            background: true,
            singleRun: false
        },
        continuous: {
            configFile: 'karma.conf.js',
            singleRun: true,
        }
    },
    ngAnnotate: {
        dist: {
            files: [{
                expand: true,
                cwd: 'src/features',
                src: '**/*.js',
                dest: '.tmp/features'
            }]
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-ng-annotate');

  grunt.registerTask('test', [
      'jshint',
      'karma:continuous'
  ]);

  grunt.registerTask('autotest', [
      'karma:unit:start',
      'watch'
  ]);

  grunt.registerTask('start', [
      'connect'
  ]);

  grunt.registerTask('build', [
      'jshint',
      'karma:continuous',
      'ngAnnotate',
      'concat',
      'uglify'
  ]);

  grunt.registerTask('default', [
      'jshint',
      'karma:continuous'
  ]);

};
