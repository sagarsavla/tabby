$(document).on('click', '#summary', function() 
{ 
	$.mobile.changePage("#summaryPage");                                         	

});

$(document).on('click', '#recentSellTransactions', function() 
{ 
  var formData = $("#check-user").serialize();  
  $.ajax(
		  {
		  url: 'http://websys3.stern.nyu.edu/~websysF14GB4/websys/sellTranReport.php',
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
  		  $('#dynamicselltable').html('');
		  $('#dynamicselltable').append('<table border="solid"></table>');
		  var table = $('#dynamicselltable').children();    
		  table.append("<tr><td><b>BUYER</b></td><td><b>BUY DATE</b></td><td><b>COMMENT</b></td><td><b>AMOUNT</b></td></tr>");
		  for (var i = 0; i < records.length; i++) 
		  {

			var row = "<tr><td>"+records[i].record.USERNAME+"</td><td>"+records[i].record.BUYDATE+"</td><td>"+records[i].record.COMMENT+"</td><td>"+records[i].record.AMOUNT+"</td></tr>";							
			table.append(row);
		  }
		  
		  $("#dynamicselltable").trigger('create');
          $.mobile.changePage("#sellTransactionReport");                                         

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

$(document).on('click', '#recentBuyTransactions', function() 
{ 
  var formData = $("#check-user").serialize();  
  $.ajax(
		  {
		  url: 'http://websys3.stern.nyu.edu/~websysF14GB4/websys/buyTranReport.php',
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
  		  $('#dynamictable').html('');
		  $('#dynamictable').append('<table border="solid"></table>');
		  var table = $('#dynamictable').children();    
		  table.append("<tr><td><b>SELLER</b></td><td><b>BUY DATE</b></td><td><b>COMMENT</b></td><td><b>AMOUNT</b></td></tr>");
		  for (var i = 0; i < records.length; i++) 
		  {

			var row = "<tr><td>"+records[i].record.USERNAME+"</td><td>"+records[i].record.BUYDATE+"</td><td>"+records[i].record.COMMENT+"</td><td>"+records[i].record.AMOUNT+"</td></tr>";							
			table.append(row);
		  }
		  
		  $("#dynamictable").trigger('create');
          $.mobile.changePage("#buyTransactionReport");                                         

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