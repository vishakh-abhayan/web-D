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

add(50, 40, (sum, err) => {
  if (err) {
    console.log("first number is zero");
  } else {
    console.log(sum);
    multi(sum, sum, (product) => {
      console.log(product);
      div(product, 50, (result) => {
        console.log(result);
      });
    });
  }
});

const promise = require("promise");
