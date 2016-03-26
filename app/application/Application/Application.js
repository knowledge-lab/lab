/**
 * Created by ivan on 3/26/16.
 */

define([
	'can',
	'page/Home/Home',
	'page/Menus/Menus',
	'../../page/Add-schedule-entry/Add_schedule_entry'
], function (can, Home, Menus, Add_schedule_entry) {
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

			'add_schedule_entry route' : function () {
				new Add_schedule_entry(this.element, this.options);
			}
		}
	);
});