module.exports = {
    extends: [
        'plugin:prettier/recommended',
        'prettier',
        'eslint:recommended',
        'plugin:import/recommended',
    ],
    settings: {
        react: { version: 'detect' },
    },
    plugins: ['@typescript-eslint', 'simple-import-sort'],
    env: {
        browser: true,
        commonjs: true,
        es2022: true,
        jest: true,
        node: true,
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 2023,
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
            tsx: true,
        },
        sourceType: 'module',
        babelOptions: {
            plugins: ['@babel/plugin-syntax-import-assertions'],
            presets: [
                '@babel/preset-react',
                ['@babel/preset-env', { targets: 'last 2 Chrome versions' }],
            ],
        },
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                tabWidth: 4,
                useTabs: false,
                printWidth: 80,
                singleQuote: true,
                trailingComma: 'all',
            },
        ],
        curly: ['error', 'all'],
        'no-underscore-dangle': ['error', { allow: ['__dirname'] }],
        'react/prop-types': 0,
        'react/require-default-props': 0,
        'react/forbid-prop-types': 0,
        'no-unused-vars': 'warn',
        'import/extensions': ['error', 'ignorePackages'],

        'simple-import-sort/exports': 'warn',
        'no-restricted-imports': [
            'error',
            {
                paths: [
                    {
                        name: '@mui/material',
                        message:
                            'Please import a sub-component instead (e.g. "@mui/material/Button")',
                    },
                    {
                        name: '@mui/icons-material',
                        message:
                            'Please import a sub-component instead (e.g. "@mui/icons-material/Menu")',
                    },
                    {
                        name: '@mui/system',
                        message:
                            'Please import a sub-component instead (e.g. "@mui/system/styled")',
                    },
                    {
                        name: 'lodash',
                        message: 'Please import a sub-component instead (e.g. "lodash/keyBy")',
                    },
                    {
                        name: 'validator',
                        message:
                            'Please import a sub-component instead (e.g. "validator/lib/isEmail")',
                    },
                ],
            },
        ],
    },
};
