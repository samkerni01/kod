import Link from 'next/link';
import { useRef } from 'react';

import LogoIcon from './icons/logo.svg';
import SearchIcon from './icons/search.svg';

import styles from './Header.module.css';

export default function Hedaer() {
	const menuRef = useRef<HTMLUListElement>(null);

	const categories: { route: string; text: string }[] = [
		{ route: '/news', text: 'Новости' },
		{ route: '/articles', text: 'Статьи' },
		{ route: '/telegram', text: 'Телеграм' },
		{ route: '/reviews', text: 'Обзоры' },
		{ route: '/interview', text: 'Интервью' }
	];

	return (
		<header>
			<nav className={styles.wrapper}>
				<div
					className={styles.burger}
					onClick={() =>
						menuRef.current?.classList.toggle(styles.active)
					}
				>
					<span />
					<span />
				</div>

				<Link href="/">
					<a className={styles.logo}>
						<LogoIcon />
					</a>
				</Link>

				<ul ref={menuRef} className={styles.menu}>
					{categories.map((category, i) => (
						<li key={i}>
							<Link href={category.route}>
								<a>{category.text}</a>
							</Link>
						</li>
					))}
				</ul>

				<Link href="/search">
					<a>
						<SearchIcon />
					</a>
				</Link>
			</nav>
		</header>
	);
}
