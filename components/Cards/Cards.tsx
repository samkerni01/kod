import Image from 'next/image';
import Link from 'next/link';

import { formatDate } from '../../helpers/date';
import Post from '../../interfaces/Post.interface';

import TagIcon from './icons/tag.svg';
import CommentsIcon from './icons/comments.svg';

import styles from './styles/Card.module.css';
import stylesHero from './styles/CardHero.module.css';

export const CardHero = ({ post }: { post: Post }) => {
	return (
		<Card post={post} classNames={stylesHero} width={676} height={300} />
	);
};

interface CardProps {
	post: Post;
	classNames: { [key: string]: string };
	width: number;
	height: number;
}

const Card = ({ post, classNames, width, height }: CardProps) => {
	return (
		<Link href={post.slug}>
			<a className={classNames.wrapper}>
				<Image
					src={post.feature_image}
					alt="post image"
					width={width}
					height={height}
					objectFit="cover"
				/>

				<TagIcon className={classNames.tag} />

				<div className={classNames.block}>
					<div className={classNames.title}>{post.title}</div>

					<div className={styles.footer}>
						{formatDate(post.published_at)}
						<CommentsIcon />
						49
					</div>
				</div>
			</a>
		</Link>
	);
};
