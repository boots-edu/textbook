// @ts-expect-error(2307)
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: "ts-jest",
    verbose: true,
    testEnvironment: "jsdom",
    resetMocks: true,
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}",
        "!<rootDir>/node_modules/",
        "!src/serviceWorker.js",
        "!src/setupTests.js",
        "!src/components/Auth/*",
        "!src/tests/**/*",
        "!src/index.js",
        "!<rootDir>/src/index.ts",
    ],

    coverageReporters: ["text", "lcov"],
};
