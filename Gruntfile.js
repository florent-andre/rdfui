'use strict';
module.exports = function(grunt) {

    //une configuration de grunt à reprendre : http://bl.ocks.org/yanatan16/6531028
    
    // load all grunt tasks automatically
    require('load-grunt-tasks')(grunt);
  
    //grunt.loadNpmTasks('grunt-html2js');    
    var mountFolder = function(connect, dir) {
	return connect.static(require('path').resolve(dir));
    };

    var cfg = {
            projectName : 'angular-rdf-ui',
            srcDir: 'source',
            tempDir : 'build', //TODO : renomer tempDir en build et buildDir en distDir
            buildDir: 'dist',
            demoDir: 'demo',
            mockDataDirTest: 'tests/utils',
            mockDataDirDemo: 'demo/mockData',
    };

    // project configuration
    grunt.initConfig({
	    cfg: cfg,

		// watch
		watch: {
			
			livereload: {
				files: [
				    '<%= cfg.demoDir %>/**/*.js',
				    '<%= cfg.demoDir %>/**/*.css',
				    '<%= cfg.demoDir %>/**/*.html',
				    '!<%= cfg.buildDir %>/*.js',
				    '!<%= cfg.demoDir %>/dist/*.js',
				    '!<%= cfg.demoDir %>/bower_components/**/*'
				 ],
				 options: {
					 livereload: true
				 }
			},
		    build: {
		    	files: [
				    '<%= cfg.srcDir %>/**/*.js',
				    '!<%= cfg.buildDir %>/*.js',
				    '<%= cfg.srcDir %>/**/*.tpl.html',
			    ],
			    tasks: ['jshint:source', 'clean:build', 'concat:build', 'uglify:build', 'cssmin', 'copy']
			},
		    
			cssmin: {
				files: [
				        '<%= cfg.srcDir %>/**/*.css'
			    ],
			    tasks: ['cssmin', 'copy']
			}
	    },

		// clean up files as part of other tasks
		clean: {
			build: {
				src: ['<%= cfg.buildDir %>/**']
			},
		    demo: {
		    	src: ['<%= cfg.demoDir %>/dist/**','<%= cfg.mockDataDirDemo %>/**']
			}
	    },

		// prepare files for demo
		copy: {
    		main: {
    		    files: [{ //main module files
    		            expand: true,
    		            src: ['<%= cfg.buildDir %>/*.*'],
    		            dest: '<%= cfg.demoDir %>/'
    				},{ //mock data files
    				    expand : true,
    				    cwd: '<%= cfg.mockDataDirTest %>/',
    				    src: '**',
    				    dest: '<%= cfg.mockDataDirDemo %>/',
    				    flatten: true,
    				    filter: 'isFile',
    				}]
    			}
	    },
    
		html2js: {
		dist: {
		    options: {
			module: 'rdf.ui.tpl', 
			    base: 'source'
			},
			src: ['source/**/*.html'],
			dest: '<%= cfg.tempDir %>/templates-app.js',
			
			}
	    },

		jshint: {
		options: {
		    'jshintrc': true,
			reporter: require('jshint-stylish')
			},
		    source: {
		    files: {
			src: ['<%= cfg.srcDir %>/**/*.js']
			    }
		},
		    demo: {
		    files: {
			src: [
			      '<%= cfg.demoDir %>/**/*.js',
			      '!<%= cfg.demoDir %>/bower_components/**/*'
          ]
			    }
		}
	    },

		// concat
		concat: {
		build: {
			        src: [
					  '<%= cfg.srcDir %>/*.js', //TODO : remplacer par juste le main.js ??
			          '<%= cfg.srcDir %>/**/*.js',
			          '<%= cfg.tempDir %>/*.js',
			        ],
			        dest: '<%= cfg.buildDir %>/<%= cfg.projectName %>.js'
			}
	    },

		// uglify
		uglify: {
		options: {
		    preserveComments: 'some',
			mangle: false
			},
		    build: {
		    files: {
			'<%= cfg.buildDir %>/<%= cfg.projectName %>.min.js': ['<%= cfg.buildDir %>/<%= cfg.projectName %>.js']
			    }
		}
	    },

		// connect
		connect: {
    		options: {
    		    port: 9000,
    			livereload: 35729,
    			hostname: '0.0.0.0'
    			},
    		    demo: {
    		    options: {
    			middleware: function(connect) {
                return [
    		    mountFolder(connect, '')
    		    ];
    			}
		    }
		}
	    },

		cssmin: {
		add_banner: {
		    options: {
			banner: '/* angular-ui-tree css file */'
			    },
			files: {
			'<%= cfg.buildDir %>/<%= cfg.projectName %>.min.css': ['<%= cfg.srcDir %>/<%= cfg.projectName %>.css']
			    }
		}
	    },

		// open
		open: {
		server: {
		    path: 'http://localhost:<%= connect.options.port %>/<%= cfg.demoDir %>/'
			}
	    },

		// karma
		karma: {
			options: {
			    configFile: 'karma.conf.js',
				autoWatch: true
			},

		    single: {
			    singleRun: true,
				browsers: ['PhantomJS']
			},

		    continuous: {
			    singleRun: false,
				browsers: ['PhantomJS', 'Firefox']
			}
	    },

		// available tasks
		tasks_list: {
			options: {},
		    project: {
		    options: {
			tasks: [{
				name: 'build',
				    info: 'Create a build of (tested) the source files'
				    }, {
				name: 'serve',
				    info: 'Build the project, watch filechanges and start a webserver'
				    }, {
				name: 'test',
					       info: 'Runt tests'
					       }, {
				name: 'test:continuous',
					       info: 'Runt tests continuously'
					       }]
			    }
		}
	    },

		ngdocs: {
		options: {
		    dest: 'demo/docs',
			scripts: ['angular.js'],
			html5Mode: true,
			startPage: '/guide',
			title: 'angular-ui-tree',
			analytics: {
			account: 'UA-48778560-1',
			    domainName: 'github.io'
			    }
		},
		    guide: {
		    src: ['guide/*.ngdoc'],
			title: 'Guide'
			},
		    api: {
		    src: ['source/**/*.js', '!src/**/*.spec.js'],
			title: 'API Documentation'
			}
	    }
	});

    // default
    grunt.registerTask('default', ['tasks_list:project']);
    grunt.registerTask('build', ['jshint:source', 'clean:build', 'karma:single', 'html2js', 'concat:build', 'cssmin', 'uglify:build', 'copy']);
    grunt.registerTask('serve', ['clean','build', 'karma:single', 'open', 'connect:demo', 'watch']);
    grunt.registerTask('test', ['karma:single']);
    grunt.registerTask('test:continuous', ['karma:continuous']);
};