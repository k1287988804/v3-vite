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
          haoshi: "好事发生了~~~~~",
          colorGreen: 'green',
          elArr: ['vue','react','angular','vuex','jsx','redux'],
      })

      const router = useRouter()
      const getValue = (str: string) => {
          state.value = str
      }
      const fun = () => {
        state.haoshi = state.haoshi.slice(1, 10) + state.haoshi[0]
        console.log('好事发生了~~~~~')
      }

      onMounted(()=>{
          const { currentRoute: { _value: { query }} } = router
          state.name = query.name
      })

      const newcom = () => <>
        <h1 class="colorGreen">{state.name}</h1>
        <button onClick={fun}>点我有好事发生</button>
        <p style="margin-top: 10px">{state.haoshi}</p>
        <ul style="margin: 10px auto">
          {state.elArr.map(item => <li style={{color: 'red', listStyle: 'none'}}>{item}</li>)}
        </ul>
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