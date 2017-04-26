angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController)

AlbumsShowController.$inject = ['$http', '$routeParams'];

function AlbumsShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};
  console.log($routeParams); // should log album param id that was clicked.
  $http({
    method: 'GET',
    url: '/api/albums/' + $routeParams.id
  }).then(function successCallback(response) {
    vm.album = response.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

}
