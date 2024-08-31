export const url = 'http://localhost:8080/api'

//Human
export const fetchedHumans = async () => {
	return await fetch(`${url}/allResedent`, { method: 'GET' }).then(data =>
		data.json()
	)
}

export const fetchedOneHuman = async (id: string | string[]) => {
	return await fetch(`${url}/resedent/${id}`, { method: 'GET' }).then(data =>
		data.json()
	)
}

export const fetchedAddHuman = async (event: any) => {
	event.preventDefault()
	await fetch(`${url}/resedent`, {
		method: 'POST',
		body: new FormData(event.target),
	}).then(event.target.reset())
}

export const fetchedDeleteHuman = async (id: number) => {
	return await fetch(`${url}/resedent/${id}`, { method: 'DELETE' })
}

//Human Tag
export const fetchedHumanTags = async () => {
	return await fetch(`${url}/allTag`, { method: 'GET' }).then(data =>
		data.json()
	)
}

export const fetchedAddHumanTag = async (event: any) => {
	event.preventDefault()
	return await fetch(`${url}/tag`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
	})
		.then(data => data.json())
		.then(event.target.reset())
}

export const fetchedAddInListHumanTag = async (event: any) => {
	event.preventDefault()
	return await fetch(`${url}/tagOnResedent/${event.target.name.value}`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify([event.target.text.value]),
	})
		.then(data => data.json())
		.then(event.target.reset())
}

export const fetchedDeleteTag = async (id: number) => {
	return await fetch(`${url}/tag/${id}`, { method: 'DELETE' })
}

//Project
export const fetchedProjects = async () => {
	return await fetch(`${url}/allProject`, { method: 'GET' }).then(data =>
		data.json()
	)
}

export const fetchedAddProject = async (event: any) => {
	event.preventDefault()
	return await fetch(`${url}/project`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
	})
		.then(data => data.json())
		.then(event.target.reset())
}

export const fetchedDeleteProject = async (id: number) => {
	return await fetch(`${url}/project/${id}`, { method: 'DELETE' })
}

//Privilege
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

export const fetchedAddPrivilege = async (event: any) => {
	event.preventDefault()
	return await fetch(`${url}/privilege`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(Object.fromEntries(new FormData(event.target))),
	})
		.then(data => data.json())
		.then(event.target.reset())
}

export const fetchedDeletePrivilege = async (id: number) => {
	return await fetch(`${url}/privilege/${id}`, { method: 'DELETE' })
}
