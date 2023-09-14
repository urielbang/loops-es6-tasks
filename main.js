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
// document.body.innerHTML += `    <ul>
// <li>israel</li>
// <li>austrita</li>
// <li>america</li>
// <li>russia</li>
// <li>kanda</li>
// <li>georgia</li>
// </ul>
// <button id="btn">click to upper</button>
// `;
// const ulCollection = document.getElementsByTagName("li");

// btn.addEventListener("click", () => {
//   for (const itemLi of ulCollection) {
//     let strTmp = itemLi.innerText.toUpperCase();
//     itemLi.innerText = strTmp;
//   }
// });

//8

// const home = {
//   addresse: "aba ahimeir",
//   city: "ramle",
//   country: "israel",
//   numRooms: 4,
//   isresidents: false,
// };
// console.log(home);

// for (const key in home) {
//   console.log(key);
// }
// for (const key in home) {
//   document.body.innerHTML += home[key];
//   document.body.innerHTML += `<br>`;
// }

//9
// const dogsObjects = [
//   { name: "laki", age: 2, type: "pug" },
//   { name: "mori", age: 3, type: "lori" },
//   { name: "doli", age: 4, type: "grman" },
// ];
//1
// function printLogObjects() {
//   for (const item of dogsObjects) {
//     console.log(item);
//   }
// }
//2
// function printTheSeconDog() {
//   for (const keyDog in dogsObjects[1]) {
//     console.log(dogsObjects[1][keyDog]);
//   }
// }
//3
// for (const itemDogs of dogsObjects) {
//   document.body.innerHTML += `<div id="id${dogsObjects.indexOf(
//     itemDogs
//   )}"</div>`;
//   let divId = document.getElementById(`id${dogsObjects.indexOf(itemDogs)}`);
//   for (const key in itemDogs) {
//     divId.innerHTML += `<h3>${key}:${itemDogs[key]}</h3>`;
//   }
// }

//10
// const studentsArray = [
//   {
//     name: "uriel",
//     date: "15.03.98",
//     email: "uri@gmail.com",
//     isPasst: false,
//   },
//   {
//     name: "beni",
//     date: "16.03.99",
//     email: "veni@gmail.com",
//     isPasst: true,
//   },
//   {
//     name: "shkoni",
//     date: "14.03.2016",
//     email: "shkoni@gmail.com",
//     isPasst: false,
//   },
//   {
//     name: "michael",
//     date: "20.05.1975",
//     email: "michael@gmail.com",
//     isPasst: true,
//   },
// ];

// function printEvereStudent() {
//   for (const itemStudent of studentsArray) {
//     console.log(itemStudent);
//   }
// }

// function prinTheardStudents() {
//   for (const key in studentsArray[2]) {
//     console.log(studentsArray[2][key]);
//   }
// }
// function printEveryStudent() {
//   for (const itemStudetn of studentsArray) {
//     document.body.innerHTML += `<div id="div_${studentsArray.indexOf(
//       itemStudetn
//     )}"></div>`;
//     for (const key in itemStudetn) {
//       document.getElementById(
//         `div_${studentsArray.indexOf(itemStudetn)}`
//       ).innerHTML += ` ${key}: ${itemStudetn[key]}`;
//     }
//   }
// }

//11
// document.body.innerHTML += `  <form id="myForm">
// <label for="classNAme">class name:</label>
// <input id="classNAme" type="text" />

// <label for="NumWork">workes num:</label>
// <input id="NumWork" type="number" />

// <label for="managerName">name manager:</label>
// <input id="managerName" type="text" />

// <input id="btn" type="submit" />
// </form>`;
// let arr = [];
// let counter = 0;
// document.getElementById("myForm").addEventListener("submit", (e) => {
//   e.preventDefault();

//   if (counter < 3) {
//     let Office = {};
//     Office.class = classNAme.value;
//     Office.numberWorkers = NumWork.value;
//     Office.manageNAme = managerName.value;
//     arr.push(Office);
//     counter++;
//     classNAme.value = "";
//     NumWork.value = "";
//     managerName.value = "";
//   }

//   if (counter == 3) {
//     for (const itemOffice of arr) {
//       console.log(itemOffice);
//     }
//   }
// });

//12
// document.body.innerHTML = `<button id="btn">click here!</button>`;
// btn.addEventListener("click", () => {
//   document.body.innerHTML += `  <form id="myForm">
// <label for="dateStart">date start:</label>
// <input id="dateStart" type="date" />

// <label for="dateEnd">date end:</label>
// <input id="dateEnd" type="date" />

// <label for="timeDrive">time drive:</label>
// <input id="timeDrive" type="text" />

// <input id="btn" type="submit" />
// </form>`;

//   myForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let drive = {};
//     drive.dateStart = dateStart.value;
//     drive.dateEnd = dateEnd.value;
//     drive.timeDrive = timeDrive.value;
//     console.log(drive);
//   });
// });

//13
