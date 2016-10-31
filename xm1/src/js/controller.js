function main($scope,$location){
	
	$scope.tiao=function(){
		$location.path('/first');
	}
	$scope.backfirst=function(){
		$location.path('/first')
	}
	
	
}
angular.module('myapp')
			.controller('main',main)
			
		
		
