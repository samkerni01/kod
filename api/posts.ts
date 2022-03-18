export const getPosts = async (tag: string) => {
	const res = await fetch(
		`${process.env.GHOST_URL}&formats=plaintext&fields=feature_image,id,published_at,slug,title&filter=tag:${tag}`
	)
		.then((res) => res.json())
		.catch((data) => console.log(data));

	return res.posts;
};
