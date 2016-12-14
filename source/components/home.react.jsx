import React from 'react';
import {Link} from 'react-router';

import Header from './header.react.jsx';
var Home=React.createClass({
    render:function () {
        return <div>
            <div className="col-xs-12">
                <Header className="col-xs-3" />
                <div className="col-xs-8">
                    <article>
                        <p>针对中文,演示Markdown的各种语法</p>
                        <h1>大标题</h1>
                        <p>大标题一般显示工程名,类似html的&lt;h1&gt;你只要在标题下面跟上=====即可</p>
                        <h2>中标题</h2>
                        <p>中标题一般显示重点项,类似html的&lt;h2&gt;你只要在标题下面输入------即可</p>
                        <h3>小标题</h3>
                        <p>小标题类似html的&lt;h3&gt;  小标题的格式如下 ### 小标题  注意#和标题字符中间要有空格</p>
                        <h3>标题的等级表示法</h3>
                        <pre>关于标题的等级表示法，共分为六个等级，显示的文本大小依次减小。不同等级之间以井号#的个数来标识。一级标题有一个#，二级标题有两个#，以此类推。
                        <p>#一级标题</p>
                        <p>##二级标题</p>
                        <p>###三级标题</p>
                        <p>####四级标题</p>
                        <p>#####五级标题</p>
                        <p>######六级标题</p>
                        </pre>
                        <h3>注意!!!下面所有语法的提示我都先用小标题提醒了!!!</h3>
                        <h3>单行文本框</h3>
                        <pre><code>这是一个单行的文本框,只要两个Tab再输入文字即可</code></pre>
                        <h3>多行文本框</h3>
                        <pre><code>这是一个有多行的文本框你可以写入代码等,每行文字只要输入两个Tab再输入文字即可这里你可以输入一段代码
                        </code></pre>
                        <h3>链接</h3>
                        <p><a href="http://www.google.com">点击这里你可以链接到www.google.com</a></p>
                        <h3>只是显示百度的图片</h3>
                        <p>图片</p>
                        <h3>文字被些字符包围</h3>
                        <p>文字被些字符包围</p>
                        <p>只要再文字前面加上&gt;空格即可</p>
                        <p>如果你要换行的话,新起一行,输入&gt;空格即可,后面不接文字但&gt; 只能放在行首才有效</p>
                        <h3>文字被些字符包围,多重包围</h3>
                        <p>文字被些字符包围开始</p>
                        <p>只要再文字前面加上&gt;空格即可</p>
                        <p>如果你要换行的话,新起一行,输入&gt;空格即可,后面不接文字</p>
                        <p>但&gt; 只能放在行首才有效</p>
                        <h3>部分文字的高亮</h3>
                        <p>如果你想使一段话部分文字高亮显示，来起到突出强调的作用，那么可以把它用``包围起来。
                            注意这不是单引号，而是Tab键和数字1键左边的按键（注意使用英文输入法）。
                            example：
                            Thank<code>You</code>. Please <code>Call</code> Me <code>Coder</code></p>
                        <p>写文章时经常会用到list列表条目。GitHub的markdown语法里也支持使用圆点符。编辑的时候使用的是星号*。</p>

                        <ul>
                            <li>国籍：中国</li>
                            <li>城市：北京</li>
                            <li>大学：清华大学
                                注意：星号*后面要有一个空格。否则显示为普通星号。
                                    GitHub还支持多级别的list列表条目：</li>
                            <li>编程语言

                                <ul>
                                    <li>脚本语言

                                        <ul>
                                            <li>Python</li>
                                        </ul></li>
                                </ul></li>
                        </ul>
                        <h3>特殊字符处理</h3>
                        <p>有一些特殊字符如&lt;,#等,只要在特殊字符前面加上转义字符\即可你想换行的话其实可以直接用html标签&lt;br /&gt;</p>
                        <h3>插入表格</h3>
                        <p>在Markdown中插入表格比较麻烦，需要Markdown的扩展语法，但是插入HTML就没有那么麻烦了，
                            因此我们可以通过曲线救国的方式来插入表格。
                            在Markdown中，<code>&amp;</code>符号和<code>&lt;</code>会自动转换成HTML。</p>
                    </article>
                </div>
            </div>

        </div>



    }
});
export default Home;