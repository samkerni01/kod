export const getPosts = async (tag: string) => {
	let filter = `tags:${tag}%2Bfeatured:false`;

	if (tag == 'featured') filter = 'featured:true';

	const res = await fetch(
		`${process.env.GHOST_URL}&filter=${filter}&formats=plaintext&fields=feature_image,id,published_at,slug,title`
	)
		.then((res) => res.json())
		.catch((data) => console.log(data));

	return res.posts;
};
