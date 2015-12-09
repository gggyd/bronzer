; (function () {
	app
		.controller('homeCtrl', [
			'$scope', 
			'userService', 
			'NgTableParams',
			'productService',
			function ($scope, userService, NgTableParams,productService) {
				$scope.title = "HomePage";

				// productService.getLists({}).then(function (result) {
				// 	$scope.users = result.lists;
				// })

				$scope.vm = {};

				$scope.vm.tableParams = new NgTableParams({
					count:10
				}, {
					counts:[],
					getData: function (params) {
						return productService.getLists(params.url()).then(function (data) {
							params.total(30);
							return data.data;
						});
					}
				});
			}])
			
		.controller('homeEditCtrl',['$scope','userService','$stateParams',
			function($scope,userService,$stateParams){
				var user = new userService.UserInfo();
				user.name = 'Keane';
				$scope.user = user;
				var id = $stateParams.id;
			}])
})()