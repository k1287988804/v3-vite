import { ref, onMounted, watch } from 'vue'
import { getMockData } from '/@/api/server'

export default function useTable(){
    const id = ref<number>(1)
    const table = ref<Object[]>([])

    const getMD = async () => {
        const { data } = await getMockData({id: id.value})
        table.value = data
    }

    watch(id, (newVal, oldVal) => getMD())

    onMounted(() => getMD())

    return {
        id,
        table,
        getMD
    }
}