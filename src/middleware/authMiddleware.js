const UserModel = require("../model/userModel");

async function CreateUserValidation(req, res, next) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;

    //Valida se o username foi preenchido
    if (!username) {
        return res
            .status(401)
            .json({ message: "O campo username é obrigatorio" });
    }
    if (!username === " ") {
        return res
            .status(401)
            .json({ message: "O campo username não pode ser vazio" });
    }
    //Valida se o email foi preenchido
    if (!email) {
        return res.status(422).json({ message: "O campo email é obrigatorio" });
    }
    if (!email === " ") {
        return res
            .status(422)
            .json({ message: "O campo email não pode ser vazio" });
    }

    //Valida se a senha foi preenchida
    if (!password) {
        return res
            .status(422)
            .json({ message: "O campo password é obrigatorio" });
    }
    if (!password === " ") {
        return res
            .status(422)
            .json({ message: "O campo password não pode ser vazio" });
    }

    //esse metodo valida a confirmação das senhas
    if (password != confirmPassword) {
        return res.status(422).json({ message: "As senhas não conferem" });
    }

    //Esse metodo valida se o email já está sendo utilizado por outra conta
    if (await UserModel.findOne({ email: email })) {
        return res
            .status(201)
            .json({
                message: "Este email já esta sendo utilizado por outra conta",
            });
    }

    next();
}

async function loginValidator(req, res, next) {
    const email = req.body.email;
    const password = req.body.password;

    //Valida se o email foi preenchido
    if (!email) {
        return res.status(422).json({ message: "O campo email é obrigatorio" });
    }
    if (!email === " ") {
        return res.status(422).json({ message: "O campo email não pode ser vazio" });
    }

    //Valida se a senha foi preenchida
    if (!password) {
        return res.status(422).json({ message: "O campo password é obrigatorio" });
    }
    if (!password === " ") {
        return res.status(422).json({ message: "O campo password não pode ser vazio" });
    }

    //Esse metodo valida se o email já está sendo utilizado por outra conta
    if ((await UserModel.findOne({ email: email })) == null) {
        return res.status(201).json({ message: "Essa conta não existe" });
    }

    next();
}

module.exports = {
    CreateUserValidation,
    loginValidator,
};
