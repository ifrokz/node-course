let person = { 
    name: 'Ivan'
};

person.age = 22;

debugger; // sirve para parar en esta linea la ejecucion.

person.name = 'OtherName';

console.log(person);

// 'repl': comando para poder usar la consola como si fuera la de chrome.

// 'node inspect `nombredelarchivo`': entra en el modo debug.
// 
//   comandos: 
//      -> c: ejecuta el programa hasta el final o hasta el comando 'debugger'
//      -> n: va a la siguiente linea del programa para su ejecucion.
//      -> list(n): deja ver un numero n de lineas en la consola.


// Debugging console chrome: 
// nodemon --inspect-brk .\playground\debugging.js
// chrome://inspect