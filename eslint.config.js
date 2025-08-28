import js from '@eslint/js'

export default [
	{
		ignores: ['dist/**', 'node_modules/**', '*.min.js'],
	},
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				window: 'readonly',
				document: 'readonly',
				console: 'readonly',
				Handlebars: 'readonly',
				fetch: 'readonly',
				MutationObserver: 'readonly',
			},
		},
		rules: {
			'no-unused-vars': 'warn',
			'no-console': 'off',
			'prefer-const': 'error',
			'no-var': 'error',
			semi: ['error', 'never'],
			quotes: ['error', 'single'],
			indent: ['error', 'tab'],
			'comma-dangle': ['error', 'always-multiline'],
		},
	},
]
