$(document).on('click', '#approve', function() { 
					var formData = $("#check-user").serialize();       
                    $.ajax(
							{
							url: 'http://websys3.stern.nyu.edu/~websysF14GB4/websys/approveList.php',
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

							var records = result.records;
							
							$("#frame").html('<fieldset data-role="controlgroup"><legend>Select transactions to approve</legend></fieldset>');
							for (var i = 0; i < records.length; i++) 
							{
								var debitOrCredit;
								if(records[i].record.AMOUNT > 0)
								{
									debitOrCredit = "Paid";
								}
								else
								{
									debitOrCredit = "Used";
								}
								var labelContent = "BUYER:" + records[i].record.USERNAME + " ; " +  debitOrCredit +":" 
													+ records[i].record.AMOUNT + " ; TIME:" + records[i].record.BUYDATE;
								$("fieldset").append('<input type="checkbox" name="' + name + '" id="' + records[i].record.TRANSACTIONID + '"><label for="' + records[i].record.TRANSACTIONID + '">' + labelContent + '</label>');
							}
							$("#frame").append('<a href="#approveCheckbox" data-role="button" data-inline="true" id="btndelcat">Approve</a>');
							$("#frame").trigger('create');
                            $.mobile.changePage("#approveCheckbox");                        
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
//				});