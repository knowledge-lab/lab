require([], function () {
   function fja(name, age, jmbg) {
       if (typeof name === 'string') {
           this.name = name;
       }
       if (typeof age === 'number'){
           this.age = age;
       }
       if (typeof jmbg === 'array'){
           this.jmbg = jmbg;
       }
   }

    fja.prototype.getName = function () {
        return this.name;
    };

    fja.prototype.name = "standard";
    
        fja.prototype.getAge = function () {
        return this.age;
    };

    fja.prototype.age = -1;
    
        fja.prototype.getJmbg = function () {
        return this.jmbg;
    };

    fja.prototype.jmbg = [0,0,0,0,0,1,0,0,0,0,0,0,0,3];

    window.fja = fja;
    
    return fja;
});