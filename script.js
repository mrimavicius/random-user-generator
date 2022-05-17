"use strict"

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
