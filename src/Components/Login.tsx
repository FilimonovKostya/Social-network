import React from "react";
import {useForm} from "react-hook-form";
import {setLoginDataTC} from "../Redux/authReducer";
import {useDispatch} from "react-redux";

type IFormInput = {
    email: string;
    password: string;
    rememberMe: boolean;
}


const Login = () => {
    const {register, handleSubmit, formState: {errors},} = useForm<IFormInput>({mode: 'onTouched'});
    const dispatch = useDispatch()

    const onSubmit = handleSubmit((data) => dispatch(setLoginDataTC(data)))


    return (
        // <form onSubmit={onSubmit}>
        //     <input  {...register("email", {required: true,})} />
        //     {errors.email && 'Require'}
        //
        //     <input type={'password'} {...register("password", {required: true, minLength: 5})} />
        //     {errors.password && 'Require'}
        //
        //     <input type="checkbox" {...register("rememberMe", {required: false})} />
        //     <input type="submit"/>
        // </form>
        <form className="login-form">
            <h1>Login</h1>
            <input type="text" name="username" placeholder="Username" required />
                <input type="password" name="password" placeholder="Password" required />
                    <input type="submit" name="Login" value="Login" />
                        <div className="links">
                            <a href="#">Forgot Password</a>
                            <a href="#">Sign Up</a>
                        </div>
        </form>
    );
};

export default Login;
