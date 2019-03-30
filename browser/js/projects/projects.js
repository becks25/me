app.config(function ($stateProvider) {
    $stateProvider.state('projects', {
        url: '/projects',
        templateUrl: 'js/projects/projects.html',
        controller: 'projectsCtrl'
    });
});

app.controller('projectsCtrl', function($scope){
  $scope.projects = [
    { name: 'Amplify Education', link: 'https://my.amplify.com', blurb: 'A website that allows teachers and students to access information about their classes, licenses, and programs.', color: 'pink2', date: 'Oct 2018 - present'},
    { name: 'ConEd Smart AC Program 2017', link: 'https://conedsmartac.com/', blurb: 'A microsite that allows Con Edison customers to sign up for the Smart AC program', color: 'green2', date: 'Apr - May 2017'},
    { name: 'ConEd Smart AC Program 2016', link: '/smartac2016', blurb: 'A microsite that allows Con Edison customers to sign up for the Smart AC program', color: 'yellow2', date: 'Mar - Jun 2016'},
    { name: 'SpellBook', link: 'http://immense-temple-5922.herokuapp.com/', blurb: 'An interactive story book that teaches children basic programming logic', color: 'purple1', date: 'Oct 2015'},
    { name: 'Dance Party', link: 'https://dance-party.herokuapp.com/', blurb: 'An interactive dance party with some of your favorite Fullstack Academy characters', color:'pink1', date: 'Sept 2015'},
    { name: 'Global Citizen Festival', link: '/gcf', blurb: 'Action journey that encouraged users to take action to end extreme poverty', color:'green1', date: 'Apr - Jul 2014'}
  ];
});