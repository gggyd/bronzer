app
	.factory('userFacade',['$resource',function($resource){
		var users = $resource('webapi/user');
		
		return {
			users:users
		}
	}])