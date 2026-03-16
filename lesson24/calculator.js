function DateCalculator(initialDate) {
  this.currentDate = new Date(initialDate);

  this.addDays = function (days) {
    this.currentDate.setDate(this.currentDate.getDate() + days);
  };

  this.subtractDays = function (days) {
    this.currentDate.setDate(this.currentDate.getDate() - days);
  };

  this.getResult = function () {
    const year = this.currentDate.getFullYear();
    const month = String(this.currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(this.currentDate.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
}
// const dateCalculator = new DateCalculator('2023-01-01')
// dateCalculator.addDays(5)
// console.log(dateCalculator.getResult())
//
// dateCalculator.subtractDays(3)
// console.log(dateCalculator.getResult())
export { DateCalculator };
