// First Class Function - това е функция която се връща от друга функция.

const write = function () {
  return "Hello,world!";
};

console.log(write());

//First Class Function with clousure !!!

function sayHello() {
  return function () {
    console.log("Hello Dimi!");
  };
}

const res = sayHello();
res();