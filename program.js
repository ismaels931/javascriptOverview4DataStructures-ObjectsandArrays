console.log("Los números, cadenas y booleanos son los átomos de las estructuras de datos.");
console.log("Los objetos, por otro lado, permiten agrupar estos átomos para construir estructuras de datos complejas.")
console.log("Arrays e.g.: Ver código fuente");

let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2 - 1]);

console.log();
console.log("Propiedades de una variable, array u objeto");
console.log("En capítulos anteriores hemos visto expresiones como 'string'.length o Math.max.");
console.log("Son expresiones que acceden a una propiedad de un valor determinado. En el primer caso");
console.log("se accede a una propiedad del valor 'string', mientras que en el segundo caso");
console.log("se accede a una propiedad del objeto Math.");
console.log("La mayoria de valores de JS tienen propiedades.")
console.log("Existen dos formas para acceder a las propiedades de una variable:");
console.log("variable.x o variable[x]");
console.log("La primera normalmente se utiliza para ejecutar el literal de la propiedad.");
console.log("La segunda se utiliza para acceder a un valor ya sea de un array o un de diccionario.");
console.log("E.g.:");

let fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];
console.log(`El séptimo elemento de la succesión de fibonacci es: ${fibonacci[6]}`); //Accede a un valor
console.log(`La longitud del array es: ${fibonacci.length}`); //Ejecuta una propiedad

let diccionario = {"Tlf1": 680540397, "Tlf2": 658125320, "Tlf3": 667743163};
console.log(`Así se accede a un elemento de un diccionario o map ${diccionario['Tlf1']}`);
console.log();
console.log("Tanto arrays como cadenas tienen una serie de propiedades que contienen valores de funciones i.e. métodos.");
console.log("E.g. con cadenas: ver código fuente.");

let foo = "foo";
console.log(typeof foo.toUpperCase);
console.log(foo.toUpperCase());

console.log("E.g. con arrays: ver código fuente.");

let sequence = [1,2,3];
sequence.push(4);
sequence.push(5);

console.log(sequence);

sequence.pop();

console.log(sequence);

console.log();

console.log("Objetos JS. A continuación, se muestra en el código fuente como crear un objeto");
console.log("y acceder a sus propiedades E.g.:");

let day1 = {
	squirrel: false,
	events: ["work", "touched tree", "pizza", "running"]
};


console.log(day1.squirrel);
console.log(day1.wolf);
day1.wolf = false; //Si el atributo wolf no existe, lo crea.
console.log(day1.wolf);

console.log("El identificador de la propiedad de un objeto puede ser un número, una cadena o");
console.log("un nombre (identificador de una variable).");

let obj = {1: 'uno', 'dos': 2, tres: 3};

console.log("Si es un número, se tiene acceder al valor con [número].");
console.log("Si es una cadena o un nombre se puede acceder con [] o .");

console.log(obj[1]);
console.log(obj.dos);
console.log(obj['tres']); //El valor dentro de [], en algunos casos se debe poner entre comillas.

console.log("El operador delete, elimina una propiedad de un objeto. E.g.: ver código fuente");

let anObject = {left: 1, right: 2};
console.log(anObject.left);
delete anObject.left;
console.log(anObject.left);

console.log("El operador in, devuelve un booleano que indica si el objeto tiene una propiedad determinada.");
console.log("E.g.: ver código fuente");

console.log("left" in anObject);
console.log("right" in anObject);

console.log();

console.log("Para ver todas propiedades que tiene un objeto podemos usar el método Object.keys e.g. ver código fuente.");

console.log(Object.keys({x: 1, y: 2, z: 3}));

console.log();

console.log("Otro método interesante es Oject.assign que copia todas las propiedades de un objeto en otro.");
console.log("E.g.: ver código fuente");

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

console.log();

console.log("Entonces, podemos representar el diario de Jacques como un array de objetos. Ver código fuente");

var sampleJournal = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":true},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":true},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":true},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false}
  //and so on...
  ];

