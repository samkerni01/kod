import { ReactNode, useRef } from 'react';
import Link from 'next/link';

import LeftIcon from './icons/arrow-left.svg';
import RightIcon from './icons/arrow-right.svg';

import styles from './Carousel.module.css';

interface CarouselProps {
	title: string;
	category: string;
	children: ReactNode[];
}

export default function Carousel({ title, category, children }: CarouselProps) {
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
		<>
			<div className={styles.header}>
				<h2 className={styles.title}>
					{title}
					<span>{children.length}</span>
				</h2>

				<LeftIcon
					className={styles.icon}
					onClick={() => onClick('left')}
				/>
				<RightIcon className={styles.icon} onClick={() => onClick()} />
			</div>

			<div ref={trackRef} className={styles.track}>
				{children}
			</div>

			<Link href={category}>
				<a className={styles.link}>Показать все</a>
			</Link>
		</>
	);
}
