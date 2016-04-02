define(['model/Food/Food'], function(foodModel){
	var i = new foodModel();
	describe('tests food list length', function(){
		
		it('expect model name to be burgeri', function() {
			expect(i.getFoodOfTheDay()).toBe('Burgeri');
		})
	});
});
