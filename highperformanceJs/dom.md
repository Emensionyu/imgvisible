# 渲染书变化的排队和刷新
> 浏览器的机制通过队列优化批量执行
> 队列刷新获取布局的相关信息,offsetY getComputedStyle()
> 最小化重排重绘,最小操作dom,合并修改代码
> 缓存布局信息 ,减少布局信息的而获取次数.
> 让元素脱离动画流,使用绝对定位.