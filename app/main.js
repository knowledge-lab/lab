require([], function () {
   function A(name) {
       if (typeof name === 'string') {
           this.name = name;
       }
   }

    A.prototype.getName = function () {
        return this.name;
    };

    A.prototype.name = 'default';

    window.a1 = new A('djura');
    window.a2 = new A();

    function B(name, age) {
        if (typeof name === 'string') {
            this.age = age;
        }
        A.call(this, name)
    }

    B.prototype = new A();
    B.prototype.constructor = B;
    B.prototype.age = -1;

    B.prototype.getAge = function () {
        return this.age;
    };

    window.b1 = new B('b1', 25);
    window.b2 = new B('');
});

// console.log(typeof undefined);
// console.log(typeof 1);
// console.log(typeof 'a');
// console.log(typeof false);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof function () {
// });
