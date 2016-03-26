/**
 * Created by Administrator on 3/26/2016.
 */

require([], function(){

    function Osoba(name, age, jmbg){
        this.name = name;
        this.age = age;
        this.jmbg = jmbg;
    };
    
    Osoba.prototype.getName = function(){
        return this.name;
    }

    window.Osoba = Osoba;

    function Student(index, faculty){
        this.index = index;
        this.faculty = faculty;
       //Osoba.call(this, name, age, jmbg);
    };
    
    

    s = new Student("2006/433", "Elektrotehnicki");
    s.prototype = new Osoba("Djordje", 28, 87728682738989);

    window.s = s;


});