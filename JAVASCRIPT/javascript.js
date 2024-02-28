let numeros =[10.34, 1, 1000, 350.23]
const varios = ["juan", true, 10, null, 3.0]
console.log(numeros);
console.log(varios)
console.log(varios[0]);
console.log(varios.length);

// Agrego al final
numeros.push("colombia");
console.log(numeros);

// Quito el ultimo
numeros.pop();

// Poner al inicio 
numeros.unshift("Brasil");
console.log(numeros);
numeros.shift();
console.log(numeros);

// Metodos para arreglos
// 1) .reduce()
let reducido = numeros.reduce((acumulador, valor_actual) => {
    return acumulador+valor_actual;
});
console.log(reducido);
// 2) .filter()
let filter = numeros.filter(dato=>{
    return dato > 10 ;
});
console.log(filter);

let string = ["colombia", " brasil", "panama"]
console.log(string.filter(datos=>{
    return datos.startsWith("col");
}));
console.log(string);

// 3) .map()
let mapeo = string.map(pais =>{
    return pais.concat(" hola");
});
console.log(mapeo);

let mapeonum = numeros.map(numeros => {
    return Math.pow(numeros,2);
});
console.log(mapeonum);

// 4) .forEach()
numeros.forEach(num =>{
    console.log(num)
});

/*  Crear arreglos usando funciones(tipo flecha)
    Usar metodos de arreglos y mostrar resultados
    Para cada arreglo minimo un metodo
    Usando el parametro(Callbackfn)
*/