const jwt = require('jwt-simple')
async function validate(req,res,next){
    try{
        var decode = await jwt.decode(req.headers.authorization,process.env.SECRET, false, 'HS256')
        if(decode.exp <= moment().unix()) {
            return res
            .status(401)
            .send({message: "Token expirado"});
        }           
    }catch(error){
        res.status(500).send({message:"Token invalido"})
    }
    
    next()
}
module.exports = {
    validate
}