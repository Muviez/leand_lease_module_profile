import React, { Component } from 'react';
import { FormErrors } from './ErrorsLog.jsx';

class FormLogin extends Component {
	constructor (props) {
		super(props);
		this.state = {
			login: '',
			password: '',
			formErrors: {login: '', password: '', },
			loginValid: false,
			passwordValid: false,
			formValid: false
        }
        this.handleUserInput = this.handleUserInput.bind(this);
	}

	handleUserInput = event => {
		const name = event.target.name;
		const value = event.target.value;
		this.setState({[name]: value},
									() => { this.validateField(name, value) }); //{ this.validateField(name, value) }
	}

	validateField(fieldName, value) {
		let fieldValidationErrors = this.state.formErrors;
		let loginValid = this.state.loginValid;
		let passwordValid = this.state.passwordValid;

		switch(fieldName) {
			case 'login':
				loginValid = value.match(/(?=.*[A-Z])/i);
				fieldValidationErrors.login = loginValid ? '' : ' Некорректный логин';
 				break;

			case 'password':
				passwordValid = value.length >= 6 && value.match(/(?=.*[A-Z])/i);
				fieldValidationErrors.password = passwordValid ? '': ' Пароль слишком короткий';
				break;

			default:
				break;
		}

        this.setState({formErrors: fieldValidationErrors,
                                        loginValid: loginValid,
										passwordValid: passwordValid
									}, this.validateForm);
	}

	validateForm() {
		this.setState({formValid: this.state.loginValid && this.state.passwordValid});
	}

	errorClass(error) {
		return(error.length === 0 ? '' : 'has-error');
	}

	render () {
		return (
			<form className="section-auth_form">
                <div className='form-group section-auth_form-headText'>
                    <h2>Вход</h2>
                </div>
				<div className="panel panel-default">
					<FormErrors formErrors={this.state.formErrors} />
				</div>

				<div className={`form-group section-auth_form-group ${this.errorClass(this.state.formErrors.login)}`}>
					<label className='bmd-label-floating'>Введите Login</label>
					<input type="text" required className="form-control" name="login"
						value={this.state.login}
						onChange={this.handleUserInput}  />
				</div>

				<div className={`form-group section-auth_form-group ${this.errorClass(this.state.formErrors.password)}`}>
					<label className='bmd-label-floating'>Введите Пароль</label>
					<input type="password" required className="form-control" name="password"
						value={this.state.password}
						onChange={this.handleUserInput}  />
                    <a className='confPass' href="#">Забыли пароль?</a>
				</div>
				<button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Войти</button>
			</form>
		)
	}
}

// "babel": {
//     "presets": [
//       "es2015",
//       "react"
//     ]
//   },

export default FormLogin;
