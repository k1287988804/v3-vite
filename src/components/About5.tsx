import { defineComponent, Fragment } from 'vue'
import useTable from '/@/components/About4/useTable'
import useSearch from  '/@/components/About4/useSearch'
import useSend from '/@/components/About4/useSend'
import './about5.less'

export default defineComponent({
    setup(){
        // 逻辑1
        const { id, table, getMD } = useTable()

        // 逻辑2
        const { search, love } = useSearch(table)

        // 逻辑3
        const { money, sM} = useSend()

        for(let item in table){
            console.log(item)
            console.log(table[item])
        }

        return () => (
            <Fragment>
                {id.value}
                <input v-model={id.value} />
                <table style="margin: 20px auto; width: 300px;">
                    <thead style="width: 300px;">
                        <tr>
                            <th>编号</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>喜好</th>
                        </tr>
                    </thead>
                    {/* {table.value.map(item => {
                        return <>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.love}</td>
                        </>
                    })} */}
                </table>
                <input v-model={search.value} placeholder="请输入查询的姓名"/>
                <div style="margin-top: 20px;">他（她）喜欢：{love.value && love.value[0].love}</div>
                <div style="margin-top: 10px">
                    转账给他：<input v-model={money.value}/>
                    <button onClick={sM}>确定转账</button>
                </div>
            </Fragment>
        )
    }
})