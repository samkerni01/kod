import Post from '../../interfaces/Post.interface';
import { Media, MediaContextProvider } from '../../helpers/media';

import { CardHero, CardMini } from '../Cards/Cards';
import Carousel from '../Carousel/Carousel';

import styles from './LatestArticles.module.css';

export default function LatestArticles({ posts }: { posts: Post[] }) {
	return (
		<MediaContextProvider>
			<Media at="sm">
				<Carousel autoplay>
					{posts.map((post) => (
						<CardHero post={post} key={post.id} />
					))}
				</Carousel>
			</Media>

			<Media greaterThan="sm" className={styles.wrapper}>
				<CardHero post={posts[0]} />

				{posts.slice(1).map((post) => (
					<CardMini post={post} key={post.id} />
				))}
			</Media>
		</MediaContextProvider>
	);
}
