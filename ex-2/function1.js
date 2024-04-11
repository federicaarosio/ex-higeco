// Scrivere una funzione che prenda in input un array di oggetti e restituisca un nuovo
// array contenente solo gli oggetti che hanno una proprietà specifica (es. shape:
// ‘circle’) con un valore specifico.

function filterByProperty(array, property, value) {
    return array.filter(function (object) {
        return object.hasOwnProperty(property) && object[property] === value;
    });
}

// Esempio
const objects = [
    {
        shape: 'circle',
        name: 'obj1',
        width: 200
    },
    {
        shape: 'square',
        name: 'obj2',
        width: 150
    },
    {
        shape: 'triangle',
        name: 'obj3',
        width: 300
    },
    {
        shape: 'circle',
        name: 'obj4',
        width: 180
    },
    {
        shape: 'oval',
        name: 'obj5',
        width: 220
    }
];


let circleObjects = filterByProperty(objects, 'shape', 'circle');
console.log(circleObjects)