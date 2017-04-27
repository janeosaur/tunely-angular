angular
  .module('tunely')
  .controller('AlbumsShowController', AlbumsShowController);

AlbumsShowController.$inject = ['$http', '$routeParams'];

function AlbumsShowController ($http, $routeParams) {
  var vm = this;
  vm.newSong = {};

  $http({
    method: 'GET',
    url: '/api/albums/'+$routeParams.id
  }).then(function successCallback(json) {
    vm.album = json.data;
  }, function errorCallback(response) {
    console.log('There was an error getting the data', response);
  });

  vm.createSong = function () {
    $http({
      method: 'POST',
      url: '/api/albums/' +$routeParams.id + '/songs' , // /api/albums/:albumId/songs
      data: vm.newSong
    }).then(function successCallback(response) {
      console.log('vm is ', vm.newSong);
      console.log('response is ', response);
      vm.album.songs.push(vm.newSong);
    }, function errorCallback(response) {
      console.log('There was an error posting the data', response);
    });
  }

  vm.deleteSong = function (song) {
    $http({
      method: 'DELETE',
      url: '/api/albums/' +$routeParams.id + '/songs/' + song._id
    }).then(function successCallback(json) {
      var index = vm.album.songs.indexOf(song);
      vm.album.songs.splice(index,1)
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

  vm.editSong = function (song) {

    console.log(song);
    console.log(song._id);
    console.log(song.name);

    console.log('/api/albums/' +$routeParams.id + '/songs/' + song._id);

    $http({
      method: 'PUT',
      url: '/api/albums/' +$routeParams.id + '/songs/' + song._id,
      data: song
    }).then(function successCallback(json) {
      // no data needed, angular is live updating vm
    }, function errorCallback(response) {
      console.log('There was an error deleting the data', response);
    });
  }

}
