
setInterval(function() {

//Los Angeles
let losAngelesElement = document.querySelector("#losAngeles");
if(losAngelesElement){
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    
    let losAngelesTime = moment().tz("America/Los_Angeles");
    losAngelesDateElement.innerHTML = moment().format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
}


//Paris
let parisElement = document.querySelector("#paris");
if(parisElement){
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");

let parisTime = moment().tz("Europe/Paris");
parisDateElement.innerHTML = moment().format("MMMM Do YYYY");
parisTimeElement.innerHTML = parisTime.format(
  "HH:mm:ss [<small>]A[</small>]"
);
}
}, 1000);

function updateCity(e){
    
    let cityTimeZone = e.target.value;
    if(cityTimeZone === "current"){
        cityTimeZone= moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone)
    let citiesElement = document.querySelector("#cities")
    citiesElement.innerHTML = `
     <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("HH:mm:ss")}<small>${cityTime.format("A")}</small></div>
      </div>
      <a class="goBack" href="/">✨Back to home✨</a>
    `
}
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);