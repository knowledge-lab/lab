require([], function () {
   // function A(name) {
   //     if (typeof name === 'string') {
   //         this.name = name;
   //     }
   // }
   //
   //  A.prototype.getName = function () {
   //      return this.name;
   //  };
   //
   //  A.prototype.name = 'podrazumevano ime';
   //
   //  window.a1 = new A('djura');
   //  window.a2 = new A();
   //
   //
   //  function B (age) {
   //      if (typeof age === 'number') {
   //          this.age = age;
   //      }
   //  }
   //
   //  B.prototype = new A();
   //  B.prototype.constructor = B;
   //
   //  B.prototype.age = -1;
   //
   //  B.prototype.getAge = function () {
   //      return this.age;
   //  };


    function Osoba(name, prezime){
        if(typeof name === 'string' && typeof prezime === 'string'){
            this.name = name;
            this.prezime = prezime;
        }
    }

    Osoba.prototype.name = 'n';
    Osoba.prototype.prezime = 'n';

    Osoba.prototype.fullName = function () {
        return this.name + " " + this.prezime;
    }

    function OsobaOsobine(godiste, mestoRodjenja){
        if(typeof godiste === 'number' && typeof mestoRodjenja === 'string'){
            this.godiste = godiste;
            this.mestoRodjenja = mestoRodjenja;
        }
    }



    OsobaOsobine.prototype = new Osoba();
    OsobaOsobine.prototype.constructor = OsobaOsobine;

    OsobaOsobine.prototype.godiste = 9999;
    OsobaOsobine.prototype.mestoRodjenja = 'Nepoznato';

    osoba3 = new OsobaOsobine("Djura", "Djuric");
    //osoba3.godiste = 1991;
    osoba3.mestoRodjenja = "Dete kafane";

    osoba1 = new Osoba("Djura", "Djuric");
    osoba2 = new Osoba();
    //b1 = new B(25);
    //b2 = new B();
    window.Osoba= Osoba;
    window.OsobaOsobine = OsobaOsobine;
    //window.A = A;
    //window.B = B;


});

// console.log(typeof undefined);
// console.log(typeof 1);
// console.log(typeof 'a');
// console.log(typeof false);
// console.log(typeof {});
// console.log(typeof null);
// console.log(typeof function () {
// });
