const alterandoProdutoController = async (req,res)=>{
    let produto = require('../../models/produto');
    const id = req.params.id;
    const {titulo,descricao,valor} = req.body;
    await produto.update({
      titulo: titulo || produto.titulo,
      descricao: descricao || produto.descricao,
      valor: valor || produto.valor,
    }, { where: { id: id }});
    const produtoAtualizado = await produto.findByPk(id);
    return res.json({ mensagem: "produto ATUALIZADO com sucesso!", produto: produtoAtualizado});
}

module.exports = alterandoProdutoController;