app.controller('ContactController',['$scope','$http',function($scope,$http){
  $scope.flag = false;
	$scope.master = {};
	$scope.update = function(user){
		var data = JSON.stringify(user);/*$.params({
        book: JSON.stringify({
            fname: user.fname,
            lname: user.lname,
            email: user.email,
            phone: user.phone,
            message: user.message
        })
        */
  //$scope.flag = true; 
      $http.post('/t',data).then(
     function(response){
      console.log("success");
      $scope.flag = true;}, 
  function(response){
  // failure callback,handle error here
  console.log(response);
  });   
   };
}]);