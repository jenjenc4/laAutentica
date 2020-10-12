var express = require('express');
var router = express.Router();

const db =require('../../data/mongo');

/* GET menuItems listing. */
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

/* GET users listing. */
router.get('/:key/:value', function(req, res, next) {
    const key = req.params.key;
    const value = parseInt(req.params.value);
    const info = {
        query:{[key]: value},
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

router.post('/',function(req, res, next){
    const info = {
        doc:req.body,
        collection: req.app.locals.collectionLaAutentica
    }
    db.createOne(info)
    .then((data)=> {
        res.json(data.ops[0])
    })
    .catch(err => {
        console.log(err);
    })
}); 
module.exports = router;
