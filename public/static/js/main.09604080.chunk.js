(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(31),r=t.n(l),s=(t(71),t(63)),o=t(35),m=t(13),i=t(22),u=t(50),h=t(32),d=t(37),p=t(28),f=t(16),E=t(17),g=t(20),b=t(18),y=t(21),v=t(25),N=t.n(v);function k(){var e=Object(p.a)(["\n          query LaunchesQuery {\n            launches {\n              flight_number\n              mission_name\n              launch_year\n              launch_date_local\n              launch_success\n              upcoming\n              rocket {\n                rocket_name\n              }\n              links {\n                youtube_id\n                flickr_images\n              }\n            }\n          }\n        "]);return k=function(){return e},e}var _=c.a.createContext(),w=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(c)))).state={launches:[],rocketNames:[],launchYears:[],filteredLaunches:[],loading:!0,success:"all",rocketName:"all",launchedYear:"all",upcomingOnly:!1,hasImages:!1,hasVideos:!1},t.getLaunches=function(){K.query({query:N()(k())}).then(function(e){var a=[],n=[];e.data.launches.map(function(e){return a.push(e.rocket.rocket_name),n.push(e.launch_year)});var c=new Set(a);a=Object(d.a)(c);var l=new Set(n);n=Object(d.a)(l),t.setState({launches:e.data.launches,filteredLaunches:e.data.launches,loading:!1,rocketNames:a,launchYears:n})}).catch(function(e){return console.log(e)})},t.handleChange=function(e){var a=e.target,n=a.type,c="checkbox"===n?a.checked:a.value,l=e.target.name;console.log("type: ".concat(n," val: ").concat(c," name: ").concat(l)),t.setState(Object(h.a)({},l,c),t.filterLaunches)},t.filterLaunches=function(){var e=t.state,a=e.launches,n=e.success,c=e.rocketName,l=e.launchedYear,r=e.upcomingOnly,s=e.hasImages,o=e.hasVideos,m=Object(d.a)(a);"all"!==n&&("success"===n&&(m=m.filter(function(e){return!0===e.launch_success})),"fail"===n&&(m=m.filter(function(e){return!1===e.launch_success})),"unknown"===n&&(m=m.filter(function(e){return null===e.launch_success}))),"all"!==c&&(m=m.filter(function(e){return e.rocket.rocket_name===c})),"all"!==l&&(m=m.filter(function(e){return e.launch_year===l})),!0===r&&(m=m.filter(function(e){return!0===e.upcoming})),m=s?m=m.filter(function(e){return e.links.flickr_images.length>0}):m,m=o?m=m.filter(function(e){return e.links.youtube_id}):m,t.setState({filteredLaunches:m})},t}return Object(y.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){this.getLaunches()}},{key:"render",value:function(){return c.a.createElement(_.Provider,{value:Object(u.a)({},this.state,{handleChange:this.handleChange})},this.props.children)}}]),a}(n.Component),x=(_.Consumer,t(51)),O=t(54),j=t(15),L=t.n(j),S=t(55),C=t.n(S);function F(e){var a=e.launch,t=a.flight_number,n=a.mission_name,l=a.launch_date_local,r=a.launch_success,s=e.children;return c.a.createElement("div",{className:"card card-body my-3"},c.a.createElement("div",{className:"row"},s),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement(m.b,{to:"/launch/".concat(t),style:{color:"inherit"}},c.a.createElement("h4",null,"Mission:"," ",c.a.createElement("span",{className:L()({"text-success":r,"text-danger":!1===r,"text-secondary":null===r})},n))),c.a.createElement("p",null,"Launch Date:"," ",c.a.createElement(C.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-3"},c.a.createElement(m.b,{to:"/launch/".concat(t),className:"btn btn-secondary my-4"},"Launch Details"))))}var Y=function(){return c.a.createElement("span",null," \ud83d\udea8 Mission Launched! \ud83d\ude80\ud83d\udea8 ")},D=function(e){var a=e.days,t=e.hours,n=e.minutes,l=e.seconds;return e.completed?c.a.createElement(Y,null):c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",{className:"text-white mb-4"},"Next Launch:"),c.a.createElement("h5",{className:"text-primary"},"In ",a," Days : ",t," Hours : ",n," Minutes : ",l," Seconds"),c.a.createElement("hr",null))},I=function(e){function a(){var e,t;Object(f.a)(this,a);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(t=Object(g.a)(this,(e=Object(b.a)(a)).call.apply(e,[this].concat(c)))).state={launches:t.props.launches,nextLaunch:{launch_date_local:""}},t.findNext=function(e){var a=new Date;return e.filter(function(e){return Date.parse(e.launch_date_local)-a>0}).sort(function(e,a){return Date.parse(e.launch_date_local)-Date.parse(a.launch_date_local)})[0]},t}return Object(y.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.findNext(this.props.launches);this.setState({nextLaunch:e})}},{key:"render",value:function(){return c.a.createElement("div",{className:"mt-5"},c.a.createElement(F,{launch:this.state.nextLaunch},c.a.createElement(O.a,{date:this.state.nextLaunch.launch_date_local,renderer:D})))}}]),a}(n.Component),M=function(){var e=Object(n.useContext)(_),a=e.success,t=e.rocketName,l=e.rocketNames,r=e.launchedYear,s=e.launchYears,o=e.upcomingOnly,m=e.hasImages,i=e.hasVideos,u=e.handleChange;return c.a.createElement("div",{className:"filter-container card card-body my-5"},c.a.createElement("h5",{className:"text-white"},"Filter Launches"),c.a.createElement("form",{className:"filter-form"},c.a.createElement("div",{className:"form-group"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"form-select col-sm-10 my-2"},c.a.createElement("label",{htmlFor:"success",className:"text-white"},"Launch Success:"," "),c.a.createElement("select",{name:"success",id:"success",value:a,className:"form-control",onChange:u},c.a.createElement("option",{value:"all"},"All"),c.a.createElement("option",{value:"success"},"Success"),c.a.createElement("option",{value:"fail"},"Fail"),c.a.createElement("option",{value:"unknown"},"Unknown"))),c.a.createElement("div",{className:"form-select col-sm-10 my-2"},c.a.createElement("label",{htmlFor:"rocketName",className:"text-white"},"Rocket Type:"," "),c.a.createElement("select",{name:"rocketName",id:"rocketName",value:t,className:"form-control",onChange:u},c.a.createElement("option",{value:"all"},"All"),l.map(function(e,a){return c.a.createElement("option",{value:e,key:a},e)}))),c.a.createElement("div",{className:"form-select col-sm-10 my-2"},c.a.createElement("label",{htmlFor:"launchedYear",className:"text-white"},"Launch Year:"," "),c.a.createElement("select",{name:"launchedYear",id:"launchedYear",value:r,className:"form-control",onChange:u},c.a.createElement("option",{value:"all"},"All"),s.map(function(e,a){return c.a.createElement("option",{value:e,key:a},e)})))),c.a.createElement("div",{className:"row mt-5"},c.a.createElement("div",{className:"custom-control custom-switch mx-3"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"upcomingSwitch",name:"upcomingOnly",checked:o,onChange:u}),c.a.createElement("label",{className:"custom-control-label text-white ",htmlFor:"upcomingSwitch"},"Upcoming Launches")),c.a.createElement("div",{className:"custom-control custom-switch mx-3"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"imagesSwitch",name:"hasImages",checked:m,onChange:u}),c.a.createElement("label",{className:"custom-control-label text-white ",htmlFor:"imagesSwitch"},"Has Images")),c.a.createElement("div",{className:"custom-control custom-switch mx-3"},c.a.createElement("input",{type:"checkbox",className:"custom-control-input",id:"videosSwitch",name:"hasVideos",checked:i,onChange:u}),c.a.createElement("label",{className:"custom-control-label text-white ",htmlFor:"videosSwitch"},"Has Video"))))))},A=function(){return c.a.createElement("div",{className:"my-3 mx-3"},c.a.createElement("h5",{className:"my-3"},"Mission Success Key:"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," ="," ",c.a.createElement("span",{className:"mr-5"},"Success"),c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," ="," ",c.a.createElement("span",{className:"mr-5"},"Fail"),c.a.createElement("span",{className:"px-3 mr-2 bg-secondary"})," ="," ",c.a.createElement("span",{className:"mr-5"},"Unknown")))},R=function(e){function a(){return Object(f.a)(this,a),Object(g.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.context,a=e.launches,t=e.loading,n=e.filteredLaunches;return t?c.a.createElement("div",{style:{textAlign:"center",margin:"40% auto",display:"flex"}},c.a.createElement("h1",{className:"text-center",style:{flex:"2"}}," ","Getting"," ",c.a.createElement("span",{role:"img","aria-label":"rocket"}," ","\ud83d\ude80")," ","stats"),c.a.createElement("div",{style:{flex:"1",marginTop:"-80px"}},c.a.createElement(x.JellyfishSpinner,{size:220,color:"#FFFFFF"}))):c.a.createElement("div",null,c.a.createElement(I,{launches:a}),c.a.createElement(M,null),c.a.createElement("div",{className:"row"},c.a.createElement(A,{className:"col-md-6 mx-5"}),c.a.createElement("h5",{className:"my-5 text-right col-md-6"}," ",n.length," Launches")),0===n.length?c.a.createElement("h5",null,"Sorry, no launches were found with your search criteria..."):n.map(function(e){return c.a.createElement(F,{key:e.flight_number,launch:e})}))}}]),a}(n.Component);R.contextType=_;var V=R,q=t(57),H=t.n(q),T=t(43);function U(){var e=Object(p.a)(["\n  background-image: url('","');\n  background-repeat:no-repeat;\n  background-size:cover;\n  background-position:center;\n  height: 60vh;\n"]);return U=function(){return e},e}function J(){var e=Object(p.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n      links {\n        article_link\n        youtube_id\n        flickr_images\n      }\n    }\n  }\n"]);return J=function(){return e},e}var $=N()(J()),z=function(e){function a(){return Object(f.a)(this,a),Object(g.a)(this,Object(b.a)(a).apply(this,arguments))}return Object(y.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e={dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},a=this.props.match.params.flight_number;return a=parseInt(a),c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{query:$,variables:{flight_number:a}},function(a){var t=a.loading,n=a.error,l=a.data;if(t)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var r=l.launch,s=r.mission_name,o=r.flight_number,m=r.launch_year,i=r.launch_success,u=r.rocket,h=u.rocket_id,d=u.rocket_name,p=u.rocket_type,f=r.links,E=f.article_link,g=f.youtube_id,b=f.flickr_images;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-5"},c.a.createElement("span",{className:"text-dark"},"Mission: "),s),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",o),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:L()({"text-success":!0===i,"text-danger":!1===i,"text-secondary":null===i})},i?"Yes":null,!1===i?"No":null,null===i?"Unknown":null))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"RocketID: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",d),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",p)),c.a.createElement("h4",{className:"my-3"},"Media "),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Images:",b.length>0?c.a.createElement(H.a,Object.assign({},e,{className:"my-3"}),b.map(function(e){return c.a.createElement(B,{imageLink:e})})):c.a.createElement("span",null," No Images available at this time")),c.a.createElement("li",{className:"list-group-item"},"Video:",g?c.a.createElement("div",{className:"text-center"},c.a.createElement("br",null),c.a.createElement("iframe",{title:"video",className:"my-3 ",width:"100%",height:"450px",src:"https://www.youtube.com/embed/".concat(g),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})):c.a.createElement("span",null,"No Video available at this time")),c.a.createElement("li",{className:"list-group-item"},"Article :"," ",E?c.a.createElement("a",{href:"".concat(E),className:"btn btn-secondary mx-5"},"Read More"):c.a.createElement("span",null,"Sorry, there's no article available at this time"))))}),c.a.createElement("hr",null),c.a.createElement(m.b,{to:"/",className:"btn btn-primary my-5"},"Return Home"))}}]),a}(n.Component),B=T.default.div(U(),function(e){return e.imageLink}),Q=z,W=(t(100),t(62)),G=t.n(W),K=new s.a({uri:"/graphql"});var P=function(){return c.a.createElement(o.a,{client:K},c.a.createElement(w,null,c.a.createElement(m.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(m.b,{to:"/"},c.a.createElement("img",{src:G.a,alt:"logo",style:{display:"block",margin:"auto"}})),c.a.createElement(i.a,{exact:!0,path:"/",component:V}),c.a.createElement(i.a,{exact:!0,path:"/launch/:flight_number",component:Q})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},62:function(e,a,t){e.exports=t.p+"static/media/logo.6ff54c0f.svg"},66:function(e,a,t){e.exports=t(102)},71:function(e,a,t){}},[[66,1,2]]]);
//# sourceMappingURL=main.09604080.chunk.js.map