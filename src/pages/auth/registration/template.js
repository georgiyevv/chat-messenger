import { INPUT_TYPES } from '@shared/consts'
import { templateRender } from '@utils/template-render'
import '../auth.scss'

const template = {
	title: 'Регистрация',
	form: {
		inputs: [
			{
				label: 'Почта',
				name: 'email',
				type: INPUT_TYPES.EMAIL,
			},
			{
				label: 'Логин',
				name: 'login',
				type: INPUT_TYPES.TEXT,
			},
			{
				label: 'Имя',
				name: 'first_name',
				type: INPUT_TYPES.TEXT,
			},
			{
				label: 'Фамилия',
				name: 'second_name',
				type: INPUT_TYPES.TEXT,
			},
			{
				label: 'Телефон',
				name: 'phone',
				type: INPUT_TYPES.TEL,
			},
			{
				label: 'Пароль',
				name: 'password',
				type: INPUT_TYPES.PASSWORD,
			},
			{
				label: 'Пароль (еще раз)',
				name: 'password_confirm',
				type: INPUT_TYPES.PASSWORD,
			},
		],
		button: 'Зарегистрироваться',
	},
	link: {
		text: 'Войти',
		href: '/src/pages/auth/login/login.html',
	},
}

templateRender('/src/pages/auth/registration/registration.hbs', template)
