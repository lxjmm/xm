var express=require('express'),
	router=express.Router();

	router.post('/login',function(req,res){

		if(req.body.username!='lxj' || req.body.password!=123456){

			res.redirect('http://localhost:8002/#/login');
		}else{
			res.redirect('http://localhost:8002/#/index');
		}
	})
module.exports=router;