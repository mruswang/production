var React=require('react');
var Header=require('./header.react.jsx');

var About=React.createClass({
    render:function () {
        return <div>
            <div className="col-xs-12">
                <Header className="col-xs-3" />
                <div className="col-xs-9">
                    <p>1.取消当前命令：Esc；</p>
                    <p>2.工具选项板：Enter；</p>
                    <p>3. 选项板调整：Shift＋Tab；</p>
                    <p>4. 退出系统：Ctrl＋Q； </p>
                    <p>5.获取帮助：F1； </p>
                    <p>6.剪切选择区：F2 / Ctrl＋X；</p>
                    <p>7. 拷贝选择区：F3 / Ctrl＋C；</p>
                    <p>8.粘贴选择区：F4 / Ctrl＋V； </p>
                    <p>9.显示或关闭画笔选项板：F5； </p>
                    <p>10.显示或关闭颜色选项板：F6；</p>
                    <p>11.显示或关闭图层选项板：F7；</p>
                    <p>12.显示或关闭信息选项板：F8；</p>
                    <p>13. 显示或关闭动作选项板：F9； </p>
                    <p>14. 显示或关闭选项板、状态栏和工具箱：Tab； </p>
                    <p>15. 全选:Ctrl＋A; 反选:Shift＋Ctrl＋I; 取消选择区:Ctrl＋D；</p>
                    <p>16.选择区域移动：方向键；</p>
                    <p>17.将图层转换为选择区：Ctrl＋单击工作图层；</p>
                    <p>18.选择区域以10个像素为单位移动：Shift＋方向键；</p>
                    <p>19. 复制选择区域：Alt＋方向键；</p>
                    <p>20. 填充为前景色：Alt＋Delete； 填充为背景色：Ctrl＋Delete；</p>
                    <p>21.调整色阶工具：Ctrl＋L； </p>
                    <p>22. 调整色彩平衡：Ctrl＋B； 调节色调/饱和度：Ctrl＋U；</p>
                    <p>23. 自由变形：Ctrl＋T； </p>
                    <p>24. 增大笔头大小：“中括号”； 减小笔头大小：“中括号”；</p>
                    <p>25. 选择最大笔头：Shift＋“中括号”； 选择最小笔头：Shift＋“中括号”；</p>
                    <p>26. 重复使用滤镜：Ctrl＋F；</p>
                    <p>27. 移至上一图层：Ctrl＋“中括号”； 排至下一图层：Ctrl＋“中括号”；
                        移至最前图层：Shift＋Ctrl＋“中括号”； 移至最底图层：Shift＋Ctrl＋“中括号”； </p>
                    <p>28. 激活上一图层：Alt＋“中括号”； 激活下一图层：Alt＋“中括号”； </p>
                    <p>29.合并可见图层：Shift＋Ctrl＋E；</p>
                    <p>30.放大视窗：Ctrl＋“＋”； 缩小视窗：Ctrl＋“－”； </p>
                    <p>31. 放大局部：Ctrl＋空格键＋鼠标单击； 缩小局部：Alt＋空格键＋鼠标单击；</p>
                    <p>32. 翻屏查看：PageUp/PageDown； </p>
                    <p>33.显示或隐藏标尺：Ctrl＋R； 显示或隐藏虚线：Ctrl＋H； 显示或隐藏网格：Ctrl＋”。 </p>
                    <p>34. 打开文件：Ctrl＋O； </p>
                    <p>35. 关闭文件：Ctrl＋W； </p>
                    <p>36. 文件存盘：Ctrl＋S； </p>
                    <p>37. 打印文件：Ctrl＋P；</p>
                    <p>38. 恢复到上一步：Ctrl＋Z；</p>
                </div>
            </div>
        </div>
    }
});
module.exports=About;