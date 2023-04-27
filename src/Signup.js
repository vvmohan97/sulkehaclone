import { useFormik} from "formik";
export function Signup(){
    const validate =values=>{
        const errors ={};
        if(!values.firstname){
            errors.firstname="*Required";
        }
        
        if(!values.lastname){
            errors.lastname="*Required";
        }
        if(!values.email){
            errors.email="*Required";
        }
        else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
            errors.email="*Invalid email";
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
        if(!values.confirmpassword){
            errors.confirmpassword="*Requried";
        }
        else if(values.password!== values.confirmpassword){
            errors.confirmpassword="*Password must be same"
        } 
        return errors;

    }
        const formik=useFormik({
            initialValues:{
                firstname:"",
                lastname:"",
                email:"",
                password:"",
                confirmpassword:""
            },
            
            validate,
            onSubmit : values=>{
              alert('Welcome You Successfully Signed Up')
            }
        });
        

    return(
        <>
        <div className="signupdiv">
        <br/>
        <div className="signupformdiv">
        <form onSubmit={formik.handleSubmit}><br/>
            <header>Signup Here!</header><br/>
            <label className=" label">First Name</label><br/>
            <input type={'text'} name="firstname" className="input" 
            onChange={formik.handleChange} value={formik.values.firstname}
            onBlur={formik.handleBlur} placeholder=''/>
            {
                formik.touched.firstname && formik.errors.firstname ? <span>{formik.errors.firstname}</span>:null
            }
            <br/>
            <label className="label" >Last Name</label><br/>
            <input type={'text'} name="lastname" className="input"
             onChange={formik.handleChange} value={formik.values.lastname} onBlur={formik.handleBlur}  placeholder=''/>
             {
                formik.touched.lastname && formik.errors.lastname ? <span>{formik.errors.lastname}</span>:null
            }
             <br/>
            <label className="label">E-mail id</label><br/>
            <input type={'email'} name="email" className="input" 
            onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}  placeholder=''/>
            {
                formik.touched.email && formik.errors.email ? <span>{formik.errors.email}</span>:null
            }
            <br/>
            <label className="label">Password</label><br/>
            <input type={'password'} name="password" className="input" 
            onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur}/>
            {
               formik.touched.password &&    formik.errors.password ? <span>{formik.errors.password}</span>:null
            }
            <br/>
            <label className="label">Confirm Password</label><br/>
            <input type={'password'} name="confirmpassword" className="input" 
            onChange={formik.handleChange} value={formik.values.confirmpassword}onBlur={formik.handleBlur}/>
            
            {
             formik.touched.confirmpassword &&   formik.errors.confirmpassword ? <span>{formik.errors.confirmpassword}</span>:null
            }
            <br/>
            <button className="btn" onSubmit={formik.handleSubmit}>Submit</button>
        </form>
        </div>
        </div>
        </>
    )
}