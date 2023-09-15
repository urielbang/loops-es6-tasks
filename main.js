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
// const cities = [
//   {
//     name: "Lod",
//     numCitizen: 5,
//     symbol:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Coat_of_arms_of_Lod.svg/225px-Coat_of_arms_of_Lod.svg.png",
//     isClosed: false,
//   },
//   {
//     name: "Ramla",
//     numCitizen: 75,
//     symbol:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Coat_of_Arms_of_Ramla.svg/225px-Coat_of_Arms_of_Ramla.svg.png",
//     isClosed: true,
//   },
//   {
//     name: "Holon",
//     numCitizen: 198285,
//     symbol:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Coat_of_arms_of_Holon.svg/165px-Coat_of_arms_of_Holon.svg.png",
//     isClosed: true,
//   },
//   {
//     name: "Jeruslem",
//     numCitizen: 500000,
//     symbol:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Emblem_of_Jerusalem.svg/77px-Emblem_of_Jerusalem.svg.png",
//     isClosed: false,
//   },
//   {
//     name: "Bat yam",
//     numCitizen: 130000,
//     symbol:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Coat_of_arms_of_Bat-Yam.svg/188px-Coat_of_arms_of_Bat-Yam.svg.png",
//     isClosed: true,
//   },
// ];
// function printALlCityToLog() {
//   for (const item of cities) {
//     console.log(item);
//   }
// }

// function printTheLAstCity() {
//   for (const key in cities[3]) {
//     console.log(cities[cities.length - 1][key]);
//   }
// }
// function printEvryCityInElemnts() {
//   for (const itemCity of cities) {
//     document.body.innerHTML += `<div id="myDiv${cities.indexOf(
//       itemCity
//     )}"></div>`;

//     document.body.innerHTML += `=`.repeat(160);
//     for (const key in itemCity) {
//       if (key.includes("symbol")) {
//         document.querySelector(
//           `#myDiv${cities.indexOf(itemCity)}`
//         ).innerHTML += `<img src="${itemCity[key]}"/>`;
//       } else {
//         document.querySelector(
//           `#myDiv${cities.indexOf(itemCity)}`
//         ).innerHTML += `${key}: ${itemCity[key]}`;
//       }
//     }
//   }
// }

// document.body.innerHTML += `<button id="btn">click here !</button>`;

// document.querySelector("#btn").addEventListener("click", () => {
//   document.body.innerHTML += `<form id="myForm">
//   <label for="nameInput">name:</label>
//   <input id="nameInput" type="text" />

//   <label for="numCitizen">citizen number:</label>
//   <input id="numCitizen" type="number" />

//   <label for="symbolInput">symbol url:</label>
//   <input id="symbolInput" type="text" />

//   <label for="isClosed">is closed?</label>
//   <input id="isClosed" type="text" />

//   <input id="btn" type="submit" />
//   </form>`;
//   document.querySelector("#myForm").addEventListener("submit", (e) => {
//     e.preventDefault();
//     const obj = {};
//     obj.name = nameInput.value;
//     obj.numCitizen = numCitizen.value;
//     obj.symbol = symbolInput.value;
//     obj.isClosed = isClosed.value;
//     cities.push(obj);
//     nameInput.value = "";
//     numCitizen.value = "";
//     symbolInput.value = "";
//     isClosed.value = "";
//     console.log(cities);
//   });
// });

//14
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
// document.body.innerHTML += ` <table id="myTable">
// <thead>
//   <tr id="myThead"></tr>
// </thead>
// <tbody id="myTbody"></tbody>
// </table>`;

// for (const key in studentsArray[0]) {
//   myThead.innerHTML += `<th>${key}</th>`;
// }
// for (const item of studentsArray) {
//   myTbody.innerHTML += `<tr id="tr${studentsArray.indexOf(item)}"></tr>`;

//   for (const key in item) {
//     document.getElementById(
//       `tr${studentsArray.indexOf(item)}`
//     ).innerHTML += `<td>${item[key]}</td>`;
//   }
// }

// document.body.innerHTML += `
// <h2>uriel</h2>
// <h2>michel</h2>
// <h2>daniel</h2>
// <h2>shlomo</h2>
// <h2>gavriel</h2>
// <button id="btnColor">change color!</button>
// <button id="cbtnTxt">change txt</button>

// `;
// document.getElementById("btnColor").addEventListener("click", () => {
//   let h2Collection = document.getElementsByTagName("h2");
//   for (const item of h2Collection) {
//     item.style.color = "blue";
//   }
// });
// document.getElementById("cbtnTxt").addEventListener("click", () => {
//   let h2Collection = document.getElementsByTagName("h2");
//   for (const item of h2Collection) {
//     item.innerText = "hello";
//   }
// });

document.body.innerHTML += `
 <h2>26</h2>
 <h2>35</h2>
 <h2>15</h2>
 <h2>16</h2>
 <h2>17</h2>
 <button id="btnColor">change Young!</button>`;

document.querySelector("#btnColor").addEventListener("click", () => {
  const txtCollection = document.querySelectorAll("h2");
  for (const itemH2 of txtCollection) {
    if (Number(itemH2.innerText) < 25) {
      itemH2.innerText = "young";
    }
  }
});
