module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    availabletasks: {           // task 
        tasks: {}               // target 
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }    
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // https://www.npmjs.com/package/grunt-available-tasks
  grunt.loadNpmTasks('grunt-available-tasks');

  // https://github.com/gruntjs/grunt-contrib-nodeunit
  // grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Default task(s).
  //grunt.registerTask('default', ['uglify']);
  grunt.registerTask('default', ['availabletasks']);
    
  grunt.registerTask('minify', ['uglify']); // alias
  
  grunt.registerTask('test', 'Log some stuff.', function() {
    grunt.log.write('Logging some stuff...').ok();
  });
  
};