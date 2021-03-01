<script lang="tsx">
import { defineComponent, reactive, onMounted, toRefs, Fragment } from 'vue'
import { useRouter } from 'vue-router'
import Son from '/@/components/Son.vue'


export default defineComponent({
  name: 'About',
  data() {
    return {
      name: 'Hello Vue 3.0 + Vite!',
    }
  },
  components: {
      Son
  },
  setup(props, ctx) {
      const state = reactive({
          name: '',
          value: "暂时未收到子组件传过来的值！",
          num: 0,
          colorGreen: 'green',
          elArr: [1,2,3,4,5],
      })

      const router = useRouter()
      const getValue = (str: string) => {
          state.value = str
      }
      const fun = () => {
        state.num ++
        console.log('好事发生了')
      }

      onMounted(()=>{
          const { currentRoute: { _value: { query }} } = router
          state.name = query.name
      })

      const newcom = () => <>
        <h1 class="colorGreen">{state.name}</h1>
        <button onClick={fun}>点我有好事发生</button>
        <p>{state.num}</p>
        {state.elArr.map(item => <span style={{color: 'red'}}>{item}</span>)}
      </>

      return () => newcom()
  },
})
</script>
<style lang="less" scoped>
.colorGreen {
  color: v-bind(colorGreen)
}
</style>