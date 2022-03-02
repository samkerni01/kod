import Image from 'next/image';

import Post from '../../interfaces/Post.interface';

import TagIcon from './tag.svg';

import styles from './CardHero.module.css';
import CardFooter from '../CardFooter/CardFooter';

interface CardHeroProps {
	post: Post;
}

export default function CardHero({ post }: CardHeroProps) {
	return (
		<div className={styles.wrapper}>
			<Image
				src={post.feature_image}
				alt="post image"
				width={676}
				height={300}
				objectFit="cover"
			/>

			<TagIcon />

			<div className={styles.title}>{post.title}</div>

			<CardFooter publishedAt={post.published_at} />
		</div>
	);
}
