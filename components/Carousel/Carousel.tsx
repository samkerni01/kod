import { ReactNode, useEffect, useRef } from 'react';

import styles from './Carousel.module.css';

interface CarouselProps {
	children: ReactNode[] | null;
	autoplay?: boolean;
}

export default function Carousel({ children, autoplay }: CarouselProps) {
	const itemsRef = useRef<HTMLDivElement>(null),
		dotsRef = useRef<Array<HTMLSpanElement | null>>([]),
		timeoutRef = useRef<NodeJS.Timer | null>(null);

	let activeDot = 0;

	useEffect(() => {
		if (autoplay) {
			startAutoplay();

			return () => clearTimeout(timeoutRef.current as NodeJS.Timer);
		}
	});

	const setActiveDot = () => {
		const { scrollLeft, clientWidth } = itemsRef.current as HTMLDivElement;
		const currentSlide = (clientWidth + scrollLeft) / clientWidth;

		if (currentSlide % 1 === 0) {
			dotsRef.current[activeDot]?.classList.remove(styles.active);
			activeDot = currentSlide - 1;
			dotsRef.current[activeDot]?.classList.add(styles.active);

			startAutoplay();
		}
	};

	const startAutoplay = () => {
		clearTimeout(timeoutRef.current as NodeJS.Timer);

		timeoutRef.current = setTimeout(() => {
			const { scrollLeft, clientWidth, scrollWidth } =
				itemsRef.current as HTMLDivElement;

			let offset = scrollLeft + clientWidth;

			if (offset >= scrollWidth) offset = 0;

			itemsRef.current?.scrollTo({
				left: offset,
				behavior: 'smooth'
			});
		}, 5000);
	};

	const stopAutoplay = () => {
		clearTimeout(timeoutRef.current as NodeJS.Timer);

		dotsRef.current[activeDot]?.classList.remove(styles.active);
	};

	return (
		<div className={styles.wrapper}>
			<div
				ref={itemsRef}
				className={styles.items}
				onScroll={() => autoplay && setActiveDot()}
				onTouchEnd={() => autoplay && setActiveDot()}
				onTouchStart={() => autoplay && stopAutoplay()}
			>
				{children}
			</div>

			{autoplay && (
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
			)}
		</div>
	);
}
