import Image from 'next/image';
import Link from 'next/link';

import { format } from '../../helpers/date';
import Post from '../../interfaces/Post.interface';

import TagIcon from './icons/tag.svg';
import CommentsIcon from './icons/comments.svg';

import styles from './styles/Card.module.css';
import stylesHero from './styles/CardHero.module.css';
import stylesMini from './styles/CardMini.module.css';
import stylesBig from './styles/CardBig.module.css';

export const CardHero = ({ post }: { post: Post }) => {
	return (
		<Card post={post} classNames={stylesHero} width={676} height={300} />
	);
};

export const CardMini = ({ post }: { post: Post }) => {
	return (
		<Card post={post} classNames={stylesMini} width={212} height={160} />
	);
};

export const CardBig = ({ post }: { post: Post }) => {
	return <Card post={post} classNames={stylesBig} width={444} height={260} />;
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
						{format(post.published_at)}
						<CommentsIcon className={classNames.comments} />
						49
					</div>
				</div>
			</a>
		</Link>
	);
};
