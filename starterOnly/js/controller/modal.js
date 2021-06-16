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
const closeBtn = document.querySelectorAll('.close-btn');
const form = document.getElementById('form');
const confirmation = document.querySelector('.confirmation');

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
 * Ouvre la modale.
 * @fires modal-btn#click
 */
function launchModal() {
  modalbg.style.display = "flex";
  if (form.classList.contains('form--hidden')) {
    form.classList.remove('form--hidden');
  }
  
}

/**
 * Ferme la modale.
 * @fires close-btn#click
 */
function closeModal() {
  modalbg.style.display = "none";
  if (confirmation.classList.contains('confirmation--visible')) {
    confirmation.classList.remove('confirmation--visible');
  }
}

/**
 * Envoie le message de confirmation aprés somission du formulaire.
 * @fires form#submit
 */
function sendConfirmation() {
  form.classList.add('form--hidden');
  confirmation.classList.add('confirmation--visible');
}

/**
 * Evenement d'ouverture de la modale.
 * @event click 
 * @listens modal-btn#click
 * @param {HTMLElement} - Le bouton ciblé pour ouvrir la modale
 */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

/**
 * Evenement de fermeture de la modale.
 * @event click 
 * @listens close-btn#click
 * @param {HTMLElement} - Le bouton ciblé pour fermer la modale
 */
closeBtn.forEach( btn => btn.addEventListener('click', closeModal));

/**
 * Evenement de soumission du formulaire
 * @event submit
 * @listens form#submit
 * @param {event} - L'évenement de soumission de formulaire
 */
form.addEventListener('submit', (e) => {
  e.preventDefault();

  //Assigniation des champs de saisi dans l'object
  let object = {};
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    object[key] = value.trim();
  })
  
  // Création et validation du formulaire
  let formObj = new Reserve(object, errors);
  formObj.validDatas();
  if (formObj.validDatas()) {
    form.reset();
    sendConfirmation();
  }
})