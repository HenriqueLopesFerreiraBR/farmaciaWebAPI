const mongoose = require('mongoose');


const URL = "mongodb+srv://developer:342124@shop.2db0ldr.mongodb.net/?retryWrites=true&w=majority"

const connectDatabase = async ()=> {
    await mongoose
    .connect(URL)
    .then(()=>{
        console.log('Banco de dados conectado com sucesso')
    }).catch((err)=>{
        console.log(err);
    });
};

module.exports = {connectDatabase}