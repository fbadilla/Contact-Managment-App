import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

class ContactCard extends React.Component {
	constructor() {
		super();
		this.state = {
			// initialize your state
		};
	}

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.datacontact.length > 0) {
						return store.datacontact.map((contact, i) => {
							return (
								<li className="list-group-item" key={i}>
									<div className="row w-100">
										<div className="col-12 col-sm-6 col-md-3 px-0">
											<img
												src="https://image.flaticon.com/icons/png/512/1090/1090806.png"
												alt="Mike Anamendolla"
												className="rounded-circle mx-auto d-block img-fluid"
											/>
										</div>
										<div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
											<div className=" float-right">
												<button className="btn">
													<i className="fas fa-pencil-alt mr-3" />
												</button>
												<button className="btn" onClick={() => this.props.onDelete()}>
													<i className="fas fa-trash-alt" />
												</button>
											</div>
											<label className="name lead">{contact.full_name}</label>
											<br />
											<i className="fas fa-map-marker-alt text-muted mr-3" />
											<span className="text-muted">{contact.address}</span>
											<br />
											<span
												className="fa fa-phone fa-fw text-muted mr-3"
												data-toggle="tooltip"
												title=""
												data-original-title="(870) 288-4149"
											/>
											<span className="text-muted small">{contact.phone}</span>
											<br />
											<span
												className="fa fa-envelope fa-fw text-muted mr-3"
												data-toggle="tooltip"
												data-original-title=""
												title=""
											/>
											<span className="text-muted small text-truncate">{contact.email}</span>
										</div>
									</div>
								</li>
							);
						});
					} else {
						return "";
					}
				}}
			</Context.Consumer>
		);
	}
}

/**
 * Define the data-types for
 * your component's properties
 **/
ContactCard.propTypes = {
	history: PropTypes.object,
	onDelete: PropTypes.func
};

/**
 * Define the default values for
 * your component's properties
 **/
ContactCard.defaultProps = {
	onDelete: null
};
export default ContactCard;
