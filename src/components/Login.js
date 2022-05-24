import React , {useState , useEffect} from 'react';
import Validate from './Validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {notify} from './Toast'
import styles from './Signup.module.css';
import {Link} from 'react-router-dom';

const Login = () => {
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
        setErrors(Validate(data , "Login"))
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
                <h2 className={styles.header}>Login</h2>
                
                <div className={styles.formfield}>
                    <label>Email</label>
                    <input className={(errors.email && focused.email) ? styles.uncompleted : styles.forminput}ype="text" name="email" value={data.email} onChange={changeHandler} onBlur={clickHandler} />
                    {errors.email &&focused.email &&<span>{errors.email}</span>}
                </div>
                <div className={styles.formfield}>
                    <label>Password</label>
                    <input className={(errors.password && focused.password) ? styles.uncompleted : styles.forminput} type="password" name="password" value={data.password} onChange={changeHandler} onBlur={clickHandler} />
                    {errors.password &&focused.password&& <span>{errors.password}</span>}
                </div>
                
                
                <div className={styles.formbutton}>
                    <Link to="/Signup">Sign Up</Link>
                    <button type="submit">Login</button>
                </div>






            </form>
            <ToastContainer />
        </div>
    );
};

export default Login;