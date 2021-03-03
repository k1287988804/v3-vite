import { ref, computed } from 'vue'

export default function useSearch(table){
    const search = ref<string>('')
    
    const love = computed(() => {
        if(search.value){
            return table.value.filter(item => {
                if(item.name.indexOf(search.value) !== -1){
                    return true
                }
            })
        }else {
            return [{love: '无'}]
        }
    })

    return {
        search,
        love
    }
}