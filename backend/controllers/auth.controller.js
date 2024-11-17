import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import bcryptjs from "bcryptjs";
export const register = async (req, res) => {
  try {
    const hash = await bcryptjs.hash(req.body.password, 10);
    const newUser = await userModel.create({
      ...req.body,
      password: hash,
    });
    res.status(200).json({
      message: "user has been created",
      newUser,
    });
  } catch (error) {
    if (error.code === 11000) {
      // Check for duplicate key error
      res.status(400).json({
        success: false,
        message: "Username already exists.",
      });
    } else {
      res
        .status(500)
        .json({ success: false, message: "Something went wrong!" });
    }
  }
};

export const login = async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("User not found!");
    }

    const isPasswordCorrect = await bcryptjs.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).send("Wrong credentials!");
    }
    const { passwrod, ...info } = user._doc;

    const token = jwt.sign(
      { is: user._id, isSeller: user.isSeller },
      process.env.JWT_KEY
    );
    res.cookie("accessToken", token, { httpOnly: true }).status(200).json(info);
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
};
export const logout = (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
    })
    .status(200)
    .send("User has been logged out");
};
