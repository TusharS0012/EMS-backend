import User from "../../models/employeeModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "supersecretkey";

export const registerEmployee = async (req, res) => {
  // Controller logic will go here
};

export const loginEmployee = async (req, res) => {
  // Controller logic will go here
};

export const forgotPassword = async (req, res) => {
  // Controller logic will go here
};

export const resetPassword = async (req, res) => {
  // Controller logic will go here
};
