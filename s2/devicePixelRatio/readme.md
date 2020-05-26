>(zoom)[https://www.quirksmode.org/mobile/viewports.html]
> viewport 尺寸
document.documentElement.clientWidth and -Height doesn’t include the scrollbar,
 while window.innerWidth/Height does. 
 > html尺寸
 document.documentElement.offsetWidth and -Height. 可以设置
 > 点击元素的属性
 pageX/Y gives the coordinates relative to the <html> element in CSS pixels.
clientX/Y gives the coordinates relative to the viewport in CSS pixels.
screenX/Y gives the coordinates relative to the screen in device pixels.