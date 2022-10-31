// Nav bar burger menu

const sidenav = document.getElementById("mySidenav");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

/* Mettre la taille a 250px */
function openNav() {
  sidenav.classList.add("active");
}

/* mettre la taille a 0px */
function closeNav() {
  sidenav.classList.remove("active");
}

// Fin nav bar burger menu 

// Début page "nous contacter"

function displayPartForm() {
  console.log('called')
  document.getElementById('formulaire_entr').style.display = 'none';
  document.getElementById('formulaire_synd').style.display = 'none';
  document.getElementById('formulaire_part').style.display = 'inherit';
}

function displayEntrForm() {
  console.log('called')
  document.getElementById('formulaire_entr').style.display = 'inherit';
  document.getElementById('formulaire_synd').style.display = 'none';
  document.getElementById('formulaire_part').style.display = 'none';
}

function displaySyndForm() {
  console.log('called')
  document.getElementById('formulaire_entr').style.display = 'none';
  document.getElementById('formulaire_synd').style.display = 'inherit';
  document.getElementById('formulaire_part').style.display = 'none';
}


// Formulaire particulier - Début message erreur

const formPart = document.getElementById('formulaire_error_part');
const nomPart = document.getElementById('nom_part');
const prenomPart = document.getElementById('prenom_part');
const telPart = document.getElementById('tel_part');
const emailPart = document.getElementById('mail_part');
const adressePart = document.getElementById('adresse_part');
const villePart = document.getElementById('ville_part');
const codePostalPart = document.getElementById('cp_part');
const descriptionPart = document.getElementById('projet_part');
const formulaireContactPart = document.getElementsByClassName('formulaire_contact_part')

const msgErrorPart = document.querySelectorAll('.error');


formPart.addEventListener('submit', function (e) {
  e.preventDefault();

  msgErrorPart.forEach(error => {
    error.classList.add('invisible')
  });

  const nomPartValue = nomPart.value;
  const prenomPartValue = prenomPart.value;
  const telPartValue = telPart.value;
  const emailPartValue = emailPart.value;
  const adressePartValue = adressePart.value;
  const villePartValue = villePart.value;
  const codePostalPartValue = codePostalPart.value;
  const descriptionPartValue = descriptionPart.value;


  if (nomPartValue.length < 1) {
    nomPart.nextElementSibling.classList.remove('invisible')
  }

  if (prenomPartValue.length < 1) {
    prenomPart.nextElementSibling.classList.remove('invisible')
  }

  if (telPartValue.length < 1 || isNaN(Number(telPartValue))) {
    telPart.nextElementSibling.classList.remove('invisible')
  }

  if (emailPartValue.length < 1) {
    emailPart.nextElementSibling.classList.remove('invisible')
  }

  if (adressePartValue.length < 1) {
    adressePart.nextElementSibling.classList.remove('invisible')
  }

  if (villePartValue.length < 1) {
    villePart.nextElementSibling.classList.remove('invisible')
  }

  if (codePostalPartValue.length < 1 || isNaN(Number(codePostalPartValue))) {
    codePostalPart.nextElementSibling.classList.remove('invisible')
  }

  if (descriptionPartValue.length < 1) {
    descriptionPart.nextElementSibling.classList.remove('invisible')
  }

  if (nomPartValue.length > 1 && prenomPartValue.length > 1 && (telPartValue.length > 1 && !isNaN(Number(telPartValue))) && emailPartValue.length > 1 && adressePartValue.length > 1 && villePartValue.length > 1 && (codePostalPartValue.length > 1 && !isNaN(Number(codePostalPartValue))) && descriptionPartValue.length > 1) {
    window.alert("Votre formulaire a bien été envoyé")
    formPart.reset()
  }
});

// Formulaire particulier - Fin message erreur


// Formulaire entreprise - - Début message erreur


const formEntr = document.getElementById('formulaire_error_entr');
const nomEntr = document.getElementById('nom_resp_entr');
const prenomEntr = document.getElementById('prenom_resp_entr');
const telEntr = document.getElementById('tel_entr');
const emailEntr = document.getElementById('mail_entr');
const adresseEntr = document.getElementById('adresse_entr');
const villeEntr = document.getElementById('ville_entr');
const codePostalEntr = document.getElementById('cp_entr');
const raisonEntr = document.getElementById('rs_entr');
const descriptionEntr = document.getElementById('projet_entr');
const formulaireContactEntr = document.getElementsByClassName('formulaire_contact_entr')

const msgErrorEntr = document.querySelectorAll('.error');


