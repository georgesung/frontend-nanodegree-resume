// Note our resume data is loaded separately from index.html
// The resume data is stored in js/resume_data.js, along with display functions

/*
Build each section of the html file to display, and display accordingly
*/
bio.display();
work.display();
projects.display();
education.display();
/*
Modify the style from default
*/
// Change the background color to be lighter
$('#header').css('background-color', '#888888');

// List my skills in a single column
$('#skills').css('flex-direction', 'column');