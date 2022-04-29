module.exports = {
  env: {
    browser: true,
    es2021: true,
    commonjs: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'error',
    'no-underscore-dangle': 'off',
    'curly': 'off',
    'no-param-reassign': 'off',
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true
      }
    ],
    'arrow-parens': [
      'off',
      'always'
    ],
    'react/jsx-filename-extension': [
      1,
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
    'react/forbid-prop-types': [
      2,
      {
        'forbid': [
          'any'
        ]
      }
    ],
    'react/prop-types': [
      0
    ],
    'react/no-unescaped-entities': 'off',
    'react/no-children-prop': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 0,
    'max-len': [
      'error',
      {
        'code': 100,
        'ignoreTemplateLiterals': true,
        'ignoreStrings': true
      }
    ],
    'jsx-a11y/anchor-is-valid': 'off',
  }
}

