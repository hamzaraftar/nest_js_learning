/** @type {import('jest').Config} */
const config = {
  moduleFileExtensions: ['js', 'json'],
  rootDir: 'src',
  testRegex: '.spec.js$',
  transform: {
    '^.+\\.js$': ['babel-jest', { rootMode: 'upward' }],
  },
  coverageDirectory: '../coverage',
};

module.exports = config;