formEntr.addEventListener('submit', function (e) {
  e.preventDefault();

  msgErrorEntr.forEach(error => {
    error.classList.add('invisible')
  });

  const nomEntrValue = nomEntr.value;
  const prenomEntrValue = prenomEntr.value;
  const telEntrValue = telEntr.value;
  const emailEntrValue = emailEntr.value;
  const adresseEntrValue = adresseEntr.value;
  const villeEntrValue = villeEntr.value;
  const codePostalEntrValue = codePostalEntr.value;
  const raisonEntrValue = raisonEntr.value;
  const descriptionEntrValue = descriptionEntr.value;


  if (nomEntrValue.length < 1) {
    nomEntr.nextElementSibling.classList.remove('invisible')
  }

  if (prenomEntrValue.length < 1) {
    prenomEntr.nextElementSibling.classList.remove('invisible')
  }

  if (telEntrValue.length < 1 || isNaN(Number(telEntrValue))) {
    telEntr.nextElementSibling.classList.remove('invisible')
  }

  if (emailEntrValue.length < 1) {
    emailEntr.nextElementSibling.classList.remove('invisible')
  }

  if (adresseEntrValue.length < 1) {
    adresseEntr.nextElementSibling.classList.remove('invisible')
  }

  if (villeEntrValue.length < 1) {
    villeEntr.nextElementSibling.classList.remove('invisible')
  }

  if (codePostalEntrValue.length < 1 || isNaN(Number(codePostalEntrValue))) {
    codePostalEntr.nextElementSibling.classList.remove('invisible')
  }

  if (raisonEntrValue.length < 1) {
    raisonEntr.nextElementSibling.classList.remove('invisible')
  }

  if (descriptionEntrValue.length < 1) {
    descriptionEntr.nextElementSibling.classList.remove('invisible')
  }

  if (nomEntrValue.length > 1 && prenomEntrValue.length > 1 && (telEntrValue.length > 1 && !isNaN(Number(telEntrValue))) && emailEntrValue.length > 1 && adresseEntrValue.length > 1 && villeEntrValue.length > 1 && (codePostalEntrValue.length > 1 && !isNaN(Number(codePostalEntrValue))) && raisonEntrValue.length > 1 && descriptionEntrValue.length > 1) {
    window.alert("Votre formulaire a bien été envoyé")
    formEntr.reset()
  }
});

// Formulaire entreprise - - Début message erreur



// Formulaire Syndicat - - Début message erreur

const formSynd = document.getElementById('formulaire_error_synd');
const nomSynd = document.getElementById('nom_resp_synd');
const prenomSynd = document.getElementById('prenom_resp_synd');
const telSynd = document.getElementById('tel_synd');
const emailSynd = document.getElementById('mail_synd');
const adresseSynd = document.getElementById('adresse_synd');
const villeSynd = document.getElementById('ville_synd');
const codePostalSynd = document.getElementById('cp_synd');
const raisonSynd = document.getElementById('raison_sociale_synd');
const descriptionSynd = document.getElementById('projet_synd');
const formulaireContactSynd = document.getElementsByClassName('formulaire_contact_synd')

const msgErrorSynd = document.querySelectorAll('.error');


formSynd.addEventListener('submit', function (e) {
  e.preventDefault();

  msgErrorSynd.forEach(error => {
    error.classList.add('invisible')
  });

  const nomSyndValue = nomSynd.value;
  const prenomSyndValue = prenomSynd.value;
  const telSyndValue = telSynd.value;
  const emailSyndValue = emailSynd.value;
  const adresseSyndValue = adresseSynd.value;
  const villeSyndValue = villeSynd.value;
  const codePostalSyndValue = codePostalSynd.value;
  const raisonSyndValue = raisonSynd.value;
  const descriptionSyndValue = descriptionSynd.value;


  if (nomSyndValue.length < 1) {
    nomSynd.nextElementSibling.classList.remove('invisible')
  }

  if (prenomSyndValue.length < 1) {
    prenomSynd.nextElementSibling.classList.remove('invisible')
  }

  if (telSyndValue.length < 1 || isNaN(Number(telSyndValue))) {
    telSynd.nextElementSibling.classList.remove('invisible')
  }

  if (emailSyndValue.length < 1) {
    emailSynd.nextElementSibling.classList.remove('invisible')
  }

  if (adresseSyndValue.length < 1) {
    adresseSynd.nextElementSibling.classList.remove('invisible')
  }

  if (villeSyndValue.length < 1) {
    villeSynd.nextElementSibling.classList.remove('invisible')
  }

  if (codePostalSyndValue.length < 1 || isNaN(Number(codePostalSyndValue))) {
    codePostalSynd.nextElementSibling.classList.remove('invisible')
  }

  if (raisonSyndValue.length < 1) {
    raisonSynd.nextElementSibling.classList.remove('invisible')
  }

  if (descriptionSyndValue.length < 1) {
    descriptionSynd.nextElementSibling.classList.remove('invisible')
  }

  if (nomSyndValue.length > 1 && prenomSyndValue.length > 1 && (telSyndValue.length > 1 && !isNaN(Number(telSyndValue))) && emailSyndValue.length > 1 && adresseSyndValue.length > 1 && villeSyndValue.length > 1 && (codePostalSyndValue.length > 1 && !isNaN(Number(codePostalSyndValue))) && raisonSyndValue.length > 1 && descriptionSyndValue.length > 1) {
    window.alert("Votre formulaire a bien été envoyé")
    formSynd.reset()
  }
});

// Formulaire Syndicat - - Fin message erreur




// Fin page "nous contacter"