// Crea un archivo llamado objetos.js que contenga las siguientes líneas

// - Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: 'Juan Ignacio',
    apellido: 'Bordon',
    edad: 23,
    altura: 177,
    eresDesarrollador: true
}


// - Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales.edad;
console.log(edad);

// - Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const listaDatos = [
    datosPersonales, 
    {
        nombre: 'Agustin',
        apellido: 'Grosso',
        edad: 24,
        altura: 180,
        eresDesarrollador: false
    },
    {
        nombre: 'Tomas',
        apellido: 'Nanio',
        edad: 22,
        altura: 178,
        eresDesarrollador: false
    }
]

console.log(listaDatos);

// - Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const datosOrdenados = listaDatos.sort((a, b) => a.edad - b.edad);
console.log(datosOrdenados);