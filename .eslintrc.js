module.exports = {
  plugins: ['@typescript-eslint', 'jest'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-nested-ternary': 0,
    'no-plusplus': [2, { allowForLoopAfterthoughts: true }],
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: ['**/*.spec.tsx', '**/*.stories.tsx', 'src/js/setupTests.ts'],
      },
    ],
    'import/no-useless-path-segments': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/media-has-caption': 0,
    'react/jsx-props-no-spreading': 0,
    'react/require-default-props': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'react/state-in-constructor': 0,
    'react/no-unescaped-entities': 0,
    'react/destructuring-assignment': 0,
  },
};
