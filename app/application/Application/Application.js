/**
 * Created by ivan on 3/26/16.
 */

define([
	'can',
	'page/Home/Home',
	'page/Menus/Menus',
	'page/EditFood/EditFood',
	'page/Food/Food',
	'page/Schedule/Schedule'
], function (can, Home, Menus, EditFood, Food, Schedule) {
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
			},


			'editfood route' : function () {
				new EditFood(this.element, this.options);
			},
			
			'food route' : function () {
				new Food(this.element, this.options);
			},

			'schedule route' : function () {
				new Schedule(this.element, this.options);

			}
		}
	);
});