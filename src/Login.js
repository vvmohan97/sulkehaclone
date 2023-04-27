import { useFormik } from "formik";
import './login.css';
export function Login(){
    const validate =values=>{
        const errors={};
        if(!values.email){
            errors.email="*Requried"
        }
        else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email))
        {
            errors.email="Invalid Email";
        }
        if(!values.password){
            errors.password="*Requried";
        }
        else if (values.password.length >8){
            errors.password="*Maximum 8 Characters Requried";
        }
        else if (values.password.length<3){
            errors.password="Minimum 4 Characters Requried";
        }
        return(errors);

    }
        const formik=useFormik({
            initialValues :{
                email:"",
                password:""
            },
            validate,
            onSubmit : values =>{
                alert("Logged In Successfully")
            }
        })
        console.log(formik.values)

    return(
        <>
        <div className="logindiv">
             
        <br/><form onSubmit={formik.handleSubmit} className="loginform"><br/>
            <h2 className="h2">Login Here!</h2>
             <label>Enter Your Email Id</label> <br/>  
            <input type={"email"} name="email" onChange={formik.handleChange} 
            value={formik.values.email} onBlur={formik.handleBlur}/>
            {
                formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span>:null
            }
            <br/> 
            <label>Password</label><br/>
            <input type={"password"}  name="password" onChange={formik.handleChange}
            value={formik.values.password} onBlur={formik.handleBlur}/>
            {
                formik.touched.password && formik.errors.password ? <span>{formik.errors.password}</span>:null
            }
             <br/>
           <button className="loginbtn">Login</button> 
        </form>
        </div>     
        </>
    );
}