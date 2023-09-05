const mongoose = require('mongoose');


const URL = "mongodb+srv://developer:developer@unidbmongo.qjbej3c.mongodb.net/?retryWrites=true&w=majority"

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