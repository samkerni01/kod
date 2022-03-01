import { ReactNode } from 'react';

import Header from './Header/Header';

import styles from './Layout.module.css';

export interface LayoutProps {
	children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
	return (
		<div className={styles.container}>
			<Header />

			<main>{children}</main>
		</div>
	);
}
