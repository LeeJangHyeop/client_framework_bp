/*
 *  BestController v1.0.0
 *  powerfirebat@gmail.com
 */
(function() {
  'use strict';

  angular
    .module('app')
    .controller('BestController', BestController);

  BestController.$inject = ['DataService'];

  function BestController(DataService) {
    var vm = this;
    vm.title = 'BestController';
    vm.func1 = func1;

    activate();

    var activate = function() {
      alert('Hello!');
    }

    function func1() {
      alert('func1');
    }

    function getData() {
      return DataService.getData()
        .then(function(data) {
          vm.data = data;
          return vm.data;
        });
    }
  }
})();
