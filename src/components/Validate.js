

const Validate = (data , type) => {
    const errors = {};

    
    if (!data.email) {
        errors.email = "Email Required"
    }else if(!/\S+@\S+\.\S+/.test(data.email)) {
       errors.email = "Email Address is Invalid"
    }else{
        delete errors.email
    }

    if (!data.password) {
        errors.password = "Password Required"
    }else if(data.password.length < 6){
        errors.password = "password need to be 6 character or more"
    }else{
        delete errors.password
    }

   


    

    if (type = "Sign UP") {
        if (!data.name.trim()) {
            errors.name = "Username Required"
        }else{
            delete errors.name
        }
        
        if(!data.confirmPassword){
            errors.confirmPassword = "Confirm the Password"
        }else if(data.confirmPassword !== data.password){
            errors.confirmPassword = "Password do not match"
        }else{
            delete errors.confirmPassword
        }
    
        if (data.isAccepted) {
            delete errors.isAccepted
        }else{
            errors.isAccepted = "Accept our regulations"
        }
    }

    return errors;
};

export default Validate;