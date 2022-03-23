import Post from '../../interfaces/Post.interface';
import { Media, MediaContextProvider } from '../../helpers/media';

import { CardHero, CardMini } from '../Cards/Cards';
import Carousel from '../Carousel/Carousel';

import styles from './ArticlesList.module.css';

export default function ArticlesList({ posts }: { posts: Post[] }) {
	const carouselItems = posts.map((post) => (
		<CardHero post={post} key={post.id} />
	));

	return (
		<MediaContextProvider>
			<Media at="sm">
				{(className, renderChildren) => (
					<Carousel className={className}>
						{renderChildren ? carouselItems : null}
					</Carousel>
				)}
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
