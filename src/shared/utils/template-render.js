export const templateRender = async (templatePath, data) => {
	try {
		const response = await fetch(templatePath)
		if (!response.ok) {
			throw new Error(`Failed to load template: ${templatePath}`)
		}
		const source = await response.text()
		const template = Handlebars.compile(source)
		const html = template(data)
		document.body.innerHTML = html
	} catch {
		document.body.innerHTML = '<div class="error">Ошибка загрузки шаблона</div>'
	}
}
