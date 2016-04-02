define(['model/Menu/Menu'], function(menu){
	describe('Test menu model properties', function(){
		var menuModel = new menu();

		it('tests menu is model', function () {
			expect(menuModel instanceof menu).toBe(true);
		});

		it('tests current menu', function(){
			expect(menuModel.getCurrentMenu()).toBe('Danas nema nista');
		});
	});
});