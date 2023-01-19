module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: [2, 'always'],
    'class-methods-use-this': 'off',
    'space-before-function-paren': 'off',
    'import/first': 'off'
  }
};
