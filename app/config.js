var ENVIRONMENTS = {
    dev: '',
    live: 'dist/'
};

var env = 'live';

var require = {
    baseUrl: './',

    paths: (function() {
        var root = ENVIRONMENTS[env];

        return {
            application: root + 'app/application',
            page: root + 'app/page',
            model: root + 'app/model',

            text: 'lib/text/text',
            stache: "lib/requirejs-canjs-templates/stache",

            jquery: 'lib/jquery/dist/jquery',
            can: "lib/CanJS/amd/can",

            'validate-lib': 'lib/validate/validate',
            validate: root + 'app/lib/validate/validate'
        };

    })(),

    shim: {
        stache: {
            deps: ['can']
        }
    }
};