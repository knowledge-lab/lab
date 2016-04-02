define(['application/Application/Application', 'page/Home/Home', 'page/Index/Index', 'page/food/food'], function(application, HomeCtrl, Index, food){

	describe('Route values', function(){
		var app = new application(document.body,
			{
				pages: [{
					controller: HomeCtrl,
					route: 'home'
				},
				{
					controller: Index,
					route: ''
				},
				{
					controller: food.List,
					route: 'foods'
				}]
			});

		it('tests is route defined', function () {
			expect(app.currentPage).toBeDefined();
		});

		it('tests page container', function(){
			can.route('home');
			expect(app.currentPage.options.route).not.toBe('home');
		});
	});

	describe('Spies example', function(){
		var page;

		beforeEach(function() {
			var pages = [];
			page = {
				addPage: function(value){
					pages.push(value);
				},
				getPages: function(){
					return pages;
				}
			};

			spyOn(page, 'addPage').and.callThrough();

			page.addPage('Strana 1');
		});

		it('tests addPage function is called', function(){
			page.addPage('Stana 2');

			expect(page.addPage).toHaveBeenCalled();
			expect(page.addPage).toHaveBeenCalledTimes(2);
		});

		it('tests length of pages', function(){
			expect(page.getPages().length).toBeGreaterThan(0);
		});

	});
});
