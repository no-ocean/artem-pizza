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
		<div className="screen-light">
			<div className="container">
				<div className="auth">
					<form className="flex flex-col col" onSubmit={handleSubmit(onSubmit)}>
						<div className="row mb-16">
							<label className="flex flex-col wide">
								<span className="auth__label">Имя</span>
								<input
									{...register("name")}
									className="input"
									type="text"
								/>
							</label>
						</div>
						<div className="row mb-16">
							<label className="flex flex-col wide">
								<span className="auth__label">E-mail</span>
								<input
									{...register("email")}
									className="input"
									type="email"
								/>
							</label>
						</div>
						<div className="row mb-16">
							<label className="flex flex-col wide">
								<span className="auth__label">Пароль</span>
								<input
									{...register("password")}
									className="input"
									type="password"
								/>
							</label>
						</div>
						<div className="row">
							<button className="btn btn-primary wide">Зарегистрироваться</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Registration;