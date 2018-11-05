module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true
    },
    "extends": ['airbnb'],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "strict": 0,
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
        'react/prefer-stateless-function': 0,
        'comma-dangle': ["error", "never"]
    }
    // "rules": {
    //     "indent": [
    //         "error",
    //         "tab"
    //     ],
    //     "linebreak-style": [
    //         "error",
    //         "unix"
    //     ],
    //     "quotes": [
    //         "error",
    //         "double"
    //     ],
    //     "semi": [
    //         "error",
    //         "always"
    //     ]
    // }
};