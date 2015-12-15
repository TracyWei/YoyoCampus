var url='http://api2.hloli.me:9001';
function Index(){
	// alert("aa");
	var phoneNum=$('#loginPhoneNum').val();
	var password=$('#loginPsword').val();
	console.log(phoneNum);
	console.log(password);
		$.ajax({
			url: url+'/v1.0/auth/login/',
			type: 'POST',
			dataType: 'json',
			data: JSON.stringify({phone_num:phoneNum,password: password}),
		})
		.done(function() {
			console.log("success");
			//window.location.href="#homepage_section"; 
			J.Router.goTo('#homepage_section');
			console.log(J.Router.goTo)
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		//window.location.href="#homepage_section"; 

		// $.ajax({
		// 	url: 'http://api2.hloli.me:9001/v1.0/auth/code/',
		// 	type: 'POST',
		// 	dataType: 'json',
		// 	data: JSON.stringify({phone_num: '18351988168'}),
		// })
		// .done(function() {
		// 	console.log("success");
		// })
		// .fail(function() {
		// 	console.log("error");
		// })
		// .always(function() {
		// 	console.log("complete");
		// });
}