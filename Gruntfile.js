(function() {

    'use strict';

    const middlewares = require('./middleware');
    const url = require('url');
    const proxy = require('proxy-middleware');
    const httpPlease = require('connect-http-please');
    const serveStatic = require('serve-static');
    require('dotenv').config

    module.exports = function(grunt) {

        var _results, open, config, name, portalHost, results, taskArray, taskName, tasks;

        const project = process.env.PROJECT
        const accountName = process.env.VTEX_ACCOUNT
        const environment = process.env.VTEX_ENV

        const secureUrl = (process.env.SECURE_URL === 'secure')

        const verbose = grunt.option('verbose');

        let protocol = secureUrl ? 'https' : 'http'

        let imgProxyOptions = url.parse(`${protocol}://${accountName}.vteximg.com.br/arquivos`)
        imgProxyOptions.route = '/arquivos'

        let portalProxyOptions = url.parse(`${protocol}://${accountName}.${environment}.com.br`);
        portalProxyOptions.preserveHost = true

        const rewriteLocation = (location) => location.replace('https:', 'http:').replace(environment, 'vtexlocal');

        const errorHandler = (err, req, res, next) => {
            let errString, _ref, _ref1;
            errString = (_ref = (_ref1 = err.code) !== null ? _ref1.red : void 0) !== null ? _ref : err.toString().red
            return grunt.log.warn(errString, req.url.yellow)
        };

        config = {
            fileName: project,
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
                dist: {
                    files: ['dist/**/*']
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
