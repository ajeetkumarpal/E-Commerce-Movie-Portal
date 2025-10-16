import { JWT_SECRET } from "../config/severConfig.js";
import { findUserLogin } from "../repository/userFormRepository.js";
import jwt from 'jsonwebtoken';
async function loginController(req, res) {
    try {
        console.log("body", req.body)
        const userData = req.body;
        const token = await findUserLogin(userData);
        console.log("token", token);

        const verifyToken = jwt.verify(token, JWT_SECRET);
        if (verifyToken) {
            console.log("token verify successfully");
            res.cookie("ecommerceCook", token, {
                httpOnly: true,
                secure: false,
                sameSite: "lax",
                maxAge: 1000 * 60 * 60 * 24 * 7,
            })
        } else {
            console.log("token invalid");
            throw { message: "invalid token", statusCode: 500 }
        }



        res.status(200).json({
            message: "login sucessfully",
            data: token,
            error: {},
            success: true,
        })
    }
    catch (err) {
        res.json({
            error: err.message,
            data: err.message,
            statusCode: 400,
            success: false,
        })
    }
}
export default loginController;