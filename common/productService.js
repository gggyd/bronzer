app
	.factory('productService',[
		'productFacade',
		'$q',
		function(productFacade,$q){
			function getLists(params){
				var deferred = $q.defer();
				productFacade.list.get(params).$promise.then(
					function(result){
						deferred.resolve(result);
					},
					function(err){
						deferred.reject(err);
					}
				)

				return deferred.promise;
			}

			return {
				getLists: getLists
			}
	}]);