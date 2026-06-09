import { Request, Response } from "express";

export const register = async (
  req: Request,
  res: Response
) => {
  const { name, email, password } = req.body;

  try {
    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user: {
        name,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const login = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;

  res.status(200).json({
    success: true,
    message: "Login Successful",
    email,
  });
};