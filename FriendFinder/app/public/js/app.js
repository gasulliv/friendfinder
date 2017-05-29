$(document).ready(function() {
	var selectedGender;
	var audio = document.getElementById("onLoad");
	var effect = document.getElementById("effect");
	var hover = document.getElementById("hover");
	var first = document.getElementById("first");
	var second = document.getElementById("second");

	audio.volume = 0.2;

	function onStart () {
		//play music
    	$("audio").get(0).play();

    		fade();

    		function fade(){

    			 fadeGenderChoice();

    			function fadeGenderChoice (){
    	//begin fade in and out of first question

    				$(first).fadeIn(2000).removeClass('hiddenfirst');
    				$(second).fadeIn(5000).removeClass('hiddenfirst');

    				$(first).fadeOut(1000,function(){
    				$(this).html("<h1>Lord or Lady?</h1>").fadeIn(1000);
    				fadeGenderCards();
    				});
    			 return;
      			}
      			function fadeGenderCards (){

      				    var male = document.getElementById("male");
      					var female = document.getElementById("female");

      				 $(second).fadeOut(1000,function(){
      				 $(this).html("<img id = 'male' class='gender' data-gender='male' src = 'images/male.jpg'>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <img id = 'female' class='gender' data-gender='female' src = 'images/female.png'>").fadeIn(1000);
      					hoverEffect();
      				});

      			return;

    			}

      	//creating the hover function
      					function hoverEffect (){
      						console.log("this works");
      	//play the card loading sound
      						$(effect).get(0).play();
      	//play the hover sounds for guy and girl
      						$(male).mouseenter(function() {
      							console.log("this works");
    							$(hover).get(0).play();
							});
							$(male).mouseleave(function() {
								$(hover).get(0).pause();
    							hover.currentTime = 0;
    						});
							$(female).mouseenter(function() {
    							$(hover).get(0).play();
							});
							$(female).mouseleave(function() {
    							$(hover).get(0).pause();
    							hover.currentTime = 0;
							});

							$(document).on("click", ".gender", function(){
								selectGender(this);

							});

      					}


						function selectGender(gender){
							selectedGender = $(gender).data("gender");
							console.log(gender);
							if(selectedGender === "female") {
								console.log("You are a pretty woman");
								$(male).fadeOut(2000);
								fadeUserPref();
								return;

							} else if (selectedGender === "male") {
								console.log("You are a handsome man");
								$(female).fadeOut(2000);
								fadeUserPref();
								return;
							}


						// 	var userGender = {
						// 		gender: selectedGender
						// 	};
						// 	var currentURL = window.location.origin;
						// 	$.post(currentURL + "/gender", userGender, function(data){
	    	// 				});
						// }

 					}
 				}

 							function fadeUserPref (){
    	//begin fade in and out of first question

    							$(first).fadeOut(8000,function(){
    							$(this).html("<h1>Lord or Lady?</h1>").fadeIn(3000);
    							fadePrefCards();
    							return;
    							});
    			 				return;
      						}
      			function fadePrefCards (){

      				    var male = document.getElementById("male");
      					var female = document.getElementById("female");

      				 $(second).fadeOut(5000,function(){
      				 $(this).html("<img id = 'male' class='gender' data-gender='male' src = 'images/male_2.png'>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; <img id = 'female' class='gender' data-gender='female' src = 'images/female_2.png'>").fadeIn(5000);
      					hoverEffectPref();
      					return;
      				});

      				return;

    			}

      	//creating the hover function
      					function hoverEffectPref (){
      						console.log("this works");
      	//play the card loading sound
      						$(effect).get(0).play();
      	//play the hover sounds for guy and girl
      						$(male).mouseenter(function() {
      							console.log("this works");
    							$(hover).get(0).play();
							});
							$(male).mouseleave(function() {
								$(hover).get(0).pause();
    							hover.currentTime = 0;
    						});
							$(female).mouseenter(function() {
    							$(hover).get(0).play();
							});
							$(female).mouseleave(function() {
    							$(hover).get(0).pause();
    							hover.currentTime = 0;
							});

							$(document).on("click", ".gender", function(){
								selectPref(this);

							});

      					}

						function selectPref(gender){
							selectedGender = $(gender).data("gender");
							console.log(gender);
							if(selectedGender === "female") {
								console.log("You are a pretty woman");
								$(male).fadeOut(2000);
								moveForward();



							} else if (selectedGender === "male") {
								console.log("You are a handsome man");
								$(female).fadeOut(2000);
								moveForward();

							}


						// 	var userGender = {
						// 		gender: selectedGender
						// 	};
						// 	var currentURL = window.location.origin;
						// 	$.post(currentURL + "/gender", userGender, function(data){
	    	// 				});
						// }

 					}

 				}

 			function transitionPage (){

 					moveForward();

 					function moveForward (){

 						$(first).fadeOut(8000,function(){
    					$(this).html().fadeIn(3000);
    					forwardButton();

    					});

      					}
      					function forwardButton (){

      				 $(second).fadeOut(5000,function(){
      				 	$(this).html("text").fadeIn(5000);
      				});

      				return;


 					}
 				}

 	onStart();

 	});
