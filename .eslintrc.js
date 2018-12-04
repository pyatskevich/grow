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
        "react/prop-types": 0,
        'react/prefer-stateless-function': 0,
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx'] }],
    }
};
