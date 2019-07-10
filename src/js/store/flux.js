const getState = ({ getStore, setStore }) => {
	return {
		store: {
			datacontact: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			listaContactos: () => {
				const store = getStore();
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Agenda_FcoBad")
					.then(resp => {
						return resp.json();
					})
					.then(data => {
						setStore({ datacontact: data });
					});
			}
		}
	};
};

export default getState;
