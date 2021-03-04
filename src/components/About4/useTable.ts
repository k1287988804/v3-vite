import { ref, onMounted, watch, reactive, toRefs } from 'vue'
import { getMockData } from '/@/api/server'

export default function useTable(){
    // const id = ref<number>(1)
    // const table = ref<Object[]>([])

    const state = reactive({
        id: 1,
        table: []
    })

    const getMD = async () => {
        const { data } = await getMockData({id: state.id})
        state.table = data
    }

    watch(() => state.id, (newVal, oldVal) => getMD())

    onMounted(() => getMD())

    return toRefs(state)
}