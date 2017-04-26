/* CLIENT-SIDE JS
 *
 * This is your main angular file. Edit as you see fit.
 *
 */

angular
  .module('tunely', ['ngRoute'])
  .config(config);


config.$inject = ['$routeProvider', '$locationProvider'];
function config( $routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/albums',
      controller: 'AlbumsIndexController',
      controllerAs: 'albumsIndexCtrl'
    })
    .when('/albums/:id', {
      templateUrl: '/templates/albums-show',
      controller: 'AlbumsShowController',
      controllerAs: 'albumsShowCtrl'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}
