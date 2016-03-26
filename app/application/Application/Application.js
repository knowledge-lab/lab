/**
 * Created by ivan on 3/26/16.
 */

define([
	'can',
	'page/Home/Home',
	'page/Menus/Menus'
], function (can, Home, Menus) {
	return can.Control.extend(
		{},
		{
			init: function (element, options) {
				new Home(element, options);

				can.route.ready();
			},

			'home route' : function () {
				new Home(this.element, this.options);
			},

			'menus route' : function () {
				new Menus(this.element, this.options);
			}
		}
	);
});