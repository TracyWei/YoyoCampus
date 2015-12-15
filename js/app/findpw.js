function Findpw(){
		$('#toGetCode').click(function(event) {
		var phoneNum=$('#findpwPhoneNum').val();
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
		console.log("findpw");
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
		$('#findpwDone').click(function(event) {
			var password=$('#findpwPassword').val();
			var code=$('#findpwCode').val();
			var phoneNum=$('#findpwPhoneNum').val();
			$.ajax({
				url: url+'/v1.0/user/reset_password/',
				type: 'PUT',
				dataType: 'json',
				data: JSON.stringify({password:password,code:code,phone_num:phoneNum}),
			})
			.done(function() {
				console.log("success");
				J.Router.goTo('#homepage_section');
			})
			.fail(function() {
				console.log("error");
			})
			.always(function() {
				console.log("complete");
			});
			
		});
}