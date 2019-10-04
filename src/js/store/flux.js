import { constants } from "crypto";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			listcontact: [
				{
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					agenda_slug: "my_super_agenda",
					address: "47568 NW 34ST, 33434 FL, USA",
					phone: "7864445566"
				},
				{
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					agenda_slug: "my_super_agenda",
					address: "47568 NW 34ST, 33434 FL, USA",
					phone: "7864445566"
				},
				{
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					agenda_slug: "my_super_agenda",
					address: "47568 NW 34ST, 33434 FL, USA",
					phone: "7864445566"
				}
			],

			contact: {
				full_name: "",
				email: "",
				agenda_slug: "",
				address: "",
				phone: ""
			}
		},
		actions: {
			setLisPersonas: data => {
				setStore({ listcontact: data });
			},

			handleChange: e => {
				const { name, value } = e.target;
				const store = getStore();
				const { contact } = store;
				contact[name] = value;
				setStore({
					contact: contact
				});
			},

			handleSubmit: () => {
				const store = getStore();
				setStore({
					listcontact: store.listcontact.concat(store.contact)
				});
			}
		}
	};
};

export default getState;
