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
    cases.innerHTML = `${curCases.slice(0, curCases.length-3)},${curRes !== 0 ? curRes : '000'}`;
    deaths.innerHTML = `${curDeaths.slice(0, curDeaths.length-3)},${deaRes !== 0 ? deaRes : '000'}`;
    recovers.innerHTML = `${curRecovered.slice(0, curRecovered.length-3)},${recRes !== 0 ? recRes : '000'}`;
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
        newDiv.style = 'font-size: 20px; border: 5px solid black; margin: 3px; text-align: center; border-radius: 10px; background-color: lightgray;'
        let htmlMarkup = `<h3>${countries[i].country}</h3>
                         <p>Total Cases: ${countries[i].cases}</p><p>Today Cases: ${countries[i].todayCases}</p><p>Today Deaths: ${countries[i].todayDeaths}</p>`
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

async function timeLine() {
    let countries = await axios.get(`https://corona.lmao.ninja/v2/historical`)
                        .then(response => {
                            return response.data
                        })
                        .catch(err => {
                            console.error(err);
                        });
    
    console.log(countries)
    let width = 960,
        height = 500;

    let continentColor = d3.scale.category20c();
    let projection = d3.geo.kavrayskiy7();
    graticule = d3.geo.graticule();

    let path = d3.geo.path()
            .projection(projection);

    let delay = d3.time.scale()
                    .domain([new Date(2020-01-22), new Date()])
                    .range([0, 1000]);

    let svg = d3.select("#chart-area")
            .append("svg")
                .attr("width", width)
                .attr("height", height);

    svg.append("path")
    .datum(graticule)
    .attr("class", "graticule")
    .attr("d", path);

    svg.append("path")
    .datum(graticule.outline)
    .attr("class", "graticule outline")
    .attr("d", path);

    d3.json("https://unpkg.com/world-atlas@1/world/110m.json", (error, world) =>{
        console.log(world)
    if (error) throw error;
    svg.selectAll("path")
        .data(topojson.feature(world,world.objects.countries).features)
        .enter().append("path")
        .attr('class', 'country')
        .attr("d", path)
    });

    
    // countries.forEach(country => {
    //     console.log('--',country)
    //     // let infected = country.timeline.cases;
    //     // for(let date in infected) {
    //     //     console.log(date, )
    //         // svg.selectAll('path')
    //         //     .attr('fill', (d,i) => console.log(d))
    //         // d3.time.out(() => {
    //         //     g.attr('fill-opacity', 1)
    //         //     .transition()
    //         //         .attr('fill-opacity', 0)
    //         // }, delay(date))
    //         // let patients = infected[date];
    //     //}
    // })
}

getAll()
getCountries();
// getFilterCountry('China');
timeLine();

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









                    