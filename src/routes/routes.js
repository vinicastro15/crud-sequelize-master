const express = require('express');

const alterandoProdutoController = require('../controllers/produtos/alterandoProdutoController');
const criandoProdutoController = require('../controllers/produtos/criandoProdutoController');
const deletandoProdutoController = require('../controllers/produtos/deletandoProdutoController');
const pegandoProdutoController = require('../controllers/produtos/pegandoProdutoController');

const alterandoUsuarioController = require('../controllers/usuarios/alterandoUsuarioController');
const criandoUsuarioController = require('../controllers/usuarios/criandoUsuarioController');
const deletandoUsuarioController = require('../controllers/usuarios/deletandoUsuarioController');
const pegandoUsuarioController = require('../controllers/usuarios/pegandoUsuarioController');

const Route = express.Router();

Route.post("/Produto", criandoProdutoController);
Route.get("/Produto", pegandoProdutoController);
Route.put("/Produto/:id", alterandoProdutoController);
Route.delete("/Produto/:id", deletandoProdutoController);


Route.post("/usuario", criandoUsuarioController);
Route.get("/usuario", pegandoUsuarioController);
Route.put("/usuario/:id", alterandoUsuarioController);
Route.delete("/usuario/:id", deletandoUsuarioController);



module.exports = Route