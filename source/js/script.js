// Открытие\закрытие меню
let openButton = document.querySelector(".main-nav__open-button");
let closeButton = document.querySelector(".main-nav__close-button");
let navigationBox = document.querySelector(".main-nav__container");

openButton.addEventListener("click", function(){
  navigationBox.classList.add("main-nav__container--visible")
  openButton.classList.add("main-nav__open-button--hidden")
})

closeButton.addEventListener("click", function(){
  navigationBox.classList.remove("main-nav__container--visible")
  openButton.classList.remove("main-nav__open-button--hidden")
})


// Валидация формы

let form = document.querySelector(".form");
let submitButton = form.querySelector(".form__send-button");
let firstName = form.querySelector(".form__input-text--first-name");
let lastName = form.querySelector(".form__input-text--last-name");
let phone = form.querySelector(".form__input-text--phone");
let email = form.querySelector(".form__input-text--email");
let popupFail = document.getElementById("popup-fail");
let popupSuccess = document.getElementById("popup-success")
let formFields = [firstName, lastName, phone, email];
let firstNamePattern = /[a-zA-Zа-яА-ЯёЁ']+/;
let lastNamePattern = /[a-zA-Zа-яА-ЯёЁ']+/;
let emailPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
let phonePattern = /\+7\(\d{3}\)\d{3}-\d{2}-\d{2}/;
let patterns = [firstNamePattern, lastNamePattern, emailPattern, phonePattern];
let popupCloseFail = document.querySelector(".button--failure");
let popupCloseSuccess = document.querySelector(".button--success")

form.addEventListener("submit", function(evt){
  for (let i = 0; i < formFields.length; i++) {
    if (!patterns[i].test(formFields[i].value)) {
      formFields[i].classList.add("form__input-text--error");
    }
  }
  for (let i = 0; i < formFields.length; i++) {
    if (!patterns[i].test(formFields[i].value)) {
      popupFail.classList.add("popup--visible");
      evt.preventDefault();
      break
    }
    popupSuccess.classList.add("popup--visible");
  }
})

popupCloseFail.addEventListener("click", function(){
  popupFail.classList.remove("popup--visible");
})

popupCloseSuccess.addEventListener("click", function(){
  popupSuccess.classList.remove("popup--visible");
})

// Карта
let map;
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.85945570812788, lng: -111.75380864017983 },
    zoom: 7,
  });

var marker = new google.maps.Marker({position: {lat: 34.85945570812788, lng: -111.75380864017983},
  map: map,
  icon: "img/index/map-marker.svg"});
  google.maps.Map.prototype.markers = new Array();
};
