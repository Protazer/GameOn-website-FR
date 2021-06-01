import ReserveForm from '../entity/ReserveForm.js';


//Fonction non appelée
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
const form = document.getElementById('form');


const errors = {
      _firstName: "Veuillez entrer 2 caractères ou plus pour le champ du prénom.",
      _lastName: "Veuillez entrer 2 caractères ou plus pour le champ du nom.",
      _email: "Vous devez entrer une adresse email valide.",
      _birthdate: "Vous devez entrer votre date de naissance.",
      _quantity: "Vous devez entrer une valeur comprise entre 0 et 99.",
      _location: "Vous devez choisir une option.",
      _agree: "Vous devez vérifier que vous acceptez les termes et conditions.",
    }

/**
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


/** 
* Events list
*/

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// lauch close modal event
closeBtn.addEventListener('click', closeModal);

// submit form event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  var object = {};
  formData.forEach((value, key) => {
    object[key] = value;
  })
  let formObj = new ReserveForm(object, errors);
  formObj.validDatas();
})

