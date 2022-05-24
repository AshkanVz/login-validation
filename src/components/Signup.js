import React , {useState , useEffect} from 'react';
import Validate from './Validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './Toast'
import styles from './Signup.module.css';
import { Link } from 'react-router-dom';
const Signup = () => {
    
   
    const [data , setData] =useState({
        name: "",
        email: "",
        password:"",
        confirmPassword:"",
        isAccepted:false

    })
    const [errors , setErrors]= useState({})
    //const [touched , setTouched]= useState(false)
    const [focused , setFocused]=useState(false)
   

    useEffect(() => {
        setErrors(Validate(data , "Sign Up"))
        console.log(errors);
    }, [data,focused]);
    const changeHandler = event => {
        if(event.target.name==="isAccepted"){
            setData({...data , [event.target.name]:event.target.checked})
        }else{
            setData({...data,[event.target.name]:event.target.value})
        }
       
    }
    const clickHandler = (event) =>{
        //setTouched({...touched, [event.target.name]:true})
        setFocused({...focused,[event.target.name]:true});
    }
    const submitHandler = event =>{
        event.preventDefault();
        if (!Object.keys(errors).length) {
            notify("You signed in successfully", "success");
        }else{
            notify("Invalid Data", "error");
            setFocused(
                {name:true,
                email:true,
                password:true,
                confirmPassword:true,
                isAccepted:true}
                )

        }
    }
    
    
    return (
        <div className={styles.container}>
            <form onSubmit={submitHandler} className={styles.formcontainer}>
                <h2 className={styles.header}>Sign Up</h2>
                <div className={styles.formfield}>
                    <label>Name</label>
                    <input className={(errors.name && focused.name) ? styles.uncompleted : styles.forminput} type="text" name="name" value={data.name} onChange={changeHandler} onBlur={clickHandler} />
                    {errors.name && focused.name &&<span>{errors.name}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>Email</label>
                    <input className={(errors.email && focused.email) ? styles.uncompleted : styles.forminput} type="text" name="email" value={data.email} onChange={changeHandler} onBlur={clickHandler} />
                    {errors.email &&focused.email &&<span>{errors.email}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>Password</label>
                    <input className={(errors.password && focused.password) ? styles.uncompleted : styles.forminput} type="password" name="password" value={data.password} onChange={changeHandler} onBlur={clickHandler} />
                    {errors.password &&focused.password&& <span>{errors.password}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>Confirm Password</label>
                    <input className={(errors.confirmPassword && focused.confirmPassword) ? styles.uncompleted : styles.forminput} type="password" name="confirmPassword" value={data.confirmPassword} onChange={changeHandler} onBlur={clickHandler} />
                    {errors.confirmPassword &&focused.confirmPassword &&<span>{errors.confirmPassword}</span>}
                </div>
                <div className={styles.formfield} >
                    <div className={styles.checkbox}>
                    <label>I accept terms of privacy policy</label>
                    <input  type="checkbox" name="isAccepted" value={data.isAccepted} onChange={changeHandler} onBlur={clickHandler} />
                    </div>
                    {errors.isAccepted &&focused.isAccepted&& <span>{errors.isAccepted}</span>}
                </div>
                
                <div className={styles.formbutton}>
                    <Link to="/Login">Login</Link>
                    <button type="submit">Sign Up</button>
                    
                </div>






            </form>
            <ToastContainer />
        </div>
    );
};

export default Signup;