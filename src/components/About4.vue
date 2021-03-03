<template>
<div>
    <input v-model="id" />
    <table style="margin: 20px auto; width: 300px;">
        <thead style="width: 300px;">
            <tr>
                <th>编号</th>
                <th>姓名</th>
                <th>年龄</th>
                <th>喜好</th>
            </tr>
        </thead>
        <tr v-for="item in table">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.age}}</td>
            <td>{{item.love}}</td>
        </tr>
    </table>
    <input v-model="search" placeholder="请输入查询的姓名"/>
    <div style="margin-top: 20px;">他（她）喜欢：{{love && love[0].love}}</div>
    <div style="margin-top: 10px">
        转账给他：<input v-model="money"/>
        <button @click="sM">确定转账</button>
    </div>
</div>
</template>

<script>
import useTable from '/@/components/About4/useTable'
import useSearch from  '/@/components/About4/useSearch'
import useSend from '/@/components/About4/useSend'

// 逻辑功能1 根据用户输入的id请求借口返回数据并渲染在页面上
// 逻辑功能2 根据用户输入的姓名查询他的喜好
// 逻辑功能3 提交表单给他打钱

export default {
    setup(){
        // 逻辑1
        const { id, table, getMD } = useTable()

        // 逻辑2
        const { search, love } = useSearch(table)

        // 逻辑3
        const { money, sM} = useSend()

        console.log(id)    
        console.log(table)
        
        return {
            id,
            table,
            search,
            love,
            money,
            sM
        }
    },
}
</script>

<style lang='less' scoped>
table
{
    border-collapse: collapse;
    margin: 0 auto;
    text-align: center;
}
table td, table th
{
    border: 1px solid #cad9ea;
    color: #666;
    height: 30px;
}
table thead th
{
    background-color: #CCE8EB;
    width: 100px;
}
table tr:nth-child(odd)
{
    background: #fff;
}
table tr:nth-child(even)
{
    background: #F5FAFA;
}

</style>