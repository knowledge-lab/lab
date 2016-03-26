/**
 * Created by ivan on 3/26/16.
 */

define([
	'../Page/Page',
	'can',
	'stache!menus.stache'
], function (Page, can, content) {
	return Page.extend(
		{
			/**
			 * Handles triggering of the route change
			 * @returns {Page}
			 */
			handleRoute: function handleRoute(element, options) {
				can.route.attr({ route : ''}, true);
				return new this(element, options);
			}
		},
		{
			template : content
		}
	);
});