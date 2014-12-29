// This object bio contains the following information:
// name : string
// role : string
// contacts : array of objects with
//     mobile: string
//      email: string 
//      github: string
//      twitter: string 
//      location: string
// welcomeMessage: string 
// skills: array of strings
// biopic: url
// display: function

var bio = {
	"name" : "John Smiths",
	"role" : "Web Developer",
	"contacts": {
		"mobile": "606-303-9090",
		"email": "john@example.com",
		"github": "johnsmith",
		"twitter": "@johnsmith",
		"location": "New York"
	},
	"pictureURL": "http://upload.wikimedia.org/wikipedia/commons/4/48/Maine_Coon.JPG",
	"welcomeMessage": "Welcome to our world",
	"skills": ["typing", "communication", "programming", "analysing"],
	displayBio: function() {
		
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var formattedPicture = HTMLbioPic.replace("%data%", bio.pictureURL);
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);
		$("#header").append(formattedPicture);
		$("#header").append(formattedMsg);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
	
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);
		
		if (bio.skills.length > 0) {
			$("#header").append(HTMLskillsStart);
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
			$("#skills").append(formattedSkill);
			formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
			$("#skills").append(formattedSkill);
			$("#main").append(internationalizeButton);
			$("#mapDiv").append(googleMap);

		}
	},
	displayFooter: function() {
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		var formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
	
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);
		
	}
}

bio.displayBio();
bio.displayFooter();

// work contains
//
// jobs: array of objects with
//     employer: string 
//     title: string 
//     location: string 
//     dates: string (works with a hyphen between them)
//     description: string 
// display: function

var work = {
	"jobs": [
		{
		"employer": "Merck",
		"title": "Member of Technical Staff",
		"dates worked": "April 2005 - Present",
		"location": "New York, NY",
		"description":"Major Accountabilities: 1) Build and deploy production systems for scientists who have high expectations for quality, turnaround, performance and reliability. 2) Create and promote interoperable systems and the efficient reuse of software and data between disparate systems within NIBR. 3) Work closely with the operations team who will manage and support the applications being developed. 4) Integrate professional software development practices as appropriate into the front lines of NIBR science groups and inspire others within the software community to emulate these practices. "
		},
		{
		"employer": "Novartis",
		"title": "Principal Software Engineer",
		"dates worked": "January 1998 - March 2004",
		"location":"Summit, NJ",
		"description":"Major Accountabilities: 1) Build and deploy production systems for scientists who have high expectations for quality, turnaround, performance and reliability. 2) Create and promote interoperable systems and the efficient reuse of software and data between disparate systems within NIBR. 3) Work closely with the operations team who will manage and support the applications being developed. 4) Integrate professional software development practices as appropriate into the front lines of NIBR science groups and inspire others within the software community to emulate these practices. "

		}
	],
	displayWork: function() {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(".work-entry:last").append(formattedEmployerTitle);
			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job]["dates worked"]);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDates);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDescription);

		}
	}
}

work.displayWork();

// education contains:
// schools: array of objects with
//     name: string
//     location: string
//     degree: string
//     majors: array of strings
//     dates: integer (graduation date)
//     url: string
// onlineCourses: array with
//     title: string
//     school: string
//     date: integer (date finished)
//     url: string
// display: function

var education = {
	"schools": [
	 { "name": "Stony Brook University",
	   "degree": "Bachelor of Science",
	   "location": "New York, NY",
	   "majors": ["Computer Science", "Applied Math"],
	   "url": "http://www.stonybrook.edu/",
	   "dates attended": "1996"
	   
	 },
	 { "name": "Rutgers University",
	   "degree": "Master of Science",
	   "location": "Washington DC, MD",
	   "majors": ["Biology", "Chemistry"],
	   "url": "http://www.rutgers.edu/",
	   "dates attended": "1998"
	}
	],
	
	"onlineCourses":[
		{ "title":"psy101",
		  "school": "Udacity",
		  "dates attended":"2014",
		  "url":"http://www.udacity.com/"
		},
		{"title":"Animal science",
		"school": "EDX",
		"dates attended": "2014",
		"url": "http://www.edx.com/"
		}
	],
		
	displayEducation: function() {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedSchoolDegree = formattedSchoolName + formattedDegree;
			$(".education-entry:last").append(formattedSchoolDegree);
			
			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school]["dates attended"]);
			$(".education-entry:last").append(formattedSchoolDates);
			
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			
			var majors = "";
			for (m in education.schools[school].majors) {
				if (majors !== "")
					majors += " and " + education.schools[school].majors[m];
				else 
					majors += education.schools[school].majors[m];
			}
			var formattedMajor = HTMLschoolMajor.replace("%data%", majors);
			$(".education-entry:last").append(formattedMajor);									
		}
		$("#education").append(HTMLonlineClasses);
		for (onlineCourse in education.onlineCourses) {
			$("#education").append(HTMLschoolStart);
			var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title); 
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
			var titleSchool = formattedTitle + formattedOnlineSchool;
			$(".education-entry:last").append(titleSchool);
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse]["dates attended"]);
			$(".education-entry:last").append(formattedDate);
			var formattedOnlineUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
			$(".education-entry:last").append(formattedOnlineUrl);
		}
		
	}
}

education.displayEducation();


//projects contains:
// projects: array of objects with
//      title: string 
//      dates: string (works with a hyphen between them)
//      description: string
//      images: array with string urls
// display: function

var projects = {
	"projects": [
	{
	"title": "D.I.M. phase I - Discover Innovative Medicines that treat disease and improve human health",
	"dates worked": "200 weeks",
	"description":"Building an engineering organization of world-class engineers who create tools that empower scientists to accelerate drug discoveries and improve patients' lives.",
	"images": ["http://3.bp.blogspot.com/-aZGVS9tqQ3M/TjeYIvlKz7I/AAAAAAAABNg/h_F67m_5e0Y/s1600/Maine_Coon_Kittens.jpg","http://3.bp.blogspot.com/-aZGVS9tqQ3M/TjeYIvlKz7I/AAAAAAAABNg/h_F67m_5e0Y/s1600/Maine_Coon_Kittens.jpg"]
	},
	{
	"title": "D.I.M. phase II - Discover Innovative Medicines that treat disease and improve human health",
	"dates worked": "14 Months",
	"description":"Building an engineering organization of world-class engineers who create tools that empower scientists to accelerate drug discoveries and improve patients' lives.",
	"images":["http://vettechcheck.files.wordpress.com/2011/08/maine_coon_b_kittens_by_ropo_art.jpg"]
	}
	],
	display: function() {
	//	$("#projects").append(HTMLprojectStart);
		for(p in projects.projects) {
			$("#projects").append(HTMLprojectStart);
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[p].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDate = HTMLprojectDates.replace("%data%", projects.projects[p]["dates worked"]);
			$(".project-entry:last").append(formattedProjectDate);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[p].description);
			$(".project-entry:last").append(formattedProjectDescription);
			for (i in projects.projects[p].images) {
				var formattedProjectImage = HTMLprojectImage.replace('%data%', projects.projects[p].images[i]);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}
projects.display();







