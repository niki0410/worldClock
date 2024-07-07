
setInterval(function() {

//Los Angeles
let losAngelesElement = document.querySelector("#losAngeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");

let losAngelesTime = moment().tz("America/Los_Angeles");
losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "HH:mm:ss [<small>]A[</small>]"
);

//Paris
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");

let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format(
  "HH:mm:ss [<small>]A[</small>]"
);

}, 1000);