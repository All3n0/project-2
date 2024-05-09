import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
  
function Register() {
    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [validationErrors, setValidationErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
 
    useEffect(()=>{
        if(localStorage.getItem('token') != "" && localStorage.getItem('token') != null){
            navigate("/Login");
        }
    },[])
 
    const registerAction = (e) => {
        e.preventDefault();
        setIsSubmitting(true)
        let payload = {
            name: name,
            email:email,
            password:password,
            password_confirmation:confirmPassword
        }
        axios.post('/api/register', payload)
        .then((r) => {
            setIsSubmitting(false)
            localStorage.setItem('token', r.data.token)
            navigate("/dashboard");
        })
        .catch((e) => {
            setIsSubmitting(false)
            if (e.response.data.errors != undefined) {
                setValidationErrors(e.response.data.errors);
            }
        });
    }

    return (
        <Layout>
            <div className="flex flex-wrap  md:justify-center mt-5">
                <div className="w-1/3">
                    <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300">
                        <div className="flex-auto p-6">
                            <h5 className="mb-3 mb-4">Register</h5>
                            <form onSubmit={(e)=>registerAction(e)}>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="name"
                                        className="form-label">Name
                                    </label>
                                    <input 
                                        type="text"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e)=>{setName(e.target.value)}}
                                    />
                                    {validationErrors.name != undefined &&
                                        <div className="flex flex-col">
                                            <small  className="text-red-600">
                                            {validationErrors.name[0]}
                                            </small >
                                        </div>
                                    }
                                     
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="email"
                                        className="form-label">Email address
                                    </label>
                                    <input 
                                        type="email"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                    {validationErrors.email != undefined &&
                                        <div className="flex flex-col">
                                            <small  className="text-red-600">
                                            {validationErrors.email[0]}
                                            </small >
                                        </div>
                                    }
                                     
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="password"
                                        className="form-label">Password
                                    </label>
                                    <input 
                                        type="password"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                        id="password"
                                        name="password"
                                        value={password}
                                        onChange={(e)=>setPassword(e.target.value)}
                                    />
                                    {validationErrors.password != undefined &&
                                        <div className="flex flex-col">
                                            <small  className="text-red-600">
                                            {validationErrors.password[0]}
                                            </small >
                                        </div>
                                    }
                                </div>
                                <div className="mb-3">
                                    <label 
                                        htmlFor="confirm_password"
                                        className="form-label">Confirm Password
                                    </label>
                                    <input 
                                        type="password"
                                        className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded"
                                        id="confirm_password"
                                        name="confirm_password"
                                        value={confirmPassword}
                                        onChange={(e)=>setConfirmPassword(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <Link to="/">
                                    <button 
                                        disabled={isSubmitting}
                                        type="submit"
                                        className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600 block w-full">Register Now
                                    </button>
                                    </Link>
                                    <p 
                                        className="text-center">Have already an account <Link to="/Login">Login here</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}


   
export default Register;
    
