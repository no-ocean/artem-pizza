import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setRegistration } from "../../state/registration/actions";

const Registration = () => {
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        dispatch(setRegistration(true));
        alert(JSON.stringify(data));
    }

    return (
        <div>
            <h2>Регистрация</h2>
            <div className="mb-30">
                <Link to="/login">Login</Link>
            </div>
            <form className="flex flex-col col mb-10" onSubmit={handleSubmit(onSubmit)}>
                <div className="row mb-30">
                    <label className="flex flex-col">
                        <span className="mb-10">Имя</span>
                        <input
                            {...register("name")}
                            className="input"
                            type="text"
                        />
                    </label>
                </div>
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
                    <button className="btn btn-primary mb-30">Зарегистрироваться</button>
                </div>
            </form>
        </div>
    );
}

export default Registration;