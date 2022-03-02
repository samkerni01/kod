const months = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь'
];

export const formatDate = (date: string) => {
	const declOfNum = (num: number, titles: string[]): string => {
		const cases = [2, 0, 1, 1, 1, 2];

		return titles[
			num % 100 > 4 && num % 100 < 20
				? 2
				: cases[num % 10 < 5 ? num % 10 : 5]
		];
	};

	const newDate = new Date(date);

	let month = months[newDate.getMonth()];

	month = declOfNum(newDate.getDay(), [month, `${month}а`, `${month}ов`]);

	return `${newDate.getDay()} ${month}`;
};
