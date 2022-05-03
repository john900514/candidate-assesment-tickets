const ticketTemplate = {
	title: '',
	description: '',
	tags: [],
	images: []
};

const tickets = [
	{
		title: 'Lighthouse Score Performance Optimization',
		description:
			'The lighthouse score for performance is pretty bad.  This is a non implementation ticket.  Just create a document, and give us your read on some actions we could take to improve our score.',
		tags: ['front-end', 'performance'],
		images: []
	},
	{
		title: 'Free Trial Form - Submit Button not being disabled',
		description:
			"On the '/free-trial' page, when you click the submit button, the button should be disabled while waiting for a response.  But this isn't what is happening.  The button never gets disabled. NOTE: added a 5 second sleep on server response to give you time to see what what is happening.",
		tags: ['front-end', 'bug-fix'],
		images: []
	},
	{
		title: 'Footer content being cutoff',
		description:
			'Many of the pages contain the "DefaultFooter" component at the bottom of the page.  The content is being cutoff. "START YOUR ATHLETIC CLUB EXPERIENCE"  should be vertically inline with the content below it.  Ensure the content looks acceptable on mobile devices as well.',
		tags: ['front-end', 'bug-fix'],
		images: []
	},
	{
		title: 'Home Page - Initial CTA cutoff on wide screens',
		description: 'On wide aspect ratio displays, the CTAs are cutoff on the home page.',
		tags: ['front-end', 'bug-fix'],
		images: []
	},
	{
		title: 'Contact Form - Unusable on Mobile',
		description:
			"The form on the '/contact' page is unusable on mobile. You can't click any of the form inputs.",
		tags: ['front-end', 'bug-fix', 'mobile'],
		images: []
	},
	{
		title: 'Home Page - Fade Reveal elements BTF',
		description:
			'On the home page, make elements below the fold fade in when entering the viewport.',
		tags: ['front-end', 'new-feature', 'animation'],
		images: []
	},
	{
		title: 'The Parallax Challenge',
		description:
			"On the Home Page, vertically parallax images on scroll without the use of external libraries. This page was not designed with this animation in mind, so don't worry if it looks weird.",
		tags: ['front-end', 'new-feature', 'animation', 'challenge'],
		images: []
	},
	{
		title: 'Phone Input Component',
		description:
			"The forms on the '/contact' page, as well as the '/free-trial' page use the PhoneInput component.  We want to modify this input  so that formats it formats the phone number in realtime as you type. Format: (###) ### - ####",
		tags: ['front-end', 'new-feature'],
		images: []
	},
	{
		title: 'The Counter Challenge',
		description:
			"The '/counter' page has a button that increments a value which is displayed above it. Without using any server side code, make this value sync across multiple tabs.  Meaning, if you open two tabs of the '/counter' page, if you increment it on one tab, the value on the other tab will match.",
		tags: ['front-end', 'challenge'],
		images: []
	},
	{
		title: 'News - Infinite Scroll',
		description:
			'The News page currently displays a static list of the last 5 news items.  We want to apply the "infinite scroll" design pattern to load more news items when you scroll to the bottom of the page.',
		tags: ['front-end', 'new-feature', 'challenge'],
		images: []
	}
];

/** @type {import('./[id]').RequestHandler} */
export function get({ params }) {
	return {
		body: { tickets }
	};
}
