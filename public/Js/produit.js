function ajouter_occurence() {  
    if(document.getElementById('nbre_elements').value){
    document.getElementById('nbre_elements').value++;
}
else{
    document.getElementById('nbre_elements').value=1;
}
}

function diminuer_occurence(){  
        if(document.getElementById('nbre_elements').value){
            if(document.getElementById('nbre_elements').value>1){
    document.getElementById('nbre_elements').value--;
            }
            else {
                document.getElementById('nbre_elements').value=1;
            }
}
else{
    document.getElementById('nbre_elements').value=1;
}
}

function image_loader(image){
    const imagep=document.querySelector('#imgp');
    imagep.src=image.src;
}


class Objet {
                constructor(date, avis) {
                    this.date = date;
                    this.avis = avis;
                }
                popup() {
                    console.log("{"+ this.date + ", " + this.avis +"}")
                }
            };
            let cpt = 0;
            document.querySelector("#add").addEventListener("click", function () {
                document.querySelector("#qte").innerHTML = ++cpt;
            });
            document.querySelector("#substract").addEventListener("click", function () {
                document.querySelector("#qte").innerHTML = (cpt>0) ? --cpt : 0;
            });
            let selectImg = document.querySelector("#selectImg").childNodes;
            for(let i=0; i<selectImg.length; i++) 
                selectImg[i].addEventListener("click", function () {
                   document.querySelector("#view").setAttribute("src", this.getAttribute("src"));
                });
                
            document.querySelector("#Submit").addEventListener("click", function () {
                const date = new Date();
                let jour = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
                const obj = new Objet(jour, document.querySelector("#Avis").value);
                obj.popup();
            });