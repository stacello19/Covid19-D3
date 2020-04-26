const originData = [
    {
      "100": "Bulgaria/42.733883,25.48583",
      "104": "Burma/21.913965,95.956223",
      "108": "Burundi/-3.373056,29.918886",
      "112": "Belarus/53.709807,27.953389",
      "116": "Cambodia/12.565679,104.990963",
      "120": "Cameroon/7.369722,12.354722",
      "124": "Canada/56.130366,-106.346771",
      "136": "Cayman Islands/19.513469,-80.566956",
      "140": "Central African Republic/6.611111,20.939444",
      "144": "Sri Lanka/7.873054,80.771797",
      "148": "Chad/15.454166,18.732207",
      "152": "Chile/-35.675147,-71.542969",
      "156": "China/35.86166,104.195397",      
      "158": "Taiwan/23.69781,120.960515",      
      "170": "Colombia/4.570868,-74.297333",      
      "174": "Comoros/-11.875001,43.872219",      
      "175": "Mayotte/-12.8275,45.166244",      
      "178": "Congo/-0.228021,15.827659",      
      "180": "Congo,Democratic Republic of the/-4.038333,21.758664",      
      "188": "Costa Rica/9.748917,-83.753428",      
      "191": "Croatia/45.1,15.2",      
      "192": "Cuba/21.521757,-77.781167",
      "196": "Cyprus/35.126413,33.429859",
      "204": "Benin/9.30769,2.315834",
      "208": "Denmark/56.26392,9.501785",
      "212": "Dominica/15.414999,-61.370976",
      "214": "Dominican Republic/18.735693,-70.162651",
      "218": "Ecuador/-1.831239,-78.183406",
      "222": "El Salvador/3.794185,-88.89653",
      "231": "Ethiopia/	9.145,40.489673",
      "232": "Eritrea/15.179384,39.782334",
      "233": "Estonia/58.595272,25.013607",
      "242": "Fiji/-16.578193,179.414413",
      "246": "Finland/61.92411,25.748151",
      "250": "France/46.227638,2.213749",
      "254": "French Guiana/3.933889,-53.125782",
      "258": "French Polynesia/-17.679742,-149.406843",
      "266": "Gabon/-0.803689,11.609444",
      "268": "Georgia/42.315407,43.356892",
      "276": "Germany/51.165691,10.451526",
      "288": "Ghana/7.946527,-1.023194",
      "292": "Gibraltar/36.137741,-5.345374",
      "296": "Kiribati/	-3.370417,-168.734039",
      "300": "Greece/39.074208,21.824312",
      "304": "Greenland/71.706936,-42.604303",
      "316": "Guam/13.444304,144.793731",
      "320": "Guatemala/15.783471,-90.230759",
      "324": "Guinea/9.945587,-9.696645",
      "328": "Guyana/4.860416,-58.93018",
      "332": "Haiti/18.971187,-72.285215",
      "340": "Honduras/15.199999,-86.241905",
      "344": "Hong Kong/22.396428,114.109497",
      "348": "Hungary/47.162494,19.503304",
      "352": "Iceland/64.963051,-19.020835",
      "356": "India/20.593684,78.96288",
      "360": "Indonesia/-0.789275,113.921327",
      "364": "Iran/32.427908,53.688046",
      "368": "Iraq/33.223191,43.679291",
      "372": "Ireland/53.41291,-8.24389",
      "376": "Israel/31.046051,34.851612",
      "380": "Italy/41.87194,12.56738",
      "388": "Jamaica/8.109581,-77.297508",
      "392": "Japan/36.204824,138.252924",
      "398": "Kazakhstan/48.019573,66.923684",
      "400": "Jordan/30.585164,36.238414",
      "404": "Kenya/-0.023559,37.906193",
      "408": "N. Korea/40.339852,127.510093",
      "410": "S. Korea/35.907757,127.766922",
      "414": "Kuwait/29.31166,47.481766",
      "418": "Lao People's Democratic Republic/19.85627,102.495496",
      "422": "Lebanon/33.854721,35.862285",
      "428": "Latvia/56.879635,24.603189",
      "430": "Liberia/6.428055,-9.429499",
      "434": "Libyan Arab Jamahiriya/26.3351,17.228331",
      "438": "Liechtenstein/47.166,9.555373",
      "440": "Lithuania/55.169438,23.881275",
      "442": "Luxembourg/49.815273,6.129583",
      "450": "Madagascar/-18.766947,46.869107",
      "454": "Malawi/-13.254308,34.301525",
      "458": "Malaysia/4.210484,101.975766",
      "462": "Maldives/3.202778,73.22068",
      "470": "Malta/35.937496,14.375416",
      "474": "Martinique/14.641528,-61.024174",
      "484": "Mexico/23.634501,-102.552784",
      "492": "Monaco/43.750298,7.412841",
      "496": "Mongolia/46.862496,103.846656",
      "498": "Moldova,Republic of/47.411631,28.369885",
      "504": "Morocco/31.791702,-7.09262",
      "512": "Oman/21.512583,55.923255",
      "516": "Namibia/-22.95764,18.49041",
      "524": "Nepal/28.394857,84.124008",
      "528": "Netherlands/52.132633,5.291266",
      "533": "Aruba/12.52111,-69.968338",
      "554": "New Zealand/-40.900557,174.885971",
      "558": "Nicaragua/12.865416,-85.207229",
      "562": "Niger/17.607789,8.081666",
      "566": "Nigeria/9.081999,8.675277",
      "578": "Norway/60.472024,8.468946",
      "585": "Palau/7.51498,134.58252",
      "586": "Pakistan/30.375321,69.345116",
      "591": "Panama/8.537981,-80.782127",
      "604": "Peru/-9.189967,-75.015152",
      "608": "Philippines/12.879721,121.774017",
      "616": "Poland/51.919438,19.145136",
      "620": "Portugal/39.399872,-8.224454",
      "630": "Puerto Rico/18.220833,-66.590149",
      "634": "Qatar/25.354826,51.183884",
      "642": "Romania/45.943161,24.96676",
      "643": "Russia/61.52401,105.318756",
      "646": "Rwanda/-1.940278,29.873888",
      "660": "Anguilla/8.220554,-63.068615",
      "682": "Saudi Arabia/23.885942,45.079162",
      "686": "Senegal/14.497401,-14.452362",
      "688": "Serbia/44.016521,21.005859",
      "702": "Singapore/1.352083,103.819836",
      "703": "Slovakia/48.669026,19.699024",
      "704": "Vietnam/14.058324,108.277199",
      "705": "Slovenia/46.151241,14.995463",
      "710": "South Africa/-30.559482,22.937506",
      "716": "Zimbabwe/-19.015438,29.154857",
      "724": "Spain/40.463667,-3.74922",
      "729": "Sudan/12.862807,30.217636",
      "732": "Western Sahara/24.215527,-12.885834",
      "756": "Switzerland/46.818188,8.227512",
      "764": "Thailand/15.870032,100.992541",
      "768": "Togo/8.619543,0.824782",
      "776": "Tonga/-21.178986,-175.198242",
      "784": "UAE/23.424076,53.847818",
      "792": "Turkey/38.963745,35.243322",
      "800": "Uganda/1.373333,32.290275",
      "804": "Ukraine/48.379433,31.16558",
      "818": "Egypt/26.820553,30.802498",
      "826": "UK/55.378051,-3.435973",
      "831": "Guernsey/49.465691,-2.585278",
      "832": "Jersey/49.214439,-2.13125",
      "834": "Tanzania, United Republic of/-6.369028,34.888822",
      "840": "USA/37.09024,-95.712891",
      "858": "Uruguay/-32.522779,-55.765835",
      "860": "Uzbekistan/41.377491,64.585262",
      "862": "Venezuela/6.42375,-66.58973",
      "882": "Samoa/-13.759029,-172.104629",
      "887": "Yemen/15.552727,48.516388",
      "894": "Zambia/-13.133897,27.849332",
      "004": "Afghanistan/33.93911,67.709953",
      "008": "Albania/41.153332,20.168331",
      "010": "Antarctica/-75.250973,-0.071389",
      "012": "Algeria/28.033886,1.659626",
      "016": "American Samoa/-14.27097,-170.132217",
      "020": "Andorra/42.546245,1.601554",
      "024": "Angola/-11.202692,17.873887",
      "028": "Antigua and Barbuda/17.060816,-61.796428",
      "031": "Azerbaijan/40.143105,47.576927",
      "032": "Argentina/-38.416097,-63.616672",
      "036": "Australia/-25.274398,133.775136",
      "040": "Austria/47.516231,14.550072",
      "044": "Bahamas/25.03428,-77.39628",
      "048": "Bahrain/25.930414,50.637772",
      "050": "Bangladesh/23.684994,90.356331",
      "051": "Armenia/40.069099,45.038189",
      "052": "Barbados/13.193887,-59.543198",
      "056": "Belgium/50.503887,4.469936",
      "060": "Bermuda/32.321384,-64.75737",
      "064": "Bhutan/27.514162,90.433601",
      "068": "Bolivia/-16.290154,-63.588653",
      "076": "Brazil/-14.235004,-51.92528",
      "203": "Czechia",
      "752": "Sweden",
      "788": 'Tunisia',
      "478": "Mauritania",
      "466": "Mali",
      "854": "Burkina Faso",
      "072": "Botswana",
      "508": "Mozambique",
      "706": "Somalia",
      "417": "Kyrgyzstan",
      "598": "Papua New Guinea",
      "600": "Paraguay",
      "740": "Suriname",

    }
  ]
  
