<?php
	if ($_SERVER['REQUEST_METHOD'] == "POST") {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$category = $_POST['category'];

		$to = "";
		$subject = "";
		$message = "";

		if (mail($to, $subject, $message)) {
		 	echo "alert('Email Sent!')";;
		 } 
	}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Global</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="description" content="HTML5 website template">
  <meta name="keywords" content="global, template, html, sass, jquery">
  <meta name="author" content="Bucky Maler">
  <link rel="stylesheet" href="assets/css/main.css">
  <link rel="icon" href="assets/img/logo.png">
</head>
<body>

<!-- notification for small viewports and landscape oriented smartphones -->
<div class="device-notification">
  <a class="device-notification--logo" href="#0">
    <img src="assets/img/logo.png" width="28" alt="Global">
    <p>Global</p>
  </a>
  <p class="device-notification--message">Global has so much to offer that we must request you orient your device to portrait or find a larger screen. You won't be disappointed.</p>
</div>

<div class="perspective effect-rotate-left">
  <div class="container"><div class="outer-nav--return"></div>
    <div id="viewport" class="l-viewport">
      <div class="l-wrapper">
        <header class="header">
          <a class="header--logo" href="#0">
            <img src="assets/img/logo.png"  width="28" alt="Global">
            <p>Inner Tennis</p>
          </a>
