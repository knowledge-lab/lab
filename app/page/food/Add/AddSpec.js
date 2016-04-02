define(['page/food/Add/Add'], function(add){
	describe('Test menu model properties', function(){
		var addPage = new add();

		it('tests page template', function () {
			expect(addPage.template).toBeDefined();
		});
	});
});