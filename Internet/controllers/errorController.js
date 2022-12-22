function error(req, res, next) {
    res.render('error');
}

module.exports = { error };