import { getPosts } from '../api/posts';

import Post from '../interfaces/Post.interface';

import { CardHero } from '../components/Cards/Cards';

export default function Home({ posts }: { posts: Post[] }) {
	return (
		<>
			<CardHero post={posts[0]} />
			<CardHero post={posts[1]} />
		</>
	);
}

export async function getStaticProps() {
	const posts = await getPosts();

	return {
		props: { posts }
	};
}
