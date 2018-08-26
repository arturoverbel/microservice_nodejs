var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({ 
        notas: {
            "laboratorio_1": 5,
            "laboratorio_2": 5,
            "laboratorio_3": 5,
            "blog": 5
        }
        
    });
});

/* GET home page. */
router.post('/', function(req, res, next) {
    res.json({ 
        notas: {
            "laboratorio_1": 5,
            "laboratorio_2": 5,
            "laboratorio_3": 5,
            "blog": 5
        }
        
    });
});

module.exports = router;
