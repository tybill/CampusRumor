function loading(){
}

var poster=['donaldtrump','hillary'];
var content=['I am the president of the US!!!!','fuck trump'];

$(document).ready(function(){
	$('#refreshbutton').click(function(event){
		var input = $('<input>').attr('type', 'hidden').attr('name', 'isanonymous');
		input.val('false');
		var form = $('#form-comment');
		form.append(input);
		form.submit();
	});

	$('#postbutton1').click(function(event){
		var input = $('<input>').attr('type', 'hidden').attr('name', 'isanonymous');
		input.val('false');
		var form = $('#form-comment');
		form.append(input);
		form.submit();
	});

	$('#postbutton2').click(function(event){
		var input = $('<input>').attr('type', 'hidden').attr('name', 'isanonymous');
		input.val('true');
		var form = $('#form-comment');
		form.append(input);
		form.submit();
	});
});