import type { Config } from 'jest';

const config: Config = {
  verbose: true,
  transform: { "^.+\\.tsx?$": ["ts-jest", {"rootDir": "."}] },
  globals: {
    'ts-jest': {
      tsconfig: {
        rootDir: '.'
      }
    }
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|svg|css|less|scss|sass)$": "<rootDir>/__mocks__/fileMock.js",
  },
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '**/src/index.tsx'
  ],
  collectCoverage: true,
};

export default config;