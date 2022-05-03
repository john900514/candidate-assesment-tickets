const ticketTemplate = {
	title: '',
	description: '',
	tags: [],
	images: []
};

const tickets = [
	{
    id: 1,
		title: 'Lighthouse Score Performance Optimization',
		description:
			'The lighthouse score for performance is pretty bad.  This is a non implementation ticket.  Just create a document, and give us your read on some actions we could take to improve our score.',
		tags: ['front-end', 'performance'],
		images: []
	},
	{
    id: 2,
		title: 'Free Trial Form - Submit Button not being disabled',
		description:
			"On the '/free-trial' page, when you click the submit button, the button should be disabled while waiting for a response.  But this isn't what is happening.  The button never gets disabled. NOTE: added a 5 second sleep on server response to give you time to see what what is happening.",
		tags: ['front-end', 'bug-fix'],
		images: []
	},
	{
    id: 3,
		title: 'Footer content being cutoff',
		description:
			'Many of the pages contain the "DefaultFooter" component at the bottom of the page.  The content is being cutoff. "START YOUR ATHLETIC CLUB EXPERIENCE"  should be vertically inline with the content below it.  Ensure the content looks acceptable on mobile devices as well.',
		tags: ['front-end', 'bug-fix'],
		images: []
	},
	{
    id: 4,
		title: 'Home Page - Initial CTA cutoff on wide screens',
		description: 'On wide aspect ratio displays, the CTAs are cutoff on the home page.',
		tags: ['front-end', 'bug-fix'],
		images: []
	},
	{
    id: 5,
		title: 'Contact Form - Unusable on Mobile',
		description:
			"The form on the '/contact' page is unusable on mobile. You can't click any of the form inputs.",
		tags: ['front-end', 'bug-fix', 'mobile'],
		images: []
	},
	{
    id: 6,
		title: 'Home Page - Fade Reveal elements BTF',
		description:
			'On the home page, make elements below the fold fade in when entering the viewport.',
		tags: ['front-end', 'new-feature', 'animation'],
		images: []
	},
	{
    id: 7,
		title: 'The Parallax Challenge',
		description:
			"On the Home Page, vertically parallax images on scroll without the use of external libraries. This page was not designed with this animation in mind, so don't worry if it looks weird.",
		tags: ['front-end', 'new-feature', 'animation', 'challenge'],
		images: []
	},
	{
    id: 8,
		title: 'Phone Input Component',
		description:
			"The forms on the '/contact' page, as well as the '/free-trial' page use the PhoneInput component.  We want to modify this input  so that formats it formats the phone number in realtime as you type. Format: (###) ### - ####",
		tags: ['front-end', 'new-feature'],
		images: []
	},
	{
    id: 9,
		title: 'The Counter Challenge',
		description:
			"The '/counter' page has a button that increments a value which is displayed above it. Without using any server side code, make this value sync across multiple tabs.  Meaning, if you open two tabs of the '/counter' page, if you increment it on one tab, the value on the other tab will match.",
		tags: ['front-end', 'challenge'],
		images: []
	},
	{
    id: 10,
		title: 'News - Infinite Scroll',
		description:
			'The News page currently displays a static list of the last 5 news items.  We want to apply the "infinite scroll" design pattern to load more news items when you scroll to the bottom of the page.',
		tags: ['front-end', 'new-feature', 'challenge'],
		images: []
	},
  {
    id: 11,
    title: 'Store Contact Form',
    description: 'The website has a "/contact" page, where a form is being submitted and handled by the "App/Actions/Contact/ProcessContactForm" action.',
    subtasks: [
      'Create a migration and model to store the form data',
      'Store the data coming from the form in the database',
      'Queue a job that sends an email receipt to the enduser (just use log email driver)'
    ],
    tags: ['back-end', 'new-feature'],
    images: []
  },
  {
    id: 12,
    title: 'Amenities Not Loading',
    description: 'The seeder is populating amenities in the database, but none are displaying on the /amenities page',
    tags: ['back-end', 'bug-fix'],
    images: []
  },
  {
    id: 13,
    title: 'Create Daily Leads Report',
    description: 'We want some repoerting in place that checks for total new leads on a given day',
    subtasks: [
      'create an action/command that calculates the total number of leads created for a given day',
      'create a cron that runs this once a day, and then emails the results to an email defined in the env'
    ],
    tags: ['back-end', 'new-feature', 'reporting'],
    images: []
  },
  {
    id: 14,
    title: 'Contact Form - Submission Returns White Screen',
    description: 'On the "/contact" page, successful form submissions are greeted by a white modal.  Figure out the cause of this, and instead, either display a success message on the page, or redirect them to a confirmation page.',
    tags: ['bug-fix', 'full-stack'],
    images: []
  },
  {
    id: 15,
    title: 'Locations Page - Add Amenities',
    description: "When you visit a locations page, you currently only see information about their hours. Also add a list of that location's amenities.",
    tags: ['full-stack', 'new-feature'],
    images: [],
    blockedBy: [12]
  },
  {
    id: 16,
    title: 'Amenities Page - Show which locations have selected amenities',
    description: 'On the "/amenities page", clicking on one of the amenities should show which clubs have that selected amenity.  You can do this via a new page or a modal.',
    tags: ['full-stack', 'new-feature'],
    images: [],
    blockedBy: [12]
  },
];

/** @type {import('./[id]').RequestHandler} */
export function get({ params }) {
  const tag_filter = import.meta.env?.VITE_TICKET_TAG_FILTER;
  console.log({developer_type: tag_filter});
  if(!tag_filter){
    return {
      body: { tickets }
    }
  }
	return {
		body: { tickets: tickets.filter(ticket=>ticket.tags.includes(tag_filter)) }
	};
}
