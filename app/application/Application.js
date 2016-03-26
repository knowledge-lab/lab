define([
    'jquery',
    'canjs'
], function () {
    function Application (element) {
        this.element = $(element);

        this.element.empty();
    }

    return Application;
});
