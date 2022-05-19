import Link from 'next/link';

import { formatDistance } from '../../helpers/date';
import Post from '../../interfaces/Post.interface';

import TagIcon from './tag.svg';
import CommentsIcon from '../Cards/icons/comments.svg';

import styles from './LatestNews.module.css';

export default function LatestNews({ posts }: { posts: Post[] }) {
	return (
		<div className={styles.wrapper}>
			<Link href={posts[0].slug}>
				<a className={styles.important}>
					<TagIcon className={styles.tag} />

					<h3 className={styles.title}>{posts[0].title}</h3>

					<p className={styles.footer}>{posts[0].excerpt}</p>
				</a>
			</Link>

			{posts.slice(1).map((post) => (
				<Link href={post.slug} key={post.id}>
					<a className={styles.item}>
						<h3 className={styles.title}>{post.title}</h3>

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
