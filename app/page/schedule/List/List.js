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
			defaults: {
				
				template: content
			}
		},
		{

			init: function (element, options) {

				this.modelView = new can.Map(
					{
						schedule:null,
						isLoading: true
					}
				);

				element.html(options.template(this.modelView));

				this.setSchedules();

            },

            setSchedules: function () {
            	var promise = Schedule.findAll({
	                /**
	                 * Saljemo na server _expand parametar kako bismo dobili i objekat menija u samom schedule objektu
	                 */
	                '_expand' : 'menu'
                }); 

                var that = this;

				promise.always(
                    function () {
                        that.modelView.attr('isLoading', false);
                    }
                );
				this.modelView.attr('schedule', new Schedule.List(promise));

				/**
				 * Omogucavamo uvezivanje metoda
				 */
				return this;
			},

            removeSchedule: function(link, event){
     
            	event.preventDefault();
            	var that = this;

            	Schedule.destroy(event.target.id).then(
            		function (){
            			that.setSchedules();
            		});
            },

            getSchedule: function () {
				return this.modelView.attr('schedule');
			},

            '[data-action="remove-schedule"] click': 'removeSchedule'






		}
	);
});