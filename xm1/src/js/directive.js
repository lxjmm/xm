
function fR($rootScope){
	return{
		link:function(e,ele){
			new IScroll('#main',{
				click:true
			})
			var ls=window.localStorage;

			$('.notfor').on('tap',"b",function(){
				var gm=$(this).text()
				ls.setItem('gm',gm);
			})

			$('.dls').on('tap',function(){
				
			})
		}
	}	
}
function sR($rootScope){
	return{
		
		link:function(e,ele){
			new IScroll('#scroll');
			
		}
	}
}
function oS($rootScope){
	return{
		link:function(e,ele){
			new Swiper('.indexpage',{
				pagination:'.pagination'
			})
		}
	}
}
function gM($rootScope){
	return{
		link:function(e,ele){
			var ls=window.localStorage;
			gm=ls.getItem('gm')
			$('.t').text(gm);
			var s=new IScroll('#main')
		}
	}
}
function bL($rootScope){
	return{
		link:function(e,ele){
			new IScroll('#main');
		}
	}
}
function dS($rootScope){
	return{
		link:function(e,ele){
			new IScroll("#scroll");
		}
	}
}
function lS($rootScope){
	return{
		link:function(e,ele){
			new IScroll("#scroll");
		}
	}
}
function yY($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#main',{
				click:true
			})
			new Swiper('.ban',{
				loop:true,
				autoplay:1000
			})
		}
	}
}
function fS($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#main',{
				click:true
			})
			new Swiper('.b',{
				loop:true,
				autoplay:1000
			})
		}
	}
}
function cX($rootScope){
	return{
		link:function(e,ele){
		 new IScroll('#main',{
				click:true
			})
		 new Swiper('.ba',{
				loop:true,
				autoplay:1000
			})
		}
	}
}
function pH($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#main',{
				click:true
			})
		}
	}
}
function gD($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#main',{
				click:true
			})
		}
	}
}
function hT($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#to',{
				click:true
			})
		}
	}
}
function dT($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#to',{
				click:true
			})
		}
	}
}
function sS($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#main',{
				click:true
			})
		}
	}
}
function wS($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#main',{
				click:true
			})
			new Swiper('.ban',{
				loop:true,
				autoplay:1000
			})
		}
	}
}
function iS($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#main',{
				click:true
			})
			var ls=window.localStorage;
			
			$('.pa').on('tap','li',function(){
				var list=$(this).find('a').text();
				ls.setItem('list',list)
			})
			
		}
	}
}
function hS($rootScope){
	return{
		link:function(e,ele){
			var s=new IScroll('#main',{
				click:true
			})
			var ls=window.localStorage;
			var list=ls.getItem('list');
			var da="",str="",xz='';
			$('.tt').text(list);
			$('.ol').on('tap','li',function(){
				xz=$(this).text();
				index=$(this).index();
				ls.setItem('xz',xz)
				ls.setItem('index',index)
			})	
		}
	}
}
function rX($rootScope){
	return{
		link:function(e,ele){
			var ls=window.localStorage;
			var xz=ls.getItem('xz'),
				index=ls.getItem('index');
			$('.tt').text(xz);
			var str="";
			$.ajax({
				url:'http://localhost:8080/rf?callback=?',
				dataType:'jsonp',
				success:function(data){
					
					$.each(data[index],function(key,val){
						str+'<div>';
						$.each(val,function(k,v){
							str+='<dl><dt><img src="./music/'+v.img+'.png"></dt><dd><p><b>'+v.name+'</b></p><p>'+v.size+'-'+key+'</p><img src="./music/1.png"></dd><span class="l">演唱</span></dl>';
						})
						str+='</div>';
					})
					$('.m').append(str);
				}
			})
			var s=new IScroll('#main',{
				click:true
			})
		}
	}
}
angular.module('myapp')
			.directive('gD',gD)
			.directive('fR',fR)
			.directive('sR',sR)
			.directive('oS',oS)
			.directive('gM',gM)
			.directive('bL',bL)
			.directive('dS',dS)
			.directive('lS',lS)
			.directive('rX',rX)
			.directive('yY',yY)
			.directive('fS',fS)
			.directive('cX',cX)
			.directive('pH',pH)
			.directive('hT',hT)
			.directive('dT',dT)
			.directive('sS',sS)
			.directive('wS',wS)
			.directive('iS',iS)
			.directive('hS',hS)
/*	
	1.directive绑定的事件，没有$scope参数？？
*/