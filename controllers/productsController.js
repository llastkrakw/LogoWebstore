/* Product */

exports.product_list = function(req, res) {
    res.render("partials/products_list.ejs");
}

exports.products_infos = function(req, res) {
    res.send("Fiche produit : " + req.params.idProduit)
}