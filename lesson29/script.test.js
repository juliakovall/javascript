import { ageClassification, weekFn } from "./script.js";

describe("script testing", () => {
  describe("ageClassification", () => {
    test("10 years", () => {
      const actualResult = ageClassification(10);
      const expectedResult = "Дитинство";

      expect(actualResult).toBe(expectedResult);
    });

    test("24 years", () => {
      const actualResult = ageClassification(24);
      const expectedResult = "Дитинство";

      expect(actualResult).toBe(expectedResult);
    });

    test("25 years", () => {
      const actualResult = ageClassification(25);
      const expectedResult = "Молодість";

      expect(actualResult).toBe(expectedResult);
    });

    test("60 years", () => {
      const actualResult = ageClassification(60);
      const expectedResult = "Зрілість";

      expect(actualResult).toBe(expectedResult);
    });
    test("70 years", () => {
      const actualResult = ageClassification(70);
      const expectedResult = "Старість";

      expect(actualResult).toBe(expectedResult);
    });
    test("88 years", () => {
      const actualResult = ageClassification(88);
      const expectedResult = "Довголіття";

      expect(actualResult).toBe(expectedResult);
    });
    test("111 years", () => {
      const actualResult = ageClassification(111);
      const expectedResult = "Рекорд";

      expect(actualResult).toBe(expectedResult);
    });
  });

  describe("weekFn", () => {
    test("якщо я передаю 1 то повертається понеділок", () => {
      const actualResult = weekFn(1);
      const expectedResult = "Понеділок";

      expect(actualResult).toBe(expectedResult);
    });

    test("якщо я передаю 2 то повертається вівторок", () => {
      const actualResult = weekFn(2);
      const expectedResult = "Вівторок";

      expect(actualResult).toBe(expectedResult);
    });

    test("якщо я передаю 3 то повертається середа", () => {
      const actualResult = weekFn(3);
      const expectedResult = "Середа";

      expect(actualResult).toBe(expectedResult);
    });

    test("якщо я передаю 4 то повертається четвер", () => {
      const actualResult = weekFn(4);
      const expectedResult = "Четвер";

      expect(actualResult).toBe(expectedResult);
    });

    test("якщо я передаю 5 то повертається п'ятниця", () => {
      const actualResult = weekFn(5);
      const expectedResult = "П'ятниця";

      expect(actualResult).toBe(expectedResult);
    });

    test("якщо я передаю 6 то повертається субота", () => {
      const actualResult = weekFn(6);
      const expectedResult = "Субота";

      expect(actualResult).toBe(expectedResult);
    });

    test("якщо я передаю 7 то повертається неділя", () => {
      const actualResult = weekFn(7);
      const expectedResult = "Неділя";

      expect(actualResult).toBe(expectedResult);
    });
  });
});
