app
	.config(['$stateProvider',
		function($stateProvider){
			$stateProvider
			
			.state('home',{
				url:'/',
				parent:'default',
				views:{
					'content':{
						templateUrl:'bundles/home/views/home.html',
						controller:'homeCtrl'
					}
				}
			})
			
			.state('home.edit',{
				url:'edit/:id',
				views:{
					'content@default':{
						templateUrl:'bundles/home/views/home.edit.html',
						controller:'homeEditCtrl'
					}
				}
			})
		}
	])