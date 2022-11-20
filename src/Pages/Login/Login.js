import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import UseToken from '../../Hooks/UseToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {login} = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = UseToken(loginUserEmail)
    
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = data =>{
        setLoginError('');
        console.log(data);
        login(data.email, data.password)
        .then(result => {
            const user = result.user;
            setLoginUserEmail(data.email);
            
        })
        .catch(error => {
            console.error(error);
            setLoginError(error.message);
        })
    }
    if(token){
        return navigate(from, {replace: true});
    }
    

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", {required: "Email Address is required"
                        
                        })} type="email" className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input required {...register("password", {required: "Password is required",
                        minLength: {value: 6, message: "Password must be six character or longer"}

                        })} type="password" className="input input-bordered w-full max-w-xs" />
                        <span className="label-text-alt">Forget Password?</span>
                        {errors.password && <p className='text-red-600' role="alert">{errors.password?.message}</p>}
                    </div>
                    <input className='mt-6 btn btn-accent w-full' value="login" type="submit" />

                    <div>
                        {
                            loginError &&
                            <p className='text-red-600 '>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='text-center mt-2'>New to Doctors portal? please <Link className='text-secondary' to='/signup'>Create new account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE </button>
            </div>
            
        </div>
    );
};

export default Login;