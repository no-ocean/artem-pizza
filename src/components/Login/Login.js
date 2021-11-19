import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../../state/login/actions";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
	email: yup.string().email('Неправильный формат').required("Введите email"),
	password: yup.string().required("Введите пароль")
});

const Login = () => {
	const dispatch = useDispatch();
	const { register, watch, handleSubmit, formState: {errors} } = useForm({
		defaultValues: {email: "", password: ""},
		resolver: yupResolver(schema)
	});

	const onSubmit = (data) => {
		dispatch(setLogin(true));
		alert(JSON.stringify(data))
	};

	let emailClass = `input ${errors.email ? "input_error" : ""}`;
	let passClass = `input ${errors.password ? "input_error" : ""}`;

	console.log("errors")
	console.log(errors)

	let values = watch();
    let btnFlag = (values.email.length > 0 || values.password.length) > 0 ? false : true;

	return (
		<div className="screen-light">
			<div className="container">

				<div className="auth">

					<form className="flex flex-col col" onSubmit={handleSubmit(onSubmit)}>
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
							>Войти</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Login;