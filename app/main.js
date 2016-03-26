require([], function () {
   function A(name) {
       if (typeof name === 'string') {
           this.name = name;
       }
   }

    A.prototype.getName = function () {
        return this.name;
    };

    A.prototype.name = 'podrazumevano ime';

    window.a1 = new A('djura');
    window.a2 = new A();


    function B (age) {
        if (typeof age === 'number') {
            this.age = age;
        }
    }

    B.prototype = new A();
    B.prototype.constructor = B;

    B.prototype.age = -1;

    B.prototype.getAge = function () {
        return this.age;
    };

    b1 = new B(25);
    b2 = new B();
    b3 = new B(40);

    function Mesto(place) {
        if(typeof place === 'string') {
            this.place = place;
        }
    }



    Mesto.prototype= new A();
    Mesto.prototype.constructor = Mesto;

    Mesto.prototype.place = "Nepoznato";

    Mesto.prototype.getPlace = function () {
        return this.place;
    }


    c1 = new Mesto("Ustanicka 150");
    c2 = new Mesto();


    window.A = A;
    window.B = B;


});

// console.log(typeof undefined);
// console.log(typeof 1);
// console.log(typeof 'a');
// console.log(typeof false);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof function () {
// });
