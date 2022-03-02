export const getPosts = async () => {
	const res = await fetch(
		`${process.env.GHOST_URL}&fields=feature_image,id,published_at,slug,title`
	)
		.then((res) => res.json())
		.catch((data) => console.log(data));

	return res.posts;
};
