class ReserveForm {
  /**
   * Class ReserveForm - cette classe permet d'instancier un objet ReserveForm
   * @class ReserveForm
   * @param {Object} user - la valeur de l'attribut user
   * @param {Object} errorsMessages - la valeur de l'attribut messages d'erreur
   */
  constructor(user, errorsMessages) {
    this._user = user;
    this._errorsMessages = errorsMessages;
    this.inputsValid = true;
    this.checkboxesValid = true;
  }


  /**
   * Methods
   */


  /**
   * Envoie une alerte de validation sur le champ passé en paramètre 
   * @method
   * @param {string} - La valeur du champ de formulaire
   * @memberof ReserveForm
   */
  showAlert(el) {
    let inputs = document.getElementsByTagName('input');
    for (let e of inputs) {
      if (el == e.name) {
        e.parentElement.setAttribute('data-error-visible', 'true');
        e.parentElement.setAttribute('data-error', this.errorsMessages[e.name]);
      }
    }
  }

  /**
   * Supprime une alerte de validation sur le champ passé en paramètre 
   * @method
   * @param {string} - La valeur du champ de formulaire
   * @memberof ReserveForm
   */
  removeAlert(el) {
    let inputs = document.getElementsByTagName('input');
    for (let e of inputs) {
      if (el == e.name) {
        e.parentElement.removeAttribute('data-error-visible');
        e.parentElement.removeAttribute('data-error');
      }
    }
  }


  /**
   * Lance la validation de formulaire 
   * @method
   * @memberof ReserveForm
   * @return {boolean} true - Si les valeurs de validation sont true
   */
  validDatas() {
    this.inputsValidation();
    this.checkboxesValidation();
    if (this.inputsValid && this.checkboxesValid) {
      return true;
    }
  }


  /**
   * Validation des champs de formulaire type texte
   * @method
   * @memberof ReserveForm
   */
  inputsValidation() {
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    this.inputsValid = true;
    for (let property in this.user) {
      this.removeAlert(property);
      if ((property == "_firstName" || property == '_lastName') && this.user[property].length < 2) {
        this.showAlert(property);
        this.inputsValid = false;
      } else if (property == "_email" && !regex.test(this.user[property])) {
        this.showAlert(property);
        this.inputsValid = false;
      } else if (property == "_quantity" && this.user[property].length < 1) {
        this.showAlert(property);
        this.inputsValid = false;
      } else if (property == "_birthdate" && this.user[property].length == "") {
        this.showAlert(property);
        this.inputsValid = false;
      }
    }
  }
  

  /**
   * Validation des champs de formulaire type checkboxes
   * @method
   * @memberof ReserveForm
   */
  checkboxesValidation() {
    if (this.user["_location"] == undefined) {
      this.showAlert("_location");
      this.checkboxesValid = false;
    }
    if (this.user["_agree"] == undefined) {
        this.showAlert("_agree");
        this.checkboxesValid = false;
      }
  }



  /**
   * Accès à la valeur de l'attribut user
   * @method
   * @memberof ReserveForm
   * @return {object} La valeur de l'attribut user
   */
  get user() {
    return this._user;
  }

  /**
   * Accès à la valeur de l'attribut errorsMessages
   * @method
   * @memberof ReserveForm
   * @return {object} La valeur de l'attribut errorsMessages
   */
  get errorsMessages() {
    return this._errorsMessages;
  }

  /**
   * Modification de la valeur de l'attribut newUser
   * @method
   * @memberof ReserveForm
   * @param {object} newUser - La valeur du paramètre newUser
   */
  set user(newUser) {
    this._user = newUser;
  }

  /**
   * Modification de la valeur de l'attribut newMessages
   * @method
   * @memberof ReserveForm
   * @param {object} newMessages - La valeur du paramètre newMessages
   */
  set errorsMessages(newMessages) {
    this._errorsMessages = newMessages;
  }
}