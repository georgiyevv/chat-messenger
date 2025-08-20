import { templateRender } from '@utils/template-render'
import '../error.scss'

const template = {
	title: '404',
	description: 'Не туда попали',
	link: {
		href: '/src/pages/chats/chats.html',
		text: 'Назад к чатам',
	},
}

templateRender('/src/pages/error/error.hbs', template)