<!--          <button class="header--cta cta">Hire Us</button>-->
          <div class="header--nav-toggle">
            <span></span>
          </div>
        </header>
        <nav class="l-side-nav">
          <ul class="side-nav">
            <li class="is-active"><span>Home</span></li>
            <li><span>Screenshots</span></li>
            <li><span>Pricing</span></li>
            <li><span>About</span></li>
            <li><span>Contact</span></li>
          </ul>
        </nav>
        <ul class="l-main-content main-content">
          <li class="l-section section section--is-active">
            <div class="intro">
              <div class="intro--banner">
                <h1>Your mental<br>training<br>drills</h1>
                <a href="#">
                	<img src="assets/img/app-store.png" height="48" alt="">
                </a> &nbsp;
                <a href="#">
                	<img src="assets/img/google-play.png" height="48" alt="">
                </a>
                <img src="assets/img/02_on-court-walk.png" class="intro-img" width="390" alt="Welcome">
              </div>
              <div class="intro--options">
                <a href="http://www.toptennistracker.com/">
                  <h3>Top Tennis Tracker</h3>
                  <p>Professional score tracking app for tennis coaches and parents.</p>
                </a>
                <a href="#0">
                  <h3>Mental Habits of Winners</h3>
                  <p>E-book on a concrete step-by-step method of mental training.</p>
                </a>
                <a href="http://www.top-tennis.net/">
                  <h3>Top-Tennis.net</h3>
                  <p>Portal & forum on aspects related to the mental side of tennis. </p>
                </a>
              </div>
            </div>
          </li>
          <li class="l-section section">
            <div class="work">
              <div class="page-title">
              	<h1>Screenshots</h1>
              </div>
              <div class="work--lockup">
                <ul class="slider">
                  <li class="slider--item slider--item-left">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/ss7.png" alt="Victory">
                      </div>
                    </a>
                  </li>
                  <li class="slider--item slider--item-center">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/ss1.png" alt="Metiew and Smith">
                      </div>
                    </a>
                  </li>
                  <li class="slider--item slider--item-right">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/ss2.png" alt="Alex Nowak">
                      </div>
                    </a>
                  </li>
                  <li class="slider--item slider--item-right">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/ss3.png" alt="Alex Nowak">
                      </div>
                    </a>
                  </li>
                  <li class="slider--item slider--item-right">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/ss4.png" alt="Alex Nowak">
                      </div>
                    </a>
                  </li>
                  <li class="slider--item slider--item-right">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/ss5.png" alt="Alex Nowak">
                      </div>
                    </a>
                  </li>
                  <li class="slider--item slider--item-right">
                    <a href="#0">
                      <div class="slider--item-image">
                        <img src="assets/img/ss6.png" alt="Alex Nowak">
                      </div>
                    </a>
                  </li>
                </ul>
                <div class="slider--prev">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                    c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                    c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z"/>
                  </g>
                  </svg>
                </div>
                <div class="slider--next">
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style="enable-background:new 0 0 150 118;" xml:space="preserve">
                  <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                    <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                  </g>
                  </svg>
                </div>
              </div>
            </div>
          </li>
          <li class="l-section section">
            <div class="about">
              <div class="page-title">
              	<h1>Pricing</h1>
              </div>
              <div class="price--options">
                <a href="#0">
                  <h2 class="price">FREE</h2>
                  <h3>First Chapter</h3>
                </a>
                <a href="#0">
                  <h2 class="price">&euro; 1,00</h2>
                  <h3>Next Chapter</h3>
                </a>
                <a href="#0">
                  <h2 class="price">&euro; 2,50</h2>
                  <h3>All Chapters</h3>
                </a>
              
              </div>
              
              <div class="a" style="width: 100%; overflow: hidden;">
              	<div class="chapter_box" style="background-image: url(assets/img/02_on-court-walk.png)">
              		<h4>Preparation is half the work</h4>
					Chapter 1
				  </div>
				  <div class="chapter_box" style="background-image: url(assets/img/bg2.png)">
				  	<h4>The joy is in the playing</h4>
					Chapter 2
				  </div>
				  <div class="chapter_box" style="background-image: url(assets/img/bg3.png)">
				  	<h4>Self-reflection, the key skill</h4>
					Chapter 3
				  </div>
				  <div class="chapter_box" style="background-image: url(assets/img/bg4.png)">
				  	<h4>When the going gets done</h4>
					Chapter 4
				  </div>
             	  <div class="chapter_box" style="background-image: url(assets/img/bg1.png)">
             	  	<h4>The summit comes gently</h4>
					Chapter 5
				  </div>
              </div>

              
            </div>
          </li>
          <li class="l-section section">
            <div class="hire">
              <div class="page-title">
              	<h1>About</h1>
              </div>
              <!-- checkout formspree.io for easy form setup -->
              <div class="text_scroll">
              	<p style="font-size: 16px;">Are you a tennis player looking to improve your game? And is the mental game also one of your challenges? Then look no further. Choking, emotional outbursts, lack of motivation, lack of consistency, all soon to be a thing of your past mentality.
              
              From recreational to professional level, as tennis players, we all deal with the same mental challenges. We want to play our best tennis, consistently. We want to remain calm under pressure. We want to will ourselves into flow. We want to be the player that always wins those tough and close matches.             
              </p>
              
              <p>And yet, most coaches can offer us only technical and physical training drills. Good coaches will help with the tactical side as well. But mental training is reserved for the select few top ATP players. This needs not be the case.</p>
			  
			  <p>You can work on your own game! And especially the mental game. As a mental coach, I’ve helped hundreds of players to get the best out of themselves, to win more often, and even to enjoy tennis more intensely. I have written a book about a concrete step-by-step method of mental training. As an addition to that, I designed this Inner Tennis app to motivate you to find your inner strength as a tennis player and a person.</p>
			  
			  <p>The quotes in this app are inspired by the ancient spiritual teachings about warriors, written by Carlos Castaneda in his book The Wheel of Time. Mixed together with concrete techniques from sport psychology, I’ve turned these spiritual teachings into a five-chapter mental-training program that any tennis player can follow.</p>
			  
              <p>Read the quotes as many times as you can. Think about them. Internalize them. Make them your own. Most importantly, do the chapter assignments. Be honest with yourself. Make notes of all your thoughts. Then revisit, and if necessary even change those notes. Use this app as a guide for your journey to become a mentally strong tennis player.</p> 
              
              <p>Best of luck! And if you have any questions or if you need support, feel free to contact me.</p>
              
              </div>
              <div class="link_box">
              	<a href="javascript:;" onclick="showOthersContent('#privacy')" style="color: #fff; text-decoration: none;">Privacy policy &nbsp;
                  <span>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style=" width: 15px; fill: #fff;" xml:space="preserve">
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                      <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                    </g>
                    </svg>
                  </span>
                </a> &nbsp; &nbsp;
                
                <a href="javascript:;" onclick="showOthersContent('#terms')" style="color: #fff; text-decoration: none;">Terms and codition  &nbsp;
                  <span>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style=" width: 15px; fill: #fff;" xml:space="preserve">
                    <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                      <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z"/>
                    </g>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </li>
          <li class="l-section section">
            <div class="hire">
              <div class="page-title">
              	<h1>Questions &amp; Requests</h1>
              </div>
              <h1></h1>
              <!-- checkout formspree.io for easy form setup -->
              <div class="contact--lockup">
              	<div class="modal">
                  <div class="modal--information">
                    <p>Ajdin Kolonic<br>Johannes Worpstraat 23-3<br>1076BD Amsterdam<br>The Netherlands</p>
                    <a href="mailto:ouremail@gmail.com">contact@top-tennis.net</a>
                    <a href="tel:+31650819599">+31650819599</a>
                  </div>
                </div>
			  </div>
              <form class="work-request">
                <div class="work-request--options">
                  <span class="options-a">
                    <input id="opt-1" type="checkbox" name="category[]" value="app design">
                    <label for="opt-1">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                      </g>
                      </svg>
                      Inner Tennis app
                    </label>
                    <input id="opt-2" type="checkbox" name="category[]" value="graphic design">
                    <label for="opt-2">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                      </g>
                      </svg>
                      Mental Coaching
                    </label>
                    <input id="opt-3" type="checkbox" name="category[]" value="motion design">
                    <label for="opt-3">
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 150 111" style="enable-background:new 0 0 150 111;" xml:space="preserve">
                      <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                        <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z"/>
                      </g>
                      </svg>
                       Other
                    </label>
                  </span>
                </div>
                <div class="work-request--information">
                  <div class="information-name">
                    <input id="name" type="text" spellcheck="false">
                    <label for="name">Name</label>
                  </div>
                  <div class="information-email">
                    <input id="email" type="email" spellcheck="false">
                    <label for="email">Email</label>
                  </div>
                </div>
                <input type="submit" value="Send Request">
              </form>
              
            </div>
          </li>
          <li id="privacy" class="l-section section privacy">
            <div class="hire">
              <h2>PRIVACY POLICY</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus beatae maxime voluptatibus quos esse, architecto ad sequi assumenda praesentium excepturi est nemo repellat nobis fugit, voluptas dolor fugiat eaque, asperiores. Itaque, cumque impedit nisi fugiat suscipit. Voluptatum, temporibus amet voluptatem est voluptas mollitia vero? Ad quae repellendus eligendi eaque quaerat animi nam quod facere. Placeat ullam quae, debitis dolor modi totam soluta harum porro, eos magni praesentium similique alias obcaecati! Veniam error consequuntur quis ducimus?</p>
              
            </div>
          </li>
          <li id="terms" class="l-section section privacy">
            <div class="hire">
              <h2>Terms and coditions</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil libero quo, asperiores dicta tenetur pariatur ullam magnam veniam officia delectus assumenda reiciendis omnis eius ad perspiciatis fugiat! Minima repudiandae natus libero dolorem adipisci optio voluptatum repellat, asperiores voluptate velit sed, voluptatem reprehenderit ipsa quis iure. Eaque dolorum nulla, id nemo.</p>
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <ul class="outer-nav">
    <li class="is-active">Home</li>
    <li>Screenshots</li>
    <li>Pricing</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="assets/js/vendor/jquery-2.2.4.min.js"><\/script>')</script>
<script src="assets/js/functions-min.js"></script>
<script>
function showOthersContent(id)
{
	$(".section").each(function (e) {
        if ($(this).hasClass("section--is-active")) {
            $(this).removeClass("section--is-active");
        }
    });
	$(id).show();
	$(id).addClass("section--is-active");
	
	
}
$(document).ready(function(){
	$("#privacy").on("mousewheel DOMMouseScroll", function(e) {
       e.preventDefault();
	});
});
</script>
</body>
</html>
