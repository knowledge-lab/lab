/**
 * Created by ivan on 3/26/16.
 */

define([
	'page/Page/Page',
	'can',
	'stache!/app/page/schedule/List/list.stache'
], function (Page, can, content) {
	return Page.extend(
		{

		},
		{
			template : content
		}
	);
});