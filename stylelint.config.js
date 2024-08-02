/** @type {import('stylelint').Config} */
export default {
	extends: ['stylelint-config-standard', 'stylelint-config-clean-order'],
	rules: {
		'value-keyword-case': ['lower'],
		'declaration-block-no-redundant-longhand-properties': null,
		'selector-class-pattern': null,
		'no-descending-specificity': null,
		'custom-property-empty-line-before': null,
		'comment-empty-line-before': null,
	},
};
