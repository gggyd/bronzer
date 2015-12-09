app
.run(['$rootScope','$state','$stateParams',
	function($rootScope,$state,$stateParams){
	
}])

.config(['$stateProvider','$urlRouterProvider',
	function($stateProvider,$urlRouterProvider){
		$urlRouterProvider
			.when('/demo?id','/demo/:id')
			.otherwise('/');
		
		$stateProvider
			.state('default',{
				abstract:true,
				templateUrl:'layout/default.html',
				controller:function(){
					
				}
			})
			
	}
]);