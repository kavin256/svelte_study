export async function fetchChits() {

	const response = await fetch("http://localhost:3000/chits");
	const data = await response.json();
	return data;
}

export async function incLikes(id, newCount) {
	console.log('[b] incrementing likes for ', id, newCount);
	const data = { likes: newCount };
	const settings = {
		method: 'PATCH',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	};
	try {
		const url = `http://localhost:3000/chits/${id}`;
		const response = await fetch(url, settings);
		const data = await response.json();
		return data; // this data is not used anywhere. but for good practice
	} catch (e) {
		console.log('Error ', e);
		return e;
	}
}
