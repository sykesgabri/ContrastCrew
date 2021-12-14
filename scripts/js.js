/*
This is the javascript code for Contrast Crew, I'd like to keep this quite short and minimal so that:


A. The website's loading times/browsing performance aren't drastically negatively effected.

B. The website does not rely on this code in order to be browsable, in case someone with NoScript or something similar would rather leave JS turned off.
(Side note on B, I know the top navigation bar code does push that rule a bit, but for now there isn't much of a better alternative as far as I can tell.)

C. It's easy to look at and understand what's going on.
*/


/* This code is for the scroll to top button */

window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop > 250){
        document.getElementById("topButt").style.display = "block";
    }else{
      document.getElementById("topButt").style.display = "none";
    }
}

function topButt(){
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* End of scroll to top code. */


/* This code makes sure the top navigation bar works as intended between mobile and desktop. */

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* End of top navigation bar code. */
