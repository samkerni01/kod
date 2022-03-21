import { useEffect, useState } from 'react';
import Post from '../../interfaces/Post.interface';

import { CardHero, CardMini } from '../Cards/Cards';
import Carousel from '../Carousel/Carousel';

import styles from './ArticlesList.module.css';

export default function ArticlesList({ posts }: { posts: Post[] }) {
	const [showCarousel, setShowCarousel] = useState(false);

	useEffect(() => {
		if (window.matchMedia('screen and (max-width: 768px)').matches) {
			setShowCarousel(true);
		}

		const resize = () => {
			setShowCarousel(window.innerWidth < 768);
		};

		window.addEventListener('resize', resize);

		return () => window.removeEventListener('resize', resize);
	}, []);

	return (
		<>
			{showCarousel ? (
				<Carousel>
					{posts.map((post) => (
						<CardHero post={post} key={post.id} />
					))}
				</Carousel>
			) : (
				<div className={styles.wrapper}>
					<CardHero post={posts[0]} />

					{posts.slice(1, 4).map((post) => (
						<CardMini post={post} key={post.id} />
					))}
				</div>
			)}
		</>
	);
}
