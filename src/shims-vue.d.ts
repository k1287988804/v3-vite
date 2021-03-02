declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module '*.scss'{
	const sass:any
	export default sass
}
declare module '*.less'{
	const less:any
	export default less
}
