const userObj = {
  firstName: "John",
  lastName: "Smith",
  age: 30,

  fullName() {
    return this.firstName + " " + this.lastName;
  },
};
function defUpperStr(str) {
  return (str || "default text").toUpperCase();
}
function evenFn(n) {
  const result = [];

  for (let i = 0; i <= n; i++) {
    if (i !== 0 && i % 2 === 0) {
      result.push(i);
    }
  }

  return result;
}
function weekFn(n) {
  if (typeof n !== "number" || !Number.isInteger(n)) return null;

  switch (n) {
    case 1:
      return "Понеділок";
    case 2:
      return "Вівторок";
    case 3:
      return "Середа";
    case 4:
      return "Четвер";
    case 5:
      return "П’ятниця";
    case 6:
      return "Субота";
    case 7:
      return "Неділя";
    default:
      return null;
  }
}
function ageClassification(n) {
  return n < 0 || n > 122
    ? null
    : n <= 24
      ? "Дитинство"
      : n <= 44
        ? "Молодість"
        : n <= 65
          ? "Зрілість"
          : n <= 75
            ? "Старість"
            : n <= 90
              ? "Довголіття"
              : "Рекорд";
}
function oddFn(n) {
  const result = [];
  let i = 0;

  while (i <= n) {
    if (i !== 0 && i % 2 !== 0) {
      result.push(i);
    }
    i++;
  }

  return result;
}
function mainFunc(a, b, cb) {
  if (typeof cb !== "function") return false;
  return cb(a, b);
}

function cbRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cbPow(num, pow) {
  return Math.pow(num, pow);
}

function cbAdd(a, b) {
  return a + b;
}
