$(document).on('pageinit', '#newuser', function(){ 
        $(document).on('click', '#createNewUser', function() { // catch the form's submit event
            if(	$('#newusername').val().length > 0 && 
				$('#newpassword').val().length > 0 &&
				$('#email').val().length > 0
				)
			{
				var formData = $("#new-user").serialize();
                // Send data to server through the ajax call
                // action is functionality we want to call and outputJSON is our data
                    $.ajax({url: 'http://websys3.stern.nyu.edu/~websysF14GB4/websys/newUser.php',
						data:  formData,
                        type: 'GET',                  
                        async: 'true',
                        dataType: 'jsonp',
						jsonpCallback: 'successCallback',
                        beforeSend: function() {
                            // This callback function will trigger before data is sent
                            $.mobile.showPageLoadingMsg(true); // This will show ajax spinner
                        },
                        complete: function() {
                            // This callback function will trigger on data sent/received complete
                            $.mobile.hidePageLoadingMsg(); // This will hide ajax spinner
                        },
                        success: function (result) {
                            if(result.status) {
                                alert('New user created');
                                $.mobile.changePage("#login");                        
                            } else {
                                alert('Not able to create user!');
                            }
                        },
                        error: function (request,error) {
                            // This callback function will trigger on unsuccessful action               
                            alert('Network error has occurred please try again!');
                        },
						successCallback:function(){

        				}
                    });                  
            } else {
                alert('Please fill all necessary fields');
            }          
            return false; // cancel original event to prevent form submitting
        });   
});