(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{22:function(e,t){e.exports={apiUrl:"http://0.0.0.0:8090/api/v1/",baseUrl:"http://0.0.0.0:3000/",customPath:""}},27:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/logo.2e8af32c.png"},47:function(e,t,a){e.exports=a(82)},82:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(21),s=a.n(o),l=a(11),i=a(12),c=a(14),h=a(13),u=a(15),m=a(19),d=a(17),p=a(16),b=(a(27),a(42)),E=a.n(b),f=(a(28),a(83)),v=a(84),g=a(85),U=a(90),O=a(86),w=a(87),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(h.a)(t).call(this,e))).state={isOpen:!1},a.toggle=a.toggle.bind(Object(p.a)(a)),a.closeNav=a.closeNav.bind(Object(p.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"closeNav",value:function(){1==this.state.isOpen&&this.toggle()}},{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-container"},r.a.createElement(f.a,{id:"white-nav",color:"light",light:!0,expand:"md"},r.a.createElement(v.a,{href:"/"},r.a.createElement(m.b,{to:"/"},r.a.createElement("img",{src:E.a}))),r.a.createElement(g.a,{onClick:this.toggle}),r.a.createElement(U.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(O.a,{navbar:!0,className:"ml-auto"},r.a.createElement(w.a,null,r.a.createElement(m.b,{to:"/",className:"padded-nav"}," HOME ")),r.a.createElement(w.a,null,r.a.createElement(m.b,{to:"/about",className:"padded-nav"}," ABOUT ")),r.a.createElement(w.a,null,r.a.createElement("a",{href:"https://instacar.in/",target:"_blank",to:"/contact-us",className:"padded-nav",onClick:this.closeNav}," CONTACT "))))))}}]),t}(n.Component),S=a(20),k=a.n(S),y=a(22),N=a.n(y);k.a.defaults.baseURL=N.a.apiUrl;var C=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"page-footer font-small blue Footer "},r.a.createElement("div",{className:"footer-copyright text-center py-3  "},"\xa9 2020 Copyright:",r.a.createElement("a",{href:"/"},"chandrasekhar.com")))}}]),t}(n.Component),x=a(45),P=a(88),L=a(89),A=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(c.a)(this,Object(h.a)(t).call(this))).state={showShortenUrl:!1,shortenUrl:"",originalUrl:"",customPath:"",clickSubmit:!0,showError:!1,apiError:"",showApiError:!1,showLoading:!1,exUrl:"https://www.amazon.com/Apple-iPhone-GSM-Unlocked-5-8/dp/B075QMZH2L",exShortUrl:N.a.customPath},e.handleUserInput=e.handleUserInput.bind(Object(p.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(p.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleUserInput",value:function(e){var t=e.target.name,a=e.target.value;this.setState(Object(x.a)({},t,a)),this.setState({showError:!1})}},{key:"handleSubmit",value:function(){var e,t=this;if(this.setState({clickSubmit:!0,showApiError:!1}),this.state.clickSubmit&&this.state.originalUrl){this.setState({showLoading:!0,showShortenUrl:!1});var a={originalUrl:this.state.originalUrl,shortid:this.state.customPath};(e=a,k.a.post("shorturl/new",e)).then((function(e){console.log("json",e),setTimeout((function(){e.data.data.shortUrl.includes("http://")||(e.data.data.shortUrl="http://"+e.data.data.shortUrl),t.setState({showLoading:!1,showShortenUrl:!0,shortenUrl:e.data.data.shortUrl})}),0)})).catch((function(e){t.setState({showLoading:!1,showApiError:!0,apiError:"Server Error"})}))}else this.setState({showError:!0})}},{key:"renderButton",value:function(){return this.state.showLoading?r.a.createElement(P.a,{style:{width:"3rem",height:"3rem"}}):r.a.createElement("button",{className:"btn btn-primary",name:"action",onClick:this.handleSubmit},"Submit")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputEmail1"},"Actual URL"),r.a.createElement("input",{type:"text",className:"form-control",id:"originalUrl",name:"originalUrl",placeholder:"Paste Your URL to Shorten",value:this.state.originalUrl,onChange:this.handleUserInput.bind(this)})),this.state.showError&&r.a.createElement("div",{className:"formError"},"Actual URL is required"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{for:"exampleInputPassword1"},"Custom Path "),r.a.createElement("input",{type:"text",className:"form-control",id:"customPath",name:"customPath",placeholder:"Enter Custom Path (Optional)",value:this.state.customPath,onChange:this.handleUserInput.bind(this)})),this.renderButton(),this.state.showApiError&&r.a.createElement("div",{className:"shorten-error"},this.state.apiError),this.state.showShortenUrl&&r.a.createElement(L.a,{color:"success",style:{marginTop:"2rem"}},"Shortened Url is \u2014 "," ",r.a.createElement("a",{target:"_blank",href:this.state.shortenUrl},this.state.shortenUrl)))}}]),t}(n.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:A})),r.a.createElement(C,null))))}}]),t}(n.Component);window.axios=k.a,s.a.render(r.a.createElement(I,null),document.querySelector("#root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.886ffd18.chunk.js.map