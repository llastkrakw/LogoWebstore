/* Inscription */

exports.sign_up = function(req, res) {
    res.render('../views/layout_page.ejs',{title:'LEGO WebStore - Inscription', page:'partials/inscription'});
}
