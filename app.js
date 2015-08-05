angular.module('flapperNews', [])
	.controller('MainCtrl', [
		'$scope',
		function($scope){
			$scope.posts = [
			{title: 'Post 1', upvotes: 5},
			{title: 'Post 2', upvotes: 1},
			{title: 'Post 3', upvotes: 6},
			{title: 'Post 4', upvotes: 3},
			{title: 'Post 5', upvotes: 15},
			];
			$scope.banana = "I'm a banana!";
			$scope.addPost = function(){
				if (!$scope.title || $scope.title ==='') {return}
				$scope.posts.push({title: $scope.title, upvotes: 0});
				$scope.title = '';
			};
}]);