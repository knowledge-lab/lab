/**
 * Created by ivan on 3/26/16.
 */

define([
	'can',
	'page/Home/Home',
	'page/Menus/Menus',
	'page/Index/Index'
	'page/Food/Food',
	'page/Schedule/Schedule'
 function (can, Home, Menus, Food, Schedule, Index) {
	return can.Control.extend(
		{},
		{
			init: function (element, options) {
				new Index(element, options);

				can.route.ready();
			},

			'index route' : function () {
				new Index(this.element, this.options);
			},

			'menus route' : function () {
				new Menus(this.element, this.options);
			},
			'home' : function() {
			    new Home(this.element, this.options);

			'food route' : function () {
				new Food(this.element, this.options);
			},
			'schedule route' : function () {
				new Schedule(this.element, this.options);

			}
		}
	);
});