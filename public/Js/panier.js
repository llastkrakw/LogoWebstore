//Fonction permettant de simuler la variable super globale $_GET en PHP, pour récupérer les données transmises par l'url
function GET_url(param){//param : Paramètre qu'on souhaite récupérer dans l'url
    let vars = {};
    
    window.location.href.replace(location.hash, '').replace(
        /[?&]+([^=&]+)=?([^&]*)?/gi,
        function (m, key, value) {
            vars[key] = value !== undefined ? value : '';
        }
    );
    
    if(param) return vars[param] ? vars[param] : null;
    return vars;
}

let $_GET = GET_url();
let price = ($_GET['qte'] * $_GET['pu']), TVA = $_GET['pu']*15/100, totalPrice = price + TVA;