const readJournal = () => {
	for (let i = 0; i < sampleJournal.length; ++i) {
		if (sampleJournal[i].squirrel) {
			console.log("Day " + i);
			for (let j = 0; j < sampleJournal[i].events.length; ++j) console.log(sampleJournal[i].events[j]);
		}
	}
};

readJournal();

console.log();

console.log("Los valores primitivos numbers, strings y booleans son inmutables per se.");
console.log("e.g. no se puede cambiar una letra de una cadena mediante el acceso por índice.");
console.log("Los objetos en cambio, permiten cambiar sus propiedades. Hay una diferencia entre tener dos referencias al");
console.log("mismo objeto y tener dos objetos diferentes con las mismas propiedades. E.g. ver código fuente");

let obj1 = {value: 10};
let obj2 = obj1;
let obj3 = {value: 10};

console.log(obj1 == obj2); //Referencias diferentes al mismo objeto.
console.log(obj1 == obj3); //Objetos diferentes con las mismas propiedades.

obj1.value = 15;
console.log(obj2.value);

console.log("En este capítulo se estudia la correlación, que mide la relación de dependencia entre dos variables");
console.log("estadísticas. Se usa el coeficiente phi, que mide la correnlación entre variables binarias.");
console.log("El coeficiente phi, calcula la correlación a partir de una tabla de frecuencias y se obtiene como");
console.log("resultado un número entre -1 y 1 ambos inclusive. Si el resultado es negativo indica que las variables");
console.log("están relacionadas pero de forma inversa: cuando una es verdadera la otra es falsa. Si el resultado,");
console.log("es positivo indica que hay relación directa entre la variables. 0 indica ausencia de relación.");
console.log("Se puede ver el código fuente en 04_data.js y journal.js");

console.log();

console.log("Mediante el operador of, se pueden recorrer estructuras de datos, como por ejemplo un array");

function recorrerArray() {
	for (let entry of sampleJournal) console.log(`${entry.events.length} events`);
}

console.log();

console.log("Los arrays incluyen el método includes, que informa mediante un valor booleano si contiene un elemento determinado.");

function cuentaEventos(evento) {
	let count = 0;
	for (let entry of sampleJournal) {
		for (let event of entry.events) {
			if (event.includes(evento)) ++count;
		}
	}
	console.log("Hay " + count + " " + evento + "(s).");
}

cuentaEventos("carrot");
cuentaEventos("brushed teeth");
cuentaEventos("pizza");

console.log();

console.log("Más métodos de arrays. Ver código fuente");

let array = [];

for (let i = 0; i < 10; ++i) array.push(i); //push inserta un elemento al final de un array.

console.log(array.pop()); //pop muestra el elemento de la última posición de un array y lo elimina.

console.log(array.shift()); //shift muestra el primer elemento de un array y lo elimina.

console.log(array.unshift()); //unshift muestra el último elemento de un array pero no lo borra.

console.log(array.indexOf(2)); //Retorna el índice de un elemento.

console.log([1, 2, 3, 2, 1].lastIndexOf(2)); //Retorna el índice de la última ocurrencia del elemento en el array.

console.log(array.slice(2, 4)); //Retorna un array que va desde la posición 2 hasta la 4 - 1 del array original.

console.log(array.slice(2)); //Retorna un array que va desde la posición 2 hasta el final del array original.

/*Mediante el primer slice, retorna un array que va desde 0 hasta index - 1.
 *El segundo slice retorna un array que va desde index + 1 hasta el final del array originial.
 *Por último, el método concat, une los arrays retornados por el primer y segundo slice.
 */
function remove(array, index) {
	return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(["a", "b", "c", "d", "e"] , 2));

console.log();

console.log("En esta parte del capítulo el autor hace una aclaración sobre la inmutabilidad de los tipos primitivos:");
console.log("number, string y boolean. Como no son objetos no se les puede añadir una propiedad, de ahí");
console.log("que se les considere inmutables e.g.: ver código fuente");

let s = "Ismael";
s.age = 31;
console.log(s.age); //El lenguaje no se queja al añadir una propiedad al string, pero en realidad no la añade

