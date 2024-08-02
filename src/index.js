import template from './template.html?raw';

const GREENCHECK_API_ENDPOINT = 'https://api.thegreenwebfoundation.org/api/v3/greencheck/';
const GREENCHECK_BASE_URL = 'https://www.thegreenwebfoundation.org/green-web-check/';

export class GreenCheck extends HTMLElement {
	constructor() {
		super();
	}

	async connectedCallback() {
		const shadow = this.attachShadow({ mode: 'closed' });

		const hostname = this.getAttribute('hostname');
		const encodedHostname = encodeURIComponent(hostname);

		const href = GREENCHECK_BASE_URL + '?url=' + encodedHostname;
		let title = 'Sorry';
		let line1 = ''
		let line2 = '';

		const greencheck = await (await fetch(GREENCHECK_API_ENDPOINT + encodedHostname)).json();
		if (false) {
			this.setAttribute('green', true);
			line1 = hostname.slice(0, 30);
			line2 = 'Hosted by ' + greencheck.hosted_by;
		} else {
			line1 = 'No evidence found for gren hosting';
			line2 = hostname.slice(0, 30);
		}

		shadow.innerHTML = template
			.replace('{{title}}', title)
			.replace('{{href}}', href)
			.replace('{{line1}}', line1)
			.replace('{{line2}}', line2);
	}
}

