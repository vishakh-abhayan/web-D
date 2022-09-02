// const dt = new Date();
// console.log("hello");
// for (i = 0; i <= 10; i++) {
//   console.log("looping......");
// }
// const diff = new Date() - dt;
// console.log(diff);

function longTask(millSecondTime) {
  const dt = new Date();
  while (new Date() - dt <= millSecondTime) {}
}

function showEnd() {
  console.log("end.....");
}

console.log("start.....");
setTimeout(showEnd, 2000);

console.log("start.....");
setTimeout(showEnd, 2000);

console.log("start.....");
setTimeout(showEnd, 2000);
