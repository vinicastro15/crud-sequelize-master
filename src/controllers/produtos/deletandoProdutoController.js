const deletandoProdutoController = async (req, res) => {
    let usuario = require("../../models/produto")
    const id = req.params.id;
    const produto = await usuario.findByPk(id);
    await produto.destroy({
        where: {
            id: id
        }
    });
    return res.json({ mensagem: "Produto deletado com sucesso!", produto: produto });
}

module.exports = deletandoProdutoController;