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
    <div style="margin-top: 20px;">他（她）喜欢：{{love[0].love}}</div>
    <div style="margin-top: 10px">
        转账给他：<input v-model="money"/>
        <button @click="sendMoney">确定转账</button>
    </div>
</div>
</template>

<script>
import { getMockData, sendMoney } from '../api/server'

// 逻辑功能1 根据用户输入的id请求借口返回数据并渲染在页面上
// 逻辑功能2 根据用户输入的姓名查询他的喜好
// 逻辑功能3 提交表单给他打钱

export default {
    data(){
        return {
            // 逻辑1
            id: 1,
            table: [], // id name
            // 逻辑2
            search: '',
            // 逻辑3
            money: 0
        }
    },
    watch: {
        // 逻辑1
        id: 'getMockData'
    },
    computed: {
        // 逻辑2
        love(){
            if(this.search){
                return this.table.filter(item => {
                    if(item.name.indexOf(this.search) !== -1){
                        return true
                    }
                })
            }else {
                return [{love: '无'}]
            }
        }
    },
    methods: {
        // 逻辑1
        async getMockData(){
            const { data } = await getMockData({id: this.id})
            this.table = data 
        },
        // 逻辑3
        async sendMoney(){
            const res = await sendMoney({money: this.money})
            if(res.code === 0){
                alert('打钱成功Q_Q！！'+ res.msg)
            }
        }
    },
    mounted(){
        this.getMockData()
    }
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