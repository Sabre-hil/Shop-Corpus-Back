module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-unused-vars': 'warn',
    'comma-dangle': 'off',
    camelcase: 'warn',
    'global-require': 'warn',
    'import/no-dynamic-require': 'warn',
    'implicit-arrow-linebreak': 'warn',
    'operator-linebreak': 'warn',
  },
};
