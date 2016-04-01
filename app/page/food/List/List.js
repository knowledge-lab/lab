/**
 * Created by ivan on 3/26/16.
 */

define([
    'page/Page/Page',
    'can',
    'stache!/app/page/food/List/list.stache',
    'model/Food/Food'
], function (Page, can, content, Food) {
    return Page.extend(
        {},
        {
            template: content,

            init: function (element) {
                var isLoading = can.compute(true);

                var promise = Food.findAll();

                promise.always(
                    function () {
                        isLoading(false);
                    }
                );

                element.html(
                    this.template({
                        foods: new Food.List(promise),
                        isLoading: isLoading
                    })
                );
            }
        }
    );
});