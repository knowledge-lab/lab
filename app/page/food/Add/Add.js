/**
 * Created by Milan on 3/26/2016.
 */
define([
    'page/Page/Page',
    'can',
    'stache!/app/page/food/Add/add.stache'
], function (Page, can, content) {
    return Page.extend(
        {

        },
        {
            template : content
        }
    );
});