console.log();

console.log("Strings y sus propiedades. Ver código fuente");

console.log("coconuts".slice(4,7));
console.log("coconut".indexOf("u"));
console.log("one two three".indexOf("ee")); //Devuelve el índice del primer caracter del string del argumento.
console.log("	okay \n ".trim()); //Elimina espacios, saltos de línea, tabuladores, etc.
console.log("6".padStart(3, "0")); //Coloca delante del string 2 ceros y devuelve un string de longitud 3.
console.log("Ismael Sánchez Cañadas".split(" ")); //Devuelve un array de strings que han sido separadas por un espacio.
//Se puede usar otros separadores como coma, punto, etc.
let words = "Ismael Sánchez Cañadas".split(" ");
console.log(words.join(".")); //Esta función une elementos de un array mediante un string y devuelve un string.
console.log("LA".repeat(3)); //Repite 3 veces el string y devuelve un string.
let exp1 = "abc";
console.log(exp1.length); //Devuelve la longitud del string
console.log(exp1[1]); //Se puede acceder a un elemento de un string usando índices

console.log();

console.log("Rest parameters: una función se puede definir con un número variable de parámetros.");
console.log("En JS esto se conoce como three-dot notation e.g. ver código fuente");

function max(...numbers) {
	let result = -Infinity;
	for (let number of numbers) {
		if (number > result) result = number;
	}
	return result;
}

console.log(max(4, 1, 9, -2));

console.log("Three-dot notation convierte los argumentos de entrada en un array.");
console.log("Por otro lado, se puede llamar a la función pasandole una array como argumento.")

let ar = [5,1,7];
console.log(max(...ar));

console.log("Además permite insertar un array en otro array mediante el triple-dot operator.");

let ws = ["never", "fully"];
console.log("will", ...ws, "understand");

console.log();

console.log("Algunos métodos del objeto Math. Ver código fuente");

function randomPointOnCircle(radius) {
	let angle = Math.random() * 2 * Math.PI;
	return {x: radius * Math.cos(angle),
			y: radius * Math.sin(angle)};
}

console.log(randomPointOnCircle(2));

console.log(Math.random());

console.log(Math.floor(Math.random() * 10));

console.log();

console.log("JS permite mapear los elementos de un array para acceder a ellos mediante un identificador, como");
console.log("con una variable. De esta forma se elimina el acceso por índice e.g. ver código fuente");

let vector = [1,2];

let [primero, segundo] = vector;

console.log(`Primero: ${primero}`);
console.log(`Segundo: ${segundo}`);

console.log("El mismo truco se puede usar para mapear propiedades o atributos de un objeto (o mapas) e.g. ver código fuente");

let ob = {nombre: "Ismael", edad: 31};

let {nombre} = ob;
let {edad} = ob;

console.log("Me llamo " + nombre + " y tengo " + edad + " años.");

console.log("Se puede ver otro ejemplo de este truco en el archivo 04_data.js empleado en la función phi");

console.log();

console.log("JSON (JS Object Notation) es un formato de intercambio de datos a través de la web similar a XML.");
console.log("Ver código fuente");

let json = JSON.stringify({squirrel: false, events: ["weekend"]}); //Convierte datos a JSON.
console.log(json);
console.log(JSON.parse(json).events); //Analizador sintáctico.

console.log();

console.log("The sum of range");

let range = (start, end, step) => {
	let array = [];
	if (step == undefined || step == 0) {
		for (let i = start; i <= end; ++i) array.push(i);
	}
	else {
		if (step < 0) {
			for (let i = start; i >= end; i += step) array.push(i);
		}
		else {
			for (let i = start; i <= end; i += step) array.push(i);
		}
	}
	return array;
};

/*step toma como valor 1 o -1 si no se le pasa ningún argumento al llamar a la función*/
function solution(start, end, step = start < end ? 1 : -1) {
	let array = [];

	if (step > 0) {
		for (let i = start; i <= end; i += step) array.push(i);
	}
	else {
		for (let i = start; i >= end; i += step) array.push(i);
	}
	return array;
}

