/* Home page. */
exports.index = function(req, res) {
  res.render('../views/layout_page.ejs',{title:'LEGO WebStore - Home'});
};
