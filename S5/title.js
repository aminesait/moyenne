// Définition des modules (certains sans test)
const modules = [
    { nom: "Microprocesseur", coefficient: 3, image: "img/mic.png", test: true },
    { nom: "fct de l'electronique", coefficient: 2, image: "img/tra.png", test: true },
    { nom: "réseau Informatique", coefficient: 2, image: "img/res.png", test: true },
    { nom: "traitment de signal", coefficient: 2, image: "img/pou.png", test: true },
    { nom: "tp avant projet", coefficient: 2, image: "img/traa.png", test: true } ,
    { nom: "propagation d'ondes et antennes " ,coefficient: 1, image: "img/ant.png", test: false },  
    { nom: "techonlogie des composants electronique 2", coefficient: 1, image: "img/rrs.png", test: false } ,
    { nom: "physique des semis-conducteurs", coefficient: 1, image: "img/tce2.png", test: false } ,
    { nom: "tp microprocesseur", coefficient: 1, image: "img/ori.png", test: false }, 
    { nom: "tp fct de l'electroniuqe", coefficient: 1, image: "img/amp.png", test: false } ,
    { nom: "tp signal", coefficient: 1, image: "img/lin.png", test: false } 
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
