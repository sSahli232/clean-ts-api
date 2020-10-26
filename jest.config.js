module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  preset: "@shelf/mongodb",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
};
