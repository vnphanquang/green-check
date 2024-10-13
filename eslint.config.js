import vnphanquang from '@vnphanquang/eslint-config';
import jsdoc from 'eslint-plugin-jsdoc';

const jsdocConfig = [
	{
		files: ['src/**/*.js'],
		...jsdoc.configs['flat/recommended-typescript-flavor'],
	},
	{
		files: ['**/*.js'],
		plugins: {
			jsdoc,
		},
		rules: {
			'jsdoc/require-jsdoc': [
				'warn',
				{
					publicOnly: {
						ancestorsOnly: true,
					},
				},
			],
		},
	},
];

export default [...vnphanquang, ...jsdocConfig];
