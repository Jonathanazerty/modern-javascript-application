import {iconImages} from './icons.js';
import {datesDays} from './dates.js';

let inputCity = document.querySelector(".inputCity");

/*const statusElements = [
    document.querySelector(".status1"),
    document.querySelector(".status2"),
    document.querySelector(".status3"),
    document.querySelector(".status4"),
    document.querySelector(".status5"),
]*/

let statusElements = [];
for(let i=1; i <= 5; i++) {
    statusElements.push(document.querySelector(".status"+ i));
}

let temperatureElements = [];
for(let i=1; i <= 5; i++) {
    temperatureElements.push(document.querySelector(".temperature"+ i));
}

let datesElements = [];
for(let i=1; i <= 5; i++) {
    datesElements.push(document.querySelector(".date"+ i));
}

let iconsElements = [];
for(let i=1; i <= 5; i++) {
    iconsElements.push(document.querySelector(".weatherIcon"+ i));
}

document.getElementById("submit").addEventListener("click", () => {


    // TODO async method
    async function weatherAllData(){

        // TODO get information from OpenWeather
        try{
            let data = await fetch("https://api.openweathermap.org/data/2.5/forecast?q="+ inputCity.value +"&appid=68d5f1c6c15d8ca90e89bd90e1f55dc6");
            let weatherData = await data.json();
            console.log(weatherData);
                
            // loop over data
            let average = 0;
            for ( let i = 0; i < weatherData["list"].length; i++) {
                average += weatherData["list"][i]["main"]["temp"];
            }
            
            // average temperature to degrees celcius
            average = average / weatherData["list"].length;
            let degrees = Math.round(average-273);

            // TODAY
            let cityValue = weatherData["city"]["name"];
            let statusValue = weatherData["list"][0]["weather"][0]["description"];


            status.innerHTML = statusValue;
            place.innerHTML = cityValue + " 📍";
            temperature.innerHTML = degrees + "°C 🌡️";

            function calculateTemperature(elementIndex, index) {
                let statusValue2 = weatherData["list"][index]["weather"][0]["description"];
                let tempValue2 = weatherData["list"][index]["main"]["temp"];

                let degrees2 = Math.round(tempValue2-273);

                statusElements[elementIndex].innerHTML = statusValue2;
                temperature2.innerHTML = degrees2 + "°C 🌡️";//@todo also put in an array
            }
            calculateTemperature(2, 5);
            calculateTemperature(3, 13);
            calculateTemperature(4, 21);
            calculateTemperature(5, 29);

            iconImages(weatherData);
            datesDays();
        }
            

        
        catch(error){
            alert("Wrong name... please write the correct city name");
            console.log(error);
            }
         

    }

    weatherAllData();
});


