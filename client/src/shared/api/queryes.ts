export const url = 'http://localhost:8080/api'

export const fetchedHumans = async () => {
	return await fetch(`${url}/allResedent`, { method: 'GET' }).then(data =>
		data.json()
	)
}

export const fetchedHumanTags = async () => {
	return await fetch(`${url}/allTag`, { method: 'GET' }).then(data =>
		data.json()
	)
}

export const fetchedProjects = async () => {
	return await fetch(`${url}/allProject`, { method: 'GET' }).then(data =>
		data.json()
	)
}

export const fetchedPrivilege = async () => {
	return await fetch(`${url}/allPrivilege`, { method: 'GET' }).then(data =>
		data.json()
	)
}

export const fetchedPrivilegeTags = async () => {
	return await fetch(`${url}/tagOnPrivilege`, { method: 'GET' }).then(data =>
		data.json()
	)
}
