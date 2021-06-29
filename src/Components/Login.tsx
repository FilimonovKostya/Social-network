import React from "react";
import { useForm } from "react-hook-form";

type IFormInput = {
    login: string;
    password: string;
    rememberMe: boolean;
}


const Login = () => {
    const { register, handleSubmit, formState: {errors} } = useForm<IFormInput>();
    const onSubmit = handleSubmit((data) => console.log(data))
    console.log('re',register)
    return (
        <form onSubmit={onSubmit}>
            <input {...register("login", { required: true, minLength: 3 })} />
            {errors.login && 'Require'}

            <input type={'password'} {...register("password", {required: true, minLength: 5})} />
            <input type="checkbox" {...register("rememberMe", {required: false })} />
            <input type="submit" />
        </form>
    );
};

export default Login;
