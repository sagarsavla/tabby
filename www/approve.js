$(document).on('pageinit', '#approve', function()
				{
       
                    $.ajax(
							{
							url: 'http://websys3.stern.nyu.edu/~websysF14GB4/websys/approveList.php',
//							data:  formData,
//                        	type: 'GET',                  
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

								var htmlcontent ='<li><h2>Broken Bells</h2><p>Broken Bells</p>';
        htmlcontent += '</li>';
htmlcontent += '<li><h2>Warning</h2><p>Hot Chip</p>';
htmlcontent += '</li><li><h2>Wolfgang Amadeus Phoenix</h2>';
   htmlcontent += '<p>Phoenix</p> ';
  htmlcontent += '</li>';

		$("#dynamic").html(htmlcontent);
$("#dynamic").listview('refresh');
                            							
                        								},
                        	error: function (request,error) {
							                            // This callback function will trigger on unsuccessful action               
                            							alert('Network error has occurred please try again!');
                        								},
						successCallback:function(){

        											} 
							});        
                   
		            return false; // cancel original event to prevent form submitting
					});   
