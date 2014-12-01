$(document).on('click', '.buyTransactionButtonClass', function() 
{ 
  var self = $("#username").val(); 
  var other = $(this).attr("id");
  $("#sellername").val(other);
  $.mobile.changePage("#addBuyTranaction");
});   

$(document).on('click', '#addNewSeller', function() 
{ 
	var self = $("#username").val(); 

  $.ajax(
		  {
		  url: 'http://websys3.stern.nyu.edu/~websysF14GB4/websys/userList.php',
//		  data:  formData,
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
		  $("#selectsellername").html('');
		  for (var i = 0; i < records.length; i++) 
		  {	
		  	var sellerName = records[i].record.USERNAME;
			if(sellerName != self)
			{
				$("#selectsellername").append('<option value="' + sellerName +'">' + sellerName + '</option>');
			}
		  }
		  
		  $("#selectsellername").trigger('create');
          $.mobile.changePage("#addBuyTranactionNoSeller");                                         

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