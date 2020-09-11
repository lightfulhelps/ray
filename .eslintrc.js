module.exports = {
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'prettier', 'react'],
  rules: {
    'array-callback-return': 0,
    'comma-dangle': [
      2,
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    'consistent-return': 0,
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: ['**/*.spec.tsx', '**/*.stories.tsx', 'src/js/setupTests.ts'],
      },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-named-as-default': 0,
    'import/no-useless-path-segments': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/media-has-caption': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'no-case-declarations': 0,
    'no-console': 2,
    'no-nested-ternary': 0,
    'no-param-reassign': 1,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': 1,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'object-curly-newline': [2, { consistent: true }],
    'operator-linebreak': [2, 'after', { overrides: { '?': 'before', ':': 'before' } }],
    'prefer-destructuring': 0,
    'prefer-promise-reject-errors': 0,
    'react/button-has-type': 1, // https://github.com/yannickcr/eslint-plugin-react/issues/1846
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': [
      2,
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'parens',
        logical: 'parens',
        prop: 'ignore',
      },
    ],
    'react/no-access-state-in-setstate': 0,
    'react/no-array-index-key': 0,
    'react/no-multi-comp': 1,
    'react/no-unescaped-entities': 0,
    'react/no-unused-prop-types': 1,
    'react/no-unused-state': 1,
    'react/prefer-stateless-function': 1,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': [
      2,
      {
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
        order: [
          'type-annotations',
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 2,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
