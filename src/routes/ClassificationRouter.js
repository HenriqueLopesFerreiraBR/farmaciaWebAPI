const express = require('express');

const router = express.Router()
const ClassificationModel = require('../model/classificationModel')


// GETALL
router.get('/', async(req,res)=>{
    try {
        const classifications = await ClassificationModel.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(422).json(error)
    }
})

// GETID
router.get('/:id', async(req,res)=>{
    const id = req.params.id;

    try {
        const classification = await ClassificationModel.findById(id)
        res.status(200).json(classification)
    } catch (error) {
        res.status(401).json(error)
    }
})

// CREATE
router.post('/', async(req,res)=>{
    const {name,description} = req.body

    try {
        const newClassification = new ClassificationModel({
            name:name,
            description:description,
        })

        await newClassification.save()
        res.status(201).json({message:"Classificação cadastrada",newClassification})
    } catch (error) {
        res.status(400).json(error)
    }
})
// UPDATE
router.put('/:id', async(req,res)=>{
    const id = req.params.id;

    const classification = {
        $set:req.body
    }
    try {
        const classificationUpdated = await ClassificationModel.findByIdAndUpdate(id,classification)
        res.status(200).json({message:"Classificação Atualizada",classification})
    } catch (error) {
        res.status(401).json(error)
    }
})

// DELETE
router.delete('/:id', async(req,res)=>{
    const id = req.params.id

    try {
        const classificationDeleted = await ClassificationModel.findByIdAndDelete(id)
        res.status(200).json({message:"Classificação deletada"})
    } catch (error) {
        res.status(401).json(error)
    }

})


module.exports = router