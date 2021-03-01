<template>
  <h1 class="colorGreen">{{ name }}</h1>
  <p>{{ value }}</p>
  <Son @getValue='getValue'/>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import Son from '/@/components/Son.vue'


export default defineComponent({
  name: 'About',
  data() {
    return {
      name: 'Hello Vue 3.0 + Vite!'
    }
  },
  components: {
      Son
  },
  setup() {
      const state = reactive({
          name: '',
          value: "暂时未收到子组件传过来的值！",
          colorGreen: 'green',
      })

      const router = useRouter()
      const getValue = (str: string) => {
          state.value = str
      }

      onMounted(()=>{
          const { currentRoute: { _value: { query }} } = router
          state.name = query.name
      })

      return {
          ...toRefs(state),
          getValue
      }
  }
})
</script>
<style lang="less" scoped>
.colorGreen {
  color: v-bind(colorGreen)
}
</style>