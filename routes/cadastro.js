var express = require('express');
var router = express.Router();
var sql = require('../lib/sql.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cadastro');
});

router.all('/newuser', function(req, res){
  console.log(req)
  data = req.body
  sql.cadastroUsuario(data, function(err, result) {
    if(err != null){
      res.send(err)
    }else{
      res.send(result)
    }
  })
})

module.exports = router;
