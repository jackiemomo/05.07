var startTime;
var checkTime;

//Initialize function
( function () {
	// TODO:: Do your initialization job
	console.log("init() called");
	var buttontext = document.querySelector('#buttontext');
	buttontext.innerHTML = screen.height + 'x' + screen.width;
	// add eventListener for tizenhwkey
	document.addEventListener('tizenhwkey', function(e) {
		if(e.keyName == "back") {
			try {
				tizen.application.getCurrentApplication().exit();
			} catch (error) {
				console.error("getCurrentApplication(): " + error.message);
			}
		}
	});
	$('#row1').css({"color": "rgb(160, 240, 60)","font-size": "20%"}); 
	$('#row2').css({"color": "rgb(140, 20, 80)","font-size": "40%"});
	$('#row3').css({"color": "rgb(120, 220, 100)","font-size": "60%"});
	$('#row4').css({"color": "rgb(100, 40, 120)","font-size": "80%"});
	$('#row5').css({"color": "rgb(80, 200, 140)","font-size": "100%"});
	$('#row6').css({"color": "rgb(60, 60, 160)","font-size": "120%"});
	$('#row7').css({"color": "rgb(40, 180, 180)","font-size": "140%"});
	$('#row8').css({"color": "rgb(20, 80, 200)","font-size": "160%"});
	$('#row9').css({"color": "rgb(240, 160, 220)","font-size": "180%"});
	$('#row10').css({"color": "rgb(220, 100, 240)","font-size": "200%"});
	$('#row11').css({"color": "rgb(200, 140, 20)","font-size": "220%"});
	$('#row12').css({"color": "rgb(180, 120, 40)","font-size": "240%"});
	$('#row13').css({"color": "rgb(160, 240, 60)","font-size": "260%"});
} () );


function checkTime(i) {
	if (i < 10) {
		i="0" + i;
	}
	return i;
}

function showImage() {
	var tizenimg = document.querySelector('#tizenimg');
	tizenimg.style.visibility = (tizenimg.style.visibility === "hidden") ? "visible" : "hidden";
}

function showResolution() {
	var buttontext = document.querySelector('#buttontext');
	buttontext.style.visibility = (buttontext.style.visibility === "hidden") ? "visible" : "hidden";
}