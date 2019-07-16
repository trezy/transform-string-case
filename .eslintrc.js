module.exports = {
  env: { browser: true },
  extends: '@fuelrats/eslint-config',
  rules: {
    'arrow-parens': ['error', 'as-needed'],
    'max-len': ['warn', { ignoreStrings: true }],
    'import/prefer-default-export': ['off'],
  },
}
