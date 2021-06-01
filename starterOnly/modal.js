function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.getElementById('close-btn');
const form = document.getElementsByTagName('form');


/*
* Function list
*/ 

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal function
function closeModal() {
  modalbg.style.display = "none";
}

/* 
* Events list
*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lauch close modal event
closeBtn.addEventListener('click', closeModal);


