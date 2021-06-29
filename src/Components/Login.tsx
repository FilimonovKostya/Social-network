import React from 'react'

import { useForm, SubmitHandler } from "react-hook-form/dist";

type Inputs = {
    example: string,
    exampleRequired: string,
};

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return <div>
        <h4>LOGIN</h4>

        <form>
            <input type="text" name={'Login'}/>
            <input type="text" name={'password'}/>
        </form>
    </div>
};

export default Login;
