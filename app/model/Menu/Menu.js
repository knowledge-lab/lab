define([
	'../Model/Model'
], function (Model) {
	return Model.extend(
		{
			resource : 'http://127.0.0.1:3000/menus'
		},
		{
		}
	);
});