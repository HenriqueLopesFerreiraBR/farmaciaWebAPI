const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const UserModel = require("../model/userModel");

//GET ALL
router.get("/", async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(401).json(error);
    }
});

//GET ID
router.get("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(401).json(error);
    }
});

//UPDATE
router.put("/:id", async (req, res) => {
    const id = req.params.id;

    const { username, email, password } = req.body;

    try {
        const saltRounds = 10;

        //Metodo para encriptar a senha do usuario
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(password, salt);


        const userUpdated = {
            username,
            email,
            password: hash,
        };
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(
                id,
                userUpdated
            );
            res.status(200).json({ message: "usuario atualizado", userUpdated });
        } catch (error) {
            res.status(204).json(error);
        }
    } catch (error) {
        res.status(422).json(error);
    }
});

//DELETE
router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const userDelete = await UserModel.findByIdAndDelete(id);
        res.status(202).json({message:"Usuario Deletado"});
    } catch (error) {
        res.status(204).json(error);
    }
});


module.exports = router;
