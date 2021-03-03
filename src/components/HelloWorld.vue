<template>
  <h1>{{ msg }}</h1>
  <button @click="inCrement"> count is: </button>
  <p style="margin: 10px auto 10px;">{{ count }}</p>
  <button @click="jump('kong', false)">路由跳转到about</button>
  <button @click="jump('kong', true)" style="margin-left:10px">路由跳转到about2</button>
  <button @click="jump3" style="margin-left:10px">路由跳转到about3</button>
  <button @click="jump4" style="margin-left:10px">路由跳转到about4</button>
  <button @click="jump5" style="margin-left:10px">路由跳转到about5</button>
  <button @click="tiao" style="margin-left:10px">跳转到tsx页面</button>
</template>

<script lang="ts">
  import { defineComponent, computed, ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import { key } from '../store'

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

      const jump3 = () => {
        router.push('/about3')
      }

      const jump4 = () => {
        router.push('/about4')
      }

      const jump5 = () => {
        router.push('/about5')
      }

      return {
        msg,
        count,
        jump,
        jump3,
        jump4,
        tiao,
        inCrement: () => store.commit('increment')
      }
    }
  })
</script>