module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    use: [
                        require('yeticss'),
                        require('autoprefixer-stylus')
                    ]
                },

                files: {
                    "public/css/main.css": ["styl/main.styl"]
                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'public/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/css',
                    ext: '.min.css'
                }]
            }
        },
        jade: {
            target: {
              files: [{
                  expand: true,
                  cwd: 'jade',
                  src: ['**/*.jade'],
                  dest: 'public',
                  ext: '.html'
              }]
            }
        },
        watch: {
            build: {
                files: ["styl/**/*.styl", "jade/**/*.jade"],
                tasks: ["build"],
                options: {
                    livereload: true
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'public',
                    livereload: true,
                    open: true
                }
            }
        }
    });

    grunt.registerTask('build', ['stylus', 'cssmin', 'jade'])
    grunt.registerTask('serve', ['connect:server', 'watch'])
    grunt.registerTask('default', ['build'])
};
