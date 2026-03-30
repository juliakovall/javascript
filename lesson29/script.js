// export function ageClassification(num) {
//   return num < 0
//     ? null
//     : num <= 24
//       ? "Дитинство"
//       : num <= 44
//         ? "Молодість"
//         : num <= 65
//           ? "Зрілість"
//           : num <= 75
//             ? "Старість"
//             : num <= 90
//               ? "Довголіття"
//               : num <= 122
//                 ? "Рекорд"
//                 : null;
// }

export function ageClassification(num) {
  if (num < 0) {
    return null;
  }

  if (num <= 24) {
    return "Дитинство";
  }

  if (num <= 44) {
    return "Молодість";
  }

  if (num <= 65) {
    return "Зрілість";
  }

  if (num <= 75) {
    return "Старість";
  }

  if (num <= 90) {
    return "Довголіття";
  }

  if (num <= 122) {
    return "Рекорд";
  }

  return null;
}

export function weekFn(cond) {
  let str = "";

  switch (cond) {
    case 1:
      str = "Понеділок";
      break;
    case 2:
      str = "Вівторок";
      break;
    case 3:
      str = "Середа";
      break;
    case 4:
      str = "Четвер";
      break;
    case 5:
      str = "П'ятниця";
      break;
    case 6:
      str = "Субота";
      break;
    case 7:
      str = "Неділя";
      break;
    default:
      str = null;
  }

  return str;
}

console.log(weekFn(1)); // 'Понеділок'
console.log(weekFn(3)); // 'Середа'
console.log(weekFn(7)); // 'Неділя'
console.log(weekFn(9)); // null
console.log(weekFn(1.5)); // null
console.log(weekFn("2")); // null
