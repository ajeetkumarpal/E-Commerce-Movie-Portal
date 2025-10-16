import form from "../schema/userFormSchema.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { JWT_EXPIRY, JWT_SECRET } from "../config/severConfig.js";

async function createFormOnDB(userDetail) {
    try {
        console.log("before create in db");
        const userForm = await form.create(userDetail);
        console.log("after create in db");
        return userForm;
    }
    catch (err) {
        throw {
            message: "error in create repository",
            error: err,
            statusCode: 500,
        };
    }
}


async function findUserRegistration(userDetail) {
    try {
        console.log("before find in db");
        const existingUser = await form.findOne({ email: userDetail.email });
        console.log("after find in db,", existingUser);
        return existingUser;
    }
    catch (err) {
        throw {
            message: "error in find regis. repository",
            error: err,
            statusCode: 500,
        };
    }
}


async function findUserLogin(userDetail) {
    try {
        let isUserExist = await form.findOne({ email: userDetail.email });

        if (!isUserExist) {
            console.log("user not logged in", isUserExist);
            throw { message: "user not registerd, please registered", statusCode: 404, type: "userExist" }
        }
        console.log("user exist in logged in");
        const isPasswordCorrect = await bcrypt.compare(userDetail.password, isUserExist.password);
        if (isPasswordCorrect) {
            console.log("you are suesssfully logged in");
        } else {
            throw { message: "invalid password", statusCode: 404, type: "userPassword" }
        }

        const token = jwt.sign({ email: isUserExist.email, id: isUserExist._id }, JWT_SECRET, { expiresIn: JWT_EXPIRY });
        console.log("token", token);
        return token;

        // return isPasswordCorrect
    }
    catch (err) {
        if (err.type == "userExist") {
            throw { message: "user not registerd, please registered first", statusCode: 404 }
        } else if (err.type == "userPassword") {
            throw { message: "invalid password", statusCode: 404 }
        }
    }
}

export { createFormOnDB, findUserRegistration, findUserLogin };