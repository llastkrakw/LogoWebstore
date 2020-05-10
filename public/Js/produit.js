let qte = 0;//Variable qui gère la quantité que le visiteur souhaite acheter

/** Fonction qui permettent respectivement d'incrémenter et de décrémenter la quantité d'un produit dans le panier
 * On vérifie d'abord si la valeur dans le champ est positive
 * Si oui, on incrémente/décrémente la quantité et on remplace la "value" du champ
 * Sinon on revient à 0
**/
let ajouter_occurence = () => document.querySelector('#nbre_elements').value = (Number(document.querySelector('#nbre_elements').value)>0) ? String(++qte) : "1";
let diminuer_occurence = () => document.querySelector('#nbre_elements').value = (Number(document.querySelector('#nbre_elements').value)>2) ? String(--qte) : "1";

//Fonction qui change l'url d'ajout dans le panier à chaque fois que la quantité de celui-ci est modifiée
let sendQte = () => document.querySelector('#ajout').href = "panier.html?qte=" + document.querySelector('#nbre_elements').value;

//Fonction qui permet de charger une image en miniature sur la vitrine
let image_loader = (blocImage) => {
    document.querySelector('#imgp').src = blocImage.querySelector('img').src;
    let imgbars = document.querySelectorAll('.imgbar');
    for(let i=0; i<imgbars.length; i++)
        imgbars[i].style = "height: 3px; background: #e9ecef;";
    blocImage.querySelector('.imgbar').style = "height: 3px; background : #007bff;";
};

//Fonction qui affiche en console l'objet d'avis du visiteur après le clique sur le bouton d'envoi
function displayComment() {
    const day = new Date();
    const newObject = {date: day.getDate() + "/" + (day.getMonth()+1) + "/" + day.getFullYear(), avis : document.querySelector("#avis").value};
    console.log(newObject);
    document.querySelector("#avis").value = "";
}
