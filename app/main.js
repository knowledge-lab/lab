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
        A.call(this, name);
        this.age = age;
    }

    // B.prototype = new A();

    B.prototype.getName = A.prototype.getName;

    B.prototype.getAge = function () {
        return this.age;
    };

    window.b1 = new B('b1', 12);
    window.b2 = new B('b2', 22);
});

// console.log(typeof undefined);
// console.log(typeof 1);
// console.log(typeof 'a');
// console.log(typeof false);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof function () {
// });
