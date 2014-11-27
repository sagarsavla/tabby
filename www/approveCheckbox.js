$(document).on('pageinit', '#approveCheckbox', function()
				{
       
                    $.ajax(
							{
							url: 'http://websys3.stern.nyu.edu/~websysF14GB4/websys/approveList.php',
//							data:  formData,
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
for (var i = 0; i < records.length; i++) {
	var labelContent = "BUYER:" + records[i].record.USERNAME + " ; AMOUNT:" + records[i].record.AMOUNT + " ; TIME:" + records[i].record.BUYDATE;
    $("fieldset").append('<input type="checkbox" name="' + name + '" id="id' + i + '"><label for="id' + i + '">' + labelContent + '</label>');
}
$("#frame").append('<a href="#approveCheckbox" data-role="button" data-inline="true" id="btndelcat">Approve</a>');
$("#frame").trigger('create');
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
