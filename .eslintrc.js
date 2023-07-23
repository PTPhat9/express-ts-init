module.exports = {
    "env": {
        "browser": true,
        "es2016": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        // "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "indent": ["error", 4],
        "no-trailing-spaces": 2,
        // "maxEOF": ["error", 1],
        "no-multiple-empty-lines": ["error", { "max": 2, "maxEOF": 0 }],
    }
}
