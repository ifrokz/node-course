let square = x => x * x;
console.log(square(9));

let user = {
    name: 'Ivan',
    sayHi: () => {
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments)
        console.log(`Hi. I'm ${this.name}`);
    }
};
// user.sayHi(); // error ocn el this, desmutear para ver donde apunta el this o el arguments, en resumen, cual es el padre de la funcion.
user.sayHiAlt(1,2,3);