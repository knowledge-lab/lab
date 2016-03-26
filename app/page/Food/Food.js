/**
 * Created by Tatjana on 26-Mar-16.
 */

define([
    '../Page/Page',
    'can',
    'stache!food.stache'
], function (Page, can, content) {
    return Page.extend(
        {

        },
        {
            template : content
        }
    );
});