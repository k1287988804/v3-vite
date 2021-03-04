const express = require('express')
const app = express()


console.log('server running...')

app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})

app.get('/api/getMockData', function(req, res){
	let { id } = req.query
	id = Number(id)
	const mockData = {
		1: [
			{id: 11, name: '张三1', age: 17, love: '吃', money: 200},
			{id: 12, name: '李四1', age: 18, love: '喝', money: 500},
			{id: 13, name: '王五1', age: 19, love: '玩', money: 20000},
		],
		2: [
			{id: 21, name: '张三2', age: 22, love: '狗', money: 8888},
			{id: 22, name: '李四2', age: 23, love: '猫', money: 1314},
			{id: 23, name: '王五2', age: 24, love: '鼠', money: 521},
		],
		3: [
			{id: 31, name: '张三3', age: 25, love: '游戏', money: 666},
			{id: 32, name: '李四3', age: 26, love: '音乐', money: 555},
			{id: 33, name: '王五3', age: 27, love: '体育', money: 333},
		]
	}
	if([1,2,3].includes(id)){
		res.send({
			code: 0,
			data: mockData[id]
		})
	}else{
		res.send({
			code: 412,
			data: '无数据'
		})
	}
})

app.post('/api/sendMoney', function(req, res){
	req.on('data', function(data){
		let obj = JSON.parse(data)
		let { money } = obj
		console.log('收到打款：'+ money + '元')
		res.send({
			code: 0,
			msg: '感谢老板'
		})
	})
})



app.listen(3000)