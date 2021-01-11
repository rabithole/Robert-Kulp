import axios from "axios";

export function getToken() {
	return localStorage.getItem('token')
}

export default function() {
	return axios.create({
		baseURL: 'https://guided-trips-backend.herokuapp.com/api',
		headers: {
			authorization: getToken(),
		},
	})
}

// Save: https://guidr-2.herokuapp.com/api/