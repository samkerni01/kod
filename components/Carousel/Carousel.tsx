import { ReactNode, UIEvent, useEffect, useRef } from 'react';

import styles from './Carousel.module.css';

export default function Carousel({ children }: { children: ReactNode[] }) {
	const itemsRef = useRef<HTMLDivElement>(null),
		dotsRef = useRef<Array<HTMLSpanElement | null>>([]),
		autoplayRef = useRef<NodeJS.Timer | null>(null);

	useEffect(() => {
		setAutoplay();

		return () => clearInterval(autoplayRef.current as NodeJS.Timer);
	});

	const setAutoplay = () => {
		autoplayRef.current = setInterval(() => {
			const { scrollLeft, clientWidth, scrollWidth } =
				itemsRef.current as HTMLDivElement;

			let offset = scrollLeft + clientWidth;

			if (offset == scrollWidth) {
				offset = 0;
			}

			itemsRef.current?.scrollTo({
				left: offset,
				behavior: 'smooth'
			});
		}, 5000);
	};

	const setActiveDot = (e: UIEvent<HTMLDivElement>) => {
		const { scrollLeft, clientWidth } = e.target as HTMLDivElement;
		const currentSlide = (clientWidth + scrollLeft) / clientWidth;

		if (currentSlide % 1 == 0) {
			dotsRef.current.forEach((dot, i) => {
				if (i == currentSlide - 1) {
					dot?.classList.add(styles.active);
				} else {
					dot?.classList.remove(styles.active);
				}
			});
		}
	};

	return (
		<div className={styles.wrapper}>
			<div
				ref={itemsRef}
				className={styles.items}
				onScroll={setActiveDot}
				onTouchStart={() =>
					clearInterval(autoplayRef.current as NodeJS.Timer)
				}
				onTouchEnd={() => setAutoplay()}
			>
				{children}
			</div>

			<div className={styles.dots}>
				{children.map((child, i) => (
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
