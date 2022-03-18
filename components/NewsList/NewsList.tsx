import Link from 'next/link';

import { formatDistance } from '../../helpers/date';
import Post from '../../interfaces/Post.interface';

import TagIcon from './tag.svg';
import CommentsIcon from '../Cards/icons/comments.svg';

import styles from './NewsList.module.css';

export default function NewsList({ posts }: { posts: Post[] }) {
	return (
		<div className={styles.wrapper}>
			<Link href={posts[0].slug}>
				<a className={styles.item}>
					<TagIcon className={styles.tag} />

					<div className={styles.title}>{posts[0].title}</div>

					<div className={styles.footer}>{posts[0].plaintext}</div>
				</a>
			</Link>

			{posts.slice(1, 4).map((post) => (
				<Link href={post.slug} key={post.id}>
					<a className={styles.item}>
						<div className={styles.title}>{post.title}</div>

						<div className={styles.footer}>
							{formatDistance(post.published_at)}
							<CommentsIcon />
							49
						</div>
					</a>
				</Link>
			))}

			<Link href="news">
				<a className={styles.category}>Все новости</a>
			</Link>
		</div>
	);
}
