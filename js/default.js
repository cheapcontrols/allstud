


//<!-- Google Analytics -->
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-39236557-8', 'auto');
		ga('send', 'pageview');
//<!-- End Google Analytics -->

// NOTE : Header Social Media
/*
let socialMedia = "<a href='https://www.facebook.com/The-Weekly-Stupid-381670372234061/' target='blank'></a>";
socialMedia += "<a href='http://www.twitter.com/theweeklystupid' target='blank'></a>";
socialMedia += "<a href='http://www.instagram.com/theweeklystupid' target='blank'></a>";
socialMedia += "<a href='https://shop.spreadshirt.com/the-weekly-stupid' target='blank'></a>";
*/


//document.getElementById("social").innerHTML = socialMedia;



// NOTE : load nav area
const current_location = ((document.location.href.split("/").pop()).split(".",1));
const body_id = document.getElementsByTagName("body")[0].id;
let nav_menu = "<ul>";
nav_menu += "<li";
nav_menu += body_id == "index"?" id='nav_sel'":"";
nav_menu += "><a href='index.html'>HOME</a></li>";
nav_menu += "<li";
nav_menu += body_id == "faq"?" id='nav_sel'":"";
nav_menu += "><a href='faq.html'>FAQ</a></li>";
nav_menu += "<li";
nav_menu += body_id == "policy"?" id='nav_sel'":"";
nav_menu += "><a href='policy.html'>POLICY</a></li>";
nav_menu += "<li";
nav_menu += body_id == "musings"?" id='nav_sel'":"";
nav_menu += "><a href='musings.html'>MUSINGS</a></li>";
nav_menu += "<li><a href='original_site/index.html' target='blank'>ORIGINAL</a></li>";
//nav_menu += "<li id='donate_button'><a href='#'></a></li>"
//<li><a href="original_site/index.html" target="blank">ORIGINAL</a></li>
//<li id="donate_button"><a href="#"></a></li>

nav_menu += "</ul>";

document.getElementById("main_nav").innerHTML = nav_menu;

nav_menu = "<ul>";
nav_menu += "<li><a href='index.html'>HOME</a></li>";
nav_menu += "<li><a href='faq.html'>FAQ</a></li>";
nav_menu += "<li><a href='policy.html'>POLICY</a></li>";
nav_menu += "<li><a href='contact.html'>MUSINGS</a></li>";
nav_menu += "<li><a href='original_site/index.html' target='blank'>ORIGINAL</a></li>";
nav_menu += "</ul>";

document.getElementById("lower_nav").innerHTML = nav_menu;




// NOTE : Footer
//document.getElementById("copyright").innerHTML = "&copy;2018 - " + new Date().getFullYear() + " www.theweeklystupid.com all rights reserved";
