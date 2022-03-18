const months = [
	'Января',
	'Февраля',
	'Марта',
	'Апреля',
	'Мая',
	'Июня',
	'Июля',
	'Августа',
	'Сентября',
	'Октября',
	'Ноября',
	'Декабря'
];

const distance = ['Сегодня', 'Вчера', 'Позавчера'];

export const format = (date: string) => {
	const data = new Date(date);

	return data.getDay() + ' ' + months[data.getMonth()];
};

export const formatDistance = (date: string) => {
	const today = new Date(),
		data = new Date(date);

	const difference = today.getDate() - data.getDate();

	const res = distance[difference] ? distance[difference] : format(date);

	return `${res}・${data.getHours()}:${data.getMinutes()}`;
};
