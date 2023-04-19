// eslint-disable-next-line
const _DEV_ = process.env.NODE_ENV !== 'production'

const rulesMap = {
    off: 'off', // 0
    warn: 'warn', // 1
    error: 'error', // 2
}

module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    extends: ['next', 'next/core-web-vitals', 'airbnb-typescript'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint'],
    rules: {
        // 'no-console': _DEV_ ? rulesMap.off : [rulesMap.error, { allow: ['warn', 'error'] }],
        // 'no-debugger': _DEV_ ? rulesMap.off : rulesMap.error,
        '@typescript-eslint/indent': [rulesMap.warn, 4, { SwitchCase: 1 }],
        '@typescript-eslint/semi': [rulesMap.warn, 'never'],
        camelcase: [rulesMap.error, { properties: 'never' }], // 小驼峰规范
        '@typescript-eslint/no-unused-expressions': [
            rulesMap.warn,
            { allowShortCircuit: true },
        ],
        eqeqeq: [rulesMap.warn, 'always', { null: 'ignore' }], // 要求使用 === 和 !==
        'no-var': rulesMap.warn, // 要求使用 let 或 const 而不是 var
        'default-case': rulesMap.warn, // 要求 switch 语句中有 default 分支
        '@typescript-eslint/comma-dangle': [rulesMap.warn, 'never'], // 要求或禁止末尾逗号
        'key-spacing': [rulesMap.warn, { afterColon: true }], // 要求在对象字面量的冒号和值之间存在至少有一个空格
        'no-case-declarations': rulesMap.warn, // 禁止在 case 子句中声明变量
        'object-curly-spacing': [rulesMap.warn, 'always'], // 大括号中空格一致
        'use-isnan': rulesMap.warn, // 使用 isnan 函数判断 NAN
        'react-hooks/exhaustive-deps': rulesMap.warn,
        'react/display-name': rulesMap.off,
        '@next/next/link-passhref': rulesMap.off,
        'jsx-a11y/alt-text': rulesMap.off,
        'jsx-quotes': ['error', 'prefer-double'],
        '@next/next/no-img-element': rulesMap.off,
        'sort-imports': rulesMap.off,
        '@typescript-eslint/lines-between-class-members': [rulesMap.off],
        'import/no-anonymous-default-export': rulesMap.off,
        '@typescript-eslint/no-unused-vars': rulesMap.warn,
        '@typescript-eslint/no-shadow': rulesMap.off,
        'react/jsx-no-target-blank': rulesMap.warn,
        'no-duplicate-imports': rulesMap.warn, // 禁止重复模块导入
        'no-undef': rulesMap.warn, // 禁止使用未声明的变量
        'space-before-blocks': rulesMap.error, // 要求语句块之前的空格
        'space-infix-ops': rulesMap.warn, // 要求中缀操作符周围有空格
        'switch-colon-spacing': rulesMap.warn, // switch 中冒号空格要求
        'import/no-extraneous-dependencies': rulesMap.off, // 隐式的模块
        'max-len': [rulesMap.error, { code: 120, ignoreComments: true }],
        'no-multi-spaces': [
            rulesMap.error,
            {
                exceptions: {
                    Property: false,
                    VariableDeclarator: true,
                    ImportDeclaration: true,
                },
                ignoreEOLComments: true,
            },
        ],
    },
}
