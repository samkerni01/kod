import { formatDate } from '../../helpers/date';

import Icon from './icon.svg';

import styles from './CardFooter.module.css';

interface CardFooterProps {
	publishedAt: string;
}

export default function CardFooter({ publishedAt }: CardFooterProps) {
	return (
		<div className={styles.wrapper}>
			{formatDate(publishedAt)}
			<Icon />
			49
		</div>
	);
}
