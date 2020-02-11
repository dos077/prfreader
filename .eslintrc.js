module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': true,
    'semi': [2, 'never'],
    'quotes': [1, 'single']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
