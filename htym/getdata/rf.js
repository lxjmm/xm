var express=require('express'),
	router=express.Router(),
	fs=require('fs');
	
router.get('/rf',function(req,res){
	
	fs.readFile('./data/da.json',function(err,data){
		res.jsonp( JSON.parse(data) );
	})
})
module.exports=router;

