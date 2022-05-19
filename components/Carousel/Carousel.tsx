import { useRef } from 'react';
import Link from 'next/link';

import Post from '../../interfaces/Post.interface';

import LeftIcon from './icons/arrow-left.svg';
import RightIcon from './icons/arrow-right.svg';

import styles from './Carousel.module.css';

export default function Carousel({
	posts,
	Card,
	title,
	length,
	className
}: {
	posts: Post[];
	Card: (props: { post: Post }) => JSX.Element;
	title: string;
	length: number;
	className?: string;
}) {
	const trackRef = useRef<HTMLDivElement>(null);

	const onClick = (direction?: string) => {
		const { scrollLeft, clientWidth } = trackRef.current as HTMLDivElement;

		const left =
			direction == 'left'
				? scrollLeft - clientWidth
				: scrollLeft + clientWidth;

		trackRef.current?.scrollTo({
			left,
			behavior: 'smooth'
		});
	};

	return (
		<section className={className}>
			<div className={styles.header}>
				<h2 className={styles.title}>
					{title}
					<span>{length}</span>
				</h2>

				<LeftIcon
					className={styles.arrow}
					onClick={() => onClick('left')}
					tabIndex="0"
				/>

				<RightIcon
					className={styles.arrow}
					onClick={() => onClick()}
					tabIndex="0"
				/>
			</div>

			<div ref={trackRef} className={styles.track}>
				{posts.map((post) => (
					<div key={post.id} className={styles.item}>
						<Card post={post} />
					</div>
				))}

				<Link href={posts[0].tags[0].slug}>
					<a className={styles.item + ' ' + styles['item-redirect']}>
						<span className={styles.circle}>
							<RightIcon />
						</span>
						Показать все
					</a>
				</Link>
			</div>

			<Link href={posts[0].tags[0].slug}>
				<a className={styles.redirect}>Показать все</a>
			</Link>
		</section>
	);
}
