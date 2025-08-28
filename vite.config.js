import { resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'
import handlebars from 'vite-plugin-handlebars'

import loginData from './src/pages/auth/login/data.js'
import registrationData from './src/pages/auth/registration/data.js'
import chatsData from './src/pages/chats/data.js'
import error404Data from './src/pages/error/404/data.js'
import error500Data from './src/pages/error/500/data.js'
import profileData from './src/pages/profile/data.js'
import passwordChangeData from './src/pages/profile/password-change/data.js'
import profileEditData from './src/pages/profile/profile-edit/data.js'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const pageData = {
	'/src/pages/auth/login/login.html': loginData,
	'/src/pages/auth/registration/registration.html': registrationData,
	'/src/pages/chats/chats.html': chatsData,
	'/src/pages/profile/profile.html': profileData,
	'/src/pages/error/404/404.html': error404Data,
	'/src/pages/error/500/500.html': error500Data,
	'/src/pages/profile/profile-edit/profile-edit.html': profileEditData,
	'/src/pages/profile/password-change/password-change.html': passwordChangeData,
}

export default defineConfig({
	root: './',
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@shared': resolve(__dirname, './src/shared'),
			'@pages': resolve(__dirname, './src/pages'),
			'@styles': resolve(__dirname, './src/styles'),
			'@utils': resolve(__dirname, './src/shared/utils'),
		},
	},
	server: {
		port: 3000,
		open: true,
	},
	build: {
		outDir: resolve(__dirname, './dist'),
		rollupOptions: {
			input: {
				main: './index.html',
				login: './src/pages/auth/login/login.html',
				registration: './src/pages/auth/registration/registration.html',
				chats: './src/pages/chats/chats.html',
				profile: './src/pages/profile/profile.html',
				error404: './src/pages/error/404/404.html',
				error500: './src/pages/error/500/500.html',
				profileEdit: './src/pages/profile/profile-edit/profile-edit.html',
				passwordChange: './src/pages/profile/password-change/password-change.html',
			},
			output: {
				chunkFileNames: 'assets/[name]-[hash].js',
				entryFileNames: 'assets/[name]-[hash].js',
				assetFileNames: 'assets/[name]-[hash].[ext]',
				manualChunks: {
					vendor: ['handlebars'],
					auth: ['./src/pages/auth/login/data.js', './src/pages/auth/registration/data.js'],
					main: ['./src/pages/chats/data.js', './src/pages/profile/data.js'],
					errors: ['./src/pages/error/404/data.js', './src/pages/error/500/data.js'],
				},
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
	},
	plugins: [
		handlebars({
			partialDirectory: [resolve(__dirname, 'src/pages'), resolve(__dirname, 'src/shared/ui')],
			context(pagePath) {
				return pageData[pagePath] || {}
			},
		}),
	],
})
