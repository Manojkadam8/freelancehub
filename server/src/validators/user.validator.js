const validateRegister = (userData)=>{
  
    const {name , email , password} = userData;

    if(!name || !email || !password){
        return {
            success: false,
            message:"All Field requied "
        };

    }
 
    return{
        success:true,
        message:"Register Successfull"
    };

};


module.exports={
    validateRegister

};