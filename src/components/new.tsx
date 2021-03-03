import { defineComponent, reactive, onMounted, Fragment } from 'vue'
import './new.less'

export default defineComponent({
	setup(props, ctx){
		const state = reactive({
			name: '小王',
			age: 18
		})

		onMounted(()=>{
			console.log(11111)
		})

		const hehe = () => state.age += 1

		return () => (
			<Fragment>
				<div>{state.name}</div>
				<div>{state.age}</div>
				<input v-model={state.age}/>
				<button class='a' onClick={hehe}>点我有好事发生</button>
			</Fragment>
		)
	}
})


