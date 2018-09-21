export default function ({path, components}) {
	let registered_components = {}
	for (let [index, file_name] of components.entries()) {
		registered_components[file_name] = () => import(`./${path}/${file_name}.vue`)
	}
	return registered_components
}