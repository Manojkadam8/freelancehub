const userRepository = require("../repositories/user.repository");



const createUser = async (userData) => {
    const user = await userRepository.createUser(userData);

    return user;
};

module.exports = {
    createUser,
};