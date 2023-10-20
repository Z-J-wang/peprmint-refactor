module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [/* 'plugin:@typescript-eslint/recommended', */ 'plugin:prettier/recommended'],
  plugins: ['react', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module'
  },
  rules: {}
}
