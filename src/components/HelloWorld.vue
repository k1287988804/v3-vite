<template>
  <h1>{{ msg }}</h1>
  <button @click="inCrement"> count is: </button>
  <p>{{ count }}</p>
  <button @click="jump('kong', false)">路由跳转到about</button>
  <button @click="jump('kong', true)" style="margin-left:10px">路由跳转到about2</button>
  <button @click="shuchu" style="margin-left:10px">输出</button>
  <button @click="tiao" style="margin-left:10px">跳转到tsx页面</button>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { key } from '../store'

  const shuchu = () => console.log("6666")

  export default defineComponent({
    name: 'HelloWorld',
    setup() {
      const msg = ref("欢迎来到Vue3+Vite世界")
      const store = useStore(key)
      const count = computed(() => store.state.count)
      const router = useRouter()
      const jump = (str: String, bo: Boolean) => {
        const s = bo ? '2' : ''
        router.push(`/about${s}?name=${str}`)
      }
      const tiao = () => {
        router.push('/new')
      }

      return {
        msg,
        count,
        jump,
        tiao,
        shuchu,
        inCrement: () => store.commit('increment')
      }
    }
  })
</script>