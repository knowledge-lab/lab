/**
 * Created by Nikola on 26.3.2016.
 */
/**
 * Created by ivan on 3/26/16.
 */

define([
    'page/Page/Page',
    'can',
    'stache!/app/page/schedule/Add/add.stache',
    'model/Schedule/Schedule',
    'model/Menu/Menu',
    'validate'
], function (Page, can, content, Schedule, Menu, validate) {
    return Page.extend(
        {},
        {
            template : content,

            init: function (element, options) {
                var isLoading = can.compute(true);
                var isSaving = can.compute(false);

                var day = "";
                var month = "";
                var year = "";
                var leapYear = "";

                /**
                 * Dohvatanje liste menija
                 */
                var promise = Menu.findAll();

                promise.always(
                    function () {
                        isLoading(false);
                    }
                );

                /**
                 * Popunjavanje parametara za datum koji ce se proslediti na view
                 */
                for (i = 1; i < 32; i++) {
                    day += "<option value='" + i + "'>" + i + "</option>";
                }

                for (i = 1; i < 13; i++) {
                    month += "<option value='" + i + "'>" + i + "</option>";
                }

                for (i = 2001; i < 2018; i++) {
                    year += "<option value='" + i + "'>" + i + "</option>";
                }

                this.modelView = new can.Map(
                    {
                        errors: null,
                        isLoading: true,
                        isSaving: false
                    }
                );

                element.html(
                    this.template({
                        day: day,
                        month: month,
                        year: year,
                        menus: new Menu.List(promise),
                        isLoading: isLoading,
                        isSaving: isSaving
                    })
                );
            },

            saveChanges: function (form, event) {
                var data, errors;

                event.preventDefault();

                if (this.isSaving()) {
                    return;
                }
                this.isSaving(true);

                data = validate.collectFormValues(form);

                /**
                 * Custom funkcija za proveru datuma
                 */
                validate.validators.validDate = function(value, options, key, att) {
                    var day = parseInt(att['day'], 10);
                    var month = parseInt(att['month'], 10);
                    var year = parseInt(att['year'], 10);

                    /**
                     * Koliko koji mesec ima dana
                     */
                    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

                    // Provera da li je prestupna godina
                    if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
                        monthLength[1] = 29;

                    /**
                     * Provera da li je validan dan u mesecu
                     */
                    if(!(day > 0 && day <= monthLength[month - 1]))
                        return "Date is not valid";
                };

                errors = validate(data, {
                    day: {
                        validDate: "1",
                        presence: true
                    }
                });

                console.log("greske/errors: ");
                console.log(errors);


                if (errors) {
                    this.setErrors(errors).isSaving(false);
                } else {
                    if(data['day'] < 10)
                    {
                        data['day'] = "0" + data['day'];
                    }
                    if(data['month'] < 10)
                    {
                        data['month'] = "0" + data['month'];
                    }

                    var dataToSave = {};
                    dataToSave.date = data['day'] + '/' + data['month'] + '/' + data['year'];
                    dataToSave.menu = data["menuId"];

                    new Schedule(dataToSave).save().then(
                        function () {
                            this.isSaving(false);
                            can.route.attr({route: 'schedule'}, true);
                        }.bind(this)
                    );
                }
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
            },

            isLoading: function (flag) {
                if (typeof flag === 'boolean') {
                    this.modelView.attr('isLoading', flag);
                    return this;
                }

                return this.modelView.attr('isLoading');
            },

            '[data-form="add-shedule"] submit': 'saveChanges'
        }
    );
});