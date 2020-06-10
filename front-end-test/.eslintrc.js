module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-props-no-spreading": 0,
    "no-undef": 0,
    "react/no-array-index-key": 0,
    "react/button-has-type": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "no-console": 0
  },
};
