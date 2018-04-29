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
        accountName = process.env.VTEX_ACCOUNT || pkg.accountName || 'icarus';
        environment = process.env.VTEX_ENV || 'vtexcommercestable';

        secureUrl = process.env.VTEX_SECURE_URL || pkg.secureUrl || true;

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
            fileName: accountName,
            connect: {
                http: {
                    options: {
                        hostname: "*",
                        livereload: true,
                        port: process.env.PORT || 8080,
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
            }
        };
        tasks = {
            'default': ['connect']
        };

        grunt.initConfig(config);
        grunt.loadNpmTasks('grunt-contrib-connect');

        _results = [];
        for (let key in tasks) {
            _results.push(grunt.registerTask(key, tasks[key]))
        }
        return _results;
    };

}).call(this);
