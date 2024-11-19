<script lang="ts">
	const roles = {
		scalable: {
			title: 'Senior Front-end Engineer',
			company: 'Scalable',
			dates: {
				start: '2023-10-01',
				end: '2024-08-18'
			},
			url: 'https://www.scalable.com',
			location: 'Remote, UK',
			summaries: [
				'Web app development with React.js, Typescript, and D3',
				'Code review of peers and mentoring of junior developers',
				'Estimating, planned and documented new features with product and design.',
				'Creating new features and speccing out API changes with the backend team',
				'Creating API contract with the backend API developer',
				'Mocking data with express to simulate the API response until backend finished API work'
			]
		},
		ventureHarbour: {
			title: 'Senior Front-end Engineer',
			company: 'Venture Harbour',
			dates: {
				start: '2017-10-01',
				end: '2023-02-28'
			},
			url: 'https://www.ventureharour.com',
			location: 'Remote, UK',
			summaries: [
				'Created a component library using Storybook to showcase and document.',
				'Break down problems into solutions and solutions into tasks, creating prototypes when required.',
				'Desktop Application and Browser Extension development.',
				'Optimise Performance of each of our sites and products and automate testing and CI for each deployment.'
			]
		},
		taylorAndFrancis: {
			title: 'Full Stack Web Developer',
			company: 'Taylor &amp; Francis',
			dates: {
				start: '2016-10-01',
				end: '2017-17-01'
			},
			url: 'https://taylorandfrancis.com/',
			location: 'Abingdon, UK',
			summaries: [
				'I created custom performant WordPress and Expression Engine sites.',
				'I hand-crafted a node tool to benchmark and monitor Business Sites using the Web Page Test API and display with React.',
				'Perform performance audits and carry out improvements on business and society sites.'
			]
		},
		photoCrowd: {
			title: 'Front-end React Developer',
			company: 'Photocrowd',
			dates: {
				start: '2016-03-01',
				end: '2016-08-01'
			},
			url: 'https://photocrowd.com/',
			location: 'Oxford, UK',
			summaries: [
				'I created new components and pages using React/Relay and Less from Photoshop designs.',
				'I implementing Webpack into the development process to allow for code modularity, linting, and writing future JS (ES2015) code with Babel.',
				'Applied BEM code methodology for new CSS components.'
			]
		},
		electricStudio: {
			title: 'Front-end and WordPress Developer',
			company: 'Electric Studio',
			dates: {
				start: '2013-01-01',
				end: '2016-02-01'
			},
			url: 'https://electricstudio.co.uk/',
			location: 'Abingdon, UK',
			summaries: [
				'I created highly customised WordPress sites from Photoshop    designs, with custom post-types, taxonomies, meta boxes, shortcodes and functions.',
				'The sites were performant, using best practices and technologies, built within budget and in timeframes.',
				'Pre-launch client training, dealing with any client feedback via Basecamp or telephone.'
			]
		},
		heathWallace: {
			title: 'Creative UI Developer',
			company: 'HeathWallace Ltd',
			dates: {
				start: '2013-01-01',
				end: '2016-02-01'
			},
			url: '#',
			location: 'Reading, UK',
			summaries: [
				'I built highly accessible websites for clients including HSBC, RBS and Grant Thornton.',
				'Using CMSs such as WordPress, CQ5 and Sitecore to allow the client to control all content on their site.',
				'Knowledge Sharing through weekly masterclass sessions (I ran three: WordPress; CSS3; and Sass).'
			]
		}
	};
</script>

<h1>Andrew JD Hudson - Cirriculum Vitae</h1>

<ul>
	<li>Location: Grenoble, France</li>
	<li>Email: ahudson@gmail.com</li>
	<li>Telephone: +33 608985800</li>
	<li>Website: cv.andrewhudson.dev</li>
</ul>

<p>
	I am a experienced front-end and javascript developer based in Grenoble, France, looking to create
	exciting and useful products and services in places that are powered by JavaScript, HTML and CSS.
</p>

<h2>Experience</h2>

<ol>
	{#each Object.values(roles) as role}
		<li>{role.title} - {role.company}</li>
	{/each}
</ol>

<h2>Relevant Projects and Websites</h2>

<ul>
	<li>Acumen</li>
	<li>TrueNorth</li>
	<li>Serene</li>
	<li>Venture Harbour</li>
	<li>Codepen</li>
	<li>My Site</li>
</ul>

<h2>Skills</h2>

<ul>
	<li>React, Svelte, Web Components with Lit</li>
	<li>Astro, Sveltekit, Next.js, 11ty</li>
	<li>Git, Github, Github and Gitlab actions and CI/CD</li>
	<li>Testing with Vitest / Jest / Cypress and Playwright</li>
	<li>Good knowledge of utilising Storybook to better showcase and document UI components</li>

	<li>
		CSS, SCSS, and associated technologies e.g. Tailwind, CSS-in-JS, CSS modules. I am passionate
		about CSS and learning as many of the new advanced CSS features and experimenting with them on
		my Codepen.
	</li>
	<li>Fluent / Native level English</li>
	<li>Intermediate level French</li>
</ul>

<h2>Personal Interests</h2>

<p>
	I am a keen outdoor enthusiast and I regularly cycle, run and hike in Grenoble's stunning outdoor
	spaces. Currently I am learning French and have a 200+ day streak on Duolingo.
</p>
