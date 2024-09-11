import angular from 'angular';

angular
  .module('app', [])
  .component('appRoot', require('./components/root/root.component'));

angular.bootstrap(document, ['app']);
