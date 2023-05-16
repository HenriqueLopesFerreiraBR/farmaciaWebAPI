const express = require('express');
const router = express.Router()
const ClientModel = require('../model/clientModel')
const ClientMiddleware = require('../middleware/clienteMiddleware')

// GETALL
router.get('/', async(req,res)=>{
    try {
        const clients = await ClientModel.find()
        res.status(200).json(clients)
    } catch (error) {
        res.status(422).json(error)
    }
})

// GETID
router.get('/:id', async(req,res)=>{
    const id = req.params.id;

    try {
        const client = await ClientModel.findById(id)
        res.status(200).json(client)
    } catch (error) {
        res.status(401).json(error)
    }
})

// CREATE
router.post('/',ClientMiddleware.createClienteValidator ,async(req,res)=>{
    const {username,cpf,email,endereco} = req.body

    try {
        const newClient = new ClientModel({
            username:username,
            cpf:cpf,
            email:email,
            endereco:endereco,

        })

        await newClient.save()
        res.status(201).json({message:"Cliente cadastrado",newClient})
    } catch (error) {
        res.status(400).json(error)
    }
})
// UPDATE
router.put('/:id', ClientMiddleware.createClienteValidator,async(req,res)=>{
    const id = req.params.id;

    const client = {
        $set:req.body
    }
    try {
        const clientUpdated = await ClientModel.findByIdAndUpdate(id,client)
        res.status(200).json({message:"cliente Atualizado",client})
    } catch (error) {
        res.status(401).json(error)
    }
})

// DELETE
router.delete('/:id', async(req,res)=>{
    const id = req.params.id

    try {
        const clientDeleted = await ClientModel.findByIdAndDelete(id)
        res.status(200).json({message:"cliente deletado"})
    } catch (error) {
        res.status(401).json(error)
    }

})

module.exports = router