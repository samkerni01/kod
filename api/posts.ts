export const getPosts = async (tag: string, limit = 10) => {
	let filter = `tags:${tag}%2Bfeatured:false`;

	if (tag == 'featured') filter = 'featured:true';

	const res = await fetch(
		`${process.env.GHOST_URL}&limit=${limit}&include=tags&formats=plaintext&filter=${filter}&fields=feature_image,published_at,slug,title,excerpt,id`
	)
		.then((res) => res.json())
		.catch((error) => console.log(error));

	const data = []; // test data

	for (let i = 0; i < 10; i++) {
		data.push(res.posts[0]);
	}

	return { data, count: res.meta.pagination.total };
};
