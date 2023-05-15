const ClientModel = require('../model/clientModel')
const Validation = require('../util/Validation')



async function createClienteValidator(req,res,next){
    const username = req.body.username
    const cpf = req.body.cpf;
    const email = req.body.email;
    const endereco = req.body.endereco

    //válida se o nome do cliente não está vazio
    if(!username){
        return res.status(401).json({message:"O nome do cliente não pode ser vazio"})
    }
    if(username === ''){
        return res.status(401).json({message:"O nome do cliente não pode ser vazio"})
    }
    if(username == null){
        return res.status(401).json({message:"O nome do cliente não pode ser nulo"})
    }
    if(username.length  < 3){
        return res.status(401).json({message:"O nome do cliente não pode ter menos de 3 caracteres"})
    }

    if(cpf === ' '){
        return res.status(401).json({message:"O cpf não pode ser vazio"})
    }
    if(cpf === ''){
        return res.status(401).json({message:"O cpf não pode ser vazio"})
    }
    if(cpf == null){
        return res.status(401).json({message:"O cpf não pode ser nulo"})
    }
    //Válidação do CPF
    if(!Validation.validarCPF(cpf)){
        return res.status(401).json({message:"CPF Inválido"})
    }

    next();
}

module.exports = {
    createClienteValidator
}