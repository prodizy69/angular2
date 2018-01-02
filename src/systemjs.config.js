/*
 * This config is only used during development and build phase only
 * It will not be available on production
 *
 */
(function(global) {
    // ENV
    global.ENV = global.ENV || 'development';

    var config = {
        baseURL: './',

        // paths
        paths: {
            'scripts/*': 'src/tmp/scripts/*'
        },

        // map tells the System loader where to look for things
        map: {
            'text'                                          : 'node_modules/systemjs-plugin-text/text.js',
            '@angular'                                      : 'node_modules/@angular',
            'rxjs'                                          : 'node_modules/rxjs',
            '@angular/common'                               : 'node_modules/@angular/common/bundles/common.umd.js',
            '@angular/common/http'                          : 'node_modules/@angular/common/bundles/common-http.umd.js',
            '@angular/common/testing'                       : 'node_modules/@angular/common/bundles/common-testing.umd.js',
            '@angular/compiler'                             : 'node_modules/@angular/compiler/bundles/compiler.umd.js',
            '@angular/compiler/testing'                     : 'node_modules/@angular/compiler/bundles/compiler-testing.umd.js',
            '@angular/core'                                 : 'node_modules/@angular/core/bundles/core.umd.js',
            '@angular/core/testing'                         : 'node_modules/@angular/core/bundles/core-testing.umd.js',
            '@angular/forms'                                : 'node_modules/@angular/forms/bundles/forms.umd.js',
            '@angular/forms/testing'                        : 'node_modules/@angular/forms/bundles/forms-testing.umd.js',
            '@angular/http'                                 : 'node_modules/@angular/common/bundles/common-http.umd.js',
            '@angular/http/testing'                         : 'node_modules/@angular/common/bundles/common-http-testing.umd.js',
            '@angular/platform-browser'                     : 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser/testing'             : 'node_modules/@angular/platform-browser/bundles/platform-browser-testing.umd.js',
            '@angular/platform-browser-dynamic'             : 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/platform-browser-dynamic/testing'     : 'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
            '@angular/router'                               : 'node_modules/@angular/router/bundles/router.umd.js',
            '@angular/router/testing'                       : 'node_modules/@angular/router/bundles/router-testing.umd.js',
            'tslib'                                         : 'node_modules/tslib/tslib.js'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            // 'scripts'                                       : { defaultExtension: 'js' },
            // 'src'                                           : { defaultExtension: 'js' },
            'src/tmp/scripts'                                           : { defaultExtension: 'js' },
            // thirdparty barrels
            'rxjs'                                          : { defaultExtension: 'js' },
            'lodash'                                        : { main: 'index.js', defaultExtension: 'js' }
        },
        meta: {
            '*.html': {
                loader: 'text'
            },
            'node_modules/systemjs/dist/system.src.js': {
                format: 'esm',
                exports: 'System'
            }
        }
    };

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);
