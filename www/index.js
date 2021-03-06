$(document).on('pageinit', '#login', function(){ 
        $(document).on('click', '#submit', function() { // catch the form's submit event
            if($('#username').val().length > 0 && $('#password').val().length > 0){
				var formData = $("#check-user").serialize();
                // Send data to server through the ajax call
                // action is functionality we want to call and outputJSON is our data
                    $.ajax({url: 'http://websys3.stern.nyu.edu/~websysF14GB4/websys/check.php',
                        //data: {action : 'login', formData : $('#check-user').serialize()},
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
                                $.mobile.changePage("#second");                        
                            } else {
                                alert('Logon unsuccessful!');
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
		$(document).on('click', '#registeruser', function() { 
				$.mobile.changePage("#newuser");                        
        });   

});