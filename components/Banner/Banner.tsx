import Image from 'next/image';
import Link from 'next/link';
import useMediaQuery from '../../hooks/useMediaQuery';

import styles from './Banner.module.css';

import example from './images/example.png';
import exampleMobile from './images/example-mobile.png';

export default function Banner() {
	const isMobile = useMediaQuery('(max-width: 768px)');

	return (
		<section className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.block}>
					<h2 className={styles.title}>
						Подписывайся на <br /> наш канал в Telegram
					</h2>

					<p className={styles.descr}>
						Подписывайся на наш канал в Telegram. <br /> С нами уже
						150 000 подписчиков
					</p>

					<Link href="https://t.me/d_code">
						<a className={styles.link}>Подписаться</a>
					</Link>
				</div>

				{isMobile ? (
					<span className={styles['mobile-img']}>
						<Image
							src={exampleMobile}
							alt="Изображение канала в телеграме"
							layout="responsive"
							objectFit="cover"
						/>
					</span>
				) : (
					<>
						<span className={styles['first-img']}>
							<Image
								src={example}
								alt="Изображение канала в телеграме"
								layout="fill"
								objectFit="cover"
								objectPosition="top"
							/>
						</span>

						<span className={styles['second-img']}>
							<Image
								src={example}
								alt="Изображение канала в телеграме"
								layout="fill"
								objectFit="cover"
								objectPosition="bottom"
							/>
						</span>
					</>
				)}
			</div>
		</section>
	);
}
