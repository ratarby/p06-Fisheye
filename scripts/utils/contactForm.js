

// DOM elements
const displayModal = document.getElementById("displayModal");
const closeModal = document.getElementById("closeModal");

// verification des champs du formulaire avec les regex
const nameRegex = /^\S[a-za-zàáâäçèéêëìíîïñòóôöùúûüA-Z-\s]{2,}$/;
const emailRegex = /^([a-z0-9]+(?:[._-][a-z0-9]+)*)@([a-z0-9]+(?:[.-][a-z0-9]+)*\.[a-z]{2,})$/;

// récupération des inputs
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const eMail = document.getElementById("email");
const message = document.getElementById("yourMessage");

// contenu des erreurs
const errorFirstValue = "Veuillez saisir votre prénom ";
const errorLastValue = "Veuillez saisir votre nom ";
const errorEmailValue = " Veuiilez saisir une adresse email valide";
const errorMsgValue = "Veuillez saisir votre message";

// span pour afficher l'erreur
const errorFirst = document.getElementById("errorFirst");
const errorLast = document.getElementById("errorLast");
const errorEmail = document.getElementById("errorEmail");
const errorMsg = document.getElementById("errorMessage");


const msgValidated = document.getElementById("formValid");



displayModal.addEventListener("click", () => {
  const main = document.getElementById("main");
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
  main.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "false");
  closeModal.focus();
  form.reset();
});

closeModal.addEventListener("click", () => {
  const main = document.getElementById("main");
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
  main.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-hidden", "true");
  displayModal.focus();
});

document.addEventListener("keyup", (e) => {
    if (e.key == "Escape") {
      const modal = document.getElementById("contact_modal");
      modal.style.display = "none";
      displayModal.focus();
      window.location.reload();
    }
  });





// validation du formulaire au clique sur le bouton submit
const btnSubmit = document.getElementById("btn-submit");
const form = document.getElementById("form");
btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    formValid();
  });


//validatation des inputs à la perte du focus
firstName.addEventListener("change", () => {

  if (!nameRegex.test(firstName.value)) {
    errorFirst.textContent = errorFirstValue;
  } else {
    errorFirst.style.display = "none";
  }
});

lastName.addEventListener("change", () => {
  if (!nameRegex.test(lastName.value)) {
    errorLast.textContent = errorLastValue;
  } else {
    errorLast.style.display = "none";
  }

});

eMail.addEventListener("change", () => {
  if (!emailRegex.test(eMail.value)) {
    errorEmail.textContent = errorEmailValue;
  } else {
    errorEmail.style.display = "none";
  }
});

message.addEventListener("change", () => {
  if (!message.value) {
    errorMsg.textContent = errorMsgValue;
  } else {
    errorMsg.style.display = "none";
  }
});

function formValid() {
  
  if (!nameRegex.test(firstName.value.trim())) {
    errorFirst.textContent = errorFirstValue;
    firstName.classList.add("border-red");
  } else {
    errorFirst.style.display = "none";
    firstName.classList.remove("border-red");
  }

  if (!nameRegex.test(lastName.value.trim())) {
    errorLast.textContent = errorLastValue;
    lastName.classList.add("border-red");

  } else {
    errorLast.style.display = "none";
    lastName.classList.remove("border-red");
  }

  if (!emailRegex.test(eMail.value.trim())) {
    errorEmail.textContent = errorEmailValue;
    eMail.classList.add("border-red");
  } else {
    errorEmail.style.display = "none";
    eMail.classList.remove("border-red");
  }
  if (!message.value.trim()) {
    errorMsg.textContent = errorMsgValue;
    message.classList.add("border-red");
  } else {
    errorMsg.style.display = "none";
    message.classList.remove("border-red");
  }
  if (firstName.value && lastName.value && eMail.value && message.value) {
    msgValidated.innerHTML = "Votre message a bien été reçu";
    msgValidated.style.color = "#fff";
    msgValidated.style.fontSize = "3em";
  }
}




