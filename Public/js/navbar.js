fetch("/public/html/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data
        document.getElementById("head").innerHTML = data
    });

