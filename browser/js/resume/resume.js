app.config(function ($stateProvider) {
    $stateProvider.state('resume', {
        url: '/resume',
        templateUrl: 'js/resume/resume.html',
        controller: 'resumeCtrl'
    });
});

app.controller('resumeCtrl', function($scope){
    $scope.width = document.querySelector('#full-width').clientWidth / 5;
	  $scope.education = [
  		{ 
        label: 'Education', 
        dates: '', 
        title: '', 
        flip: false, 
        back: '', 
        color: 'purple-text',
        hide: true
      },
      { 
        label: 'Fullstack Academy', 
        dates: '2015', 
        title: '', 
        flip: true, 
        back: 'Immersive software development bootcamp, focusing on JavaScript and the MEAN stack',
        color:'purple1'
      },
      { 
        label: 'Tufts University', 
        dates: '2013', 
        title: '', 
        flip: true, 
        back:'Bachelor of Arts in Psychology',
        color: 'purple2'
      },
      { 
        label: 'IES Abroad: Madrid', 
        dates: 2012, 
        title: '', 
        flip: true, 
        back: 'Spanish immersion program. Attended classes at the Universidad Complutense de Madrid.',
        color: 'purple3'
      }
    ];

    $scope.experience = [
      {
        label: 'Software Engineer',
        dates: 'Oct 2017 - present',
        title: 'Amplify',
        flip: true,
        back: 'Work on Shared Experiences team to ensure easy access for all clients across a variety of websites. Maintain and build applications with JavaScript, Java, React, Angular, Angular 2, and Node.',
        color: 'green1'

      },
      { 
        label: 'Senior Software Engineer', 
        dates: 'Feb 2016 - Sep 2017', 
        title: 'ThinkEco Inc.', 
        flip: true, 
        back: 'Build sites for customers and partners using Angular, Bootstrap, and JavaScript.  Ensure that all sites are cross-browser compatible and responsive across all platforms.', 
        color: 'green2'
      },
      { 
        label: 'Communications Officer & Website Manager', 
        dates: 'Jun 2013 - Jun 2017', 
        title: 'Katz\'s Deli', 
        flip: true, 
        back: 'Planned and created social media content for Twitter, Facebook and Instagram daily. Oversaw the redesign of the Katz\'s Deli website.', 
        color: 'green3'
      },
      { 
        label: 'Experience', 
        dates: '', 
        title: '', 
        flip: false, 
        back: '', 
        color: 'green-text',
        hide: true
      },
      { 
        label: 'Front End Web Developer and Designer', 
        dates: 'Apr 2014 - May 2015', 
        title: 'Global Citizen', 
        flip: true, 
        back: 'Created, edited and designed pages for globalcitizen.org. Ensured that the website is mobile and tablet friendly. Used Photoshop to create visually stimulating elements.', 
        color: 'green3'
      },
      { 
        label: 'Freelance Web Design', 
        dates: 'Mar 2014 - Jan 2016', 
        title: '', 
        flip: true, 
        back: 'Design and build custom pages. Tailored each website to individual client\'s needs and desired style.', 
        color: 'green1'
      },
      { 
        label: 'Global Citizen Coordinator', 
        dates: 'Jun 2013 - Apr 2014', 
        title: 'Global Citizen', 
        flip: true, 
        back: 'Responsible for procuring and publicizing shows from over 200 artists worldwide. Acted as liaison between artist managers and ticket winners.', 
        color: 'green2'
      },
      { 
        label: 'Research Assistant', 
        dates: 'Sep 2011 - May 2013', 
        title: 'Tufts University', 
        flip: true, 
        back: 'Ran experimental sessions for six studies, ten hours per week. Recorded, organized, and prepared data for analysis. Assisted in the planning of interracial interaction studies.', 
        color: 'green1'
      },
      { 
        label: 'Outreach Director', 
        dates: 'Jun 2012 - Sep 2012', 
        title: 'Millennium Campus Network', 
        flip: true, 
        back: 'Recruited 1000+ student leaders from around the country for a conference. Helped organize, plan, and run the Millennium Campus Conference 2012.', 
        color: 'green2'
      }
    ];

    $scope.leadership = [
      {
        label: 'Tech Lead',
        dates: 'August 2019 - present',
        title: 'Amplify Education',
        flip: true,
        back: 'Manage team of 5 engineers and 12 front end and service layer projects.',
        color: 'yellow2'
      },
      { 
        label: 'Leadership', 
        dates: '', 
        title: '', 
        flip: false, 
        back: '', 
        color: 'yellow-text',
        hide: true
      },
      {
        label: 'SAT Project Lead',
        dates: 'March 2019 - present',
        title: 'New York Cares',
        flip: true,
        back: 'Manage volunteers and students, liase with school representatives, and grade SAT practice exams.',
        color: 'yellow1'
      },
      {
        label: 'Talent Logistics Manager',
        dates: 'November - December 2018',
        title: 'Global Citizen Mandela 100 Festival',
        flip: true,
        back: 'Handled all talent logistics for 80+ speakers and their entourages. Ensured the timely arrival and smooth transitions for celebrities, politicians, and royalty.',
        color: 'yellow3'
      },
      { 
        label: 'Hospitality Executive', 
        dates: 'Dec 2009 - May 2013', 
        title: 'Tufts University Concert Board', 
        flip: true, 
        back: 'In charge of 10-15 concert board members before and during shows. Responsible for any requests made by artists during the show. Provided food and supplies in preparation for the artist\'s arrival.', 
        color: 'yellow1'
      },
      { 
        label: 'Group Leader', 
        dates: 'Sep 2011', 
        title: 'FOCUS Pre-Orientation', 
        flip: true, 
        back: 'Responsible for the safety of eight freshmen. Helped the new students acclimate to life at Tufts.', 
        color: 'yellow2'
      },
      { 
        label: 'Head Waiter', 
        dates: 'Jun 2010', 
        title: 'Katz\'s Deli', 
        flip: true, 
        back: 'Waited on 20-40 people at once in a high stress environment. Personally responsible for the satisfaction of each customer.', 
        color: 'yellow1'
      }

    ];

    $scope.volunteer = [   
      {
        label: 'SAT Tutor',
        dates: 'October 2018 - present',
        title: 'New York Cares',
        flip: true,
        back: 'Tutor small group of high school students weekly to prepare them for the SATs and college.',
        color: 'blue1',
      },
      { 
        label: 'Volunteer', 
        dates: '', 
        title: '', 
        flip: false, 
        back: '', 
        color: 'blue-text',
        hide: true
      },
      {
        label: 'Talent Entrance Overseer',
        dates: 'September 2013 - present',
        title: 'Global Citizen Festival',
        flip: true,
        back: 'Assist at the annual Global Citizen Festival by working with security at the talent entrance.',
        color: 'blue2'
      },
      { 
        label: 'Lead Developer', 
        dates: 'November 2015 - January 2016', 
        title: 'Nomprofits', 
        flip: true, 
        back: 'Built a full website, using the MEAN stack for a budding nonprofit.  Created a custom CMS, suited to the needs of the founder.', 
        color: 'blue3'
      },
      { 
        label: 'Volunteer Coder', 
        dates: 'Oct 2015 - present', 
        title: 'SocialCoder', 
        flip: true, 
        back: 'Create and edit pages and test security for different international charities as needed.', 
        color: 'blue2'
      },
      { 
        label: 'Buddy', 
        dates: 'Sep 2010 - May 2011', 
        title: 'Best Buddies Program', 
        flip: true, 
        back: 'Spent two hours weekly with a mentally handicapped woman. Helped her acclimate to new situations. Explored ways to alleviate her social anxiety.', 
        color: 'blue3'
      },
      { 
        label: 'Volunteer', 
        dates: 'Jun 2008 - Jul 2008', 
        title: 'The Road Less Traveled', 
        flip: true, 
        back: 'Assisted in trash cleanup throughout Bhutan. Helped restore temples and homes. Helped secondary school students apply to university.', 
        color: 'blue1'
      }

    ];


});