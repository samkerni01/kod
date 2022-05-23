import { useEffect, useState } from 'react';

export default function useMediaQuery(query: string) {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const matchMedia = window.matchMedia(query);

		setMatches(matchMedia.matches);

		const change = () => {
			setMatches(matchMedia.matches);
		};

		matchMedia.addEventListener('change', change);

		return () => matchMedia.removeEventListener('change', change);
	}, [query]);

	return matches;
}
