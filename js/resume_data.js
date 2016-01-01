
var bio = {
	'name': 'Jou-ching (George) Sung',
	'role': 'Machine learning and artificial intelligence expert in training',
	'contacts': {
		'mobile': '123-456-7890',
		'email': 'placeholder@email.com',
		'github': 'https://github.com/georgesung/',
		'twitter': "@idonthavetwitter",
		'location': 'Boston, MA'
	},
	'welcomeMessage': '\'In great attempts it is glorious even to fail.\' -Bruce Lee',
	'skills': ['HTML', 'CSS', 'Javascript', 'jQuery', 'Machine learning', 'Microprocessor design', 'Tennis'],
	'biopic': 'images/me.jpg',
	'display': function() {
		// Populate the header section
		$('#header').prepend(HTMLheaderRole.replace('%data%', this.role));
		$('#header').prepend(HTMLheaderName.replace('%data%', this.name));

		// Populate contact information
		$('#topContacts').append(HTMLmobile.replace('%data%', this.contacts.mobile));
		$('#topContacts').append(HTMLemail.replace('%data%', this.contacts.email));
		$('#topContacts').append(HTMLgithub.replace('%data%', this.contacts.github));
		$('#topContacts').append(HTMLtwitter.replace('%data%', this.contacts.twitter));
		$('#topContacts').append(HTMLlocation.replace('%data%', this.contacts.location));

		// Add my photo, welcome message, skills
		$('#header').append(HTMLbioPic.replace('%data%', this.biopic));
		$('#header').append(HTMLwelcomeMsg.replace('%data%', this.welcomeMessage));
		$('#header').append(HTMLskillsStart);
		for (var i=0; i<this.skills.length; i++) {
			$('#skills').append(HTMLskills.replace('%data%', this.skills[i]));
		}
	}
};

var education = {
	'schools': [
		{
			'name': 'University of Michigan',
			'location': 'Ann Arbor, MI',
			'degree': 'MS',
			'majors': ['Electrical Engineering'],
			'dates': 2009
		},
		{
			'name': 'University of Michigan',
			'location': 'Ann Arbor, MI',
			'degree': 'BS',
			'majors': ['Computer Engineering'],
			'dates': 2008
		}
	],
	'onlineCourses': [
		{
			'title': 'Front-End Web Developer Nanodegree',
			'school': 'Udacity',
			'date': 2016,
			'url': 'https://www.udacity.com/'
		},
		{
			'title': 'Machine Learning Engineer Nanodegree',
			'school': 'Udacity',
			'date': 2016,
			'url': 'https://www.udacity.com/'
		}
	],
	'display': function() {
		// Populate education information -- schools
		for (var i=0; i<this.schools.length; i++) {
			// Add a unique id to each entry
			var educationIdString = 'education-entry' + i;
			var replacementString = 'class="education-entry" id="' + educationIdString + '"';
			$('#education').append(HTMLschoolStart.replace('class="education-entry"', replacementString));

			// Add education details
			$('#'+educationIdString).append(HTMLschoolName.replace('%data%', this.schools[i].name) + HTMLschoolDegree.replace('%data%', this.schools[i].degree));
			$('#'+educationIdString).append(HTMLschoolDates.replace('%data%', this.schools[i].dates));
			$('#'+educationIdString).append(HTMLschoolLocation.replace('%data%', this.schools[i].location));
			for (var major of this.schools[i].majors) {
				$('#'+educationIdString).append(HTMLschoolMajor.replace('%data%', major));
			}
		}

		// Populate education information -- online classes
		$('#education').append(HTMLonlineClasses);
		for (var i=0; i<this.onlineCourses.length; i++) {
			// Add a unique id to each entry
			var educationIdString = 'education-entry-online' + i;
			var replacementString = 'class="education-entry" id="' + educationIdString + '"';
			$('#education').append(HTMLschoolStart.replace('class="education-entry"', replacementString));

			// Add education details
			$('#'+educationIdString).append(HTMLonlineTitle.replace('%data%', this.onlineCourses[i].title) + HTMLonlineSchool.replace('%data%', this.onlineCourses[i].school));
			$('#'+educationIdString).append(HTMLonlineDates.replace('%data%', this.onlineCourses[i].date));
			$('#'+educationIdString).append(HTMLonlineURL.replace('%data%', this.onlineCourses[i].url));
		}
	}
};

var work = {
	'jobs': [
		{
			'employer': 'Advanced Micro Devices (AMD)',
			'title': 'Senior Engineer',
			'location': 'Boxborough, MA',
			'dates': '2012 - 2016',
			'description': 'Responsible for functional verification of microprocessor chips, before the chip is even manufactured'
		},
		{
			'employer': 'Advanced Micro Devices (AMD)',
			'title': 'Engineer',
			'location': 'Boxborough, MA',
			'dates': '2009 - 2012',
			'description': 'Performed a wide breadth of microprocessor design roles within multiple teams'
		}
	],
	'display': function() {
		// Populate work experience
		for (var i=0; i<this.jobs.length; i++) {
			// Add a unique id to each entry
			var workIdString = 'work-entry' + i;
			var replacementString = 'class="work-entry" id="' + workIdString + '"';
			$('#workExperience').append(HTMLworkStart.replace('class="work-entry"', replacementString));

			// Add work details
			$('#'+workIdString).append(HTMLworkEmployer.replace('%data%', this.jobs[i].employer) + HTMLworkTitle.replace('%data%', this.jobs[i].title));
			$('#'+workIdString).append(HTMLworkLocation.replace('%data%', this.jobs[i].location));
			$('#'+workIdString).append(HTMLworkDates.replace('%data%', this.jobs[i].dates));
			$('#'+workIdString).append(HTMLworkDescription.replace('%data%', this.jobs[i].description));
		}
	}
};

var projects = {
	'projects': [
		{
			'title': 'Placeholder Project 1',
			'dates': 'Jan 2016 - Jul 2016',
			'description': 'This is a really really awesome project',
			'images': ['images/project1-1.jpg', 'images/project1-2.jpg']
		},
		{
			'title': 'Placeholder Project 2',
			'dates': 'Feb 2016 - Aug 2017',
			'description': 'This project has changed the world',
			'images': ['images/project2-1.jpg', 'images/project2-2.jpg']
		}
	],
	'display': function() {
		// Populate projects information
		for (var i=0; i<this.projects.length; i++) {
			// Add a unique id to each entry
			var projIdString = 'project-entry' + i;
			var replacementString = 'class="project-entry" id="' + projIdString + '"';
			$('#projects').append(HTMLprojectStart.replace('class="project-entry"', replacementString));

			// Add project details
			$('#'+projIdString).append(HTMLprojectTitle.replace('%data%', this.projects[i].title));
			$('#'+projIdString).append(HTMLprojectDates.replace('%data%', this.projects[i].dates));
			$('#'+projIdString).append(HTMLprojectDescription.replace('%data%', this.projects[i].description));
			for (var img of this.projects[i].images) {
				$('#'+projIdString).append(HTMLprojectImage.replace('%data%', img));
			}
		}
	}
};
