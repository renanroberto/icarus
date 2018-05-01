(function() {

    'use strict';

    const middlewares = require('./middleware');
    const url = require('url');
    const proxy = require('proxy-middleware');
    const httpPlease = require('connect-http-please');
    const serveStatic = require('serve-static');
    require('dotenv').config()

    module.exports = function(grunt) {

        const project = process.env.PROJECT
        const accountName = process.env.VTEX_ACCOUNT
        const environment = process.env.VTEX_ENV
        const secureUrl = (process.env.SECURE_URL === 'secure')

        const verbose = grunt.option('verbose');

        const protocol = secureUrl ? 'https' : 'http'

        const imgProxyOptions = url.parse(`${protocol}://${accountName}.vteximg.com.br/arquivos`)
        imgProxyOptions.route = '/arquivos'

        const portalHost = `${accountName}.${environment}.com.br`

        const portalProxyOptions = url.parse(`${protocol}://${portalHost}`);
        portalProxyOptions.preserveHost = true

        const rewriteLocation = (location) => location.replace('https:', 'http:').replace(environment, 'vtexlocal');

        const errorHandler = (err, req, res, next) => {
            let errString, _ref, _ref1;
            errString = (_ref = (_ref1 = err.code) !== null ? _ref1.red : void 0) !== null ? _ref : err.toString().red
            return grunt.log.warn(errString, req.url.yellow)
        };

        const config = {
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
        }

        const tasks = {
            devoff: ['watch'],
            default: ['connect', 'watch']
        }

        grunt.initConfig(config)

        grunt.loadNpmTasks('grunt-contrib-connect')
        grunt.loadNpmTasks('grunt-contrib-watch')

        const results = []
        for (let key in tasks) {
          results.push(grunt.registerTask(key, tasks[key]));
        }

        return results
    }

}).call(this)
