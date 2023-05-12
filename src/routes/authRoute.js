const express = require('express');
const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const bcrypt = require('bcrypt')
const authConfig = require("../config/auth")
const {sign} = require('jsonwebtoken')

const UserModel = require('../model/userModel')


// Create
router.post('/register', authMiddleware.CreateUserValidation, async(req,res)=>{
    //Recebe todas as informações enviadas no corpo da requisição
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password


    const saltRounds = 10;

    //Metodo para encriptar a senha do usuario
    const salt = bcrypt.genSaltSync(saltRounds)
    const hash = bcrypt.hashSync(password, salt)

    
    try {
        //cria um novo usuario que vai ser salvo 
        var newUser = new UserModel({
            username:username,
            email:email,
            password:hash,
        })
        //salva o usuario no banco de dados 
        await newUser.save()

        res.status(201).json({messagem: "usuario cadastrado com sucesso"})
    } catch (error) {
        res.status(401).json(error)
    }
})

//Login
router.post('/login',authMiddleware.loginValidator, async(req,res)=>{
    const email = req.body.email
    const password = req.body.password
    
    
    try {
        const user = await UserModel.findOne({email:email})

        // Armazena o password que está no banco de dados em uma variavel
        const hash = user.password
 
        //compara as duas senhas 
        const compare = await bcrypt.compareSync(password, hash)
        if(compare == false){
            return res.status(200).json({messagem: "Senha invalida"})
        }
        
        const {secret, expiresIn} = authConfig.jwt;
        const token = sign({}, secret, {
            subject: String(user._id),
            expiresIn
        })

        // res.status(200).json({messagem: "Login realizado com sucesso"})
        res.status(200).json({user, token})
    } catch (error) {
        res.status(401).json(error)
    }
})

module.exports = router