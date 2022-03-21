import { getPosts } from '../api/posts';

import Post from '../interfaces/Post.interface';

import NewsList from '../components/NewsList/NewsList';
import ArticlesList from '../components/ArticlesList/ArticlesList';

import styles from '../styles/Home.module.css';

interface HomeProps {
	articles: Post[];
	news: Post[];
}

export default function Home({ articles, news }: HomeProps) {
	return (
		<section className={styles.segments}>
			<ArticlesList posts={articles} />

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
