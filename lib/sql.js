var express = require('express');
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database : 'alumniifsp'
});


module.exports = { 

    cadastroUsuario: function(dados, callback) {
        console.log(dados)
        sql = 'INSERT INTO `usuarios` (`usr_primeiro_nome`, `usr_ultimo_nome`, `usr_email`,`usr_senha`,`usr_status`,`usr_dt_cadastro`,`usr_genero`,`usr_dt_formacao`) VALUES("'+dados.primeiroNome+'","'+dados.ultimoNome+'","'+dados.email+'","'+dados.senha+'",'+dados.status+',curdate(),'+dados.genero+',curdate());'
        console.log(sql)
        con.query(sql, function(err, results){
            if (err) callback(err, null);
            callback(null, results);
        });

    }

};
