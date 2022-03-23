import { Html, Head, Main, NextScript } from 'next/document';

import { mediaStyle } from '../helpers/media';

export default function Document() {
	return (
		<Html>
			<Head>
				<style type="text/css">${mediaStyle}</style>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
