var changeState = function (state){
document.body.className = "bodystate"+state;
	
	if (state == 2){
	document.getElementById('countdown').innerHTML = 9;	
	}


}