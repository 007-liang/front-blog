module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [
            2,
            'always',
            [
                'feat', // 增加新功能
                'fix', // 修复问题 / BUG
                'perf', // 优化 / 性能提升
                'refactor', // 重构
                'revert', // 撤销修改
                'docs', // 文档/注释
                'style', // 代码风格相关无影响运行结果的
                'chore', // 依赖更新 / 脚手架配置修改等
                'wip', // 开发中
                'types', // 类型修改
                'test', // 测试相关
                'workflow', // 工作流改进
                'build', // 版本构建
                'release' // 版本发布
            ]
        ]
    }
}
