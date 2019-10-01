import * as axios from "axios";



const API_KEY = "95e615b236fb38df5f65cf0451c622da";

const instance=axios.create({

    baseURL: `https://api.openweathermap.org/data/2.5/`,

})


export const getWeatherWorld=(city="Minsk")=> {
    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
};


export const getWeatherBrest=(city="Brest")=> {
    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
};
export const getWeatherGrodno=(city="гродно")=> {
    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
};

export const getWeatherVitebsk=(city="Vitebsk")=> {

    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
};
export const getWeatherMahilyow=(city="Mahilyow")=> {

    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
};
export const getWeatherHomel=(city="Homel")=> {

    return instance.get(`weather?q=${city}&appid=${API_KEY}&units=metrics`)
};