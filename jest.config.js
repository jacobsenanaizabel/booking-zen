module.exports = {

  moduleFileExtensions: ['js', 'jsx', 'json'],
  transform: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx)?$': 'babel-jest'
  },
    setupFilesAfterEnv: [
        '<rootDir>/jest.setup.js',
        '<rootDir>/jest.mock.js',
      ],
    moduleNameMapper: {
      "^@components(.*)$": "<rootDir>/components$1",
      "^@styles(.*)$": "<rootDir>/styles$1",
      "^@pages(.*)$": "<rootDir>/pages$1",
      "^@public(.*)$": "<rootDir>/public$1",
    },
};