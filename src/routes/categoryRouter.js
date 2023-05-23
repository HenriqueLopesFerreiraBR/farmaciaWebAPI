const express = require('express');

const router = express.Router()
const CategoryModel = require('../model/categoryModel')


// GETALL
router.get('/', async(req,res)=>{
    try {
        const categories = await CategoryModel.find()
        res.status(200).json(categories)
    } catch (error) {
        res.status(422).json(error)
    }
})

// GETID
router.get('/:id', async(req,res)=>{
    const id = req.params.id;

    try {
        const category = await CategoryModel.findById(id)
        res.status(200).json(category)
    } catch (error) {
        res.status(401).json(error)
    }
})

// CREATE
router.post('/', async(req,res)=>{
    const {name,description} = req.body

    try {
        const newCategory = new CategoryModel({
            name:name,
            description:description,
        })

        await newCategory.save()
        res.status(201).json({message:"Categoria cadastrada",newCategory})
    } catch (error) {
        res.status(400).json(error)
    }
})
// UPDATE
router.put('/:id', async(req,res)=>{
    const id = req.params.id;

    const category = {
        $set:req.body
    }
    try {
        const categoryUpdated = await CategoryModel.findByIdAndUpdate(id,category)
        res.status(200).json({message:"Categoria Atualizada",category})
    } catch (error) {
        res.status(401).json(error)
    }
})

// DELETE
router.delete('/:id', async(req,res)=>{
    const id = req.params.id

    try {
        const categoryDeleted = await CategoryModel.findByIdAndDelete(id)
        res.status(200).json({message:"Categoria deletada"})
    } catch (error) {
        res.status(401).json(error)
    }

})


module.exports = router