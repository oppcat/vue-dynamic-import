<template>
  <div class="app">
    <app-actions
        v-bind="$data"
        @header="change_component"
        @leftSidebar="change_component"
        @rightSidebar="change_component"
        @modal="change_component"
        @post="change_component"
        @title="change_component"
        @content="change_component"
    />
    <app-header :header="header" />
    <app-left-sidebar :left-sidebar="leftSidebar" />
    <app-modal :modal="modal" @close="change_component" />
    <app-post :post="post" />
    <app-right-sidebar :right-sidebar="rightSidebar" />
    <app-title :title="title" />
    <app-content :content="content" />
  </div>
</template>

<script>
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
		data: () => ({
			header: {},
			leftSidebar: {},
			rightSidebar: {},
			modal: {},
			post: {},
			title: {},
			content: {},
		}),

		created() {
			this.header = this.get_object('header')
			this.leftSidebar = this.get_object('leftSidebar')
			this.rightSidebar = this.get_object('rightSidebar')
			this.modal = this.get_object('modal')
			this.post = this.get_object('post')
			this.title = this.get_object('title')
			this.content = this.get_object('content')
		},

		watch: {
			'header.open'(newVal) {
				if (newVal) this.header.text = 'Close Header'
				else this.header.text = 'Open Header'
			}
		},

		methods: {
			get_object(action) {
				let object = {
					open: false,
					action,
				};
				return Object.assign({}, object);
			},

			change_component(component) {
				this.$set(this[component], 'open', !this[component].open)
			}

		}
	};
</script>

<style>
  body {
    margin: 0;
  }

  .app {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas:
        "header       header  header"
        "left-sidebar title   right-sidebar"
        "left-sidebar content right-sidebar"
        "left-sidebar post    right-sidebar"
        "actions      actions actions";
    grid-template-columns: minmax(100px, 250px) minmax(250px, 1fr) minmax(100px, 250px);
    grid-template-rows: 60px 1fr 1fr 1fr 100px;
  }
</style>


