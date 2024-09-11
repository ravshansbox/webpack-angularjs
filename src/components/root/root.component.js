module.exports = {
  template: require('./root.component.html'),
  controller: class {
    constructor($scope) {
      'ngInject';
      $scope.classes = require('./root.component.css');
      $scope.name = 'AngularJS';
    }
  },
};
