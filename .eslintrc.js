'use strict'

module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: [
    'plugin:eslint-plugin/recommended',
    'prettier',
    'plugin:node-dependencies/recommended',
    'plugin:jsonc/recommended-with-jsonc',
    'plugin:unicorn/recommended'
  ],
  plugins: ['eslint-plugin', 'prettier', 'unicorn'],
  rules: {
    'accessor-pairs': 2,
    camelcase: [2, { properties: 'never' }],
    'constructor-super': 2,
    eqeqeq: [2, 'allow-null'],
    'handle-callback-err': [2, '^(err|error)$'],
    'jsx-quotes': [2, 'prefer-single'],
    'new-cap': [2, { newIsCap: true, capIsNew: false }],
    'new-parens': 2,
    'no-array-constructor': 2,
    'no-caller': 2,
    'no-class-assign': 2,
    'no-cond-assign': 2,
    'no-const-assign': 2,
    'no-control-regex': 2,
    'no-delete-var': 2,
    'no-dupe-args': 2,
    'no-dupe-class-members': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty-character-class': 2,
    'no-empty-pattern': 2,
    'no-eval': 2,
    'no-ex-assign': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [2, 'functions'],
    'no-fallthrough': 2,
    'no-floating-decimal': 2,
    'no-func-assign': 2,
    'no-implied-eval': 2,
    'no-inner-declarations': [2, 'functions'],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': 2,
    'no-iterator': 2,
    'no-label-var': 2,
    'no-labels': [2, { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': 2,
    'no-multi-spaces': [2, { ignoreEOLComments: true }],
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-negated-in-lhs': 2,
    'no-new-object': 2,
    'no-new-require': 2,
    'no-new-symbol': 2,
    'no-new-wrappers': 2,
    'no-obj-calls': 2,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-path-concat': 2,
    'no-proto': 2,
    'no-redeclare': 2,
    'no-regex-spaces': 2,
    'no-return-assign': [2, 'except-parens'],
    'no-self-assign': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-shadow-restricted-names': 2,
    'no-sparse-arrays': 2,
    'no-this-before-super': 2,
    'no-throw-literal': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-unexpected-multiline': 2,
    'no-unmodified-loop-condition': 2,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unused-vars': [2, { vars: 'all', args: 'none' }],
    'no-useless-call': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-escape': 0,
    'no-with': 2,
    'one-var': [2, { initialized: 'never' }],
    'use-isnan': 2,
    'valid-typeof': 2,
    'wrap-iife': [2, 'any'],
    yoda: [2, 'never'],
    'prefer-const': 2,

    'prettier/prettier': 'error',
    'eslint-plugin/report-message-format': ['error', "^[A-Z`'{].*\\.$"],
    'eslint-plugin/prefer-placeholders': 'error',
    'eslint-plugin/consistent-output': 'error',

    'no-debugger': 'error',
    'no-console': 'error',
    'no-alert': 'error',
    'no-void': 'error',

    'no-warning-comments': 'warn',
    'no-var': 'error',
    'prefer-template': 'error',
    'object-shorthand': 'error',
    'prefer-rest-params': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-spread': 'error',

    'dot-notation': 'error',
    'arrow-body-style': 'error',

    'unicorn/consistent-function-scoping': [
      'error',
      { checkArrowFunctions: false }
    ],
    'unicorn/filename-case': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-array-callback-reference': 'off', // doesn't work well with TypeScript's custom type guards
    'unicorn/no-negated-condition': 'off', // remove when there are few pull requests (ref: #2146)
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-optional-catch-binding': 'off', // not supported by current ESLint parser version
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/prefer-at': 'off', //                 turn off to prevent make breaking changes (ref: #2146)
    'unicorn/prefer-node-protocol': 'off', //      turn off to prevent make breaking changes (ref: #2146)
    'unicorn/prefer-string-replace-all': 'off', // turn off to prevent make breaking changes (ref: #2146)
    'unicorn/prefer-ternary': 'off', //            remove when there are few pull requests (ref: #2146)
    'unicorn/prefer-top-level-await': 'off', //    turn off to prevent make breaking changes (ref: #2146)
    'unicorn/switch-case-braces': 'off', //        remove when there are few pull requests (ref: #2146)

    'require-eslint-community': ['error']
  },
  overrides: [
    {
      files: ['./**/*.vue'],
      parser: require.resolve('vue-eslint-parser'),
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    {
      files: ['lib/rules/*.js'],
      rules: {
        'eslint-plugin/no-deprecated-context-methods': 'error',
        'eslint-plugin/no-only-tests': 'error',
        'eslint-plugin/prefer-object-rule': 'error',
        'eslint-plugin/require-meta-docs-description': 'error',
        'eslint-plugin/require-meta-docs-url': [
          'error',
          {
            pattern: `https://eslint.vuejs.org/rules/{{name}}.html`
          }
        ],
        'eslint-plugin/require-meta-has-suggestions': 'error',
        'eslint-plugin/require-meta-schema': 'error',
        'eslint-plugin/require-meta-type': 'error',
        'no-invalid-meta': 'error',
        'no-invalid-meta-docs-categories': 'error'
      }
    },
    {
      files: ['*.json'],
      rules: {
        'prettier/prettier': 'off'
      }
    }
  ]
}
