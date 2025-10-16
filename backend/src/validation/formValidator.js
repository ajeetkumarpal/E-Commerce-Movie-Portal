const validate = (schema) => {
    return async function formValidation(req, res, next) {
        try {
            console.log("body",req.body);
            schema.parse(req.body);
            console.log("bodya",req.body);
            next();
            console.log("bodyl",req.body);
        }
        catch (err) {
             console.error("Form validation failed:", err);
            res.status(400).json({
                  message: "Form validation failed",
                errors: err.errors ? err.errors : err
            })
        }
    }
}
export default validate;