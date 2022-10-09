function add(num1, num2, callback) {
  let err = false;
  if (num1 === 0) {
    err = true;
  }
  callback(num1 + num2, err);
}

function multi(num1, num2, callback) {
  callback(num1 * num2);
}

function div(num1, num2, callback) {
  callback(num1 / num2);
}

const { resolve, reject } = require("promise");
// add(50, 40, (sum, err) => {
//   if (err) {
//     console.log("first number is zero");
//   } else {
//     console.log(sum);
//     multi(sum, sum, (product) => {
//       console.log(product);
//       div(product, 50, (result) => {
//         console.log(result);
//       });
//     });
//   }
// });

const promise = require("promise");

function add(num1, num2) {
  return new promise((resolve, reject) => {
    if (num1 === 0) {
      reject("Error...............");
    }
    resolve(num1 + num2);
  });
}
function mul(num1, num2) {
  return new promise((resolve, reject) => {
    if (num1 === 0) {
      reject("Error...............");
    }
    resolve(num1 * num2);
  });
}

function div(num1, num2) {
  return new promise((resolve, reject) => {
    if (num1 === 0) {
      reject("Error...............");
    }
    resolve(num1 / num2);
  });
}

add(10, 20)
  .then((sum) => {
    console.log(sum);
    return mul(sum, sum);
  })
  .then((result) => {
    console.log(result);
    return div(result, 9);
  })
  .then((product) => {
    console.log(product);
  })
  .catch((err) => {
    console.log(err);
  });
