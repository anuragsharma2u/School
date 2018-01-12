module.exports = function(grunt){
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  typescript:{
    options:{
      module: "commonjs",
      target:"es5",
      sourceMap:true
    },
    all:{
      src:["src/tc/*.ts"],
      dest:"build/scripts/"
    }
  }
});
grunt.loadNpmTasks("grunt-typescript");

grunt.registerTask("default",['typescript']);

}
