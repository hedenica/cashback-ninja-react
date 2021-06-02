const OFF = 0
const ERROR = 2
const HEADER_MAX_LENGTH = 50

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [ERROR, 'always', HEADER_MAX_LENGTH],
    'scope-case': [OFF],
  },
}
