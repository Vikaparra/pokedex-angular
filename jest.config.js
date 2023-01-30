const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig');
const modulePaths = pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' });

module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  moduleNameMapper: { ...modulePaths },
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['node_modules', '.mock.ts', '.module.ts', '<rootDir>/src/main.ts', '<rootDir>/src/environments'],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1,
    },
  },
};
