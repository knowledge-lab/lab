/**
 * Created by ivan on 3/26/16.
 */

define([
	'can',
	'stache!pocetni.stache'
], function (can, content) {
	return can.Control.extend(
		{

		},
		{
			init : function (element, options) {
				element.html(this.template(options));
			},

			template : content
		}
	);
});