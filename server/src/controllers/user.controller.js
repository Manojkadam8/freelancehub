const userService = require("../services/user.service");
const userValidator= require("../validators/user.validator");

const registerUser = async (req, res) => {
 const { name, email, password } = req.body;

    const validation=userValidator.validateRegister(req.body);

    if(!validation.success){
        return res.status(400).json(validation);
    }
   

    const user = await userService.createUser({
         name,
        email,
        password,
    });

   
    res.status(201).json({
        message:  "User registered successfully",
        user,
    });

};

module.exports = {
    registerUser
};