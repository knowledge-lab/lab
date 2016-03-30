/**
 * Created by ivan on 3/26/16.
 */

define([
	'page/Page/Page',
	'can',
	'stache!/app/page/menu/Edit/edit.stache',
	'model/Menu/Menu'
], function (Page, can, content, Menu) {
	return Page.extend(
		{},
		{
			template: content,

			init: function (element, options) {
				Menu.findOne({id: options.id}).then(
					function (menu) {
						this.menu = menu;

						element.html(
							content({
								menu: menu
							})
						)
					}.bind(this)
				)
			},

			'[data-action="save-menu"] click' : function () {
				var nameInput = this.element.find('[data-content="menu-name"]');

				this.menu.attr('name', nameInput.val());
				this.menu.save();
			}
		}
	);
});