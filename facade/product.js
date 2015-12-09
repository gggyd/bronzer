app
	.factory('productFacade',['$resource',function($resource){
		var list = $resource('/webapi/product');

		return {
			list: list
		}
	}]);