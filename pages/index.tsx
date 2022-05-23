import dynamic from 'next/dynamic';

import { getPosts } from '../api/posts';

import Post from '../interfaces/Post.interface';

import LatestNews from '../components/LatestNews/LatestNews';
import LatestArticles from '../components/LatestArticles/LatestArticles';
import { CardBig, CardMini } from '../components/Cards/Cards';
const Banner = dynamic(() => import('../components/Banner/Banner'));
const Carousel = dynamic(() => import('../components/Carousel/Carousel'));

import styles from '../styles/Home.module.css';

export default function Home({
	articles,
	countArticles,
	news,
	countNews,
	featured,
	countFeatured
}: {
	articles: Post[];
	countArticles: number;
	news: Post[];
	countNews: number;
	featured: Post[];
	countFeatured: number;
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
				amount={countFeatured}
			/>

			<Carousel
				posts={articles}
				Card={CardMini}
				title="Статьи"
				amount={countArticles}
			/>

			<Banner />

			<Carousel
				posts={news}
				Card={CardMini}
				title="Новости"
				amount={countNews}
			/>
		</>
	);
}

export async function getStaticProps() {
	const { data: articles, count: countArticles } = await getPosts('articles'),
		{ data: news, count: countNews } = await getPosts('news'),
		{ data: featured, count: countFeatured } = await getPosts('featured');

	return {
		props: {
			articles,
			countArticles,
			news,
			countNews,
			featured,
			countFeatured
		}
	};
}
