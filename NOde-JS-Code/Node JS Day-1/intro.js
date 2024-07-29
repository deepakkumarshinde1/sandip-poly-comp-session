let text = "deepak";
text = 1;
text = 20.3;
text = true;
// const pie = 0;
// console.log(pie);

function funName() {
  console.log("I am function");
} // function definition

funName(); // function call

let a = function () {
  console.log("i am expression");
}; // function expression
a();

console.clear();

function funB(callback) {
  callback();
}

funB(function () {
  console.log("I am function c");
});
