import Link from 'next/link';
import { useState } from 'react';
import cn from 'classnames';

import LogoIcon from './logo.svg';
import SearchIcon from './search.svg';

import styles from './Header.module.css';

export default function Hedaer() {
	const [openMenu, setOpenMenu] = useState(false);

	interface ICategories {
		route: string;
		text: string;
	}

	const categories: Array<ICategories> = [
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
					onClick={() => setOpenMenu(!openMenu)}
				>
					<span />
					<span />
				</div>

				<Link href="/">
					<a className={styles.logo}>
						<LogoIcon />
					</a>
				</Link>

				<ul
					className={cn(styles.menu, {
						[styles.active]: openMenu
					})}
				>
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
