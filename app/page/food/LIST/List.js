/**
 * Created by Tatjana on 26-Mar-16.
 */

define([
    'page/Page/Page',
    'can',
    'stache!/app/page/food/List/list.stache'
], function (Page, can, content) {
    return Page.extend(
        {

        },
        {
          
            template : content
        }
    );
});