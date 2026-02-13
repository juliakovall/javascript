function sumBigIntegers(numStr1, numStr2) {
  const num1 = BigInt(numStr1);
  const num2 = BigInt(numStr2);

  return num1 + num2;
}

console.log(sumBigIntegers("9007199254740991", "9007199254740991"));
