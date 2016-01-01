// Note our resume data is loaded separately from index.html
// The resume data is stored in js/resume_data.js, along with display functions

/*
Build each section of the html file to display, and display accordingly
*/
resume_data.bio.display();
resume_data.work.display();
resume_data.projects.display();
resume_data.education.display();
/*
Modify the style from default
*/
// Change the background color to be lighter
$('#header').css('background-color', '#888888');

// List my skills in a single column
$('#skills').css('flex-direction', 'column');