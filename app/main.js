require([], function () {
   function A(name) {
       if (typeof name === 'string') {
           this.name = name;
       }
   }

    A.prototype.getName = function () {
        return this.name;
    };

    A.prototype.name = 'Default name';

    window.a1 = new A('Djura');
    window.a2 = new A();


    function B (name, age) {
        if (typeof age === 'number') {
            this.age = age;
        }
        A.call(this, name);
    }

    // B.prototype = new A();
    // B.prototype.constructor = B;

    B.prototype.age = 0;

    B.prototype.getAge = function () {
        return this.age;
    };

    b1 = new B("Djura", 25);
    b2 = new B("Pera", 13); // nece se setovati


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
