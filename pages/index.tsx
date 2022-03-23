import { getPosts } from '../api/posts';

import Post from '../interfaces/Post.interface';

import NewsList from '../components/NewsList/NewsList';
import ArticlesList from '../components/ArticlesList/ArticlesList';

import styles from '../styles/Home.module.css';

interface HomeProps {
	articles: Post[];
	news: Post[];
	featured: Post[];
}

export default function Home({ articles, news, featured }: HomeProps) {
	return (
		<section className={styles.segments}>
			<ArticlesList posts={articles.slice(-4)} />

			<NewsList posts={news.slice(-5)} />
		</section>
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
