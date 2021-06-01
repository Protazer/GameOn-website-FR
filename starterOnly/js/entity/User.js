export default class User {
   
  /**
   * Class User - Cette classe permet d'instancier un objet User
   * @class User
   * @param {string} firstName - La valeur de l'attribut prènom
   * @param {string} lastName - La valeur de l'attribut nom
   * @param {string} email - La valeur de l'attribut email
   * @param {string} birthdate - La valeur de l'attribut birthdate
   * @param {string} quantity - La valeur de l'attribut quantity
   * @param {string} city - La valeur de l'attribut ville
   * @param {boolean} agree - La valeur de l'attribut acceptation des conditions
   * @param {boolean} news - La valeur de l'attribut newsletter
   */
   constructor(firstName, lastName, email, birthdate, quantity, location, agree, news) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._birthdate = birthdate;
    this._quantity = quantity;
    this._location = location;
    this._agree = agree;
    this._news = news;
  }



  /**
   * Accès à la valeur de l'attribut firstname
   * @method
   * @memberof User
   * @return {string} La valeur de l'attribut firstname
   */
  get firstName() {
    return this._firstName;
  }

  /**
   * Accès à la valeur de l'attribut lastname
   * @method
   * @memberof User
   * @return {string} La valeur de l'attribut lastname
   */
  get lastName() {
    return this._lastName;
  }

  /**
   * Accès à la valeur de l'attribut email
   * @method
   * @memberof User
   * @return {string} La valeur de l'attribut email
   */
  get email() {
    return this._email;
  }

  /**
   * Accès à la valeur de l'attribut birthdate
   * @method
   * @memberof User
   * @return {string} La valeur de l'attribut birthdate
   */
  get birthdate() {
    return this._birthdate;
  }

  /**
   * Accès à la valeur de l'attribut quantity
   * @method
   * @memberof User
   * @return {string} La valeur de l'attribut quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Accès à la valeur de l'attribut city
   * @method
   * @memberof User
   * @return {string} La valeur de l'attribut city
   */
  get city() {
    return this._city;
  }

  /**
   * Accès à la valeur de l'attribut agree
   * @method
   * @memberof User
   * @return {boolean} La valeur de l'attribut agree
   */
  get agree() {
    return this._agree;
  }

  /**
   * Accès à la valeur de l'attribut news
   * @method
   * @memberof User
   * @return {boolean} La valeur de l'attribut news
   */
  get news() {
    return this._news;
  }
  
  /**
   * Modification de la valeur de l'attribut firstname
   * @method
   * @memberof User
   * @param {string} newFirstname - La valeur du paramètre newFirstname
   */
  set firstName(newFirstname) {
    this._firstname = newFirstname;
  }

  /**
   * Modification de la valeur de l'attribut lastname
   * @method
   * @memberof User
   * @param {string} newLastname - La valeur du paramètre newLastname
   */
  set lastName(newLastname) {
    this._lastname = newLastname;
  }

  /**
   * Modification de la valeur de l'attribut email
   * @method
   * @memberof User
   * @param {string} newEmail - La valeur du paramètre newEmail
   */
  set email(newEmail) {
    this._email = newEmail;
  }

  /**
   * Modification de la valeur de l'attribut birthdate
   * @method
   * @memberof User
   * @param {string} newBirthdate - La valeur du paramètre newBirthdate
   */
  set birthdate(newBirthdate) {
    this._birthdate = newBirthdate;
  }

  /**
   * Modification de la valeur de l'attribut quantity
   * @method
   * @memberof User
   * @param {string} newQuantity - La valeur du paramètre newQuantity
   */
  set quantity(newQuantity) {
    this._quantity = newQuantity;
  }

  /**
   * Modification de la valeur de l'attribut city
   * @method
   * @memberof User
   * @param {string} newCity - La valeur du paramètre newCity
   */
  set city(newCity) {
    this._city = newCity;
  }

  /**
   * Modification de la valeur de l'attribut agree
   * @method
   * @memberof User
   * @param {boolean} value - La valeur du paramètre value
   */
  set agree(value) {
    this._agree = value;
  }

  /**
   * Modification de la valeur de l'attribut news
   * @method
   * @memberof User
   * @param {boolean} value - La valeur du paramètre value
   */
  set news(value) {
    this._news = value;
  }
 }

