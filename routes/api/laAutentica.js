var express = require('express');
var router = express.Router();

const db =require('../../data/mongo');

/* GET users listing. */
router.get('/', function(req, res, next) {
    const info = {
        query:{},
        collection: req.app.locals.collectionLaAutentica
    }
    db.readAll(info)
        .then((laAutentica) => {
            res.json(laAutentica);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;
