
// create custom fields and format the API responses 
export const weatherDataFields = (data1, data2) => {
    
    // create variable to custom current weather results
    const months = ['Jan.','Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.','Dec.'];
    const days = ['Sun,', 'Mon,', 'Tues', 'Wed,', 'Thurs,', 'Fri,', 'Sat,'];
    const currentDate = new Date();
    const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;


    // create variable to custom forecast  results
    const forecastStamp = data2.list;
    const nextDays = forecastStamp.filter(elem => (elem.dt_txt).includes("15:00:00"));
    const fourNextDays = nextDays.slice(Math.max(nextDays.length -5, 1))
    const day1= fourNextDays[0].dt_txt
    const day2= fourNextDays[1].dt_txt
    const day3= fourNextDays[2].dt_txt
    const day4= fourNextDays[3].dt_txt
    
    return(
       {
         city: data1.name,
         country: data1.sys.country,
         date,
         main: data1.weather[0].main,
         description: data1.weather[0].description,
         temperature: Math.round(data1.main.temp),
         temp_min: Math.round(data1.main.temp_min),
         temp_max: Math.round(data1.main.temp_max),
         humidity: data1.main.humidity,
         cloudiness: data1.clouds.all,
         wind: Math.round(data1.wind.speed * 3.6),
         sunrise: new Date(data1.sys.sunrise * 1000).toLocaleTimeString().slice(0, 4),
         sunset: new Date(data1.sys.sunset * 1000).toLocaleTimeString().slice(0, 4),
         forecastDay1: new Date(day1).toLocaleString("en-US", {weekday: "long"}),
         forecastDay2: new Date(day2).toLocaleString("en-US", {weekday: "long"}),
         forecastDay3: new Date(day3).toLocaleString("en-US", {weekday: "long"}),
         forecastDay4: new Date(day4).toLocaleString("en-US", {weekday: "long"}),
         maxTempDay1: Math.round(fourNextDays[0].main.temp_max),
         maxTempDay2: Math.round(fourNextDays[1].main.temp_max),
         maxTempDay3: Math.round(fourNextDays[2].main.temp_max),
         maxTempDay4: Math.round(fourNextDays[3].main.temp_max),
         mainDay1: fourNextDays[0].weather[0].main,
         mainDay2: fourNextDays[1].weather[0].main,
         mainDay3: fourNextDays[2].weather[0].main,
         mainDay4: fourNextDays[3].weather[0].main,
       }
    );
}