import { copyFileSync, mkdirSync, readdirSync } from 'fs'
import { join, resolve } from 'path'
import { fileURLToPath, URL } from 'url'
import { defineConfig } from 'vite'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

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
		outDir: 'dist',
		assetsDir: 'assets',
		rollupOptions: {
			input: {
				main: './index.html',
				login: './src/pages/auth/login/login.html',
				registration: './src/pages/auth/registration/registration.html',
				chats: './src/pages/chats/chats.html',
				profile: './src/pages/profile/profile.html',
				error404: './src/pages/error/404/404.html',
				error500: './src/pages/error/500/500.html',
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
		{
			name: 'copy-hbs-files',
			writeBundle() {
				const copyDir = (src, dest) => {
					mkdirSync(dest, { recursive: true })
					readdirSync(src, { withFileTypes: true }).forEach(entry => {
						const srcPath = join(src, entry.name)
						const destPath = join(dest, entry.name)
						entry.isDirectory()
							? copyDir(srcPath, destPath)
							: entry.name.endsWith('.hbs') && copyFileSync(srcPath, destPath)
					})
				}
				copyDir('src', 'dist/src')
			},
		},
	],
})
