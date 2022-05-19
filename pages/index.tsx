import dynamic from 'next/dynamic';

import { getPosts } from '../api/posts';

import Post from '../interfaces/Post.interface';

import LatestNews from '../components/LatestNews/LatestNews';
import LatestArticles from '../components/LatestArticles/LatestArticles';
import { CardBig, CardMini } from '../components/Cards/Cards';
const Carousel = dynamic(() => import('../components/Carousel/Carousel'));

import styles from '../styles/Home.module.css';

export default function Home({
	articles,
	articlesCount,
	news,
	newsCount,
	featured,
	featuredCount
}: {
	articles: Post[];
	articlesCount: number;
	news: Post[];
	newsCount: number;
	featured: Post[];
	featuredCount: number;
}) {
	return (
		<>
			<section className={styles.segments}>
				<LatestArticles posts={articles.slice(0, 4)} />

				<LatestNews posts={news.slice(0, 5)} />
			</section>

			<Carousel
				className={styles['carousel-featured']}
				posts={featured}
				Card={CardBig}
				title="Выбор редакции"
				length={featuredCount}
			/>

			<Carousel
				posts={articles}
				Card={CardMini}
				title="Статьи"
				length={articlesCount}
			/>

			<Carousel
				posts={news}
				Card={CardMini}
				title="Новости"
				length={newsCount}
			/>
		</>
	);
}

export async function getStaticProps() {
	const { data: articles, count: articlesCount } = await getPosts('articles'),
		{ data: news, count: newsCount } = await getPosts('news'),
		{ data: featured, count: featuredCount } = await getPosts('featured');

	return {
		props: {
			articles,
			articlesCount,
			news,
			newsCount,
			featured,
			featuredCount
		}
	};
}
