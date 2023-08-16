const criandoProdutoController = async (req, res) => {
    console.log(req.body);
    const db = require('../../connection/db');
    const produto = require('../../models/produto');
    //verifica se existe essa tabela no banco caso nao exista ele cria
    await db.sync()
    const { titulo, descricao, valor } = req.body
    //desestruturacão
    const newproduto = await produto.create({
        titulo, descricao, valor
    });
    console.log(newproduto)
    return res.status(201).json({ user: newproduto });
}

module.exports = criandoProdutoController;