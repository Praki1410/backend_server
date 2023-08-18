const userService = require("../services/user.service");

exports.register = async (req, res) => {
  try {
    const {name, username, password } = req.body;
    
    await userService.registerUser(name,username, password);
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await userService.loginUser(username, password);
    res.json( user );
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await userService.getUser();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};