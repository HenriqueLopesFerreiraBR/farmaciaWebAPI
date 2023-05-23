const ProductModel = require("../model/productModel");

async function createProductValidator(req, res, next) {
    const {
        name,
        descri,
        category,
        manufacturer,
        purchasePrice,
        salePrice,
        classification,
    } = req.body;

    if(!name){
        return res.status(422).json({message:"O nome do produto não pode ser vazio"})
    }
    if(name === ' '){
        return res.status(422).json({message:"O nome do produto não pode ser vazio"})
    }
    if(name === null){
        return res.status(422).json({message:"O nome do produto não pode ser Nulo"})
    }
    if(!manufacturer){
        return res.status(422).json({message:"O nome do Fabricante não pode ser vazio"})
    }
    if(manufacturer === ' '){
        return res.status(422).json({message:"O nome do Fabricante não pode ser vazio"})
    }
    if(manufacturer === null){
        return res.status(422).json({message:"O nome do Fabricante não pode ser Nulo"})
    }
    if(purchasePrice <= 0){
        return res.status(422).json({message:"O valor de compra do produto não pode ser menor que zero"})
    }
    if(salePrice <= 0){
        return res.status(422).json({message:"O valor de venda do produto não pode ser menor que zero"})
    }

    next()

}





module.exports = {
    createProductValidator
}