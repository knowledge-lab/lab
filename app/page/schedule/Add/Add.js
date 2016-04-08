define([
    'page/Page/Page',
    'can',
    'stache!/app/page/schedule/Add/add.stache',
    'model/Menu/Menu',
    'model/Schedule/Schedule',
    'validate',
    'jquery',
    'datepicker'
], function (Page, can, content, Menu, Schedule, validate, $, datepicker) {
    return Page.extend(
        {
            defaults: {
                template: content
            }
        },
        {

            init: function (element, options) {
                var promise = Menu.findAll();
                this.modelView = new can.Map(
                    {

                        errors: null,
                        isSaving: false,
                        isLoading: true,
                        menus: new Menu.List(promise)
                    }
                );


                element.html(options.template(this.modelView));
                


                $('#datepicker').datepicker({
                    format: 'dd/mm/yyyy',
                    autopick: true,
                    startDate: new Date()
                });

            },


            '[data-form="add-schedule"] submit': function (form) {
                var data, errors;

                if(this.isSaving()) {
                    return;
                }

                this.isSaving(true);

                data = validate.collectFormValues(form);


                if(errors) {
                    this.setErrors(errors).isSaving(false);
                } else {
                    new Schedule(data).save().then(
                        function (result) {
                            this.isSaving(false);
                            can.route.attr({route: 'schedule'}, true);
                            console.log(result);
                        }.bind(this)
                    );
                }

                return false;
            },

            setErrors: function (errors) {
                this.modelView.attr('errors', errors);

                return this;
            },
            isSaving: function (flag) {
                if (typeof flag === 'boolean') {
                    this.modelView.attr('isSaving', flag);
                    return this;
                }

                return this.modelView.attr('isSaving');
            }

        }
    );
});