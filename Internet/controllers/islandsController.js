function islands(req, res, next) {
    console.log(req.body);
    res.render('islands');
}

module.exports = { islands };
