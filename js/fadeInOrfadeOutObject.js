
function FadeInOrfadeOut(option){
	
	this._init_(option);
}

FadeInOrfadeOut.prototype = {

	 constructor : FadeInOrfadeOut,

	_init_: function(option){
		_this = this;
		this.num = 0;
		this.timer = null;
		this.wrap = option.wrap;
		this.imgsWrap = option.imgsWrap;
		this.dot = option.dot;
		this.dotCur = option.dotCur;
		this.nextId = option.nextId;
		this.prevId = option.prevId;
		this.imgs = option.imgs;
		this.imgsALink = option.imgsALink;
	},
	//添加DOM
	add: function(){
		// var _this = this;
		//添加包裹imgs的容器
		var imgsWrap = this.imgsWrap.substr(1);
		// console.log(imgsWrap)
		$(this.wrap).append('<div class="'+ imgsWrap +'"></div>');
		// 添加img
		console.log(this.imgs);
		console.log(this.imgsALink);
		$.each(this.imgs,function(index,item){
			$(_this.wrap).find(_this.imgsWrap).append('<a href="'+_this.imgsALink[index]+'"><img src="'+ item +'"></a>')
		})

		//创建小圆点
		var dot = this.dot.substr(1)
		$(this.wrap).append('<ol class="'+ dot +'"></ol>');
		$.each(this.imgs,function(index,item){
			$(_this.wrap).find(_this.dot).append('<li></li>')
		})
		//设置圆点的margin-left值；让其居中；
		$(this.dot).css('margin-left',-$(this.dot).find('li').outerWidth(true)*$(this.dot).find('li').length/2)
		// 给第一个圆点添加当前样式
		$(this.dot).find('li').first().addClass('current');

		//在页面上添加左右箭头
		var nextId = this.nextId.substr(1)
		var prevId = this.prevId.substr(1)
		$(this.wrap).append('<div id="'+ nextId +'">&gt;</div>');
		$(this.wrap).append('<div id="'+ prevId +'">&lt;</div>');

		//设置每个图片的z-index
		$(this.wrap).find('a').each(function(index){
	        $(this).css({"z-index":$(this.wrap).find('a').length-$(this).index()})
    	})
	},
	//执行一次的动画
	play:function(index){
		$(this.wrap).find('a').hide().eq(index).fadeIn();
	    	$(this.wrap).find(this.dot).find('li').removeClass("current").eq(index).addClass("current");
	},
	//自动轮播
	autoPlay:function(){
		this.timer = setInterval(function(){
		    if(_this.num < $(_this.wrap).find('a').length-1){
			_this.num++;
		    }else{
			_this.num = 0;
		    }
		    _this.play(_this.num)
		},3000)
	},
	//上一个箭头点击
	prevArrowClick: function(){
		if(_this.num < 0){
		    _this.num = $(_this.wrap).find('a').length-2;
		}else{
		     _this.num--;
		}
		_this.play(_this.num);
	},
	//下一个箭头点击
	nextArrowClick : function(){
		if(_this.num < $(_this.wrap).find('a').length-1){
		       _this.num++;
		}else{
		       _this.num = 0
		}
		 _this.play(_this.num);
	},
	//鼠标经过
	overContainer : function(){
		$(_this.wrap).find(_this.nextId).show();
		$(_this.wrap).find(_this.prevId).show();
		clearInterval(_this.timer);
	},
	//鼠标离开
	leaveContainer : function(){
		$(this.wrap).find(this.nextId).hide();
		$(this.wrap).find(this.prevId).hide();
		 _this.autoPlay();
	},
	//点击小圆点
	clickDot : function(){
    		_this.play(this.num);
	}
}


