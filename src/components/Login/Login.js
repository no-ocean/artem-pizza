import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
    };

    return (
        <div>
            <h2>Авторизация</h2>
            <div className="mb-30">
                <Link to="/registration">Registartion</Link>
            </div>
            
            <form className="flex flex-col col mb-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-30">
                    <label className="flex flex-col">
                        <span className="mb-10">E-mail</span>
                        <input
                            {...register("email")}
                            className="input"
                            type="email"
                        />
                    </label>
                </div>
                <div className="row mb-50">
                    <label className="flex flex-col">
                        <span className="mb-10">Пароль</span>
                        <input
                            {...register("password")}
                            className="input"
                            type="password"
                        />
                    </label>
                </div>
                <div className="row">
                    <button className="btn btn-primary mb-30">Войти</button>
                </div>
            </form>
        </div>
    );
}

export default Login;