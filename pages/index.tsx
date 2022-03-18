import { getPosts } from '../api/posts';

import Post from '../interfaces/Post.interface';

import { CardHero, CardMini } from '../components/Cards/Cards';
import NewsList from '../components/NewsList/NewsList';

import styles from '../styles/Home.module.css';

interface HomeProps {
	articles: Post[];
	news: Post[];
}

export default function Home({ articles, news }: HomeProps) {
	return (
		<section className={styles.segments}>
			<div className={styles['article-segment']}>
				<CardHero post={articles[0]} />

				{articles.slice(1, 4).map((post) => (
					<CardMini post={post} key={post.id} />
				))}
			</div>

			<NewsList posts={news} />
		</section>
	);
}

export async function getStaticProps() {
	const articles = await getPosts('articles'),
		news = await getPosts('news');

	return {
		props: { articles, news }
	};
}
