$(document).ready(function(){ 
	$('#zIndexOpen').click(zIndexPopUpOpen);	
	$('#minHeightOpen').click(minHeightPopUpOpen);
	$('#stretchingOpen').click(stretchingPopUpOpen);
	$('#negativMarginOpen').click(negativMarginPopUpOpen);
	
	$('#popup_close').click(popUpClose);
	
	$(window).resize(center);
});
 
function zIndexPopUpOpen(){
	$('#popup_bg').css("display", "table");
	$('#popup_bg').addClass("table_method");
}

function stretchingPopUpOpen(){
	$('#popup_bg').css("display", "inline");
	$('#popup_bg').addClass("stretching");
}

function negativMarginPopUpOpen(){
	$('#popup_bg').css("display", "inline");
	$('#popup_bg').addClass("negativ_margin");
	
	center();
}

function minHeightPopUpOpen(){
	$('#popup_bg').css("display", "inline");
	$('#popup_bg').addClass("top_and_left");
	
	center();
}

function popUpClose(){
	$('#popup_bg').css("display", "none");
	$('#popup_bg').removeClass();
	$('#popup_container').removeAttr("style");
}

function center() {
	$('.top_and_left #popup_container').css({
		left: ($(window).width() - $('.top_and_left #popup_container').outerWidth())/2,
		top: ($(window).height() - $('.top_and_left #popup_container').outerHeight())/2
	});
	
	$('.negativ_margin #popup_container').css({
		'margin-left': -$('.negativ_margin #popup_container').outerWidth()/2,
		'margin-top': -$('.negativ_margin #popup_container').outerHeight()/2
	});
}