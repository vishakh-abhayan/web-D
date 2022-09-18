// const dt = new Date();
// console.log("hello");
// for (i = 0; i <= 10; i++) {
//   console.log("looping......");
// }
// const diff = new Date() - dt;
// console.log(diff);

// function longTask(millSecondTime) {
//   const dt = new Date();
//   while (new Date() - dt <= millSecondTime) {}
// }

// function showEnd() {
//   console.log("end.....");
// }

// console.log("start.....");
// setTimeout(showEnd, 2000);

// console.log("start.....");
// setTimeout(showEnd, 2000);

// console.log("start.....");
// setTimeout(showEnd, 2000);

// let person = {
//   name: "vishakh",
//   age: "18",
//   display: function () {
//     console.log(this.name);
//   },
// };

// for (x in person) {
//   console.log(person[x]);
// }

// person.display();

function person(name, age) {
  this.name = name;
  this.age = age;
  this.display = function () {
    console.log("Name : " + this.name + "   age :  " + this.age);
  };
}

let vishakh = new person("vishkah", 18);
let myran = new person("godson", 20);

vishakh.display();
myran.display();
