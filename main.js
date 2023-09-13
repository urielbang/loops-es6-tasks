// forEach tasks
//1
// const arrayNAmes = ["uriel", "dainel", "beni", "guy", "ariel"];

// arrayNAmes.forEach((item) => {
//   console.log(item);
// });

//2
// const ages = [50, 20, 30, 60, 40, 80, 60, 30, 20, 10.56];
// ages.forEach((item) => {
//   if (item > 25) {
//     console.log(item);
//   }
// });

//3
const lastNames = ["abramov", "levi", "cohen", "meshulam", "davidov", "babyev"];
let newLastNames = [];
lastNames.forEach((item) => {
  newLastNames.push(item.toUpperCase());
});
console.log(newLastNames);
