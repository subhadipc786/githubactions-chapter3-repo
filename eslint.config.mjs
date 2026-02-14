import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        languageOptions: {
            globals: {
                // Manually define Node and Jest globals
                module: "readonly",
                exports: "readonly",
                test: "readonly",
                expect: "readonly",
                describe: "readonly",
                require: "readonly"  // <--- ADDED THIS LINE
            }
        },
        rules: {
            "no-unused-vars": "warn",
            "no-undef": "warn"
        }
    }
];
