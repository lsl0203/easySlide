webpackJsonp([0],{0:function(n,t,i){(function(n){!function(){i(2),i(6),i(8),i(10);var t=i(13),o=new t;o.addBodyListener(),o.addListElement(n("#list1"),n("#btn1")),o.addListElement(n("#list2"),n("#btn2"))}()}).call(t,i(1))},6:function(n,t,i){var o=i(7);"string"==typeof o&&(o=[[n.id,o,""]]);i(5)(o,{});o.locals&&(n.exports=o.locals)},7:function(n,t,i){t=n.exports=i(4)(),t.push([n.id,".listWrapper{margin:50px 0 200px}.list{float:left;margin:50px}",""])},13:function(n,t){!function(){var t=function(){};t.prototype={addListElement:function(n,t){t.click(function(){var t=new Date-0;n.append(['<li id="',t,'">',t,"</li>"].join(""))})},addBodyListener:function(){document.body.addEventListener("click",function(n){var t=n.target.id;console.log("事件委托，来自："+t)},!1)}},n.exports=t}()}});