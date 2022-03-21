import Header from './Header/Header';

import styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={styles.container}>
			<Header />

			<main>{children}</main>
		</div>
	);
}
