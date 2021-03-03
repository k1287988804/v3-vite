import { ref, reactive, toRefs } from 'vue'
import { sendMoney } from '/@/api/server'

export default function useSend(){
    const state = reactive({
        money: 0
    })

    const sM = async () => {
        const res = await sendMoney({money: state.money})
        if(res.code === 0){
            alert('打钱成功Q_Q！！'+ res.msg)
        }
    }

    return {
        ...toRefs(state),
        sM
    }
}