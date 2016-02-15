// js/es6-module.js
class People{
    constructor(name){
        this.name = name;
    }
    sayHi(){
        console.log(`hi ${this.name} !`);
    }
}
//exports.module = People;
module.exports = People;

