/*
 *  BestController v1.0.0
 *  powerfirebat@gmail.com
 */
(function() {
    'use strict';

    angular
      .module('app.dataServiceFactory')
      .factory('DataService', DataService);

    DataService.$inject = ['$http'];

    function DataService($http) {
      return {
        getData: getData
      };

      function getData() {
        return $http.get('/api/data')
          .then(getDataSuccess)
          .catch(getDataFailed);

        function getDataSuccess(response) {
          return response.data.results;
        }

        function getDataFailed(error) {
          alert('error');
        }
      }
    }
  }();
