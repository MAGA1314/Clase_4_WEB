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

//Primer Arreglo
const generarnumeros = (limite) => {
    const numeros = [];
    for (let i = 1; i <= limite; i++) {
        numeros.push(i);
    }
    return numeros;
};
const generarnumeroshasta5 = generarnumeros(5);
console.log(generarnumeroshasta5);
// Filtrar los números entre 2 y 4
const filternum = generarnumeroshasta5.filter((dato) => {
    return dato > 2 && dato < 4;
});
console.log('Números entre 2 y 4:', filternum);
// Mapear arreglo generarnumeros para que saque el seno de cada numero
let mapeogenerarnumeros = generarnumeroshasta5.map(generarnumeros => {
    return Math.sin(generarnumeros);
});
console.log('Seno de cada numero del arreglo',mapeogenerarnumeros);
// Segundo Arreglo
const generarArregloMixtoAscendente = (inicio, fin) => {
    return Array.from({ length: fin - inicio + 1 }, (_, index) => `Elemento ${inicio + index}`);
};
const arregloMixtoAscendente = generarArregloMixtoAscendente(1, 5);
console.log('Arreglo mixto ascendente:', arregloMixtoAscendente);
// Filtrar de la lista generarArreglosMixtosAscendente en elemeto 1
console.log(arregloMixtoAscendente.filter(datos=>{
    return datos.startsWith("Elemento 1");
}));
// Mapear arreglomixtoascendente
let mapeomixto = arregloMixtoAscendente.map(mapearmix =>{
    return mapearmix.concat(' mapeado')
});
console.log(mapeomixto);

// Tercer Arreglo
const generarArregloMixtoDescendente = (inicio, fin) => {
    return Array.from({ length: fin - inicio + 1 }, (_, index) => `Elemento ${fin - index}`);
};
const arregloMixtoDescendente = generarArregloMixtoDescendente(1, 5);
console.log('Arreglo mixto descendente:', arregloMixtoDescendente);
// Utilizar reduce para concatenar los elementos en una sola cadena
const resultadoConcatenado = arregloMixtoDescendente.reduce((acumulador, elemento) => {
    return acumulador + ' ' + elemento + " En arreglo | ";
});
console.log('Resultado concatenado:', resultadoConcatenado);
// Utilizar forEach para calcular la suma de las longitudes de las cadenas
let sumaLongitudes = 0;
arregloMixtoDescendente.forEach(elemento => {
    sumaLongitudes += elemento.length;
});
console.log('Suma de longitudes:', sumaLongitudes);

// Cuarto Arreglo
let generosPeliculas = ["accion", "comedia", "terror","drama", "terror"]
console.log(generosPeliculas)
// Utilizarreduce para contar la cantidad de películas de cada género
const conteoGeneros = generosPeliculas.reduce((contador, genero) => {
    contador[genero] = (contador[genero] || 0) + 1;
    return contador;
},{});
console.log('Conteo de películas por género:', conteoGeneros);
// Utilizando forEach para calcular la longitud promedio de los nombres de géneros
let longitudTotal = 0;
generosPeliculas.forEach(genero => {
    longitudTotal += genero.length;
});
const longitudPromedio = longitudTotal / generosPeliculas.length;
console.log('Longitud promedio de nombres de géneros:', longitudPromedio);
// 
console.log(generosPeliculas.filter(datos=>{
    return datos.startsWith("te");
}));
