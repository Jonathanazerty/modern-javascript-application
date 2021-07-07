import {iconImages} from './icons.js';
import {datesDays} from './dates.js';

let inputCity = document.querySelector(".inputCity");
let button = document.querySelector(".button");

// TODAY
let status = document.querySelector(".status");
let place = document.querySelector(".place");
let temperature = document.querySelector(".temperature");

// TOMORROW
let status2 = document.querySelector(".status2");
let temperature2 = document.querySelector(".temperature2");

// DAY 3
let status3 = document.querySelector(".status3");
let temperature3 = document.querySelector(".temperature3");

// DAY 4
let status4 = document.querySelector(".status4");
let temperature4 = document.querySelector(".temperature4");

// DAY 5
let status5 = document.querySelector(".status5");
let temperature5 = document.querySelector(".temperature5");


document.getElementById("submit").addEventListener("click", () => {


    // TODO async method
    async function weatherAllData(){

        // TODO get information from OpenWeather
        try{
            let data = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ inputCity.value +"&appid=68d5f1c6c15d8ca90e89bd90e1f55dc6");
            let weatherData = await data.json();
            console.log(weatherData);
                {
                
            // loop over data
            let average = 0;
        for ( let i = 0; i < weatherData["list"].length; i++) {
            let obj = weatherData["list"][i];
            average += weatherData["list"][i]["main"]["temp"];
            
            }
            
            // average temperature to degrees celcius
            average = average / weatherData["list"].length;
            let degrees = Math.round(average-273);

            // TODAY
            let cityValue = weatherData["city"]["name"];
            let tempValue = weatherData["list"][0]["main"]["temp"];
            let statusValue = weatherData["list"][0]["weather"][0]["description"];


            status.innerHTML = statusValue;
            place.innerHTML = cityValue + " 📍";
            temperature.innerHTML = degrees + "°C 🌡️";

            

            // TOMORROW

            //ICON - day 2            
            let statusValue2 = weatherData["list"][5]["weather"][0]["description"];
            let tempValue2 = weatherData["list"][5]["main"]["temp"];

            let degrees2 = Math.round(tempValue2-273);

            status2.innerHTML = statusValue2;
            temperature2.innerHTML = degrees2 + "°C 🌡️";




            // DAY 3
                            
            //ICON - day 3
            let statusValue3 = weatherData["list"][13]["weather"][0]["description"];
            let tempValue3 = weatherData["list"][13]["main"]["temp"];

            let degrees3 = Math.round(tempValue3-273);

            status3.innerHTML = statusValue3;
            temperature3.innerHTML = degrees3 + "°C 🌡️";




            // DAY 4
            
            //ICON - day 4
            let statusValue4 = weatherData["list"][21]["weather"][0]["description"];
            let tempValue4 = weatherData["list"][21]["main"]["temp"];

            let degrees4 = Math.round(tempValue4-273);


            status4.innerHTML = statusValue4;
            temperature4.innerHTML = degrees4 + "°C 🌡️";




            // DAY 5

            //ICON - day 5
            let statusValue5 = weatherData["list"][29]["weather"][0]["description"];
            let tempValue5 = weatherData["list"][29]["main"]["temp"];

            let degrees5 = Math.round(tempValue5-273);

            status5.innerHTML = statusValue5;
            temperature5.innerHTML = degrees5 + "°C 🌡️";

                }   
            }


        
        catch(error){
            alert("Wrong name... please write the correct city name");
            console.log(error);
            }

    }

    weatherAllData();
});


