/**
 * Created by ivan on 3/26/16.
 */

define([
	'../Page/Page',
	'can',
	'stache!menus.stache'
], function (Page, can, content) {
	return Page.extend(
		{

		},
		{
			template : content
		}
	);
});