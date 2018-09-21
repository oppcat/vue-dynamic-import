# dynamic-import

## What is this project about?

Sometimes we have too many imported and registered components in a single component. This was something that i didn't like because there was too many lines for just importing and registering components. For example: 

```
import AppActions from "./components/AppActions.vue";
import AppHeader from "./components/AppHeader.vue";
import AppLeftSidebar from "./components/AppLeftSidebar.vue";
import AppModal from "./components/AppModal.vue";
import AppPost from "./components/AppPost.vue";
import AppRightSidebar from "./components/AppRightSidebar.vue";
import AppTitle from "./components/AppTitle.vue";
import AppContent from "./components/AppContent.vue";

export default {
  name: "App",
  components: {
    AppActions,
    AppHeader,
    AppLeftSidebar,
    AppModal,
    AppPost,
    AppRightSidebar,
    AppTitle,
    AppContent
  },

```

Wouldn't be awesome to convert the above code to :

```javascript
	import dynamic_import from './dynamic_import.js'

	let components = dynamic_import({
		path: 'components',
		components: [
			'AppActions', 'AppHeader', 'AppLeftSidebar', 'AppModal',
			'AppPost', 'AppRightSidebar', 'AppTitle', 'AppContent'
		]
	})

	export default {
		name: "App",
		components: components,
```

If you think this can be very helpful, feel free to clone the project 
and play around with it.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
