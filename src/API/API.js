import * as axios from "axios";



const API_KEY = "95e615b236fb38df5f65cf0451c622da";

const instance=axios.create({

    baseURL: `https://api.openweathermap.org/data/2.5/`,

})




export const getWeatherWorld=(city="Minsk")=> {
    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
};


export const getWeatherCityBY= {
    getWeatherBrest(city="Brest")
    {
        return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
    },
    getWeatherGrodno(city="гродно")
    {
        return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
    },
    getWeatherVitebsk(city="Vitebsk")
    {
        return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
    },
    getWeatherMahilyow(city="Mahilyow")
    {
        return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
    },
    getWeatherHomel(city="Homel")
    {
        return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
    },
}
