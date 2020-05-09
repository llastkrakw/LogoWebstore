//Fonction permettant d'initialiser un cookie
//cname : string, cvalue : string/number, exdays : number
function setCookie(cname, cvalue, exdays) {//cname : "Cookie Name"(nom du cookie), cvalue: "Cookie Value"(donnée à insérer dans le cookie), exdays : "Expiration Day"(Après combien de jours le cookie va expirer)
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    //règle le problème des caractères interdits
    if ('btoa' in window)
        cvalue = btoa(cvalue);
    document.cookie = cname + "=" + cvalue + "; " + expires+';path=/';
}

//Fonction permettant d'enregistrer un panier
//inCartItemsNum : number, cartArticles : string
function saveCart(inCartItemsNum, cartArticles) {//inCartItemsNum : Nombre d'éléments dans le panier, cartArticles : Articles qui sont dans le panier
    setCookie('inCartItemsNum', inCartItemsNum, 5);
    setCookie('cartArticles', JSON.stringify(cartArticles), 5);
}

//Fonction permettant de récupérer le cookie du panier
function getCookie(cname) {//cname : "Cookie Name"(nom du cookie) type string
    let name = cname + "=", ca = document.cookie.split(';'), c;

    for(let i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c[0] == ' ')
            c = c.substring(1);

        if (c.indexOf(name) != -1)
            return ('btoa' in window) ? atob(c.substring(name.length,c.length)) :  c.substring(name.length,c.length);
    }
    return false;
}
