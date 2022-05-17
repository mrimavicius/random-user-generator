"use strict"

// 1 užduotis
// Jums paskambino pažinčių portalas – jiems reikia greitai sukurti front-endą, kuris pasiimtų duomenis iš https://randomuser.me/api/ ir juos atvaizduotų juos puslapyje. Duomenys galėtų būti atvaizduoti panašioje kortelėje. Svarbu atvaizduoti nuotrauką, vardą, amžių ir el. pašto adresą.

fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
        var h1 = document.createElement("h1")
        h1.textContent = "Random user generator"
        var section = document.createElement("section")

        var img = document.createElement("img")
        img.setAttribute("src", data.results[0].picture.large)
        
        var div = document.createElement("div")
        var name = document.createElement("h2")
        name.textContent = `${data.results[0].name.first} ${data.results[0].name.last}` 
        
        var age = document.createElement("span")
        age.textContent = ` ${data.results[0].dob.age} years old`
        
        var email = document.createElement("p")
        email.textContent = data.results[0].email
        
        document.body.append(h1, section)
        section.append(img, div, email)
        div.append(name, age)
        })
