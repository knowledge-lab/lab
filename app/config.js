var require = {
	baseUrl: './',

	paths: (function () {
		return {
			application: 'app/application',
			page       : 'app/page',
			model      : 'app/model',

			text  : 'lib/text/text',
			stache: "lib/requirejs-canjs-templates/stache",

			jquery: 'lib/jquery/dist/jquery',
			can   : "lib/CanJS/amd/can",

			'validate-lib': 'lib/validate/validate',
			validate      : 'app/lib/validate/validate'
		};

	})(),

	shim: {
		stache: {
			deps: ['can']
		}
	}
};