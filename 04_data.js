var journal = [];

function addEntry(events, squirrel) {
  journal.push({events, squirrel});
}

function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt((table[2] + table[3]) *
              (table[0] + table[1]) *
              (table[1] + table[3]) *
              (table[0] + table[2]));
}

/*En JS existe un truco para acceder a los elementos de un array de forma más directa sin usar el acceso por índice e.g.*/
function abstractPhi([n00, n01, n10, n11]) {
  return (n11 * n00 - n10 * n01) / Math.sqrt((n10 + n11) * (n00 + n01) * (n01 + n11) * (n00 + n10));
}

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i], index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.squirrel) index += 2;
    table[index] += 1;
  }
  return table;
}

function journalEvents(journal) {
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
};

/*Está función recibe como argumento el array JOURNAL y recorre la salida de la función journalEvents, que retorna
 *un array con todos lo eventos de JOURNAL, sin repeticiones. Luego se pasa cada evento a la funcón tableFor,
 *que retorna una tabla de frecuencias que representa la presencia o ausencia de un evento en JOURNAL, y si squirrel
 *es verdadero o falso. Finalmente, se calcula el coeficiente de correlación phi a partir de la tabla de
 *frecuencias.
 */
const finalAnalysis = (journal) => {
  for (let event of journalEvents(journal)) {
    let correlation = phi(tableFor(event, journal));
    guardarPhi(event, correlation); //Llama a la función que hay a continuación para guardar datos en un mapa
    if (correlation > 0.1 || correlation < -0.1) console.log(event + ": " + correlation);
  }
}

/*Objetos como mapas*/
let mapa = {};

function guardarPhi(evento, phi) {
  mapa[evento] = phi;
}

/*Recorrer un mapa con el operador in. Solo entra en el cuerpo del bucle si event está dentro del mapa.*/
let recorrerMapa = (mapa) => {
  for (let event in mapa) console.log(event + ": " + mapa[event]);
}

function max(...numbers) {
  let result = -Infinity;
  for (let number of numbers) {
    if (number > result) result = number;
  }
  return result;
}

var listEx = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};
