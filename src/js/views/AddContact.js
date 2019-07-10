import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default class AddContact extends React.Component {
	constructor(props) {
		super(props);
		this.textInputFull_name = React.createRef();
		this.textInputEmail = React.createRef();
		this.textInputAddress = React.createRef();
		this.textInputPhone = React.createRef();
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		const data = {
			full_name: this.textInputFull_name.current.value,
			email: this.textInputEmail.current.value,
			agenda_slug: "Agenda_FcoBad",
			address: this.textInputAddress.current.value,
			phone: this.textInputPhone.current.value
		};
		fetch("https://assets.breatheco.de/apis/fake/contact/", {
			method: "post",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(() => {
			this.props.history.push("/");
		});
		console.log(data);
	}
	render() {
		return (
			<div className="container">
				<div>
					<h1 className="text-center mt-5">Add a new contact</h1>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Full Name</label>
							<input
								ref={this.textInputFull_name}
								type="text"
								className="form-control"
								placeholder="nombre.."
							/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input
								ref={this.textInputEmail}
								type="email"
								className="form-control"
								placeholder="ingresa email"
							/>
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input
								ref={this.textInputPhone}
								type="phone"
								className="form-control"
								placeholder="ingresa tu phone"
							/>
						</div>
						<div className="form-group">
							<label>Address</label>
							<input
								ref={this.textInputAddress}
								type="text"
								className="form-control"
								placeholder="Enter address"
							/>
						</div>
						<button onSubmit={this.handleSubmit} type="submit" className="btn btn-primary form-control">
							Agregar
						</button>
						<Link className="btn btn-secondary form-control  mt-3  w-100 text-center" to="/">
							Volver
						</Link>
					</form>
				</div>
			</div>
		);
	}
}
AddContact.propTypes = {
	history: PropTypes.any
};
