var require = {
    baseUrl: './',

    paths: (function() {
        return {
            application: 'dist/app/application',
            page: 'dist/app/page',
            model: 'dist/app/model',

            text: 'lib/text/text',
            stache: "lib/requirejs-canjs-templates/stache",

            jquery: 'lib/jquery/dist/jquery',
            can: "lib/CanJS/amd/can",

            'validate-lib': 'lib/validate/validate',
            validate: 'dist/app/lib/validate/validate'
        };

    })(),

    shim: {
        stache: {
            deps: ['can']
        }
    }
};