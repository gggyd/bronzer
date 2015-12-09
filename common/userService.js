app
	.factory('userService', ['$q', 'userFacade', function ($q, userFacade) {
		function users(params) {
			var deferred = $q.defer();

			userFacade.users.get(params)
				.$promise.then(function (user) {
					deferred.resolve(user.result);
				},
					function (error) {
						deferred.reject(error);
					});

			return deferred.promise;
		}
		
		function UserInfo(){
			return {
				 name:null,
				 id:null
			}
		}

		return {
			users: users,
			UserInfo: UserInfo
		}
	}])