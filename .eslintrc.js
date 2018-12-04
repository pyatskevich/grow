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
        "react/prop-types": 0
    }
};
