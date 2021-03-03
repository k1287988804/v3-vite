<template> 
    <button style="margin-top: 10px;" @click="sendValue">传值</button>
</template>

<script lang='ts'>
import { defineComponent, PropType, reactive } from 'vue';

interface Book {
  title: string,
  author: string,
  year?: number,  // 可有可无
}

export default defineComponent({
  name: '',
  props: {
     n: String,
     success: { type: String },
     getValue: { type: Function as PropType<() => {}> },
     book: {  
       type: Object as PropType<Book>,
       required: false
     }
  },
  setup: (props, {emit}) => {

    const book = reactive<Book>({
      title: '1',
      author: '2'
      // d: '3'
    })

    const sendValue = () => {
        emit('getValue', '接收到了')
    }
    return {
        sendValue
    };
  }
});
</script>

<style lang='less' scoped>
</style>