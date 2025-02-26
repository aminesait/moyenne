// Définition des modules (certains sans test)
const modules = [
    { nom: "electronique fondamentale 2", coefficient: 3, image: "img/11.png", test: true },
    { nom: "logique", coefficient: 2, image: "img/8.png", test: true },
    { nom: "théorie de signal", coefficient: 2, image: "img/7.png", test: true },
    { nom: "méthode numérique", coefficient: 2, image: "img/13.png", test: true },
    { nom: "mesure", coefficient: 2, image: "img/12.png", test: true } ,  
    { nom: "tp electronique 2 " ,coefficient: 1, image: "img/1.png", test: false },  
    { nom: "tp methode numérique", coefficient: 1, image: "img/9.png", test: false } ,
    { nom: "tp logique", coefficient: 1, image: "img/10.png", test: false }, 
    { nom: "techniques d'expression", coefficient: 1, image: "img/6.png", test: false } ,
    { nom: "technologie des compsants", coefficient: 1, image: "img/3.png", test: false } ,
    { nom: "technologie et fabrication des circuits ", coefficient: 1, image: "img/4.png", test: false }
];

function afficherModules() {
    let tableBody = document.getElementById("modulesTable");
    tableBody.innerHTML = ""; // Efface les anciennes lignes

    modules.forEach((module, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td class="module-name">
                <img src="${module.image}" class="module-img" alt="">
                <span>${module.nom}</span>
            </td>
            <td>${module.coefficient}</td>
            <td><input type="number" class="examen" data-index="${index}" min="0" max="20" step="0.1"></td>
            <td>
                ${module.test ? `<input type="number" class="test" data-index="${index}" min="0" max="20" step="0.1">` : "—"}
            </td>
        `;

        tableBody.appendChild(row);
    });

    // Ajout de l'événement pour changer la couleur des inputs
    document.querySelectorAll(".examen, .test").forEach(input => {
        input.addEventListener("input", () => {
            let valeur = parseFloat(input.value);
            if (valeur < 10) {
                input.classList.add("pink");
                input.classList.remove("green");
            } else {
                input.classList.add("green");
                input.classList.remove("pink");
            }
        });
    });
}

function calculerMoyenne() {
    let examens = document.querySelectorAll(".examen");
    let tests = document.querySelectorAll(".test");

    let sommeProduits = 0;
    let sommeCoefficients = 0;

    for (let i = 0; i < modules.length; i++) {
        let examen = parseFloat(examens[i].value);
        let coef = modules[i].coefficient;

        if (isNaN(examen) || examen < 0 || examen > 20) {
            document.getElementById("result").innerText = "Veuillez entrer des notes valides entre 0 et 20.";
            document.getElementById("result").style.color = "red";
            return;
        }

        let noteModule;
        if (modules[i].test) {
            let test = parseFloat(tests[i].value);
            if (isNaN(test) || test < 0 || test > 20) {
                document.getElementById("result").innerText = "Veuillez entrer des notes valides entre 0 et 20.";
                document.getElementById("result").style.color = "red";
                return;
            }
            noteModule = (examen * 0.6) + (test * 0.4);
        } else {
            noteModule = examen * 1;
        }
        sommeProduits += noteModule * coef;
        sommeCoefficients += coef;
    }

    let moyenneFinale = sommeProduits / sommeCoefficients;
    document.getElementById("result").innerText = "Moyenne finale : " + moyenneFinale.toFixed(2) + "/20";
    document.getElementById("result").style.color = "white";
}

// Chargement des modules au démarrage
document.addEventListener("DOMContentLoaded", afficherModules);
function afficherModules() {
    let tableBody = document.getElementById("modulesTable");
    tableBody.innerHTML = ""; // Efface les anciennes lignes

    modules.forEach((module, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td class="module-name">
                <img src="${module.image}" class="module-img" alt="">
                <span>${module.nom}</span>
            </td>
            <td><input type="number" class="examen" data-index="${index}" min="0" max="20" step="0.1"></td>
            <td>
                ${module.test ? `<input type="number" class="test" data-index="${index}" min="0" max="20" step="0.1">` : "—"}
            </td>
            <td>${module.coefficient}</td>
        `;

        tableBody.appendChild(row);
    });

    // Ajout de l'événement pour changer la couleur des inputs
    document.querySelectorAll(".examen, .test").forEach(input => {
        input.addEventListener("input", () => {
            let valeur = parseFloat(input.value);
            if (valeur < 10) {
                input.classList.add("pink");
                input.classList.remove("green");
            } else {
                input.classList.add("green");
                input.classList.remove("pink");
            }
        });
    });
}
function afficherModules() {
    let tableBody = document.getElementById("modulesTable");
    tableBody.innerHTML = ""; // Efface les anciennes lignes

    modules.forEach((module, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td class="module-name">
                <img src="${module.image}" class="module-img" alt="">
                <span>${module.nom}</span>
            </td>
            <td><input type="number" class="examen" data-index="${index}" min="0" max="20" step="0.1"></td>
            <td>
                ${module.test ? `<input type="number" class="test" data-index="${index}" min="0" max="20" step="0.1">` : "—"}
            </td>
            <td class="coif">${module.coefficient}</td> <!-- Utilisation de "Coif" -->
        `;

        tableBody.appendChild(row);
    });
}

// Charger les modules après le chargement de la page
document.addEventListener("DOMContentLoaded", afficherModules);
function afficherModules() {
    let tableBody = document.getElementById("modulesTable");
    tableBody.innerHTML = ""; // Efface les anciennes lignes

    modules.forEach((module, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td class="module-name">
                <img src="${module.image}" class="module-img" alt="">
                <span>${module.nom}</span>
            </td>
            <td><input type="number" class="examen" data-index="${index}" min="0" max="20" step="0.1" oninput="changerCouleur(this)"></td>
            <td>
                ${module.test ? `<input type="number" class="test" data-index="${index}" min="0" max="20" step="0.1" oninput="changerCouleur(this)">` : "—"}
            </td>
            <td class="coif">${module.coefficient}</td>
        `;

        tableBody.appendChild(row);
    });
}

