import { INPUT_TYPES } from '@shared/consts'
import { templateRender } from '@utils/template-render'
import '../auth.scss'

const template = {
	title: 'Вход',
	form: {
		inputs: [
			{
				label: 'Логин',
				name: 'login',
				type: INPUT_TYPES.TEXT,
			},
			{
				label: 'Пароль',
				name: 'password',
				type: INPUT_TYPES.PASSWORD,
			},
		],
		button: 'Авторизоваться',
	},
	link: {
		text: 'Нет аккаунта?',
		href: '/src/pages/auth/registration/registration.html',
	},
}

templateRender('/src/pages/auth/login/login.hbs', template)
