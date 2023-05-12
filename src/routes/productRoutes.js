const express = require('express');

const router = express.Router()
const ProductModel = require('../model/productModel')


// GETALL
router.get('/', async(req,res)=>{
    try {
        const products = await ProductModel.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(422).json(error)
    }
})

// GETID
router.get('/:id', async(req,res)=>{
    const id = req.params.id;

    try {
        const product = await ProductModel.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(401).json(error)
    }
})

// CREATE
router.post('/', async(req,res)=>{
    const {name,descri,category,manufacturer,purchasePrice,salePrice,classification} = req.body

    try {
        const newProduct = new ProductModel({
            name:name,
            descri:descri,
            category:category,
            manufacturer:manufacturer,
            purchasePrice: purchasePrice,
            salePrice: salePrice,
            classification:classification
        })

        await newProduct.save()
        res.status(201).json({message:"produto cadastrado",newProduct})
    } catch (error) {
        res.status(400).json(error)
    }
})
// UPDATE
router.put('/:id', async(req,res)=>{
    const id = req.params.id;

    const product = {
        $set:req.body
    }
    try {
        const productUpdated = await ProductModel.findByIdAndUpdate(id,product)
        res.status(200).json({message:"produto Atualizado",product})
    } catch (error) {
        res.status(401).json(error)
    }
})

// DELETE
router.delete('/:id', async(req,res)=>{
    const id = req.params.id

    try {
        const productDeleted = await ProductModel.findByIdAndDelete(id)
        res.status(200).json({message:"produto deletado"})
    } catch (error) {
        res.status(401).json(error)
    }

})


module.exports = router