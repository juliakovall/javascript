import { isValidEmail, isValidUrl } from "./script.js";

describe("isValidEmail", () => {
  test("returns true for valid email", () => {
    expect(isValidEmail("example@example.com")).toBe(true);
  });

  test("returns false for invalid email", () => {
    expect(isValidEmail("invalid-email")).toBe(false);
  });

  test("returns false for email without domain", () => {
    expect(isValidEmail("test@")).toBe(false);
  });

  test("returns false for email without @", () => {
    expect(isValidEmail("testexample.com")).toBe(false);
  });
});

describe("isValidUrl", () => {
  test("returns true for valid https url", () => {
    expect(isValidUrl("https://www.example.com")).toBe(true);
  });

  test("returns true for valid http url", () => {
    expect(isValidUrl("http://example.com")).toBe(true);
  });

  test("returns true for valid url without protocol", () => {
    expect(isValidUrl("example.com")).toBe(true);
  });

  test("returns false for invalid url", () => {
    expect(isValidUrl("invalid-url")).toBe(false);
  });
});
