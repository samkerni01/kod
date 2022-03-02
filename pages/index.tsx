import { getPosts } from '../api/posts';

import Post from '../interfaces/Post.interface';

import CardHero from '../components/CardHero/CardHero';

interface HomeProps {
	posts: Array<Post>;
}

export default function Home({ posts }: HomeProps) {
	return <CardHero post={posts[0]} />;
}

export async function getStaticProps() {
	const posts = await getPosts();

	return {
		props: { posts }
	};
}
