var React=require('react');
var ReactRouter=require('react-router');
var Link=ReactRouter.Link;

var Header=React.createClass({
    render:function () {
        return <section className="nav navbar-default col-xs-3">
                <ul className="nav navbar-default affix" role="tablist">
                    <li role="presentation"><Link to="/">README.md问题</Link></li>
                    <li role="presentation"><Link to="/book">WEB书籍整理</Link></li>
                    <li role="presentation"><Link to="/myweb">WEB个人修养</Link></li>
                    <li role="presentation"><Link to="/ps">Ps中的快捷键</Link></li>
                </ul>
               </section>
    }
});
module.exports=Header;