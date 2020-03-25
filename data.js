async function getAll() {
    let all = await axios.get('https://corona.lmao.ninja/all')
                        .then(response => {
                            return response.data
                        })
                        .catch(err => {
                            console.error(err);
                        })
    let updateTime = all.updated;
    let curCases = String(all.cases);
    let curDeaths = String(all.deaths);
    let curRecovered = String(all.recovered);
    
    //updateClock
    const updateClock = document.querySelector('.updateClock');
    const updateDate = document.querySelector('.updateDate');
    const cases = document.querySelector('.case');
    const deaths = document.querySelector('.death');
    const recovers = document.querySelector('.recover');

    let date = new Date(updateTime);
    let day = date.getDate()
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    let hr = date.getHours();
    let min = date.getMinutes() % 60;
    let time = hr >= 12 ? 'pm':'am';
    min < 10 ? min = `0${min}` : min;
    hr > 12 ? hr -= 12 : hr;

    updateDate.innerHTML = `${month}/${day}/${year}`
    updateClock.innerHTML = `${hr}:${min}${time}`

    //reformat numbers
    let curRes = curCases%1000;
    let deaRes = curDeaths%1000;
    let recRes = curRecovered%1000;
    cases.innerHTML = `${curCases.slice(0, curCases.length-3)},${curRes !== 0 ? curRes : 000}`;
    deaths.innerHTML = `${curDeaths.slice(0, curDeaths.length-3)},${deaRes !== 0 ? deaRes : 000}`;
    recovers.innerHTML = `${curRecovered.slice(0, curRecovered.length-3)},${recRes !== 0 ? recRes : 000}`;
}

async function getCountries() {
    let countries = await axios.get('https://corona.lmao.ninja/countries')
                        .then(response => {
                            return response.data
                        })
                        .catch(err => {
                            console.error(err);
                        })
    console.log(countries)
    const legend = document.querySelector('.legend');
    for(let i=0; i < countries.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.style = 'font-size: 20px; border: 3px solid black; margin: 3px;'
        let htmlMarkup = `<h3>${countries[i].country}</h3>
                         <p>Total Cases: ${countries[i].cases}.  Today Cases: ${countries[i].todayCases}. Today Deaths: ${countries[i].todayDeaths}</p>`
        newDiv.innerHTML = htmlMarkup;
        legend.append(newDiv)
    }
}

async function getFilterCountry(country) {
    let oneCountry = await axios.get(`https://corona.lmao.ninja/countries/${country}`)
                        .then(response => {
                            return response.data
                        })
                        .catch(err => {
                            console.error(err);
                        })
    console.log(oneCountry)
}

getAll()
getCountries();
// getFilterCountry('China');

//Time
const currentClock = document.querySelector('.currentClock');
const currentDate = document.querySelector('.currentDate');

let date = new Date();
let day = date.getDate()
let month = date.getMonth()+1;
let year = date.getFullYear();
let hr = date.getHours();
let min = date.getMinutes() % 60;
let time = hr >= 12 ? 'pm':'am';
hr > 12 ? hr -= 12 : hr;
min < 10 ? min = `0${min}` : min;

currentDate.innerHTML = `${month}/${day}/${year}`
currentClock.innerHTML = `${hr}:${min}${time}`







                    