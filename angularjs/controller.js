/*
 *  BestController v1.0.0
 *  powerfirebat@gmail.com
 */

angular
    .module('app')
    .controller('BestController', BestController);

function BestController() {
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
}
