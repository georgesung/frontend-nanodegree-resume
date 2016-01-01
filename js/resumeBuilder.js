// Note our resume data is loaded separately from index.html
// The resume data is stored in js/resume_data.js

// Populate the header section
$('#header').prepend(HTMLheaderRole.replace('%data%', resume_data.bio.role));
$('#header').prepend(HTMLheaderName.replace('%data%', resume_data.bio.name));

// Change the background color to be lighter
$('#header').css('background-color', '#888888');

// Populate contact information
$('#topContacts').append(HTMLmobile.replace('%data%', resume_data.bio.contacts.mobile));
$('#topContacts').append(HTMLemail.replace('%data%', resume_data.bio.contacts.email));
$('#topContacts').append(HTMLgithub.replace('%data%', resume_data.bio.contacts.github));
$('#topContacts').append(HTMLlocation.replace('%data%', resume_data.bio.contacts.location));

// Add my photo, welcome message, skills
$('#header').append(HTMLbioPic.replace('%data%', resume_data.bio.biopic));
$('#header').append(HTMLwelcomeMsg.replace('%data%', resume_data.bio.welcomeMessage));
$('#header').append(HTMLskillsStart);
for (var i=0; i<resume_data.bio.skills.length; i++) {
	$('#skills').append(HTMLskills.replace('%data%', resume_data.bio.skills[i]));
}

// List my skills in a single column
$('#skills').css('flex-direction', 'column');

// Populate work experience
for (var i=0; i<resume_data.work.jobs.length; i++) {
	// Add a unique id to each entry
	var workIdString = 'work-entry' + i;
	var replacementString = 'class="work-entry" id="' + workIdString + '"';
	$('#workExperience').append(HTMLworkStart.replace('class="work-entry"', replacementString));

	// Add work details
	$('#'+workIdString).append(HTMLworkEmployer.replace('%data%', resume_data.work.jobs[i].employer) + HTMLworkTitle.replace('%data%', resume_data.work.jobs[i].title));
	$('#'+workIdString).append(HTMLworkLocation.replace('%data%', resume_data.work.jobs[i].location));
	$('#'+workIdString).append(HTMLworkDates.replace('%data%', resume_data.work.jobs[i].dates));
	$('#'+workIdString).append(HTMLworkDescription.replace('%data%', resume_data.work.jobs[i].description));
}

// Populate projects information
for (var i=0; i<resume_data.projects.projects.length; i++) {
	// Add a unique id to each entry
	var projIdString = 'project-entry' + i;
	var replacementString = 'class="project-entry" id="' + projIdString + '"';
	$('#projects').append(HTMLprojectStart.replace('class="project-entry"', replacementString));

	// Add project details
	$('#'+projIdString).append(HTMLprojectTitle.replace('%data%', resume_data.projects.projects[i].title));
	$('#'+projIdString).append(HTMLprojectDates.replace('%data%', resume_data.projects.projects[i].dates));
	$('#'+projIdString).append(HTMLprojectDescription.replace('%data%', resume_data.projects.projects[i].description));
	for (var img of resume_data.projects.projects[i].images) {
		$('#'+projIdString).append(HTMLprojectImage.replace('%data%', img));
	}
}

// Populate education information -- schools
for (var i=0; i<resume_data.education.schools.length; i++) {
	// Add a unique id to each entry
	var educationIdString = 'education-entry' + i;
	var replacementString = 'class="education-entry" id="' + educationIdString + '"';
	$('#education').append(HTMLschoolStart.replace('class="education-entry"', replacementString));

	// Add education details
	$('#'+educationIdString).append(HTMLschoolName.replace('%data%', resume_data.education.schools[i].name) + HTMLschoolDegree.replace('%data%', resume_data.education.schools[i].degree));
	$('#'+educationIdString).append(HTMLschoolDates.replace('%data%', resume_data.education.schools[i].dates));
	$('#'+educationIdString).append(HTMLschoolLocation.replace('%data%', resume_data.education.schools[i].location));
	for (var major of resume_data.education.schools[i].majors) {
		$('#'+educationIdString).append(HTMLschoolMajor.replace('%data%', major));
	}
}

// Populate education information -- online classes
$('#education').append(HTMLonlineClasses);
for (var i=0; i<resume_data.education.onlineCourses.length; i++) {
	// Add a unique id to each entry
	var educationIdString = 'education-entry-online' + i;
	var replacementString = 'class="education-entry" id="' + educationIdString + '"';
	$('#education').append(HTMLschoolStart.replace('class="education-entry"', replacementString));

	// Add education details
	$('#'+educationIdString).append(HTMLonlineTitle.replace('%data%', resume_data.education.onlineCourses[i].title) + HTMLonlineSchool.replace('%data%', resume_data.education.onlineCourses[i].school));
	$('#'+educationIdString).append(HTMLonlineDates.replace('%data%', resume_data.education.onlineCourses[i].date));
	$('#'+educationIdString).append(HTMLonlineURL.replace('%data%', resume_data.education.onlineCourses[i].url));
}
