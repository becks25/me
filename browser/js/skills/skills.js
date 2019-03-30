app.config(function ($stateProvider) {
    $stateProvider.state('skills', {
        url: '/skills',
        templateUrl: 'js/skills/skills.html',
        controller: 'skillsCtrl'
    });
});

app.controller('skillsCtrl', function($scope, MENU){
  $scope.front = [
    'JavaScript',
    'JSData',
    'Angular',
    'React',
    'ES6',
    'HTML',
    'CSS/SASS',
    'Bootstrap'
  ];

  $scope.back = [
    'Node/Express',
    'MongoDB',
    'SQL',
    'MySQL',
    'Postgres',
    'Java'
  ];

  $scope.testing = [
    'Karma',
    'Mocha',
    'Chai',
    'Webdriver.io',
    'Jest',
    'Jasmine'
  ];
});