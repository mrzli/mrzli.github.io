module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "project": "tsconfig.json"
  },
  plugins: ["prettier"],
  extends: [
    "react-app",
    "react-app/jest",
    "plugin:prettier/recommended"
    // "eslint:all",
    // "plugin:@typescript-eslint/all",
    // "plugin:react/all"
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true
      }
    ],
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-curly-brace-presence": ["error", {
      "props": "always",
      "children": "ignore"
    }],
    "jest/valid-title": "off"
  },
  "overrides": [
    {
      "files": [
        "**/*.stories.*"
      ],
      "rules": {
        "import/no-anonymous-default-export": "off"
      }
    }
  ]
};
