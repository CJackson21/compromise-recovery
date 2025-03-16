import stylistic from '@stylistic/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
    {
        files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts'],
        ignores: ['node_modules', 'dist', 'build', 'src/data'],
        languageOptions: {
            parser: tsParser,
            sourceType: 'module',
        },
        plugins: {
            '@stylistic': stylistic,
            '@typescript-eslint': tsPlugin,
        },
        rules: {
            '@stylistic/eol-last': ['error', 'always'],
            '@stylistic/linebreak-style': ['error', 'unix'],
            '@stylistic/quotes': [
                'error',
                'single',
                { allowTemplateLiterals: true, avoidEscape: true },
            ],
            '@stylistic/semi': ['error', 'always'],
        },
    },
];
