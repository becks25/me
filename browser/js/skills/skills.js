app.config(function ($stateProvider) {
    $stateProvider.state('skills', {
        url: '/skills',
        templateUrl: 'js/skills/skills.html',
        controller: 'skillsCtrl'
    });
});

app.controller('skillsCtrl', function($scope, MENU){
  $scope.testing = [
    'Chai',
    'Jasmine',
    'Jest',
    'Karma',
    'Mocha',
    'Selenium',
    'Sitespeed.io',
    'Webdriver.io'
  ];

  $scope.frameworks = [
    'Angular',
    'AngularJS',
    'Bootstrap',
    'JSData',
    'React',
    'Redux'
  ];

  $scope.languages = [
    'CSS/SASS',
    'ES6',
    'Express',
    'HTML',
    'JavaScript',
    'MongoDB',
    'MySQL',
    'Node',
    'Postgres',
    'Python',
    'Ruby',
    'SQL',
    'Sequelize',
    'TypeScript',
    'Vue'
  ];

  $scope.delivery = [
    'AWS EC2',
    'AWS S3',
    'Docker',
    'Git',
    'Jenkins',
  ];
});