/**
 * Created by ivan on 3/26/16.
 */

define([
	'../Page/Page',
	'can',
	'stache!menus.stache',
	'model/Menu/Menu'
], function (Page, can, content, Menu) {
	return Page.extend(
		{
		},
		{
			template : content,

			init : function (element, options) {
				var isLoading = can.compute(true);

				var promise = Menu.findAll();

				promise.always(
					function () {
						isLoading(false);
					}
				);

				element.html(
					this.template({
						menus: new Menu.List(promise),
						isLoading: isLoading
					})
				);
			}
		}
	);
});