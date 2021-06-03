const usersCtrl = {};

const User = require('../models/User')

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
}

usersCtrl.getUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id)
    res.json(user)
}

usersCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    console.log(username)
    const newUser = new User({username});
    await newUser.save();
    res.json({msg: 'create user'})
}

usersCtrl.deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findOneAndDelete(id)
    res.json({msg: 'delete user'})
}

module.exports = usersCtrl;