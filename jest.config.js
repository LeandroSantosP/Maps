module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["/node_modules/", "/.next/"],
  collectCoverage: true,
  moduleNameMapper: {
    "(styled-components)$":
      "<rootDir>/node_modules/styled-components/dist/styled-components.browser.cjs.js"
  },
  // collectCoverageFrom: ["src/**/*.ts(x)?"],
  setupFilesAfterEnv: ["<rootDir>/.jest/setup.ts"]
};
