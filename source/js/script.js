let openButton = document.querySelector(".main-nav__open-button");
let closeButton = document.querySelector(".main-nav__close-button");
let navigationBox = document.querySelector(".main-nav__container");
// Кнопка открытия меню
navigationBox.classList.add("main-nav__container--hidden");
openButton.addEventListener("click", function(){
  navigationBox.style.display = "block";
  setTimeout(function(){
    navigationBox.classList.toggle("main-nav__container--visible");
  }, 100)

})

closeButton.addEventListener("click", function(){
  navigationBox.classList.remove("main-nav__container--visible");
})


navigationBox.addEventListener("transitionend", function(){
  navigationBox.style.display = (navigationBox.style.display == "none") ? "none" : "block";
})

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
