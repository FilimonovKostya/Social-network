import React from "react";
import {useForm} from "react-hook-form";
import {setLoginDataTC} from "../../Redux/authReducer";
import {useDispatch} from "react-redux";
import style from './Login.module.css'

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
        <div className={style.wrapperForm}>
            <form className={style.loginForm} onSubmit={onSubmit}>
                <input type="text" className={errors.email && 'Require' ? `${style.error}` : ''}
                       placeholder={!errors.email ? 'Email' : 'Required field'} {...register("email", {required: true,})}/>

                <input type="password" className={errors.password && 'Require' ? `${style.error}` : ''}
                       placeholder={!errors.password ? 'Password' : 'Required field'} {...register("password", {required: true, minLength: 5})} />

                <input type="submit" name="Login" value="Login"/>

            </form>
        </div>
    );
};

export default Login;
