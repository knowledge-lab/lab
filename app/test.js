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
    
    function inherit(datumRodjenja, gradRodjenja){
             if (typeof gradRodjenja === 'string') {
           this.gradRodjenja = gradRodjenja;
       }
       if (typeof datumRodjenja === 'array'){
           this.datumRodjenja = gradRodjenja;
       }  
        
    }
    window.inherit = inherit;
    
            inherit.prototype.getDatum = function () {
        return this.datumRodjenja;
    };

    inherit.prototype.datumRodjenja = [1,1,1900];
    
        inherit.prototype.getGrad = function () {
        return this.gradRodjenja;
    };

    inherit.prototype.gradRodjenja = "Somewhere on the planet earth";
    
//    fja.prototype = new inherit();
   
    fja.prototype = {
        getDatum: inherit.getDatum,
        getGrad: inherit.getGrad
    }
        fja.prototype.constructor = fja;
});