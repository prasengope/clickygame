(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"https://images.pexels.com/photos/162321/dog-puppy-yorkshire-terrier-yorkshire-terrier-puppy-162321.jpeg?h=350&auto=compress&cs=tinysrgb"},{id:2,image:"https://images.pexels.com/photos/247937/pexels-photo-247937.jpeg?h=350&auto=compress&cs=tinysrgb"},{id:3,image:"https://images.pexels.com/photos/59988/dog-puppy-animal-portrait-small-dog-59988.jpeg?h=350&auto=compress&cs=tinysrgb"},{id:4,image:"https://images.pexels.com/photos/133196/pexels-photo-133196.jpeg?h=350&auto=compress&cs=tinysrgb"},{id:5,image:"https://images.pexels.com/photos/169524/pexels-photo-169524.jpeg?h=350&auto=compress&cs=tinysrgb"},{id:6,image:"https://images.pexels.com/photos/162123/dog-cavalier-king-charles-spaniel-funny-pet-162123.jpeg?h=350&auto=compress&cs=tinysrgb"},{id:7,image:"https://images.pexels.com/photos/69433/pexels-photo-69433.jpeg?h=350&auto=compress&cs=tinysrgb"},{id:8,image:"https://images.pexels.com/photos/434046/pexels-photo-434046.jpeg?h=350&auto=compress&cs=tinysrgb"}]},,,,,,,,function(e,t,o){e.exports=o(20)},,,,,,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var a=o(0),n=o.n(a),s=o(3),r=o.n(s),i=o(4),c=o(5),l=o(7),p=o(6),u=o(8),m=(o(15),function(e){return n.a.createElement("div",{className:"card img-container hover"},n.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(){return e.shuffleScoreCard(e.id)},className:"shuffleScore"}))}),h=(o(16),function(e){return n.a.createElement("div",{className:"wrapper"},e.children)}),g=(o(17),function(e){return n.a.createElement("div",{className:"gameScore"},n.a.createElement("h3",{className:"score"},"Your Score ",e.total),n.a.createElement("h3",{className:"status"},e.status))}),d=o(1),f=(o(18),function(e){function t(){var e,o;Object(i.a)(this,t);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(o=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={pups:d,clickedPuppyIds:[],score:0,goal:8,status:""},o.shuffleScoreCard=function(e){var t=o.state.clickedPuppyIds;if(t.includes(e))o.setState({clickedPuppyIds:[],score:0,status:"Game Over! You lost. Click to play again!"});else{if(t.push(e),8===t.length)return o.setState({score:8,status:"You Won! Great Job, Smartie! Click to play again!",clickedPuppyIds:[]}),void console.log("You Win");o.setState({pups:d,clickedPuppyIds:t,score:t.length,status:" "});for(var a=d.length-1;a>0;a--){var n=Math.floor(Math.random()*(a+1)),s=[d[n],d[a]];d[a]=s[0],d[n]=s[1]}}},o}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App-header"},n.a.createElement("h1",{className:"App-title"},"Good luck with the Clicky Game!"),n.a.createElement("h3",{className:"App-intro"},"Please do not click the same image twice!")),n.a.createElement("hr",null),n.a.createElement(g,{total:this.state.score,goal:8,status:this.state.status}),n.a.createElement(h,null,this.state.pups.map(function(t){return n.a.createElement(m,{shuffleScoreCard:e.shuffleScoreCard,id:t.id,key:t.id,image:t.image})})),n.a.createElement("footer",null,n.a.createElement("p",{className:"App-gitLink"}," github code: ",n.a.createElement("a",{href:"https://github.com/prasengope/clickygame",target:"_blank",rel:"noopener noreferrer"}," here"),".")))}}]),t}(a.Component)),y=(o(19),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function v(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(n.a.createElement(f,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/clickygame",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/clickygame","/service-worker.js");y?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):v(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):v(e)})}}()}],[[9,1,2]]]);
//# sourceMappingURL=main.c4947564.chunk.js.map