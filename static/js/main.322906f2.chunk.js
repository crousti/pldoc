(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[0],{179:function(e,t,a){e.exports=a(374)},184:function(e,t,a){},188:function(e,t,a){},249:function(e,t,a){},261:function(e,t,a){},282:function(e,t,a){},372:function(e,t,a){},373:function(e,t,a){},374:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),i=a.n(l),c=(a(184),a(75),a(44)),o=a(176),s=a(175),m=a(14),u=a(15),h=a(17),p=a(16),d=a(18),E=(a(186),a(100)),g=a(29),f=Object(g.a)(),y=a(22),b=(a(188),a(76),a(45)),v=(a(376),a(54)),j=(a(66),a(5));function O(e,t){var a=e[1].toUpperCase(),n=t[1].toUpperCase(),r=0;return a>n?r=1:a<n&&(r=-1),r}var w=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.showDrawer=function(){a.setState({visible:!0})},a.onClose=function(){a.setState({visible:!1})},a.handleClick=function(e){a.props.history.push(a.props.history.location.pathname+"?category="+e.key),a.onClose()},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{display:"inline",cursor:"pointer"},onClick:this.showDrawer},r.a.createElement(j.a,{type:"menu"})),r.a.createElement(b.a,{title:"Cat\xe9gories",placement:"left",closable:!1,onClose:this.onClose,visible:this.state.visible,bodyStyle:{padding:"16px 0"}},r.a.createElement(v.a,{onClick:this.handleClick,style:{width:256},defaultSelectedKeys:["all_categories"],defaultOpenKeys:[],mode:"inline"},r.a.createElement(v.a.Item,{key:0},"Tous les produits (",this.props.countItems,")"),this.props.categories.sort(O).map((function(e){return r.a.createElement(v.a.Item,{key:e[0]},e[1]," (",e.count,")")})))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={visible:!1},a.showDrawer=function(){a.setState({visible:!0})},a.onClose=function(){a.setState({visible:!1})},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{display:"inline",cursor:"pointer"},onClick:this.showDrawer},r.a.createElement(j.a,{type:"search"})),r.a.createElement(b.a,{title:"Search",placement:"top",closable:!1,onClose:this.onClose,visible:this.state.visible},r.a.createElement("p",null,"Search...")))}}]),t}(n.Component),k=(n.Component,a(143),a(31)),C=function(e){function t(e){var a;Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).showDrawer=function(){a.setState({visible:!0})},a.onClose=function(){a.setState({visible:!1})},a.handleDisplayChange=function(e){a.setState({display:e.target.value}),"grid"===e.target.value?a.props.history.push("/gridView"+a.props.history.location.search):"list"===e.target.value?a.props.history.push("/listView"+a.props.history.location.search):"compare"===e.target.value&&a.props.history.push("/compareView"+a.props.history.location.search)},a.handleSortChange=function(e){console.log("radio checked",e.target.value),a.setState({value:e.target.value})};var n="grid";return"/listView"===e.history.location.pathname?n="list":"/compareView"===e.history.location.pathname&&(n="compare"),a.state={visible:!1,display:n,sort:"new"},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={display:"block",height:"30px",lineHeight:"30px"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{style:{display:"inline",marginRight:"20px",cursor:"pointer"},onClick:this.showDrawer},r.a.createElement(j.a,{type:"control"})),r.a.createElement(b.a,{title:"R\xe9glages",placement:"right",closable:!1,onClose:this.onClose,visible:this.state.visible,width:275},r.a.createElement("h3",null,"Affichage"),r.a.createElement(k.a.Group,{onChange:this.handleDisplayChange,value:this.state.display},r.a.createElement(k.a.Button,{value:"grid"},"Grille"),r.a.createElement(k.a.Button,{value:"list"},"Liste"),r.a.createElement(k.a.Button,{value:"compare"},"Comparer")),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",null,"Trier par"),r.a.createElement(k.a.Group,{onChange:this.handleSortChange,value:this.state.sort},r.a.createElement(k.a,{style:e,value:"new"},"Nouveaut\xe9s"),r.a.createElement(k.a,{style:e,value:"price_asc"},"Prix : ordre croissant"),r.a.createElement(k.a,{style:e,value:"price_dsc"},"Prix order d\xe9croissant")),r.a.createElement("br",null),r.a.createElement("br",null)))}}]),t}(n.Component),I=function(e){function t(e){var n;return Object(m.a)(this,t),n=Object(h.a)(this,Object(p.a)(t).call(this,e)),a(249),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",clear:"both"}},r.a.createElement("div",{style:{float:"left"}},r.a.createElement(w,{categories:this.props.categories,countItems:this.props.countItems,history:this.props.history}),r.a.createElement("img",{src:"logo.jpg",style:{marginLeft:"20px",marginTop:"-6px"},alt:""})),r.a.createElement("div",{style:{float:"right"}},r.a.createElement(C,{history:this.props.history}),r.a.createElement(x,null)))}}]),t}(n.Component),S=(a(116),a(52)),A=(a(117),a(38)),N=a(71),D=a(95),B=a.n(D),V=function(e){function t(e){var n;return Object(m.a)(this,t),n=Object(h.a)(this,Object(p.a)(t).call(this,e)),a(261),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement("div",{style:{textAlign:"center",backgroundColor:"white",padding:"8px"}},r.a.createElement(B.a,{src:[e.images[0]+"?preset=large"],style:{width:"100%",height:"auto"},loader:r.a.createElement("div",{style:{textAlign:"center",marginTop:"50px",marginBottom:"50px"}},r.a.createElement(c.a,null),r.a.createElement("br",null),"Chargement...")}),r.a.createElement("h3",null,e.title),r.a.createElement("h3",{className:"price"},e.price," \u20ac"))}}]),t}(n.Component),L=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{background:"#dadada"}},r.a.createElement(S.a,{gutter:[1,1],type:"flex",style:{margin:"0px"}},this.props.items.map((function(e){return r.a.createElement(A.a,{key:e.id,xs:12,lg:6,style:{height:"100%"}},r.a.createElement("div",{style:{height:"100%",background:"white"}},r.a.createElement(N.a,{to:"/detailView/"+e.id},r.a.createElement(V,{item:e}))))}))))}}]),t}(n.Component),F=(a(375),a(173)),T=(a(278),a(170)),H=(a(280),a(169)),R=[{title:"",dataIndex:"name",key:"name"},{title:"",dataIndex:"value",key:"value"}];function z(e,t,a){console.log(e,t,a)}var P=function(e){function t(e){var n;return Object(m.a)(this,t),n=Object(h.a)(this,Object(p.a)(t).call(this,e)),a(282),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.item;return r.a.createElement("div",{style:{background:"white",padding:"16px"}},r.a.createElement(S.a,{gutter:0,type:"flex",justify:"start",align:"top",style:{margin:"0px"}},r.a.createElement(A.a,{xs:24,lg:12},r.a.createElement(H.a,{afterChange:z},e.images.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{src:e+"?preset=large",style:{width:"100%",height:"auto"},alt:""}))})))),r.a.createElement(A.a,{xs:24,lg:12},r.a.createElement("br",null),r.a.createElement("h1",{style:{fontSize:"35px",lineHeight:"35px"}},e.title),r.a.createElement("p",{style:{fontSize:"16px",lineHeight:"22px"}},e.description),r.a.createElement("h1",{className:"price"},e.price," \u20ac"),r.a.createElement(T.a,null),r.a.createElement("h3",null,"Caract\xe9ristiques techniques"),r.a.createElement(F.a,{dataSource:e.features,columns:R,size:"middle",pagination:!1,showHeader:!1}))))}}]),t}(n.Component),G=(a(368),a(174)),U=(a(150),a(55)),W=(a(370),a(101)),_=function(e){function t(e){var n;return Object(m.a)(this,t),n=Object(h.a)(this,Object(p.a)(t).call(this,e)),a(372),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{maxWidth:1200,marginLeft:"auto",marginRight:"auto",background:"#dadada"}},this.props.items.map((function(e){return r.a.createElement("div",{key:e.id,style:{marginBottom:"1px",background:"white",padding:"10px 0"}},r.a.createElement(S.a,{gutter:24,style:{margin:"0px"}},r.a.createElement(A.a,{xs:9,lg:7},r.a.createElement(B.a,{src:[e.images[0]+"?preset=large"],style:{width:"100%",height:"auto"},loader:r.a.createElement("div",{style:{textAlign:"center",marginTop:"50px"}},r.a.createElement(c.a,null),r.a.createElement("br",null),"Chargement...")})),r.a.createElement(A.a,{xs:15,lg:17},r.a.createElement("h2",null,e.title),r.a.createElement("h3",{className:"price"},e.price," \u20ac"),r.a.createElement("h4",{style:{color:"#757575"}},"EAN : ",e.ean,"\xa0\xa0\xa0\xa0\xa0\xa0\xa0R\xe9f : ",e.reference),r.a.createElement("p",null,e.description),r.a.createElement("div",{style:{marginBottom:"18px"}},r.a.createElement(W.a,{color:"#108ee9"},"A+++ -20%"),r.a.createElement(W.a,{color:"#108ee9"},"Led"),r.a.createElement(W.a,{color:"#108ee9"},"NoFrost")),r.a.createElement(S.a,{gutter:[16,16]},r.a.createElement(A.a,{xs:24,lg:12},r.a.createElement(U.a,null,"Ajouter \xe0 la liste ",r.a.createElement(j.a,{type:"down"}))),r.a.createElement(A.a,{xs:24,lg:12},r.a.createElement(G.a,{min:1,defaultValue:1,style:{width:"66px"}}),r.a.createElement(U.a,{style:{marginLeft:"5px"}},r.a.createElement(j.a,{type:"cart"})," Ajouter au panier"))))))})))}}]),t}(n.Component),q=function(e){function t(e){var n;return Object(m.a)(this,t),n=Object(h.a)(this,Object(p.a)(t).call(this,e)),a(373),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.items;return r.a.createElement("div",{className:"compare-view"},r.a.createElement("div",{className:"container"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"headcol"}),e.map((function(e,t){return r.a.createElement("td",{key:t},r.a.createElement("div",{style:{width:"200px",textAlign:"center"}},r.a.createElement("img",{src:e.images[0]+"?preset=large",style:{width:"100%",height:"auto"},alt:""})))}))),r.a.createElement("tr",null,r.a.createElement("th",{className:"headcol"},"Titre"),e.map((function(e,t){return r.a.createElement("td",{key:t},r.a.createElement("h3",null,e.title))}))),r.a.createElement("tr",null,r.a.createElement("th",{className:"headcol"},"Prix"),e.map((function(e,t){return r.a.createElement("td",{key:t},r.a.createElement("h3",{className:"price"},e.price," \u20ac"))}))),r.a.createElement("tr",null,r.a.createElement("th",{className:"headcol"},"R\xe9f"),e.map((function(e,t){return r.a.createElement("td",{key:t},r.a.createElement("p",null,e.reference))}))),r.a.createElement("tr",null,r.a.createElement("th",{className:"headcol"},"EAN"),e.map((function(e,t){return r.a.createElement("td",{key:t},r.a.createElement("p",null,e.ean))}))),r.a.createElement("tr",null,r.a.createElement("th",{className:"headcol"},"Description"),e.map((function(e,t){return r.a.createElement("td",{key:t},r.a.createElement("p",null,e.description))})))))))}}]),t}(n.Component),J=E.a.Header,K=E.a.Content,M=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).state={dbLoaded:!1},a.items=[],a.categories=[],a.attributes=[],a.countItems=0,a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"itemDBtoItemApp",value:function(e){var t=this,a=[];if(e[7])for(var n=function(){var e=l[r],n=(i=Object(s.a)(e,2))[0],c=i[1];a.push({key:n,name:t.attributes.filter((function(e){return e[0]===parseInt(n)}))[0][1],value:c})},r=0,l=Object.entries(e[7]);r<l.length;r++){var i;n()}return{id:e[0],ean:e[0],reference:e[1],classification:e[2],title:e[3],description:e[4],price:e[5],images:e[6],features:a}}},{key:"componentDidMount",value:function(){var e=this;this.state.dbLoaded||fetch("/data.json").then((function(e){return e.json()})).then((function(t){e.items=t.items,e.categories=t.categories.map((function(t){return Object(o.a)({},t,{count:e.items.filter((function(e){return e[2]===t[0]})).length})})),e.countItems=t.items.length,e.attributes=t.attributes,e.setState({dbLoaded:!0})}))}},{key:"getFilteredItems",value:function(){var e=this,t=new URLSearchParams(f.location.search).get("category");if(t&&""!==t&&"0"!==t){var a=parseInt(t);return this.items.filter((function(e){return e[2]===a})).slice(0,24).map((function(t){return e.itemDBtoItemApp(t)}))}return this.items.slice(0,25).map((function(t){return e.itemDBtoItemApp(t)}))}},{key:"getItem",value:function(){var e,t=Object(y.f)(f.location.pathname,{path:"/detailView/:id"});if(t&&t.params.id)return e=t.params.id,this.itemDBtoItemApp(this.items.filter((function(t){return t[0]===e}))[0])}},{key:"render",value:function(){var e=this;return this.state.dbLoaded?r.a.createElement(y.c,{history:f},r.a.createElement("div",{className:"App"},r.a.createElement(E.a,{style:{minHeight:"100vh"}},r.a.createElement(J,{style:{position:"fixed",zIndex:1,width:"100%",height:"55px",lineHeight:"55px",backgroundColor:"white",padding:"0 24px",borderBottom:"1px solid #dadada"}},r.a.createElement(I,{title:"Eberhardt",categories:this.categories,countItems:this.countItems,history:f})),r.a.createElement(K,{style:{paddingTop:"54px"}},r.a.createElement(y.d,null,r.a.createElement(y.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(y.a,{to:"/gridView"})}}),r.a.createElement(y.b,{path:"/gridView",component:function(){return r.a.createElement(L,{items:e.getFilteredItems()})}}),r.a.createElement(y.b,{path:"/listView",component:function(){return r.a.createElement(_,{items:e.getFilteredItems()})}}),r.a.createElement(y.b,{path:"/compareView",component:function(){return r.a.createElement(q,{items:e.getFilteredItems()})}}),r.a.createElement(y.b,{path:"/detailView/:id",component:function(){return r.a.createElement(P,{item:e.getItem()})}})))))):r.a.createElement("div",{style:{textAlign:"center",paddingTop:"40vh"}},r.a.createElement(c.a,{size:"large"}),r.a.createElement("br",null),r.a.createElement("br",null),"Loading...")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[179,1,2]]]);
//# sourceMappingURL=main.322906f2.chunk.js.map