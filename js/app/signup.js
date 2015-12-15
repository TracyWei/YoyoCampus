// function signup(){
// 	// alert("aa");
// 	// var phoneNum=$('#loginPhoneNum').val();
// 	// var password=$('#loginPsword').val();
// 	// console.log(phoneNum);
// 	// console.log(password);
// 		// $.ajax({
// 		// 	url: 'http://api2.hloli.me:9001/v1.0/auth/login/',
// 		// 	type: 'POST',
// 		// 	dataType: 'json',
// 		// 	data: JSON.stringify({phone_num:phoneNum,password: password}),
// 		// })
// 		// .done(function() {
// 		// 	console.log("success");
// 		// 	//window.location.href="#homepage_section"; 
// 		// 	J.Router.goTo('#homepage_section');
// 		// 	console.log(J.Router.goTo)
// 		// })
// 		// .fail(function() {
// 		// 	console.log("error");
// 		// })
// 		// .always(function() {
// 		// 	console.log("complete");
// 		// });
// 		//window.location.href="#homepage_section"; 

// 		// $.ajax({
// 		// 	url: 'http://api2.hloli.me:9001/v1.0/auth/code/',
// 		// 	type: 'POST',
// 		// 	dataType: 'json',
// 		// 	data: JSON.stringify({phone_num: '18351988168'}),
// 		// })
// 		// .done(function() {
// 		// 	console.log("success");
// 		// })
// 		// .fail(function() {
// 		// 	console.log("error");
// 		// })
// 		// .always(function() {
// 		// 	console.log("complete");
// 		// });
// }
function Signup(){
	//alert("aaa");
	
	$('#toGetCode').click(function(event) {
		var phoneNum=$('#signupPhoneNum').val();
		var countDown=60;
		$('#toGetCode').hide();
		$('#getCodeTiming').show();
		var counter=setInterval(function(){
			countDown--;
			if(countDown==0){
				$('#toGetCode').show();
				$('#getCodeTiming').hide();
				clearInterval(counter);
			}
			$('#seconds').html(countDown);
		},1000);
		// $('#toGetCode').addClass('get-code-grey');
		console.log("pp");
		$.ajax({
			url: url+'/v1.0/auth/code/',
			type: 'POST',
			dataType: 'json',
			data: JSON.stringify({phone_num: phoneNum}),
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	});
	$('#toSignup').click(function(event) {
	var code=$('#inputCode').val();
	var password=$('#getPassword').val();
	var phoneNum=$('#signupPhoneNum').val();
		$.ajax({
			url: url+'/v1.0/user/',
			type: 'POST',
			dataType: 'json',
			data: JSON.stringify({phone_num:phoneNum,code:code,password: password}),
		})
		.done(function() {
			console.log("success");
			J.Router.goTo("myinfo_section");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		
	});

}
