define(['model/Food/Food'], function(foodModel){
	var i = new foodModel();
	describe('tests food list length', function(){
		
		it('expect model name to be sarma', function() {
			expect(i.getFoodName()).toBe('Sarma');
		})
	});
});