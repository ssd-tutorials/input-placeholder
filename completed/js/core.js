var inputObject = {
	emptyInp : function(obj) {	
		var t = obj.attr('title');
		var v = obj.val();
		if (v === t) {
			obj.val('');
		}
	},
	fillInp : function(obj) {
		var t = obj.attr('title');
		var v = obj.val();
		if (v === '') {
			obj.val(t);
		}
	}
}
$(function() {
	
	$('.placeholder').focus(function() {
		inputObject.emptyInp($(this));
	});
	
	$('.placeholder').blur(function() {
		inputObject.fillInp($(this));
	});
	
});