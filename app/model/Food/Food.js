define([
	'../Model/Model'
], function (Model) {
	return Model.extend(
		{
			resource : 'foods'
		},
		{
			
			test:"djole",
			getFoodName: function(){
				return 'Sarma';
			}
		}
	);
});