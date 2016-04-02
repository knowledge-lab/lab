var require = {
    baseUrl: './',

    paths: {
        jquery: 'lib/jquery/dist/jquery',
        can: "lib/CanJS/amd/can",

        stache: "lib/requirejs-canjs-templates/stache",
        'validate-lib': 'lib/validate/validate',
        validate: 'lib/validate/validate',

        text: 'lib/text/text',
        
        page: 'app/page/',
        model: 'app/model/',
        application: 'app/application/'
    },

    shim: {
        stache: {
            deps: ['can']
        }
    }
};