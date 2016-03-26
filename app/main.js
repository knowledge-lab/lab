/*require([
    'tool',
    'konstante'
], function (tool, konstante) {
    tool(konstante.A);
});*/

requre([], funtion(){
   function A(name){
        this.name = name;
    }

    A.prototype .name = 'default';
    A.prototype.getName = function() {
        return this.name;
    };

    window.a1 = new A('Zika');
    window.a2 = new A();

    function B(name,age){
        this.age = age;
        A.call(this, name);
    }

});