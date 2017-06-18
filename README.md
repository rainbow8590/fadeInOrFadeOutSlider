#淡入淡出轮播图
```
    这个轮播图是基于jquery写的，已经封装好了，再次使用的时候只需要配置相应的参数就可以使用。
    具体实现的效果：
    1.点击左右箭头可以平滑的切换，下面的小圆点也跟着发生状态改变;
    2.点击下面的小圆点，小圆点的状态发生改变，对应的图片也显示出来;
```
####使用方法：
    #####html:
    ```    
        <div id="wrap"></div>
        注：div的id可以自己任意设置。
    ```

    #####js：
    ```
         调用方法:
         1.在HTML页面引入fadeInOrfadeOut.js;
            <script src="fadeInOrfadeOut.js"></script>.
         2.在script中调用：
            fadeInOrfadeOut({
                wrap:'#wrap',           //轮播图最外层的容器的id
                imgsWrap:'.images',     //图片的父级元素的class
                dot:'.dot',             //圆点父级ol的class
                dotCur:'current',       //小圆点当前状态的class
                nextId:'#next',         //右箭头的id
                prevId:'#prev',         //左箭头的id
                //img的路径
                imgs:['images/slide-1.jpg','images/slide-2.jpg','images/slide-3.jpg','images/slide-4.jpg','images/slide-5.jpg'],
                //img对应的链接
                imgsALink:['http://www.slide1.com','http://www.slide2.com','http://www.slide3.com','http://www.slide4.com','http://www.slide5.com']
            });
            注： 因为class和id 在js中已经进行了处理，所以在设置参数的时候必须将前面的'.'或'#'加上

    ```
