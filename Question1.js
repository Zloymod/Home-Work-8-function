const name = "Denis";
// Function declaration

function getName1() {
  //   console.log(getName1);
  return name;
}
console.log(`Имя равно ${getName1(name)}`);

// Function expression

const getName2 = function () {
  //   console.log(getName2);
  return name;
};
console.log(`Имя равно ${getName2(name)}`);

// Arrow function

const getName3 = () => {
  return name;
  //   console.log(getName3);
};
console.log(`Имя равно ${getName3(name)}`);
