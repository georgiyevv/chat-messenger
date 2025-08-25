export default {
	title: 'Вход',
	form: {
		inputs: [
			{
				label: 'Логин',
				name: 'login',
				type: 'text',
			},
			{
				label: 'Пароль',
				name: 'password',
				type: 'password',
			},
		],
		button: 'Авторизоваться',
	},
	link: {
		text: 'Нет аккаунта?',
		href: '/src/pages/auth/registration/registration.html',
	},
}
