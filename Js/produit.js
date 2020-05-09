let qte = 0;//Variable qui gère la quantité que le visiteur souhaite acheter

/** Fonction qui permettent respectivement d'incrémenter et de décrémenter la quantité d'un produit dans le panier
 * On vérifie d'abord si la valeur dans le champ est positive
 * Si oui, on incrémente/décrémente la quantité et on remplace la "value" du champ
 * Sinon on revient à 0
**/
let ajouter_occurence = () => document.getElementById('nbre_elements').value = (Number(document.getElementById('nbre_elements').value)>0) ? String(++qte) : "0";
let diminuer_occurence = () => document.getElementById('nbre_elements').value = (Number(document.getElementById('nbre_elements').value)) ? String(--qte) : "0";

//Fonction qui permet de charger une image en miniature sur la vitrine
let image_loader = (image) => document.querySelector('#imgp').src = image.src;

//Fonction qui affiche en console l'objet d'avis du visiteur après le clique sur le bouton d'envoi
document.querySelector("#Submit").addEventListener("click", function () {
    const day = new Date();
    const newObject = {date: date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear(), avis : document.querySelector("#Avis").value};
    console.log(newObject);
});
