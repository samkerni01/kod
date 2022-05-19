import { ReactNode } from 'react';

import Header from './Header/Header';

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header />

			<main>{children}</main>
		</>
	);
}