// Fonction qui change la couleur des inputs selon la valeur entrée
function changerCouleur(input) {
    let valeur = parseFloat(input.value);
    
    if (valeur < 10) {
        input.classList.add("pink");
        input.classList.remove("green", "red");
    } else if (valeur >= 10 && valeur <= 20) {
        input.classList.add("green");
        input.classList.remove("pink", "red");
    } else {
        input.classList.add("red");
        input.classList.remove("pink", "green");
    }
}

// Fonction pour calculer la moyenne et ouvrir une nouvelle page avec le résultat
function calculerMoyenne() {
    let examens = document.querySelectorAll(".examen");
    let tests = document.querySelectorAll(".test");

    let sommeProduits = 0;
    let sommeCoefficients = 0;

    for (let i = 0; i < modules.length; i++) {
        let examen = parseFloat(examens[i].value);
        let coef = modules[i].coefficient;

        if (isNaN(examen) || examen < 0 || examen > 20) {
            alert("Veuillez entrer des notes valides entre 0 et 20.");
            return;
        }

        let noteModule;
        if (modules[i].test) {
            let test = parseFloat(tests[i].value);
            if (isNaN(test) || test < 0 || test > 20) {
                alert("Veuillez entrer des notes valides entre 0 et 20.");
                return;
            }
            noteModule = (examen * 0.6) + (test * 0.4);
        } else {
            noteModule = examen;
        }
        sommeProduits += noteModule * coef;
        sommeCoefficients += coef;
    }

    let moyenneFinale = sommeProduits / sommeCoefficients;
    
    // Ouvrir une nouvelle page avec le résultat
    let nouvelleFenetre = window.open("", "_blank");
    nouvelleFenetre.document.write(`
        <html>
        <head>
            <title>Résultat</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
                h1 { color: #007BFF; }
                p { font-size: 20px; font-weight: bold; }
            </style>
        </head>
        <body>
            <h1>Résultat de la Moyenne</h1>
            <p>Moyenne finale : <strong>${moyenneFinale.toFixed(2)}/20</strong></p>
            <button onclick="window.close()">Fermer</button>
        </body>
        </html>
    `);
}
document.addEventListener("DOMContentLoaded", function () {
    let inputs = document.querySelectorAll("input"); // Sélectionne tous les inputs

    inputs.forEach((input, index) => {
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") { // Si l'utilisateur appuie sur Entrée
                event.preventDefault(); // Empêche l'action par défaut (évite le rechargement de page)
                
                let nextInput = inputs[index + 1]; // Trouve l'input suivant
                if (nextInput) {
                    nextInput.focus(); // Déplace le focus vers l'input suivant
                }
            }
        });
    });
});
