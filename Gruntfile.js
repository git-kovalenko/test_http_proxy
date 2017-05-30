module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify_es: {
            build: {
                src: '<%= pkg.name %>.js',
                dest: '<%= pkg.name %>.min.js'
            }
        }
    });

    grunt.task.registerMultiTask('uglify_es', 'task for ES6 uglification', function() {
        let done = this.async();
        let UglifyES = require('uglify-es');
        let code = grunt.file.read(this.data.src);
        let result = UglifyES.minify(code, {
            compress: {
                dead_code: true,
                global_defs: {
                    DEBUG: false
                }
            }
        });
        grunt.file.write(this.data.dest, result.code);
        done();
    });


    grunt.registerTask('uglify', ['uglify_es']);
}