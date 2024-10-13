export default {
	'*.{ts,tsx,js,jsx,cjs}': ['eslint', 'prettier --write'],
	'*.svelte': ['svelte-check --ignore **/*.md.svelte', 'eslint', 'stylelint', 'prettier --write'],
	'*.css': ['stylelint', 'prettier --write'],
	'*.{md,json,html}': 'prettier --write',
};
