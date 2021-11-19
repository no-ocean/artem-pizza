import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setRegistration } from "../../state/registration/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	name: yup.string().required("Введите имя"),
	email: yup.string().email('Неправильный формат').required("Введите email"),
	password: yup.string().required("Введите пароль")
});

const Registration = () => {
	const dispatch = useDispatch();
	const { register, watch, handleSubmit, formState: {errors} } = useForm({
		defaultValues: {name: "", email: "", password: ""},
		resolver: yupResolver(schema)
	});

	const onSubmit = (data) => {
		dispatch(setRegistration(true));
		alert(JSON.stringify(data));
	}

	let nameClass = `input ${errors.name ? "input_error" : ""}`;
	let emailClass = `input ${errors.email ? "input_error" : ""}`;
	let passClass = `input ${errors.password ? "input_error" : ""}`;

	let values = watch();
    let btnFlag = (values.email.length > 0 || values.password.length) > 0 ? false : true;

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
									className={nameClass}
									type="text"
								/>
							</label>
							<span className="subtext subtext_error">{errors.name?.message}</span>
						</div>
						<div className="row mb-16">
							<label className="flex flex-col wide">
								<span className="auth__label">E-mail</span>
								<input
									{...register("email")}
									className={emailClass}
									type="email"
								/>
							</label>
							<span className="subtext subtext_error">{errors.email?.message}</span>
						</div>
						<div className="row mb-16">
							<label className="flex flex-col wide">
								<span className="auth__label">Пароль</span>
								<input
									{...register("password")}
									className={passClass}
									type="password"
								/>
							</label>
							<span className="subtext subtext_error">{errors.password?.message}</span>
						</div>
						<div className="row">
							<button 
								className="btn btn-primary wide"
								{...({disabled: btnFlag})}
							>Зарегистрироваться</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Registration;