let sum = (array) => {
	let suma = 0;
	for (let number of array) suma += number;
	return suma;
};

console.log();

console.log("Reversing an array");
console.log("Existe el método reverse e.g. ver código fuente");
console.log([1,2,3,4].reverse());
console.log("Algoritmos solución");

function reverseArray(array) {
	let result = [];
	for (let i = array.length - 1; i >= 0; --i) result.push(array[i]);
	return result;
};

function reverseArrayInPlace(array) {
	let center = Math.floor(array.length / 2);
	for (let i = 0; i < center; ++i) {
		let aux = array[i];
		array[i] = array[array.length - 1 - i];
		array[array.length - 1 - i] = aux;
	}
}

console.log(reverseArray(["A", "B", "C"]));
let vec = [1,2,3,4,5,6,7,8,9];
reverseArrayInPlace(vec);
console.log(vec);

console.log();

console.log("A list");
console.log("Los objetos se pueden usar para construir todo tipo de estructuras de datos.")
console.log("Una lista es un conjunto imbricado de objetos donde el primero apunta al segundo, el");
console.log("segundo al tercero, y así sucesivamente e.g. ver código fuente");

let list = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};

console.log(list);

function recorrerLista(list) {
	if (list.rest == null) console.log(list.value);
	else {
		console.log(list.value);
		recorrerLista(list.rest);
	}
};

function arrayToList(list, array) {
	if (array.length == 0);
	else {
		list.value = array.shift();
		if (array.length > 0) list.rest = {};
		else list.rest = null;
		return arrayToList(list.rest, array);
	}
};

let l = {};
let v1 = [1,2,3];
arrayToList(l, v1);
console.log(l);

let listToArray = (array, list) => {
	if (list.rest == null) array.push(list.value);
	else {
		array.push(list.value);
		return listToArray(array, list.rest);
	}
}

let v2 = [];
let li = {
	value: 1,
	rest: {
		value: 2,
		rest: {
			value: 3,
			rest: null
		}
	}
};
listToArray(v2, li);
console.log(v2);

let prepend = (element, list) => {
	let newList = {value: element, rest: list};
	return newList;
};

console.log(li);
console.log(prepend(0, li));

function nth(list, number) {
	if (!list) return undefined; //If not null implica verdadero
	else if (number == 0) return list.value;
	else return nth(list.rest, number - 1);
}

console.log(nth(li, 2));
console.log(nth(li, 3));

console.log();

console.log("Deep comparison");

/*Compara si dos objetos tienen las mismas propiedades y si las propiedades tienen los mismos valores.*/
let deepEqual = (x, y) => {
	//Comparación estricta: evalúa a verdadero solo si las variables son del mismo tipo y tienen el mismo valor.
	if (x === y) return true;

	//Si una de las variables no es un objeto o es null entonces falso.
	if (x == null || typeof x != "object" || y == null || typeof y != "object") return false;

	//Object.keys(objeto) devuelve un array, los elementos del cual, son el identificador de cada una de las propiedades del objeto
	let keysX = Object.keys(x), keysY = Object.keys(y);

	//Si un objeto tiene más propiedades que otro entonces falso
	if (keysX.length != keysY.length) return false;

	/*Este bucle comprueba mediante el método includes si alguna de las propiedades del objeto x no está en el objeto y
	 *o si las propiedades de los dos objetos tienen el mismo valor, con una llamada recursiva.
	 */
	for (let key of keysX) {
		if (!keysY.includes(key) || !deepEqual(x[key], y[key])) return false;
	}

	//Esta función retorna true si no se ha cumplido ninguna de las condiciones anteriores, incluida la que está dentro del bucle
	return true;
}

let o1 = {here: {is: "an"}, object: 2};
console.log(deepEqual(o1, o1));
console.log(deepEqual(o1, {here: 1, object: 2}));
console.log(deepEqual(o1, {here: {is: "an"}, object: 2}));
