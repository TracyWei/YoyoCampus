function Xianzhi(){
	// var myApp=angular.module('myApp',[]);
 //  	myApp.controller('StudentController', function($scope) {
 //      $scope.students=[{name:'Mary',score:'98'},{name:'Tom',score:'95'},{name:'Jack',score:'100'}];
 //      $scope.insertJill=function() {
 //      	$scope.students.splice(1,0,{name:'Jill',score:'99'});
 //      }
	//  alert("!");
	// $.ajax({
	// 	url: url+'/v1.0/category/idle/',
	// 	headers:{access_token:'c8c1b2da-86ed-11e5-83a9-00163e021195'},
	// })
	// .done(function(data) {
	// 	var temp=_.template($('#kind-temp').html());
	// 	$('#kinds').append(temp({list:data.category}));
	// })
	// .fail(function() {
	// 	console.log("error");
	// })
	// .always(function() {
	// 	console.log("complete");
	// });
	$('.sort_btn').click(function(event) {
		$('.order').toggle();
	});
}
