/*require([
    'tool',
    'konstante'
], function (tool, konstante) {
    tool(konstante.A);
});*/

require([], function () {
    function ime(name) {
        if (typeof name === 'string') {
            this.name = name;
        }
    }

    function  prezime(lastname) {
        if (typeof latname === 'string') {
            this.lastname = lastname;
        }

        ime.call(this,name);
    }

    //window.a1 = new ime('Tanja');
    prezime.prototype.getFullName = function () {
        return this.name + this.lastname;
    }

    A.prototype.getFullName = function () {
        return this.name + '' + this.lastname;
    }

    A.prototype.getName = function () {
        return this.name;
    };

    A.prototype.getLastName = function () {
        return this.lastname;
    }

    A.prototype.name = 'podrazumevano ime';


    window.a4 = new prezime('V');




});