const pepito = "lo que sea";

// function sum(a, b) {
//     return a + b;
// }

// const sum = (a, b) => {
//   return a + b;
// };

// const sum = (a, b) => a + b;

const test = (name) => `My name is ${name}`;

// console.log(test("Álvaro"))
// console.log(sum(2, 2));

const names = ["Levi", "Luffy", "Marinette", "Adrien"];

for (let index = 0; index < names.length; index++) {
  const element = names[index];
  // console.log(element)
}

//foreach
// names.forEach(name => console.log(name))

// const canciones = ["Hang onto yourself", "Go your own way", "Modern Love"];

// canciones.forEach((cancion, indice, array) => {
//   console.log("Elemento actual", cancion, "índice", indice, "array", array);
// });

// const myArray = [1, 2, 3, 4];

// const myArrayTimesTwo = myArray.map((value)=>{
//     return value * 2
// })//[2,4,6,8]

// const myArrayTimesTwo = myArray.map(number => number *2)

// const myArrayTimesTwo =[]

// for (let index = 0; index < myArray.length; index++) {
//     const value = myArray[index];
//     myArrayTimesTwo.push(value*2)
// }
// console.log(myArrayTimesTwo);

const songs = [
  { name: "Curl of the Burl", artist: "Mastodon" },
  { name: "Oblivion", artist: "Mastodon" },
  { name: "Flying Whales", artist: "Gojira" },
  { name: "Euralio y sus cabras", artist: "Euralio" },
];
//crear un nuevo array con solo las canciones que sean del artista Mastodon
//*EXPLICAR ===
// if (1 === "1") {
//   console.log("Entra en el if");
// } else {
//   console.log("No se cumple la condición");
// }
// const mastodonSongs = songs.filter(song => song.artist === "Mastodon").map(song => song.name)
// const mastodonSongs = [];
// for (let index = 0; index < songs.length; index++) {
//   const element = songs[index];
//   if (element.artist == "Mastodon") {
//     mastodonSongs.push(element.name);
//   }
// }
// console.log(mastodonSongs);

// const allSongNames = [];

// for (const song of songs) {
//   allSongNames.push(song.name);
// }
const allSongNames = songs.map((song) => song.name);
// console.log(allSongNames)
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosFiltrados = numeros.filter((numero) => numero > 5);
// console.log(numerosFiltrados)
//* Reduce
// let sum = 0;

// for (let i = 0; i < numbers.length; i++) {
//     //   sum = sum + numbers[i];
//   sum += numbers[i];
// }
const numbers = [10, 5, 7];

const valorInicial = 5;
const sum = numbers.reduce(
  (valorAnterior, valorActual) => valorAnterior * valorActual,
  valorInicial
);
console.log(sum);
