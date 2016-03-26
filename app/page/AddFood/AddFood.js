/**
 * Created by Milan on 3/26/2016.
 */
define([
    '../Page/Page',
    'can',
    'stache!addfood.stache'
], function (Page, can, content) {
    return Page.extend(
        {

        },
        {
            template : content
        }
    );
});