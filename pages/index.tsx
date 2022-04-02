import { getPosts } from '../api/posts';

import Post from '../interfaces/Post.interface';

import LatestNews from '../components/LatestNews/LatestNews';
import LatestArticles from '../components/LatestArticles/LatestArticles';
import Carousel from '../components/Carousel/Carousel';
import { CardBig } from '../components/Cards/Cards';

import styles from '../styles/Home.module.css';

interface HomeProps {
	articles: Post[];
	news: Post[];
	featured: Post[];
}

export default function Home({ articles, news, featured }: HomeProps) {
	return (
		<>
			<section className={styles.segments}>
				<LatestArticles posts={articles.slice(-4)} />

				<LatestNews posts={news.slice(-5)} />
			</section>

			<section className={styles['carousel-featured']}>
				<Carousel title="Выбор редакции" category="featured">
					{featured.map((post) => (
						<CardBig key={post.id} post={post} />
					))}
				</Carousel>
			</section>
		</>
	);
}

export async function getStaticProps() {
	const articles = await getPosts('articles'),
		news = await getPosts('news'),
		featured = await getPosts('featured');

	return {
		props: { articles, news, featured }
	};
}
