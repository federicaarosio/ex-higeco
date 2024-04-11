// Scrivere una funzione che prenda in input un array di oggetti e una chiave, e
// restituisca un nuovo array contenente solo i valori corrispondenti alla chiave
// specificata.

function filterArrayByKey(array, key) {
    return array.map(obj => obj[key]);
}

// Esempio1
const oggetti = [
    { nome: 'Sara', lavoro: 'insegnante' },
    { nome: 'Marta', lavoro: 'medico' },
    { nome: 'Luca', lavoro: 'avvocato' }
  ];
  
  const listaLavori = filterArrayByKey(oggetti, 'lavoro');
  console.log(listaLavori);


// Variante: funzione con input array e una stringa, ritornare un nuovo array con gli
// indici dei soli oggetti (contenuti nell’array) che hanno una chiave con valore uguale
// alla stringa passata