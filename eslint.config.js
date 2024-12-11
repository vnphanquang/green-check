import { fileURLToPath } from 'node:url';

import { includeIgnoreFile } from '@eslint/compat';
import vnphanquang from '@vnphanquang/eslint-config';
import jsdoc from 'eslint-plugin-jsdoc';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

const jsdocConfig = [
	{
		files: ['src/**/*.js'],
		...jsdoc.configs['flat/recommended-typescript-flavor'],
	},
];

export default [includeIgnoreFile(gitignorePath), ...vnphanquang, ...jsdocConfig];
