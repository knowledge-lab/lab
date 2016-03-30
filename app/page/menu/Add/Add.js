/**
 * Created by ivan on 3/23/16.
 */

define([
	'can',
	'page/Page/Page',
	'model/Menu/Menu',
	'stache!/app/page/menu/Add/add.stache',
	'validate'
], function (can, Page, Menu, menusTpl, validate) {
	return Page.extend(
		{
			defaults: {
				template: menusTpl
			}
		},
		{
			init: function (element, options) {
				var modelView = new can.Map(
					{
						menu: new Menu()
					}
				);

				element.html(options.template(modelView));

				this.autoFocus();
			},

			'[data-form="add-menu"] submit': function (form) {
				var data = validate.collectFormValues(form);

				new Menu(data).save().then(
					function () {
						can.route.attr({route: 'menus'}, true);
					}
				);

				return false;
			}
		}
	);
});