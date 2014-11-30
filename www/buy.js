$(document).on('click', '#buy', function() 
{ 
  var formData = $("#check-user").serialize();  
  $.ajax(
		  {
		  url: 'http://websys3.stern.nyu.edu/~websysF14GB4/websys/buyList.php',
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
		  $("#buylist").html('');
		  for (var i = 0; i < records.length; i++) 
		  {
			var valueLabel = "Seller:" + records[i].record.USERNAME + " ; Credit:" + records[i].record.AMOUNT;							
			$("#buylist").append('<input type="button" name="submit" data-role="button" id="buyTran" value="'+valueLabel+'">');
		  }
		  
		  $("#buylist").trigger('create');
          $.mobile.changePage("#buyTransaction");                                         

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