// Denne koden er hentet fra tidligere forelesningsnotater: https://www.dropbox.com/sh/0rv8ftvdywioiu0/AACEOwGp52g9rT3desCz7YJpa/Kodefiler/03-express?dl=0&preview=jest.config.js&subfolder_nav_tracking=1

module.exports = {
    collectCoverageFrom: [
        'src/**/*.js?(x)'
    ],
    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],
  
    testEnvironment: "node",
  
    // The glob patterns Jest uses to detect test files
    testMatch: [
        "<rootDir>/test/**/?(*.)+(spec|test).[tj]s?(x)"
    ],
  }
  