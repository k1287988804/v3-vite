import { defineComponent, Fragment } from 'vue'
import useTable from '/@/components/About4/useTable'
import useSearch from  '/@/components/About4/useSearch'
import useSend from '/@/components/About4/useSend'
import './about5.less'

export default defineComponent({
    setup(){
        // 逻辑1
        const { id, table } = useTable()

        // 逻辑2
        const { search, love } = useSearch(table)

        // 逻辑3
        const { money, sM } = useSend()

        return () => (
            <div>
                <input  v-model={id.value} />
                <table style={{margin: '20px auto',width: '300px'}}>
                    <thead style={{width: '300px'}}>
                        <tr>
                            <th>编号</th>
                            <th>姓名</th>
                            <th>年龄</th>
                            <th>喜好</th>
                        </tr>
                    </thead>
                    {table.value.map(item => {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.love}</td>
                        </tr>
                    })}
                </table>
                <input v-model={search.value} placeholder="请输入查询的姓名"/>
                <div style={{marginTop: '20px'}}>他（她）喜欢：{love.value && love.value[0].love}</div>
                <div style={{marginTop: '20px'}}>
                    转账给他：<input v-model={money.value}/>
                    <button onClick={sM}>确定转账</button>
                </div>
            </div>
        )
    }
})