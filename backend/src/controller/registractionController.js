import RegisterationFormSubmission from "../sevices/registrationSubmission.js";

async function registractionController(req,res){
    try {
        console.log("body controller",req.body);
        const detail = req.body;
        let form = await RegisterationFormSubmission(detail);
        console.log("req.body after completed regsitraction", req.body)
        res.json({message:"sucessfully registered",
             statusCode:200,
             data:form,
             success:true,
             error:{}
        })
    }
    catch(error){
        res.json({
            message:error.message,
            statusCode:400,
            data:error.message,
            success:false,
        })
    }

}
export default registractionController;