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
// const lastNames = ["abramov", "levi", "cohen", "meshulam", "davidov", "babyev"];
// let newLastNames = [];
// lastNames.forEach((item) => {
//   newLastNames.push(item.toUpperCase());
// });
// console.log(newLastNames);

//4

// const lastNames = ["abramov", "levi", "cohen", "meshulam", "davidov"];
// for (const nameItem of lastNames) {
//   console.log(nameItem);
// }

//5

// const ages = [50, 20, 30, 60, 40, 80, 60, 30, 20, 10.56];
// for (const itemAge of ages) {
//   if (itemAge > 20) {
//     console.log(itemAge);
//   }
// }

//6
// const lastNames = ["abramov", "levi", "cohen", "meshulam", "davidov", "babyev"];
// let newLAstNAmes = [];

// for (const itemLAstName of lastNames) {
//   newLAstNAmes.push(itemLAstName.toUpperCase());
// }

//7
document.body.innerHTML += `    <ul>
<li>israel</li>
<li>austrita</li>
<li>america</li>
<li>russia</li>
<li>kanda</li>
<li>georgia</li>
</ul>
<button id="btn">click to upper</button>
`;
const ulCollection = document.getElementsByTagName("li");

btn.addEventListener("click", () => {
  for (const itemLi of ulCollection) {
    let strTmp = itemLi.innerText.toUpperCase();
    itemLi.innerText = strTmp;
  }
});