let reformatData = {};
let dateArr = [];
let time = 0;
let interval, newDate;
 /* breakpoint */ 
async function getAll() {
    let all = await axios.get('https://corona.lmao.ninja/v2/all')
                        .then(response => {
                            return response.data
                        })
                        .catch(err => {
                            console.error(err);
                        })
    let updateTime = all.updated;
    let curCases = all.cases;
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
    hr > 12 ? hr -= 12 : (hr < 10) ? `0${hr}` : hr;

    updateDate.innerHTML = `${month}/${day}/${year}`
    updateClock.innerHTML = `${hr}:${min}${time}`
    curCases = curCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    curDeaths = curDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    curRecovered = curRecovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    
    //reformat numbers
    cases.innerHTML = `Cases: ${curCases}`;
    deaths.innerHTML = `Deaths: ${curDeaths}`;
    recovers.innerHTML = `Recovered: ${curRecovered}`;
}





async function getCountries() {
    let countries = await axios.get(`https://corona.lmao.ninja/v2/countries`)
                        .then(response => {
                            return response.data
                        })
                        .catch(err => {
                            console.error(err);
                        })
    const countryDiv = document.querySelector('.countries');

    for(let i=0; i < countries.length; i++) {
        let newDiv = document.createElement('div');
        newDiv.style = 'font-size: 15px;border: 3px solid black; margin: 3px; border-radius: 10px; background-color: rgb(248, 248, 248);'
        let name = countries[i].country;
        let cases = countries[i].cases;
        cases = cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let todayCases = countries[i].todayCases;
        todayCases = todayCases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let todayDeaths = countries[i].todayDeaths;
        if(todayDeaths === null) {
            todayDeaths = 0;
        } else {
            todayDeaths = todayDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        let deaths = countries[i].deaths;
        deaths = deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let recovered = countries[i].recovered;
        recovered = recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        let critical = countries[i].critical;
        critical = critical.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        if(name === 'S. Korea') {
            name = 'SouthKorea'
        }
        if(name === 'Tanzania, United Republic of') {
            name = 'Tanzania'
        }

        let div2 = `<h2 class='${name}' style="margin-left: 10px">${name}</h2>
            <div style="display: flex; justify-content: space-around;font-size:16px;">
                <div>
                    <p>Total Cases: <b>${cases}</b></p><p>Today Cases: <b>${todayCases}</b></p><p>Today Deaths: <b>${todayDeaths}</b></p>
                </div>
                <div>
                    <p>Deaths: <b>${deaths}</b></p><p>Recovered: <b>${recovered}</b></p><p>Critical: <b>${critical}</b></p>
                </div>
            </div>
        `
        newDiv.innerHTML = div2;
        countryDiv.appendChild(newDiv)
    }  
}





async function timeLine() {
    let countries = await axios.get(`https://corona.lmao.ninja/v2/historical?lastdays=all `)
                            .then(response => {
                                return response.data
                            })
                            .catch(err => {
                                console.error(err);
                            });

    // MAP   
    const row = document.querySelector('.row');


    var width = row.offsetWidth,
        height = 600;

    var projection = d3.geoMercator()
        .translate([width / 2.2, height / 1.5]);

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("class", "map");
        
    var g = svg.append("g");
    var path = d3.geoPath()
        .projection(projection);
    
    //LEGEND
    var svg = d3.select("svg");
    var tooltip = d3.select('svg').append('g').append('text')
                    .attr('class', 'hidden');

    var linearV = d3.scaleLinear()
                    .domain([0, 15000, 100000])
                    .range(['rgb(252,237,69)','rgb(253, 169, 21)', 'rgb(226,21,21)']);
    svg.append("g")
        .attr("class", "legendV")
        .attr("transform", "translate(20,300)");
    
    var legendV = d3.legendColor()
                    .shapeWidth(30)
                    .cells(10)
                    .title("Cases")
                    .labelFormat(d3.format('.0f'))
                    .scale(linearV);

    svg.select(".legendV")
        .call(legendV);

    //DATE
    var timeLabel = svg.append('g').append('text')
                        .attr('class', 'time')
                        .attr('transform', 'translate(20, 550)')
                        .attr('font-size', '50px')
                        .text('1/22/20')

    // load and display the World
    d3.json("https://unpkg.com/world-atlas@1/world/110m.json", function(error, topology) {
        g.selectAll("path")
        .data(topojson.feature(topology, topology.objects.countries)
            .features)
        .enter()
        .append("path")
        .attr('class', (d) => {

            let connectedData = originData[0][d.id];
            let countryName;
            if(connectedData !== undefined) {
                countryName = connectedData.split('/')[0];
            }
            let prev = null;
            countries.forEach((country, i) => {

                if(country.country === countryName && prev === country.country) {
                    cleanData(countryName, country.timeline.cases, country.timeline.deaths, reformatData)
                } else if(!prev && country.country === countryName) {
                    prev = countryName;
                    if(countryName === 'S. Korea') {
                        countryName='SouthKorea'
                    }
                    if(countryName === 'Lao People\'s Democratic Republic') {
                        countryName = 'Lao'
                    }
                    if(countryName === 'Libyan Arab Jamahiriya') {
                        countryName = 'Libyan'
                    }
                    if(countryName === 'Burkina Faso') {
                        countryName = 'Burkina'
                    }
                    if(countryName === 'Saudi Arabia') {
                        countryName = 'SaudiA'
                    }
                    if(countryName === 'Syrian Arab Republic') {
                        countryName = 'Syria'
                    }
                    if(countryName === 'South Africa') {
                        countryName = 'SAfrica'
                    }
                    if(countryName === 'Central African Republic') {
                        countryName = 'CAfrica'
                    }
                    if(countryName === 'Tanzania, United Republic of') {
                        countryName = 'Tanzania'
                    }
                    if(countryName === 'Papua New Guinea') {
                        countryName = 'Papua'
                    }
  
                    

                    for(let date in country.timeline.cases) {
                        if(!dateArr.includes(date)) {
                            dateArr.push(date);
                        }
                        if(!reformatData[date]) {
                            reformatData[date] = {};
                        }
                        reformatData[date][countryName] = {'C': country.timeline.cases[date], 'D': country.timeline.deaths[date]}
                    }
                }
            });
            if(countryName) {
                return countryName
            }
        })
        .attr("d", path);

        interval = setInterval(step, 500)

        //slider
        const slider = document.querySelector('.slider');
        const uptoDate1 = document.querySelector('#dateLabel1');
        const uptoDate2 = document.querySelector('#dateLabel2');
        uptoDate1.innerHTML = dateArr[0]
        uptoDate2.innerHTML = dateArr[dateArr.length-1];
        slider.setAttribute('max', dateArr.length-1);

        //dates
        slider.addEventListener('input', function(e) {
            let index = e.target.value;
            newDate= dateArr[index];
            time= dateArr.indexOf(newDate);
            uptoDate1.innerHTML = newDate;
        })
        slider.addEventListener('mouseup', function(e) {
            let index = e.target.value;
            newDate= dateArr[index];
            time= dateArr.indexOf(newDate);
            uptoDate1.innerHTML = newDate;
        });
        slider.addEventListener('click', function(e) {
            let index = e.target.value;
            newDate= dateArr[index];
            time= dateArr.indexOf(newDate);
            uptoDate1.innerHTML = newDate;
        });

   });

    //play and stop and slider
    const playBtn = document.querySelector('#play');
    const resetBtn = document.querySelector('#reset');

    playBtn.addEventListener('click', function(e) {
        let btn = this;
        // if(btn)
        if(btn.innerHTML === 'Play') {
            btn.innerHTML = 'Pause';
            interval = setInterval(step, 500)
        } else {
            btn.innerHTML = 'Play';
            clearInterval(interval);
        }
    });

    resetBtn.addEventListener('click', function() {
        time = 0;
        update(reformatData[dateArr[time]])
    })


        //helper functions
        function step() {
            time = (time < dateArr.length) ? time+1 : 0;
            timeLabel.text(dateArr[time])
            update(reformatData[dateArr[time]])
        }

        function update(data) {
                for(let country in data) {
                    let cases = data[country]['C'];
                    d3.select(`path.${country}`)
                        .attr('fill', linearV(cases))
                        .attr('fill-opacity', 1)
                        .attr('stroke-opacity', 5)
                        .on('mouseover', function(d) {
                            var mouse = d3.mouse(svg.node()).map(function(d) {
                                return parseInt(d);
                            });

                            if(country=== 'SouthKorea') {
                                country='S. Korea'
                            }
                            if(country=== 'SaudiA') {
                                country = 'Saudi Arabia'
                            }

                            if(country=== 'SAfrica') {
                                country = 'South Africa'
                            }
                            if(country=== 'CAfrica') {
                                country = 'Central African Republic'
                            }
                            if(country=== 'Papua') {
                                country = 'Papua New Guinea'
                            }
                            if(country === 'Burma') {
                                country = 'Myanmar'
                            }
                            d3.select(this).style("cursor", "pointer")
                                            .style("stroke", "black");

                            tooltip.classed('hidden', null)
                                    .attr('transform', `translate(${(mouse[0]+20)}, ${(mouse[1]+30)})`)
                                    .attr('fill', 'black')
                                    .attr('fill-stoke', 5)
                                    .attr('font-size', '25px')
                                    .html(`${country}`);

                        })
                        .on('mouseout', function() {
                            d3.select(this).style("stroke", "none");
                            tooltip.classed('hidden', true)
                        })
                        .on('click', function(e) {
                            let name = originData[0][e.id].split('/')[0];
                            if(name === 'Libyan Arab Jamahiriya') {
                                name='Libyan'
                            }

                            if(name === 'Central African Republic') {
                                name = 'Central'
                            }

                            if(name === 'South Africa') {
                                name = 'South'
                            }
                            if(name === 'S. Korea') {
                                name = 'SouthKorea'
                            }
                            if(name === 'Saudi Arabia') {
                                name = 'Saudi'
                            }
                            if(name === 'Burkina Faso') {
                                name = 'Burkina'
                            }
                            if(name === 'Papua New Guinea') {
                                name = 'Papua'
                            }
                            if(name === 'Lao People\'s Democratic Republic') {
                                name = 'Lao'
                            }
                            if(name === 'Burma') {
                                name = 'Myanmar'
                            }
                            if(name === 'Tanzania, United Republic of') {
                                name = 'Tanzania'
                            }
                            const parent = document.querySelector('.countries')
                            parent.childNodes.forEach(child => {
                                if(child.firstChild.className.includes('active')) {
                                    child.firstChild.classList.remove("active");
                                }
                            })
                            const scrollCountry = document.querySelector(`.${name}`);
                            scrollCountry.className += " active";
                            scrollCountry.scrollIntoView();
                        })
                            
                } 
        };

        function cleanData(country, timelineC, timelineD, obj) {
            for(let date in timelineC) {
                let value = obj[date]
                value[country]['C'] += timelineC[date]
                value[country]['D'] += timelineD[date]
            }
        };
        
};

getAll();
getCountries();
timeLine();


setInterval(() => {
    getAll();
    getCountries();
}, 1000*60*5)




                    