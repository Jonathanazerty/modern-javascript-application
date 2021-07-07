export function iconImages() {
    let icon = weatherData["list"][0]["weather"][0]["icon"];
    let img = document.querySelector(".weatherIcon");
    img.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);

    let icon2 = weatherData["list"][5]["weather"][0]["icon"];
    let img2 = document.querySelector(".weatherIcon2");
    img2.setAttribute('src', `http://openweathermap.org/img/wn/${icon2}@2x.png`);

    let icon3 = weatherData["list"][13]["weather"][0]["icon"]; 
    let img3 = document.querySelector(".weatherIcon3");
    img3.setAttribute('src', `http://openweathermap.org/img/wn/${icon3}@2x.png`);

    let icon4 = weatherData["list"][21]["weather"][0]["icon"];
    let img4 = document.querySelector(".weatherIcon4");
    img4.setAttribute('src', `http://openweathermap.org/img/wn/${icon4}@2x.png`);

    let icon5 = weatherData["list"][29]["weather"][0]["icon"];
    let img5 = document.querySelector(".weatherIcon5");
    img5.setAttribute('src', `http://openweathermap.org/img/wn/${icon5}@2x.png`);
};