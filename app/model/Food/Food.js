define([
	'../Model/Model'
], function (Model) {
	return Model.extend(
		{
			resource : 'foods',
			defaults:{
				jeloDana: 'Burgeri'
			}
		},
		{

			getFoodOfTheDay: function(){
				return this.jeloDana;
			}
		}
	);
});