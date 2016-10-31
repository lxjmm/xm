var express=require('express'),
	app=express(),
	ejs=require('ejs'),
	bodyParser=require('body-Parser');

app.set('views',__dirname+'/views/')
app.set('view engine','ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

require('./config.js')(app);

app.listen(8080,function(){
	console.log('开启服务器');
})