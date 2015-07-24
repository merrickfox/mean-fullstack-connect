'use strict';

angular.module('yotiApp')
  .factory('User', function ($resource) {
    return $resource('/api/users/:id/:controller', {
      id: '@_id'
    },
    {
      changePassword: {
        method: 'PUT',
        params: {
          controller:'password'
        }
      },
      get: {
        method: 'GET',
        params: {
          id:'me'
        }
      },
      connect: {
        method: 'PUT'
      },
      adminInfo: {
        method: 'GET',
        isArray: true,
        params: {
          id:'admin'
        }
      }
	  });
  });
