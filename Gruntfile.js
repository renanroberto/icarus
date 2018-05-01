(function() {

    'use strict';

    var middlewares = require('./middleware');
    var url = require('url');
    var proxy = require('proxy-middleware');
    var httpPlease = require('connect-http-please');
    var serveStatic = require('serve-static');

    module.exports = function(grunt) {

        var accountName, _results, errorHandler, rewriteLocation, open, config, environment, secureUrl, imgProxyOptions, name, pkg, portalHost, portalProxyOptions, results, taskArray, taskName, tasks, verbose;

        pkg = grunt.file.readJSON('package.json');
        accountName = 'parceiropet';
        environment = 'vtexcommercestable';

        secureUrl = true;

        verbose = grunt.option('verbose');
        if(secureUrl) {
          imgProxyOptions = url.parse("https://" + accountName + ".vteximg.com.br/arquivos");
        } else {
          imgProxyOptions = url.parse("http://" + accountName + ".vteximg.com.br/arquivos");
        }
        imgProxyOptions.route = '/arquivos';

        portalHost = accountName + "." + environment + ".com.br";
        if(secureUrl) {
          portalProxyOptions = url.parse("https://" + portalHost + "/");
        } else {
          portalProxyOptions = url.parse("http://" + portalHost + "/");
        }
        portalProxyOptions.preserveHost = true;

        rewriteLocation = function(location) {
          return location.replace('https:', 'http:').replace(environment, 'vtexlocal');
        }

        errorHandler = function(err, req, res, next) {
            var errString, _ref, _ref1;
            errString = (_ref = (_ref1 = err.code) !== null ? _ref1.red : void 0) !== null ? _ref : err.toString().red;
            return grunt.log.warn(errString, req.url.yellow);
        };

        config = {
            fileName: 'parceiro-pet',
            connect: {
                http: {
                    options: {
                        hostname: "*",
                        livereload: true,
                        port: process.env.PORT || 80,
                        middleware: [
                            middlewares.disableCompression,
                            middlewares.rewriteLocationHeader(rewriteLocation),
                            middlewares.replaceHost(portalHost),
                            middlewares.replaceHtmlBody(environment, accountName, secureUrl),
                            httpPlease({
                                host: portalHost,
                                verbose: verbose
                            }),
                            serveStatic('./dist'),
                            proxy(imgProxyOptions),
                            proxy(portalProxyOptions),
                            middlewares.errorHandler
                        ]
                    }
                }
            },
            watch: {
                options: {
                    livereload: true
                },
                js: {
                    files: ['src/scripts/**/*.js'],
                    tasks: ['connect']
                },
                grunt: {
                    files: ['Gruntfile.js']
                }
            }
        };
        tasks = {
            devoff: ['watch'],
            default: ['connect', 'watch']
        };

        grunt.initConfig(config);
        for (name in pkg.devDependencies) {
            if (name.slice(0, 6) === 'grunt-') {
                grunt.loadNpmTasks(name);
            }
        }

        _results = [];
        for (taskName in tasks) {
            taskArray = tasks[taskName];
            _results.push(grunt.registerTask(taskName, taskArray));
        }
        return _results;
    };

}).call(this);