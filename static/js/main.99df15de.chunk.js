(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/room-1.e928a5c4.jpeg"},192:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(81),l=a.n(c),o=a(2),i=a(47),s=a(31),m=a(48),u=a.n(m),p=a(14),f=a(82),E=a(9),d=a(10),h=a(12),v=a(11),g=a(13),b=a(95),y=Object(b.a)({space:"ty6mk0vgckye",accessToken:"xRqbw38DZw3oadLCJzxWXrqCbRMN5myxaPnkX7rii0M"}),N=r.a.createContext(),k=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={rooms:[],sortedRooms:[],featuredRooms:[],loading:!0,type:"all",capacity:1,price:0,minPrice:0,maxPrice:0,minSize:0,maxSize:0,breakfast:!1,pet:!1},a.getData=Object(f.a)(u.a.mark(function e(){var t,n,r,c,l;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.getEntries({content_type:"beachResort",order:"sys.createdAt"});case 3:t=e.sent,console.log(t.items),n=a.formatData(t.items),r=n.filter(function(e){return!0===e.featured}),c=Math.max.apply(Math,Object(p.a)(n.map(function(e){return e.price}))),l=Math.max.apply(Math,Object(p.a)(n.map(function(e){return e.size}))),a.setState({rooms:n,featuredRooms:r,sortedRooms:n,loading:!1,price:c,maxPrice:c,maxSize:l}),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[0,12]])})),a.getRoom=function(e){return Object(p.a)(a.state.rooms).find(function(t){return t.slug===e})},a.handleChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,r=e.target.name;a.setState(Object(s.a)({},r,n),a.filterRooms)},a.filterRooms=function(){var e=a.state,t=e.rooms,n=e.type,r=e.capacity,c=e.price,l=e.minSize,o=e.maxSize,i=e.breakfast,s=e.pets,m=Object(p.a)(t);r=parseInt(r),c=parseInt(c),"all"!==n&&(m=m.filter(function(e){return e.type===n})),1!==r&&(m=m.filter(function(e){return e.capacity>=r})),m=(m=m.filter(function(e){return e.price<=c})).filter(function(e){return e.size>=l&&e.size<=o}),i&&(m=m.filter(function(e){return!0===e.breakfast})),s&&(m=m.filter(function(e){return!0===e.pets})),a.setState({sortedRooms:m})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"formatData",value:function(e){return e.map(function(e){var t=e.sys.id,a=e.fields.images.map(function(e){return e.fields.file.url});return Object(i.a)({},e.fields,{images:a,id:t})})}},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:Object(i.a)({},this.state,{getRoom:this.getRoom,handleChange:this.handleChange})},this.props.children)}}]),t}(n.Component),x=N.Consumer;a(192);function O(e){var t=e.children,a=e.hero;return r.a.createElement("header",{className:a},t)}function j(e){var t=e.title,a=e.subtitle,n=e.children;return r.a.createElement("div",{className:"banner"},r.a.createElement("h1",null,t),r.a.createElement("div",null),r.a.createElement("p",null,a),n)}O.defaultProps={hero:"defaultHero"};var w=a(17);function z(e){var t=e.title;return r.a.createElement("div",{className:"section-title"},r.a.createElement("h4",null,t),r.a.createElement("div",null))}var C=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(c)))).state={services:[{icon:r.a.createElement(w.c,null),title:"free cocktails",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, soluta."},{icon:r.a.createElement(w.d,null),title:"endless hiking",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, soluta."},{icon:r.a.createElement(w.e,null),title:"free shuttle",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, soluta."},{icon:r.a.createElement(w.b,null),title:"strongest beer",info:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, soluta."}]},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"services"},r.a.createElement(z,{title:"services"}),r.a.createElement("div",{className:"services-center"},this.state.services.map(function(e,t){return r.a.createElement("article",{key:t,className:"service"},r.a.createElement("span",null,e.icon),r.a.createElement("h6",null,e.title),r.a.createElement("p",null,e.info))})))}}]),t}(n.Component),R=a(87),S=a.n(R);function F(){return r.a.createElement("div",{className:"loading"},r.a.createElement("h4",null,"rooms data loading..."),r.a.createElement("img",{src:S.a,alt:""}))}var M=a(19),P=a.n(M);function B(e){var t=e.room,a=t.name,n=t.slug,c=t.images,l=t.price;return r.a.createElement("article",{className:"room"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:c[0]||P.a,alt:"single room"}),r.a.createElement("div",{className:"price-top"},r.a.createElement("h6",null,"$",l),r.a.createElement("p",null,"per night")),r.a.createElement(o.b,{to:"/rooms/".concat(n),className:"btn-primary room-link"},"Features")),r.a.createElement("p",{className:"room-info"},a))}var D=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.context,t=e.loading,a=e.featuredRooms;return a=a.map(function(e){return r.a.createElement(B,{key:e.id,room:e})}),r.a.createElement("section",{className:"featured-rooms"},r.a.createElement(z,{title:"featured rooms"}),r.a.createElement("div",{className:"featured-rooms-center"},t?r.a.createElement(F,null):a))}}]),t}(n.Component);D.contextType=N;var T=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null,r.a.createElement(j,{title:"luxurious rooms",subtitle:"deluxe rooms starting at $299"},r.a.createElement(o.b,{to:"/rooms",className:"btn-primary"},"our rooms"))),r.a.createElement(C,null),r.a.createElement(D,null))},L=function(e,t){return Object(p.a)(new Set(e.map(function(e){return e[t]})))};function $(e){var t=e.rooms,a=Object(n.useContext)(N),c=a.handleChange,l=a.type,o=a.capacity,i=a.price,s=a.minPrice,m=a.maxPrice,u=a.minSize,f=a.maxSize,E=a.breakfast,d=a.pets,h=L(t,"type");h=(h=["all"].concat(Object(p.a)(h))).map(function(e,t){return r.a.createElement("option",{value:e,key:t},e)});var v=L(t,"capacity");return v=v.map(function(e,t){return r.a.createElement("option",{value:e,key:t},e)}),r.a.createElement("section",{className:"filter-container"},r.a.createElement(z,{title:"search rooms"}),r.a.createElement("form",{className:"filter-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"type"},"room type"),r.a.createElement("select",{name:"type",id:"type",value:l,className:"form-control",onChange:c},h)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"capacity"},"guests"),r.a.createElement("select",{name:"capacity",id:"capacity",value:o,className:"form-control",onChange:c},v)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"price"},"room price $",i),r.a.createElement("input",{type:"range",name:"price",id:"price",min:s,max:m,value:i,onChange:c,className:"form-control"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"size"},"room size"),r.a.createElement("div",{className:"size-inputs"},r.a.createElement("input",{type:"number",name:"minSize",id:"size",value:u,onChange:c,className:"size-input"}),r.a.createElement("input",{type:"number",name:"maxSize",id:"size",value:f,onChange:c,className:"size-input"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{type:"checkbox",name:"breakfast",id:"breakfast",checked:E,onChange:c}),r.a.createElement("label",{htmlFor:"breakfast"},"breakfast")),r.a.createElement("div",{className:"single-extra"},r.a.createElement("input",{type:"checkbox",name:"pets",id:"pets",checked:d,onChange:c}),r.a.createElement("label",{htmlFor:"pets"},"pets")))))}function A(e){var t=e.rooms;return 0===t.length?r.a.createElement("div",{className:"empty-search"},r.a.createElement("h3",null,"unfortunately no rooms match your search parameters")):r.a.createElement("section",{className:"roomslist"},r.a.createElement("div",{className:"roomslist-center"},t.map(function(e){return r.a.createElement(B,{key:e.id,room:e})})))}var H,I=(H=function(e){var t=e.context,a=t.loading,n=t.sortedRooms,c=t.rooms;return a?r.a.createElement(F,null):r.a.createElement(r.a.Fragment,null,r.a.createElement($,{rooms:c}),r.a.createElement(A,{rooms:n}))},function(e){return r.a.createElement(x,null,function(t){return r.a.createElement(H,Object.assign({},e,{context:t}))})}),J=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{hero:"roomsHero"},r.a.createElement(j,{title:"our rooms"},r.a.createElement(o.b,{to:"/",className:"btn-primary"},"return home"))),r.a.createElement(I,null))},W=a(96),q=a(90);function X(){var e=Object(q.a)(["\n\tmin-height: 60vh;\n\tbackground: url(",");\n\tcenter/cover no-repeat;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"]);return X=function(){return e},e}var Q=a(91).a.header(X(),function(e){return e.img?e.img:P.a}),Z=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={slug:a.props.match.params.slug,defaultBcg:P.a},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=(0,this.context.getRoom)(this.state.slug);if(!e)return r.a.createElement("div",{className:"error"},r.a.createElement("h3",null,"no such room could be found..."),r.a.createElement(o.b,{to:"/rooms",className:"btn-primary"},"back to rooms"));var t=e.name,a=e.description,n=e.capacity,c=e.size,l=e.price,i=e.extras,s=e.breakfast,m=e.pets,u=e.images,p=Object(W.a)(u),f=p[0],E=p.slice(1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,{img:f||this.state.defaultBcg},r.a.createElement(j,{title:"".concat(t," room")},r.a.createElement(o.b,{to:"../rooms",className:"btn-primary"},"Back to rooms"))),r.a.createElement("section",{className:"single-room"},r.a.createElement("div",{className:"single-room-images"},E.map(function(e,a){return r.a.createElement("img",{key:a,src:e,alt:t})})),r.a.createElement("div",{className:"single-room-info"},r.a.createElement("article",{className:"desc"},r.a.createElement("h3",null,"details"),r.a.createElement("p",null,a)),r.a.createElement("article",{className:"info"},r.a.createElement("h3",null,"info"),r.a.createElement("h6",null,"price : $",l),r.a.createElement("h6",null,"size : ",c," SQFT"),r.a.createElement("h6",null,"max capacity :"," ","".concat(n,n>1?" people":" person")),r.a.createElement("h6",null,m?"pets allowed":"no pets allowed"),r.a.createElement("h6",null,s&&"free breakfast included")))),r.a.createElement("section",{className:"room-extras"},r.a.createElement("h6",null,"extras"),r.a.createElement("ul",{className:"extras"},i.map(function(e,t){return r.a.createElement("li",{key:t},"- ",e)}))))}}]),t}(n.Component);Z.contextType=N;var _=function(){return r.a.createElement(O,null,r.a.createElement(j,{title:"404",subtitle:"page not found"},r.a.createElement(o.b,{to:"/",className:"btn-primary"},"return home")))},G=a(16),K=a(94),U=a.n(K),V=function(e){function t(){var e,a;Object(E.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(h.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={isOpen:!1},a.handleToggle=function(){a.setState({isOpen:!a.state.isOpen})},a}return Object(g.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav-center"},r.a.createElement("div",{className:"nav-header"},r.a.createElement(o.b,{to:"/"},r.a.createElement("img",{src:U.a,alt:"Beach Resort"})),r.a.createElement("button",{type:"button",className:"nav-btn",onClick:this.handleToggle},r.a.createElement(w.a,{className:"nav-icon"}))),r.a.createElement("ul",{className:this.state.isOpen?"nav-links show-nav":"nav-links"},r.a.createElement("li",null,r.a.createElement(o.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(o.b,{to:"/rooms/"},"Rooms")))))}}]),t}(n.Component);var Y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,null),r.a.createElement(G.c,null,r.a.createElement(G.a,{exact:!0,path:"/",component:T}),r.a.createElement(G.a,{exact:!0,path:"/rooms/",component:J}),r.a.createElement(G.a,{exact:!0,path:"/rooms/:slug",component:Z}),r.a.createElement(G.a,{component:_})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null,r.a.createElement(o.a,null,r.a.createElement(Y,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},49:function(e,t){},87:function(e,t,a){e.exports=a.p+"static/media/loading-arrow.e9ea7394.gif"},94:function(e,t,a){e.exports=a.p+"static/media/logo.9f0cccc1.svg"},98:function(e,t,a){e.exports=a(201)}},[[98,1,2]]]);
//# sourceMappingURL=main.99df15de.chunk.js.map