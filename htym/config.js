var rf=require('./getdata/rf.js'),
	login=require('./getdata/login.js')

module.exports=function(app){
	app.get('/rf',rf);
	app.post('/login',login)
}
