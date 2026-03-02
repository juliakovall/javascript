console.log("#6. JavaScript homework example file");
class CalorieCalculator {
  constructor() {
    this.products = new Map();
  }

  addProduct(name, calories) {
    this.products.set(name, calories);
  }

  getProductCalories(productName) {
    if (this.products.has(productName)) {
      return this.products.get(productName);
    }
    return "Product not found";
  }

  removeProduct(productName) {
    this.products.delete(productName);
  }
}
export { CalorieCalculator };

const calorieCalculator = new CalorieCalculator();
calorieCalculator.addProduct("Apple", 52);
calorieCalculator.addProduct("Banana", 89);

console.log(calorieCalculator.getProductCalories("Apple"));
console.log(calorieCalculator.getProductCalories("Banana"));

calorieCalculator.removeProduct("Apple");
console.log(calorieCalculator.getProductCalories("Apple"));
