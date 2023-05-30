// div scrolling effect

let image = document.getElementById("image");
        window.addEventListener("scroll" ,() => {
            let value = window.scrollY;
            value -= 50;
            image.style.marginTop = -value + "px";
            
        });


// Go to Top 
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Side menu-bar setup 

sideMenuicon = document.getElementById('side_menu');
hideIcon = document.getElementById('hide');
menuDiv = document.getElementById('menu_div');

function show() {
  menuDiv.style.marginTop = 0 + "px";
  sideMenuicon.style.display = 'none';
  hideIcon.style.display = 'block';
}

function hide() {
  menuDiv.style.marginTop = -900 + "px";
  sideMenuicon.style.display = 'block';
  hideIcon.style.display = 'none';
}