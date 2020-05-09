/* products */

exports.products_list = function(req, res) {

    res.send('product list');

}

exports.product_info = function(req, res) {

    res.send("Fiche Produit : " + req.params.idProduit);

}