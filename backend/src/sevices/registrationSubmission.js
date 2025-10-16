import { createFormOnDB, findUserRegistration } from "../repository/userFormRepository.js";


async function RegisterationFormSubmission(detail) {
    try {
        let existingUser = await findUserRegistration({ email: detail.email });
        console.log("existingUser",existingUser);

        if(existingUser) {
            throw {message:"already exist", statusCode: 400}
        }
 console.log(" after existingUser before new",existingUser);
            const newUser = await createFormOnDB(detail);
        if (!newUser) {
            throw { message: "something went wrong", statusCode: 500 }
        }
        return newUser;
    }
    catch (err) {
       if(err.statusCode===400){
    throw {message:"email exist,try new email", statusCode: 400}
       }else if(err.statusCode===500){
        throw { message: "something went wrong", statusCode: 500 }
       }
        
    }
}
export default RegisterationFormSubmission;