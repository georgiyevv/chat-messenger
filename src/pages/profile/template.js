import { templateRender } from '@utils/template-render'
import './profile.scss'

const template = {
	avatar: '',
	name: 'Пользователь',
	profileInfo: [
		{
			label: 'Почта',
			value: 'user@example.com',
		},
		{
			label: 'Логин',
			value: 'username',
		},
		{
			label: 'Имя',
			value: 'Имя',
		},
		{
			label: 'Фамилия',
			value: 'Фамилия',
		},
		{
			label: 'Имя в чате',
			value: 'Имя',
		},
		{
			label: 'Телефон',
			value: '+7 (999) 999-99-99',
		},
	],
}

templateRender('/src/pages/profile/profile.hbs', template)
