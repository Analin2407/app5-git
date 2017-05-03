// JavaScript Document

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		
		$('#beep').tap(function(){;
		navigator.notification.beep(1);
	});//tap beep
	
	$('#vibrer').tap(function(){
		navigator.notification.vibrate(1000);
	});//tapvibrar
		
	},false);//deviceready
	});//ready