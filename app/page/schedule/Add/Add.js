/**
 * Created by ivan on 3/26/16.
 */

define([
    'page/Page/Page',
    'can',
    'stache!/app/page/schedule/Add/add.stache',
    'model/Schedule/Schedule',
    'model/Menu/Menu'
], function (Page, can, scheduleTpl, Schedule, Menu) {
    return Page.extend(
        {
            defaults: {

                template: scheduleTpl
            }
        },
        {

            init: function (element, options) {

                this.modelView = new can.Map(
                    {
                        schedule: new Schedule(),
                        menu: null,
                        years:null,
                        months:null,
                        days:null,
                        errors: null,
                        isLoading: true,
                        isSaving: false
                    }
                );

                element.html(options.template(this.modelView));

                this.setMenuList();
                this.initYears();
                this.initMonths();
                this.initDays();
            },

            setMenuList: function () {

                var promise = Menu.findAll({
                });

                this.modelView.attr('isLoading', true);

                promise.always(
                    function () {
                        this.modelView.attr('isLoading', false);
                    }.bind(this)
                );

                this.modelView.attr('menu', new Menu.List(promise));

                /**
                 * Omogucavamo uvezivanje metoda
                 */
                return this;
            },

            '[data-form="add-schedule"] submit': function (form) {
                var data, errors, dat;

                if(this.isSaving()) {
                    return;
                }

                this.isSaving(true);

                data = validate.collectFormValues(form);
                dat = moment(new Date(data.year, data.month - 1, data.day));
                data = { date:dat, menuId:data.menu1}
                //  errors = validate(data, {
                //
                // });

                // if(errors) {
                //     this.setErrors(errors).isSaving(false);
                // } else {
                new Schedule(data).save().then(
                    function () {
                        this.isSaving(false);
                        can.route.attr({route: 'schedule'}, true);
                    }.bind(this)
                );
                // }

                return false;
            },
            // setErrors: function (errors) {
            //     this.modelView.attr('errors', errors);
            //
            //     return this;
            // },

            isSaving: function (flag) {
                if (typeof flag === 'boolean') {
                    this.modelView.attr('isSaving', flag);
                    return this;
                }

                return this.modelView.attr('isSaving');
            },
            //inicijalizacija godina koje se dinamicki inicijalizuje u odnosu na trenutnu godina(5 pre, 5 posle)
            initYears: function(){
                var years = [];
                for(var i = moment().year() - 5; i < moment().year() + 5; i++){
                    years.push(i);
                }
                return this.modelView.attr('years', years);
            },
            //inicijalizacija meseci
            initMonths: function(){
                var months = [];
                for(var i = 1; i <= 12; i++){
                    months.push(i);
                }
                return this.modelView.attr('months', months);
            },
            //inicijalizacija dana
            initDays: function(){
                var days = [];
                for(var i = 1; i <= 31; i++){
                    days.push(i);
                }
                return this.modelView.attr('days', days);
            },
            //testira formu radi na onchange 
            testDate: function(){
                //inicijalizacija dana u mesecu
                var numDays = {
                    '1': 31, '2': 28, '3': 31, '4': 30, '5': 31, '6': 30,
                    '7': 31, '8': 31, '9': 30, '10': 31, '11': 30, '12': 31
                };

                //deklarisem promenljive
                var nDays, oDaysSelLgth, opt, i = 1;
                //racuna dane u mesecu
                nDays = numDays[month.value];

                //ispituje da li je februar i prestupna godina
                if (nDays == 28 && year.value % 4 == 0)
                    ++nDays;
                //trenutna vrednost u formi koja je postavljena
                oDaysSelLgth = day.length;

                //proverava dane upisane u formi i u zavisnosti od toga ih ogranicava i menja
                if (nDays != oDaysSelLgth)
                {
                    if (nDays < oDaysSelLgth)
                        day.length = nDays;
                    else {
                        //dodaje onoliko koliko je potrebno dana
                        for (i; i < nDays - oDaysSelLgth + 1; i++) {
                            opt = new Option(oDaysSelLgth + i, oDaysSelLgth + i);
                            day.options[day.length] = opt;
                        }
                    }
                }

                var oForm = month.form;
                var montH = month.options.value;
                var daY = day.options.value;
                var yeaR = year.options.value;
                oForm.hidden.value = montH + '/' + daY + '/' + yeaR;
            },

            '[data-action="test-date"] change': 'testDate'


        }
    );
});