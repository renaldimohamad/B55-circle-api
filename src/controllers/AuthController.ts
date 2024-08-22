import { Request, Response } from "express";
import * as authService from "../services/AuthService";
import { IUserRegister } from "../types/auth";
import errorHandler from "../utlis/errorHandler";
import { log } from "console";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);

    res.status(200).json({
      token: token,
    });
  } catch (error) {
    errorHandler(res, error as unknown as Error);
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const body = req.body;

    const user = await authService.register(body as IUserRegister);

    res.json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log(error);

    errorHandler(res, error as unknown as Error);
  }
};

export const checkAuth = async (req: Request, res: Response) => {
  try {
    const user = res.locals.user;

    res.json({
      fullName: user.fullName,
      username: user.username,
      email: user.email,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
