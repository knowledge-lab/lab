define([
	'../Application/Application',
	'page/Home/Home',
	'page/Menus/Menus',
	'page/Food/Food',
	'page/Schedule/Schedule',
	'page/AddFood/AddFood',
	'page/EditMenu/EditMenu',
	'page/AddMenu/AddMenu',
	'page/Signup/Signup',
	'page/EditFood/EditFood',
	'page/Index/Index'
], function (Application, Home, Menus, Food, Schedule, AddFood, EditMenu, AddMenu, Signup, EditFood, Index) {

	return Application.extend(
		{
			defaults: {
				pages: [
					{
						controller: Home,
						route: 'home'
					},
					{
						controller: Menus,
						route: 'menus'
					},
					{
						controller: AddFood,
						route: 'addfood'
					},
					{
						controller: Food,
						route: 'food'
					},
					{
						controller: AddMenu,
						route: 'add-menu'
					},
					{
						controller: Schedule,
						route: 'schedule'
					},
					{
						controller: EditMenu,
						route: 'edit-menu/:id'
					},
					{
						controller: Signup,
						route: 'signup'
					},
					{
						controller: EditFood,
						route: 'editfood'
					},
					{
						controller: Index,
						route: ''
					}
				],

				name: 'Klopa'
			}
		},
		{}
	);
});