const { User } = require('../model/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const TOKEN_SECRET = process.env.TOKEN_SECRET;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    const token = jwt.sign({ userId: user._id }, TOKEN_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, firstName: user.firstName, lastName: user.lastName, email: user.email });
  } catch (error) {
    console.error("Error in login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, role, num, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      role,
      num,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, TOKEN_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, firstName, lastName, email, role, num });
  } catch (err) {
    console.error("Error in signup:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { login, signup };
