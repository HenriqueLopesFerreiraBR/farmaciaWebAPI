const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        cpf: {
            type: Number,
            require: true,
            unique: true,
            max: 11
        },
        email: {
            type: String,
        },
        endereco: {
            UF: {
                type: String,
            },
            cidade: {
                type: String,
            },
            bairro: {
                type: String,
            },
            logradoro: {
                type: String,
            },
            complemento: {
                type: String,
            },
            cep: {
                type: String,
            },
        },
    },
    { timestamps: true }
);


module.exports = mongoose.model('Client',ClientSchema)