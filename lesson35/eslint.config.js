module.exports = [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        document: "readonly",
        console: "readonly",
        alert: "readonly",
        fetch: "readonly",
      },
    },
    rules: {},
  },
];
