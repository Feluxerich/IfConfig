const request = new Request('https://api.db-ip.com/v2/free/self')

fetch(request).then(response => response.json().then(json => {
        document.getElementById("ipAddress").innerHTML = `Your IP: ${JSON.stringify(json['ipAddress'])}`
        document.getElementById("continentName").innerHTML = `Continent: ${JSON.stringify(json['continentName'])}`
        document.getElementById("countryName").innerHTML = `Country: ${JSON.stringify(json['countryName'])}`
        document.getElementById("stateProv").innerHTML = `State: ${JSON.stringify(json['stateProv'])}`
        document.getElementById("city").innerHTML = `City: ${JSON.stringify(json['city'])}`
    }
))
console.log('App started')