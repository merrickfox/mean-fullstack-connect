'use strict';

angular.module('yotiApp')
  .controller('UsersCtrl', function ($scope, User, Auth, _) {
    var getUsers;
    $scope.currentUser = User.get();
    $scope.currentUser.$promise.then(function () {
      getUsers();
    });

    getUsers = function () {
      User.query(function (data) {
        $scope.users = data;
        _.forEach($scope.users, function (user) {
          var hasConnection = _.find($scope.currentUser.connections, function(obj) {
            return obj._id === user._id;
          });
          user.hasConnection = (hasConnection) ? true:false;
        });
      });
    };


    $scope.connect = function (user) {
      user.hasConnection = true;
      User.connect({ currentUser: $scope.currentUser, targetConnection: user });
    };

  });
