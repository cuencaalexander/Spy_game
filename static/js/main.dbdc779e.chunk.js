(this.webpackJsonpspy_game=this.webpackJsonpspy_game||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),i=(n(14),n.p,n(8),n(2)),h=n(3),o=n(4),u=n(6),l=n(5),j=n(0),b=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this,e=Object.keys(this.props.charactersLocation);e.sort((function(t,e){return t[1]-e[1]}));var n=Object.keys(this.props.charactersCount).map((function(e){return[e,t.props.charactersCount[e]]}));return n.sort((function(t,e){return e[1]-t[1]})),n.length>5&&(n=n.slice(0,5)),n=n.map((function(t){return t[0]})),Object(j.jsxs)("div",{children:[" ",e.map((function(e){return Object(j.jsxs)("li",{className:n.includes(e)?"highlighted":"",children:[" ",e," : ",t.props.charactersCount[e]," "]})}))," "]})}}]),n}(c.a.Component),p=b,d=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).state={value:""},a.charactersCount={},a.charactersLocation={},a.handleChange=a.handleChange.bind(Object(o.a)(a)),a}return Object(h.a)(n,[{key:"handleChange",value:function(t){this.charactersCount={},this.charactersLocation={};for(var e=t.target.value,n=0;n<e.length;n++)e[n]in this.charactersCount?this.charactersCount[e[n]]+=1:(this.charactersCount[e[n]]=1,this.charactersLocation[e[n]]=n);this.setState({value:t.target.value})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:Object(j.jsx)("textarea",{value:this.state.value,onChange:this.handleChange})}),Object(j.jsxs)("p",{children:[" ",Object.keys(this.charactersCount)," "]}),Object(j.jsx)(p,{charactersCount:this.charactersCount,charactersLocation:this.charactersLocation})]})}}]),n}(c.a.Component);var O=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(d,{})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),a(t),c(t),r(t),s(t)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root")),v()},8:function(t,e,n){}},[[16,1,2]]]);
//# sourceMappingURL=main.dbdc779e.chunk.js.map