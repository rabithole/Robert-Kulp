import axios from "axios";

export function getToken() {	
	return localStorage.getItem('token')
}

export default function() {
	return axios.create({
		baseURL: 'https://guidr-2.herokuapp.com/api/',
		headers: {
			authorization: getToken(),
		},
	})
}