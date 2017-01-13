const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://admin:baig5275@ds139198.mlab.com:39198/iou', ['users']);

/* GET api listing. */

/* GET all debts owed to/from specified user */
router.get('/mydebts/:tofrom/:id', function(req, res, next) {
    db.users.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            //if client requested for all debts owed to username
            if(req.params.tofrom == 'to'){
                res.json(user.owedtome);
            }
            //if client requested for all debts owed from username
            else if(req.params.tofrom == 'from'){
                res.json(user.owedbyme);
            }
            else{
                res.sendStatus(404);
            }
        }
    });
});

module.exports = router;