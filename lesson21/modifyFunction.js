function originalFunction(num) {
  return num * num; // умножаем число само на себя
}

function modifyFunction(originalFunc, multiplier) {
  return function (num) {
    return originalFunc(num) * multiplier;
  };
}
// const modifiedFunc = modifyFunction(originalFunction, 3);
// console.log(modifiedFunc(4)); // 48 (4 * 4 * 3)
// export { modifyFunction };
const modifiedFunc = modifyFunction(originalFunction, 3);
console.log("Original function output for 4:", originalFunction(4));
console.log("Modified function output for 4:", modifiedFunc(4));
export { originalFunction, modifyFunction };
