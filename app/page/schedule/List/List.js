/**
 * Created by ivan on 3/26/16.
 */

define([
	'page/Page/Page',
	'can',
	'stache!/app/page/schedule/List/list.stache',
	'model/Schedule/Schedule'
], function (Page, can, content, Schedule) {
	return Page.extend(
		{

		},
		{
			template : content,

			init: function (element) {
                var isLoading = can.compute(true);

                var promise = Schedule.findAll({
	                /**
	                 * Saljemo na server _expand parametar kako bismo dobili i objekat menija u samom schedule objektu
	                 */
	                '_expand' : 'menu'
                });

                promise.always(
                    function () {
                        isLoading(false);
                    }
                );

                element.html(
                    this.template({
                        schedule: new Schedule.List(promise),
                        isLoading: isLoading
                    })
                );
            }
		}
	);
});