import { ReactNode } from 'react';

import Header from './Header/Header';

import styles from './Layout.module.css';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className={styles.container}>
			<Header />

			<main>{children}</main>
		</div>
	);
}
