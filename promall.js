const promise = require("promise");

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("vishakh abhayan");
    }, 3000);
  });
}

function getMoblie() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("98457114745");
    }, 2000);
  });
}

promise.all([getName(), getMoblie()]).then((result) => {
  console.log(result);
});
