import { templateRender } from '@utils/template-render'
import '../error.scss'

const template = {
	title: '500',
	description: 'Мы уже фиксим',
	link: {
		href: '/src/pages/chats/chats.html',
		text: 'Назад к чатам',
	},
}

templateRender('/src/pages/error/error.hbs', template)
