import { getPosts } from '../api/posts';

import Post from '../interfaces/Post.interface';

import { CardHero, CardMini } from '../components/Cards/Cards';

import styles from '../styles/Home.module.css';

export default function Home({ posts }: { posts: Post[] }) {
	return (
		<>
			<section className={styles['article-segment']}>
				<CardHero post={posts[0]} />

				{posts.slice(1, 4).map((post) => (
					<CardMini post={post} key={post.id} />
				))}
			</section>
		</>
	);
}

export async function getStaticProps() {
	const posts = await getPosts();

	return {
		props: { posts }
	};
}
