module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:prettier/recommended',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react',
        'prettier/standard',
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'project': './tsconfig.eslint.json',
        'sourceType': 'module',
        'tsconfigRootDir': __dirname,
    },
    'plugins': [
        'import',
        'jsx-a11y',
        'prefer-arrow',
        'prettier',
        'react',
        'react-hooks',
        '@typescript-eslint',
    ],
    'rules': {
        // クラスメンバー定義の間に空行を指定
        'lines-between-class-members': [
            'error',
            'always',
            {
                exceptAfterSingleLine: true,
            },
        ],
        // void 演算子の使用を禁止
        'no-void': [
            'error',
            {
                allowAsStatement: true
            }
        ],
        // 任意の構文間に空行を指定
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
        ],
        // 不使用の変数定義を禁止
        'no-use-before-define': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'after-used',
                'argsIgnorePattern': '_',
                'ignoreRestSiblings': false,
                'varsIgnorePattern': '_',
            },
        ],
        // インポート時のファイル拡張子の記述を指定
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        // 関数定義をアロー関数式に統一
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                disallowPrototype: true,
                singleReturnOnly: false,
                classPropertiesAllowed: false,
            },
        ],
        // JSX のファイル拡張子を指定
        'react/jsx-filename-extension': [
            'error',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        // props の記述のスプレッド構文を禁止
        'react/jsx-props-no-spreading': [
            'error',
            {
                html: 'enforce',
                custom: 'enforce',
                explicitSpread: 'ignore',
            },
        ],
    },
    overrides: [
        {
            'files': ['*.tsx'],
            'rules': {
                'react/prop-types': 'off',
            },
        },
    ],
    settings: {
        'import/resolver': {
            node: {
                paths: ['src'],
            },
        },
    },
};
