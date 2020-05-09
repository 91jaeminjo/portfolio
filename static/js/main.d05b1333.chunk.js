(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/web-profile-pic.a8c3cd5c.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/weather-icon.e1a75254.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/task-icon.bc571d33.jpg"},31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),s=a.n(r),c=(a(36),a(3)),i=a(4),o=a(6),m=a(5),u=a(26),h=a.n(u),d=a(8),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("header",{className:"masthead bg-primary text-white text-center"},l.a.createElement("div",{className:"container"},l.a.createElement("img",{id:"profile-pic",className:"d-block mx-auto mb-5 circular-border",src:h.a}),l.a.createElement("h1",null,"Jae-Min Jo"),l.a.createElement("hr",{className:"style"}),l.a.createElement("h2",{className:"mb-0"},"Fullstack Web Developer - Software Engineer")))}}]),a}(n.Component),b=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.scrollFunction)}},{key:"componWillUnmount",value:function(){window.removeEventListener("scroll",this.scrollFunction)}},{key:"scrollFunction",value:function(){var e=window.pageYOffset||document.documentElement.scrollTop,t=document.getElementById("mainNav");null!=t&&(e>80?t.classList.add("navbar-shrink"):t.classList.remove("navbar-shrink"))}},{key:"render",value:function(){return l.a.createElement("nav",{id:"mainNav",className:"navbar navbar-expand-lg fixed-top bg-secondary text-uppercase"},l.a.createElement("a",{className:"navbar-brand",href:"#page-top"},"Jae-Min"),l.a.createElement("button",{className:"navbar-toggler navbar-toggler-right text-uppercase bg-primary text-white rounded","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("i",{className:"fa fa-bars"})),l.a.createElement("div",{id:"navbarResponsive",className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"nav navbar-nav ml-auto"},l.a.createElement("li",{role:"presentation",className:"nav-item mx-0 mx-lg-1"},l.a.createElement("a",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#projects"},"Projects")),l.a.createElement("li",{role:"presentation",className:"nav-item mx-0 mx-lg-1"},l.a.createElement("a",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#about"},"About")),l.a.createElement("li",{role:"presentation",className:"nav-item mx-0 mx-lg-1"},l.a.createElement("a",{className:"nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger",href:"#contact"},"Contact")))))}}]),a}(n.Component),g=a(2),E=a(14),f=a(27),v=a.n(f),k=a(28),N=a.n(k),S=a(9),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={quoteData:[],allQuotes:[]},n.getRandomQuote=n.getRandomQuote.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://type.fit/api/quotes").then((function(e){return e.json()})).then((function(t){t,e.setState({allQuotes:t}),e.getRandomQuote(),console.log("quote data",e.state.quoteData)})).catch((function(e){console.log(e)}))}},{key:"getRandomQuote",value:function(){for(var e=this.state.allQuotes,t=Math.floor(Math.random()*e.length);"Buddha"===e[t].author;)t=Math.floor(Math.random()*e.length);this.setState({quoteData:e[t]})}},{key:"render",value:function(){return l.a.createElement("section",{id:"projects",className:"projects"},l.a.createElement("h1",{className:"text-center section-title-2"},"PROJECTS"),l.a.createElement("hr",{className:"style2"}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h3",{className:"text-center"},l.a.createElement(d.a,{icon:S.f,color:"White"})," ",this.state.quoteData.text," ",l.a.createElement(d.a,{icon:S.g,color:"white"})),l.a.createElement("h4",null,"- ",this.state.quoteData.author),l.a.createElement("br",null),l.a.createElement("button",{className:"btn",onClick:this.getRandomQuote},"Random Quote"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h5",null,"Random Quote API Credit to: https://type.fit/api/quotes"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"container "},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col-6 project-items"},l.a.createElement(E.b,{to:"/WeatherApp",className:"d-block mx-auto "},l.a.createElement("div",{className:"caption text-left"},l.a.createElement("div",{className:"caption-content"},l.a.createElement("h3",null,"Weather App"),l.a.createElement("p",null,"Consuming RESTful API from OpenWeatherMap"))),l.a.createElement("img",{className:"img-fluid",src:v.a}))),l.a.createElement("div",{className:"col-6 project-items"},l.a.createElement("a",{className:"d-block mx-auto ",href:"#page-top"},l.a.createElement("div",{className:"caption text-left"},l.a.createElement("div",{className:"caption-content text-danger"},l.a.createElement("h3",null,"Task Management App"),l.a.createElement("p",null,"Coming Soon..."))),l.a.createElement("img",{className:"img-fluid",src:N.a}))))))}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("section",{id:"about",className:"bg-primary text-white mb-0"},l.a.createElement("div",{className:"timeline"},l.a.createElement("h1",{className:"section-title-2"},"ABOUT"),l.a.createElement("hr",{className:"style2"}),l.a.createElement("div",{className:"time-container content text-left"},l.a.createElement("h2",{className:"headline"},"About Myself"),l.a.createElement("h4",null,l.a.createElement(d.a,{icon:S.h,color:"black"})," Hello, my name is Jae-Min Jo, a software engineer with ",l.a.createElement(d.a,{icon:S.d,color:"red"})," and passion.",l.a.createElement("br",null),"My favorite programming language is Java ",l.a.createElement(d.a,{icon:S.a,color:"#654321"}),", especially with the Java Spring Framework ",l.a.createElement(d.a,{icon:S.e,color:"green"}),".",l.a.createElement("br",null),l.a.createElement("br",null),"Here is a link to my ",l.a.createElement("a",{href:"#"},"resume")," for your reference."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{className:"headline"},"Educational Background"),l.a.createElement("h4",null,l.a.createElement(d.a,{icon:S.h,color:"black"})," I first started coding in Java in High School, fell in love with programming and decided to study Electrical and Computer engineering. I graduated from the University of Texas at Austin in 2016 ",l.a.createElement(d.a,{icon:S.c,color:"black"}),"."),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h2",{className:"headline"},"Hobby"),l.a.createElement("h4",null,l.a.createElement(d.a,{icon:S.h,color:"black"})," Having lived in Austin, Texas since 2001, I am a big fan of the University of Texas football team.",l.a.createElement("br",null),"As a hobby, I like to follow the Longhorns football team. Hook'em ",l.a.createElement(d.a,{icon:S.b,color:"#BF5700"}),".",l.a.createElement("br",null),l.a.createElement("br",null)))))}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={name:"",email:"",phone:"",message:""},n.handleSubmit=n.handleSubmit.bind(Object(g.a)(n)),n.handleName=n.handleName.bind(Object(g.a)(n)),n.handleEmail=n.handleEmail.bind(Object(g.a)(n)),n.handlePhone=n.handlePhone.bind(Object(g.a)(n)),n.handleMessage=n.handleMessage.bind(Object(g.a)(n)),n.sendFeedback=n.sendFeedback.bind(Object(g.a)(n)),n.clearForm=n.clearForm.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"clearForm",value:function(){this.setState({name:"",email:"",phone:"",message:""})}},{key:"handleSubmit",value:function(e){console.log("Message has been submitted!\nThank you for contacting me!"),alert("Message has been submitted!\nThank you for contacting me!"),this.sendFeedback("template_ETTY5Xxd",{from_name:this.state.name,reply_to:this.state.email,phone:this.state.phone,message_html:this.state.message}),e.preventDefault(),this.clearForm()}},{key:"sendFeedback",value:function(e,t){window.emailjs.send("gmail",e,t).then((function(e){console.log("Email successfully sent!")})).catch((function(e){return console.error("Oh well, you failed. Here some thoughts on the error that occured:",e)}))}},{key:"handleName",value:function(e){this.setState({name:e.target.value})}},{key:"handleEmail",value:function(e){this.setState({email:e.target.value})}},{key:"handlePhone",value:function(e){this.setState({phone:e.target.value})}},{key:"handleMessage",value:function(e){this.setState({message:e.target.value})}},{key:"render",value:function(){return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"text-uppercase text-center section-title-2 mb-0"},"Contact"),l.a.createElement("h3",{className:"text-uppercase text-center mb-0"},"If you would like to contact me, please leave me a message!"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-8 mx-auto"},l.a.createElement("form",{id:"contactForm",onSubmit:this.handleSubmit.bind(this)},l.a.createElement("div",{className:"control-group"},l.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2"},l.a.createElement("input",{type:"text",className:"form-control",id:"name",required:!0,placeholder:"Name",value:this.state.name,onChange:this.handleName}),l.a.createElement("small",{className:"form-text text-danger help-block"}))),l.a.createElement("div",{className:"control-group"},l.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2"},l.a.createElement("input",{type:"email",className:"form-control",id:"email",required:!0,placeholder:"Email Address",value:this.state.email,onChange:this.handleEmail}),l.a.createElement("small",{className:"form-text text-danger help-block"}))),l.a.createElement("div",{className:"control-group"},l.a.createElement("div",{className:"form-group floating-label-form-group controls mb-0 pb-2"},l.a.createElement("input",{type:"tel",className:"form-control",id:"phone",required:!0,placeholder:"Phone Number",value:this.state.phone,onChange:this.handlePhone}),l.a.createElement("small",{className:"form-text text-danger help-block"}))),l.a.createElement("div",{className:"control-group"},l.a.createElement("div",{className:"form-group floating-label-form-group controls mb-5 pb-2"},l.a.createElement("textarea",{className:"form-control",id:"message",required:!0,placeholder:"Message",rows:"5",value:this.state.message,onChange:this.handleMessage}),l.a.createElement("small",{className:"form-text text-danger help-block"}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{className:"btn btn-primary btn-xl",id:"sendMessageButton",type:"submit"},"Send")))))))}}]),a}(n.Component),w=a(17),x=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",{className:"footer text-light"},l.a.createElement("div",{className:"row small"},l.a.createElement("p",{className:"footer-text"},"connect via"),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"btn btn-social rounded-circle linkedin",role:"button",href:"https://www.linkedin.com/in/jae-min-jo",target:"_blank"},l.a.createElement(d.a,{icon:w.b,color:"gray"}))),l.a.createElement("li",{className:"list-inline-item"},l.a.createElement("a",{className:"btn btn-social rounded-circle github",role:"button",href:"https://github.com/91jaeminjo",target:"_blank"},l.a.createElement(d.a,{icon:w.a,color:"gray"})))))}}]),a}(n.Component),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{id:this.props.titleId},l.a.createElement("h3",null,this.props.title),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-2"}),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("button",{id:this.props.incId,onClick:this.props.onInc},l.a.createElement("i",{className:"fa fa-arrow-up fa-2x"}),"up")),l.a.createElement("div",{className:"col-lg-2",id:this.props.lengthId},this.props.length),l.a.createElement("div",{className:"col-lg-3"},l.a.createElement("button",{id:this.props.decId,onClick:this.props.onDec},l.a.createElement("i",{className:"fa fa-arrow-down fa-2x"}),"down")),l.a.createElement("div",{className:"col-lg-2"})),l.a.createElement("div",null))}}]),a}(l.a.Component),I=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={breakLength:5,sessionLength:25,currentSession:"Session",currentStatus:"Stopped",time:1500,timeInterval:"",restart:0,count:0},n.incBreakLength=n.incBreakLength.bind(Object(g.a)(n)),n.decBreakLength=n.decBreakLength.bind(Object(g.a)(n)),n.incSessionLength=n.incSessionLength.bind(Object(g.a)(n)),n.decSessionLength=n.decSessionLength.bind(Object(g.a)(n)),n.startStop=n.startStop.bind(Object(g.a)(n)),n.countDown=n.countDown.bind(Object(g.a)(n)),n.clock=n.clock.bind(Object(g.a)(n)),n.reset=n.reset.bind(Object(g.a)(n)),n}return Object(i.a)(a,[{key:"incBreakLength",value:function(){if("Stopped"==this.state.currentStatus){var e=this.state.currentSession,t=this.state.breakLength,a=60*t;"Break"==e?t<60&&this.setState({breakLength:t+1,time:a+60}):t<60&&this.setState({breakLength:t+1})}}},{key:"decBreakLength",value:function(){if("Stopped"==this.state.currentStatus){var e=this.state.currentSession,t=this.state.breakLength,a=60*t;"Break"==e?t>1&&this.setState({breakLength:t-1,time:a-60}):t>1&&this.setState({breakLength:t-1})}}},{key:"incSessionLength",value:function(){if("Stopped"==this.state.currentStatus){var e=this.state.currentSession,t=this.state.sessionLength,a=60*t;"Session"==e?t<60&&this.setState({sessionLength:t+1,time:a+60}):t<60&&this.setState({sessionLength:t+1})}}},{key:"decSessionLength",value:function(){if("Stopped"==this.state.currentStatus){var e=this.state.currentSession,t=this.state.sessionLength,a=60*t;"Session"==e?t>1&&this.setState({sessionLength:t-1,time:a-60}):t>1&&this.setState({sessionLength:t-1})}}},{key:"clock",value:function(){var e=this.state.currentSession;this.state.currentStatus;"Session"==e?this.state.sessionLength:this.state.breakLength;var t=this.state.time;0===this.state.time&&(this.audioBeep.currentTime=0,this.audioBeep.play()),t<0&&("Session"==e?(this.startStop(),this.setState({currentSession:"Break",time:60*this.state.breakLength,restart:1,count:1})):(this.startStop(),this.setState({currentSession:"Session",time:60*this.state.sessionLength,restart:1,count:1}))),1==this.state.restart&&(this.startStop(),this.setState({restart:0}));var a=Math.floor(t/60),n=t-60*a;return(a=a<10?"0"+a:a)+":"+(n=n<10?"0"+n:n)}},{key:"countDown",value:function(){this.state.count>0&&this.state.count<4?this.setState({time:this.state.time-1,count:this.state.count+1}):4==this.state.count?(this.audioBeep.pause(),this.audioBeep.currentTime=0,this.setState({time:this.state.time-1,count:0})):this.setState({time:this.state.time-1})}},{key:"startStop",value:function(){var e=this;if("Running"==this.state.currentStatus)clearInterval(this.state.timeInterval),this.setState({currentStatus:"Stopped"});else{var t=setInterval((function(){e.countDown()}),1e3);0===this.state.time&&(this.audioBeep.currentTime=0,this.audioBeep.play()),this.setState({timeInterval:t,currentStatus:"Running"})}}},{key:"reset",value:function(){clearInterval(this.state.timeInterval),this.setState({breakLength:5,sessionLength:25,currentSession:"Session",currentStatus:"Stopped",time:1500,timeInterval:"",restart:0,count:0}),this.audioBeep.pause(),this.audioBeep.currentTime=0}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{id:"timeClock"},l.a.createElement("div",null,l.a.createElement("h1",null,"Time Clock")),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-lg-5"},l.a.createElement(L,{titleId:"break-label",title:"Break Length",decId:"break-decrement",incId:"break-increment",lengthId:"break-length",onInc:this.incBreakLength,onDec:this.decBreakLength,length:this.state.breakLength})),l.a.createElement("div",{className:"col-lg-2"}),l.a.createElement("div",{className:"col-lg-5"},l.a.createElement(L,{titleId:"session-label",title:"Session Length",decId:"session-decrement",incId:"session-increment",lengthId:"session-length",onInc:this.incSessionLength,onDec:this.decSessionLength,length:this.state.sessionLength}))),l.a.createElement("div",null,l.a.createElement("div",{id:"timer-label"},l.a.createElement("h3",null,this.state.currentSession)),l.a.createElement("div",{id:"time-left"},l.a.createElement("audio",{id:"beep",ref:function(t){e.audioBeep=t}},l.a.createElement("source",{src:"http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3",type:"audio/mpeg"})),this.clock()),l.a.createElement("br",null),l.a.createElement("button",{id:"start_stop",onClick:this.startStop},l.a.createElement("i",{className:"fa fa-play"}),"  ",l.a.createElement("i",{className:"fa fa-pause"}),"start/stop"),l.a.createElement("button",{id:"reset",onClick:this.reset},"reset")),l.a.createElement("br",null),l.a.createElement(E.b,{to:"/portfolio"},"Home"))}}]),a}(l.a.Component),M=a(12),B=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n,l;return Object(c.a)(this,a),(l=t.call(this,e)).state=(n={weatherInfo:[]},Object(M.a)(n,"weatherInfo",""),Object(M.a)(n,"mainWeather",""),Object(M.a)(n,"weatherDesc",""),Object(M.a)(n,"temperature",""),Object(M.a)(n,"tempFeelsLike",""),Object(M.a)(n,"tempMax",""),Object(M.a)(n,"tempMin",""),Object(M.a)(n,"windSpeed",""),Object(M.a)(n,"windDirection",""),Object(M.a)(n,"windUnit",""),Object(M.a)(n,"humidity",""),n),l}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("http://api.openweathermap.org/data/2.5/weather?q=Austin,Texas&units=imperial&appid=939ac13658fad1c02b7fcad388a113d2").then((function(e){return e.json()})).then((function(t){console.log("weather obj: ",t),e.setState({weatherInfo:t,mainWeather:t.weather[0].main,weatherDesc:t.weather[0].description,temperature:t.main.temp,tempFeelsLike:t.main.feels_like,tempMax:t.main.temp_max,tempMin:t.main.temp_min,windSpeed:t.wind.speed,windDirection:t.wind.deg,windUnit:t.wind.unit,humidity:t.main.humidity})})).catch(console.log)}},{key:"render",value:function(){return l.a.createElement("div",{className:"container-fluid"},l.a.createElement("h1",{className:"text-center"},"Weather App"),l.a.createElement("br",null),l.a.createElement("p",null,"Today's Weather in Austin, Texas: ",this.state.temperature,"F (possibly ranging from ",this.state.tempMin,"F to ",this.state.tempMax,"F"),l.a.createElement("p",null,"It feels like: ",this.state.tempFeelsLike),l.a.createElement("p",null,"Winds blowing at ",this.state.windSpeed,"mph ",this.state.windDirection),l.a.createElement("p",null,"Humidity is ",this.state.humidity,"%"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",{className:"project-items"},l.a.createElement(E.b,{to:"/portfolio"},"Home")))}}]),a}(n.Component),C=a(18),D=(a(44),a(15));C.b.add(w.c,w.a,S.a,w.b);var T=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(c.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null),l.a.createElement(p,null),l.a.createElement(j,null),l.a.createElement(y,null),l.a.createElement(O,null),l.a.createElement(x,null))}}]),a}(n.Component);function F(){return l.a.createElement(E.a,null,l.a.createElement(D.c,null,l.a.createElement(D.a,{path:"/portfolio",components:T},l.a.createElement(T,null)),l.a.createElement(D.a,{exact:!0,path:"/TimeClock"},l.a.createElement(I,null)),l.a.createElement(D.a,{exact:!0,path:"/WeatherApp"},l.a.createElement(B,null))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.d05b1333.chunk.js.map