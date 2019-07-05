## 基本矩形
    填充矩形：fillRect(x,y,width,height)
    边框矩形：strokeRect(x,y,width,height)
    清楚矩形：clearRect(x,y,width,height) 清楚指定区域并拾起完全透明。
## 填充与描边
    fillStyle 填充
    strokeStyle 描边。

## canvas 状态
    变换矩阵信息
    当前剪贴区域
    画布属性的当前值
        --globalAlpha
        --strokeStyle
        --textAlign,
        --font
        --shadowBlur,shadowColor,shadowOffsetX.
    当钱路径 当前位图不属于保存的状态。
* 保存状态到堆栈 context.save()
* 调出最好存储的堆栈回复画布 context.restore()

## bezierCurveTo(ap1x,cp1y,cp2x,cp2y,x,y)
三次贝塞尔曲线 前两个点是控制顶点，后面一个点是终点

## rect
 context.rect(0,0,50,50)表示绘制一个0,0 宽50 高50的矩形区域
 context.clip() 把rect函数定义的矩形区域为裁剪区域。

## 绘制合成 
- glonalAlpha 和globalCompositeOperation
## 画布变换
- 旋转 context.setTransform(1,0,0,1,0,0);
- 对画布运用 setTransform()函数,将变换应用到形状和路径上.
- context.rotate()旋转画布,之后绘制的形状也会跟着旋转
- context.translate() 移动画布的原点
- context.scale()缩放形状
