import Post from '../../interfaces/Post.interface';

import { CardHero, CardMini } from '../Cards/Cards';
import AutoplayCarousel from '../AutoplayCarousel/AutoplayCarousel';

import useMediaQuery from '../../hooks/useMediaQuery';

import styles from './LatestArticles.module.css';

export default function LatestArticles({ posts }: { posts: Post[] }) {
	const isMobile = useMediaQuery('(max-width: 768px)');

	return (
		<>
			{isMobile ? (
				<AutoplayCarousel className={styles.carousel}>
					{posts.map((post) => (
						<CardHero post={post} key={post.id} />
					))}
				</AutoplayCarousel>
			) : (
				<div className={styles.wrapper}>
					<CardHero post={posts[0]} />

					{posts.slice(1).map((post) => (
						<CardMini post={post} key={post.id} />
					))}
				</div>
			)}
		</>
	);
}
