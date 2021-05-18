let softSkills = {
    Trello: '49%',
    Discord: '15%',
    Git: '87%',
    GitHub: '50%',
}
// # Exercice d'observation :
// >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*
// >*Cherche des methodes pour résoudre les énoncés suivants :*
// >*Attention, dans l'exercice précédent les éléments HTML et les propriétés dans l'objet étaient dans le même ordre ! Cette fois ci, l'ordre est différent, prend le en compte*
// ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// - Tu dois utiliser un querySelectorAll
// - Tu dois ciblé la div et plus précicément son id "liste-soft-skills"
let elements = document.querySelector("#liste-soft-skills").querySelectorAll('h2')
// ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// - Utilise une boucle "for in" pour parcourir ton objet
for (let props in softSkills) {
    // si mon element innerHTML
    // est égale au nom d'une des propriétés de mon objet 
    // alors ajouter a mon element la valeur de la propriété
    elements.forEach((e, i) => {
        if (props == elements[i].innerHTML) {
            elements[i].innerHTML = e.innerHTML + " " + softSkills[props];
            let elementsPourcentage = e.innerHTML.match(/[0-9]/g).reduce((a, b) => a + b);
            // ### 3. Change le style des h2 selons certaines conditions :
            // - Si -- --  est égale à 100 alors le bakcground est gold et l'écriture est noir
            if (elementsPourcentage == 100) {
                elements[i].style.backgroundColor = "rgb(255,0,0)";
                elements[i].style.color = "black";
            } 
            // - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
            else if (elementsPourcentage > 50) {
                elements[i].style.backgroundColor = "green";
                elements[i].style.color = "white";
            }
            // - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
            else if (elementsPourcentage < 50) {
                elements[i].style.backgroundColor = "rgb(255,0,0)";
            }
            // - Si -- --  égale à 50 alors il n'y a pas de background
            else {
                elements[i].style.backgroundColor = "none"
            }
        }
    })
}