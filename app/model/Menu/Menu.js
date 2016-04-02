define([
	'../Model/Model'
], function (Model) {
	return Model.extend(
		{
			resource : 'menus',
			defaults:{
				currentMenu: 'Pizza'
			}
		},
		{
			getCurrentMenu: function(){
				return this.currentMenu;
			}
		}
	);
});