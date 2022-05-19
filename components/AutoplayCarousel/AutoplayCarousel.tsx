import { ReactNode, useEffect, useRef } from 'react';

import styles from './AutoplayCarousel.module.css';

export default function AutoplayCarousel({
	children,
	className
}: {
	children: ReactNode[];
	className: string;
}) {
	const trackRef = useRef<HTMLDivElement>(null),
		dotsRef = useRef<Array<HTMLSpanElement | null>>([]),
		timeoutRef = useRef<NodeJS.Timer | null>(null);

	let activeDot = 1;

	useEffect(() => {
		startAutoplay();

		return () => clearTimeout(timeoutRef.current as NodeJS.Timer);
	});

	const startAutoplay = () => {
		clearTimeout(timeoutRef.current as NodeJS.Timer);

		const { scrollLeft, clientWidth } = trackRef.current as HTMLDivElement;

		let offset = scrollLeft + clientWidth;

		if (activeDot == children.length) offset = 0;

		timeoutRef.current = setTimeout(() => {
			trackRef.current?.scrollTo({
				left: offset,
				behavior: 'smooth'
			});
		}, 5000);
	};

	const onScroll = () => {
		const { scrollLeft, clientWidth } = trackRef.current as HTMLDivElement;
		const currentSlide = (clientWidth + scrollLeft) / clientWidth;

		dotsRef.current[activeDot - 1]?.classList.remove(styles.active);

		if (currentSlide % 1 === 0) {
			activeDot = currentSlide;
			dotsRef.current[activeDot - 1]?.classList.add(styles.active);

			startAutoplay();
		}
	};

	return (
		<div className={className}>
			<div ref={trackRef} className={styles.track} onScroll={onScroll}>
				{children}
			</div>

			<div className={styles.dots}>
				{children?.map((child, i) => (
					<span
						ref={(elem) => (dotsRef.current[i] = elem)}
						key={i}
						className={
							styles.dot + (i == 0 ? ` ${styles.active}` : '')
						}
					/>
				))}
			</div>
		</div>
	);
}
