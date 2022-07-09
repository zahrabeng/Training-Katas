function weight(inputArr) {
  const splittedArr = inputArr.split(" ");
  const objArr = [];
  for (let number of splittedArr) {
    objArr.push(calculateWeight(number));
  }
  objArr.sort(function (a, b) {
    return a.weight - b.weight;
  });
  
  return objArr.map((object) => object.originalNum);
}

function calculateWeight(number) {
  const splittedNumber = number.split("");
  let weight = 0;
  for (let element of splittedNumber) {
    const numberInt = parseInt(element);
    weight += numberInt;
  }

  return { originalNum: parseInt(number), weight: weight };
}

console.log(weight("103 123 2000 4444 99"));
