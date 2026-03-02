console.log("#5. JavaScript homework example file");
const counter = (function () {
  let current = 0;

  return function (n) {
    if (typeof n === "number") {
      current = n;
      return current;
    }

    const res = current;
    current += 1;
    return res;
  };
})();
const counterFactory = (function () {
  let value = 0;

  return {
    value(n) {
      if (typeof n === "number") value = n;
      return value;
    },
    increment() {
      value += 1;
      return value;
    },
    decrement() {
      value -= 1;
      return value;
    },
  };
})();
const myPrint = (a, b, res) => `${a}^${b}=${res}`;

const myPow = (a, b, myPrintCb) => {
  const absPow = (base, exp) => {
    if (exp === 0) return 1;
    return base * absPow(base, exp - 1);
  };

  if (b === 0) return myPrintCb(a, b, 1);

  if (b > 0) {
    const res = absPow(a, b);
    return myPrintCb(a, b, res);
  }

  const res = 1 / absPow(a, Math.abs(b));
  return myPrintCb(a, b, res);
};
const myMax = (arr) => Math.max.apply(null, arr);
const myMul = (a, b) => a * b;

const myDouble = myMul.bind(null, 2);
const myTriple = myMul.bind(null, 3);

export { counter, counterFactory, myPow, myMax, myMul, myDouble, myTriple };
