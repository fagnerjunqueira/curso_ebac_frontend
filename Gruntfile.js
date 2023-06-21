module.exports = function(grunt) {

    grunt.initConfig({
  
      less: {
        development: {
          options: {
            compress: false,
            yuicompress: false,
            optimization: 2
          },
          files: {
            'dist/css/style.css': 'src/styles/main.less'
          }
        },
        production: {
          options: {
            compress: true,
            yuicompress: true,
            optimization: 2
          },
          files: {
            'dist/css/style.min.css': 'src/styles/main.less'
          }
        }
      },
  
      uglify: {
        options: {
          compress: true
        },
        my_target: {
          files: {
            'dist/js/script.min.js': 'src/js/script.js',
          }
        }
      }
  
    });
  
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
  
    grunt.registerTask('build', ['less', 'uglify']);
  
  };
  