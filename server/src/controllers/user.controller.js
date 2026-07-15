const userService = require("../services/user.service");
const userValidator= require("../validators/user.validator");

const registerUser = (req, res) => {

    const uservalidation=userValidator.validateRegister(req.body);

    if(!uservalidation.success){
        return res.status(400).json(uservalidation);
    }
    const result = userService.registerUser(req.body);
   
    return res.json(result);

};

module.exports = {
    registerUser
};