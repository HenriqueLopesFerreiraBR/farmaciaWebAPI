const ClientModel = require('../model/clientModel')
const Validation = require('../util/Validation')



async function createClienteValidator(req,res,next){
    const username = req.body.username
    const cpf = req.body.cpf;
    const email = req.body.email;
    const endereco = req.body.endereco
    const cep = req.body.endereco.cep

    //válida se o nome do cliente não está vazio
    if(!username){
        return res.status(422).json({message:"O nome do cliente não pode ser vazio"})
    }
    if(username === ''){
        return res.status(422).json({message:"O nome do cliente não pode ser vazio"})
    }
    //Válida se o cliente não é nulo
    if(username == null){
        return res.status(422).json({message:"O nome do cliente não pode ser nulo"})
    }
    //Válida se o cliente tem mais de 3 caracteres
    if(username.length  < 3){
        return res.status(422).json({message:"O nome do cliente não pode ter menos de 3 caracteres"})
    }
    //Válida se o CPF não está vazio
    if(cpf === ' '){
        return res.status(400).json({message:"O cpf não pode ser vazio"})
    }
    //Válida se o CPF não está vazio
    if(cpf === ''){
        return res.status(422).json({message:"O cpf não pode ser vazio"})
    }
    //Válida se o CPF não está nulo
    if(cpf == null){
        return res.status(422).json({message:"O cpf não pode ser nulo"})
    }
    //Válidação do CPF
    if(!Validation.validarCPF(cpf)){
        return res.status(422).json({message:"CPF Inválido"})
    }
    //Válida o Email do não está vazio
    if(email == ''){
        return res.status(422).json({message:"O campo email precisa ser preenchido"})
    }
    //Válida o Email do cliente
    if(!Validation.validarEmail(email)){
        return res.status(422).json({message:"Email Inválido"})
    }
    //Válidar o CEP
    if(!Validation.validarCEP(cep)){
        return res.status(422).json({message:"CEP Inválido"})        
    }
    next();
}

module.exports = {
    createClienteValidator
}