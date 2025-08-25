export default {
	title: 'Регистрация',
	form: {
		inputs: [
			{
				label: 'Почта',
				name: 'email',
				type: 'email',
			},
			{
				label: 'Логин',
				name: 'login',
				type: 'text',
			},
			{
				label: 'Имя',
				name: 'first_name',
				type: 'text',
			},
			{
				label: 'Фамилия',
				name: 'second_name',
				type: 'text',
			},
			{
				label: 'Телефон',
				name: 'phone',
				type: 'tel',
			},
			{
				label: 'Пароль',
				name: 'password',
				type: 'password',
			},
			{
				label: 'Пароль (еще раз)',
				name: 'password_confirm',
				type: 'password',
			},
		],
		button: 'Зарегистрироваться',
	},
	link: {
		text: 'Войти',
		href: '/src/pages/auth/login/login.html',
	},
}
