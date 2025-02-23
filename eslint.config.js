import stylistic from "@stylistic/eslint-plugin";

export default [
    {
        files: ['**/*.ts', '**/*.cts', '**/*.mts'],
        plugins : {
            "@stylistic" : stylistic,
        },
        rules : {
            "@stylistic/comma-dangle" : ["error", "always-multiline"],
            "@stylistic/eol-last" : ["error", "always"],
            "@stylistic/indent" : [
                "error",
                "tab",
                {
                    "SwitchCase" : 1,
                },
            ],
            "@stylistic/key-spacing" : ["error", { "beforeColon" : true }],
            "@stylistic/linebreak-style" : [
                "error",
                "unix",
            ],
            "@stylistic/quotes" : [
                "error",
                "double",
                {
                    "allowTemplateLiterals" : true,
                    "avoidEscape" : true,
                },
            ],
            "@stylistic/semi" : [
                "error",
                "always",
            ],
            "@stylistic/type-annotation-spacing" : [
                "error",
                {
                    "before" : true,
                },
            ],
        },
    },
];