(this["webpackJsonpkampai-cocktail"]=this["webpackJsonpkampai-cocktail"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),s=a.n(c),o=(a(12),a(13),a(14),a(6).a.Anime),i=function(){return r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"clock-face"},r.a.createElement("div",{className:"hour-hand"}),r.a.createElement("div",{className:"min-hand"}),r.a.createElement(o,{initial:[{targets:"#secHand",rotate:"1turn",duration:6e4,easing:"linear",loop:!0}]},r.a.createElement("div",{className:"sec-hand",id:"secHand"}))))};a(15);function l(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("h1",{className:"appName"},"Kampai Cocktails"),r.a.createElement(i,null),r.a.createElement("h2",{className:"phrase"},"It's 5 o'clock somewhere..."))}var u=a(2),m=a(1),d=a.n(m),h=a(3);function p(e){return r.a.createElement("div",{className:"randomContainer"},r.a.createElement("button",{className:"buttons",type:"button",onClick:Object(h.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://the-cocktail-db.p.rapidapi.com/random.php",{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}));case 2:a=t.sent,console.log(a),e.setDrinkResults(a.drinks);case 5:case"end":return t.stop()}}),t)})))},"Random Drink!"))}function f(e){return r.a.createElement("div",{className:"searchByIngredient"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"input",placeholder:"type an ingredient",onChange:function(t){e.setIngredient(t.target.value)},value:e.ingredient}),r.a.createElement("button",{type:"submit",className:"buttons",onClick:function(){var t=Object(h.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,r=e.ingredient,fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i=".concat(r),{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}));case 3:(n=t.sent)?(e.setDrinkResults(n.drinks),e.setSearchError(!1)):n||e.setSearchError(!0);case 5:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},"Search")))}a(17);function k(e){function t(e){return fetch("https://the-cocktail-db.p.rapidapi.com/lookup.php?i=".concat(e),{method:"GET",headers:{"x-rapidapi-host":"the-cocktail-db.p.rapidapi.com","x-rapidapi-key":"8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}))}return console.log(typeof e.drinkResults),"object"!==typeof e.drinkResults||e.searchError?e.searchError?r.a.createElement("div",{className:"noDrinks"},"Drinks with that ingredient couldn't be found."):r.a.createElement("div",{className:"noDrinks"},"Search by ingredient....or get a random one!"):r.a.createElement("div",{className:"imgContainer"},e.drinkResults.map((function(a,n){return r.a.createElement("div",{key:n},r.a.createElement("img",{className:"drinkImg",src:a.strDrinkThumb,onClick:Object(h.a)(d.a.mark((function n(){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.setDrinkId(a.idDrink),n.next=3,t(a.idDrink);case 3:r=n.sent,e.setFullDrinkInfo(r.drinks[0]),e.setShowModal(!0);case 6:case"end":return n.stop()}}),n)})))}),r.a.createElement("p",{className:"drinkNameClickable",onClick:Object(h.a)(d.a.mark((function n(){var r;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.setDrinkId(a.idDrink),n.next=3,t(a.idDrink);case 3:r=n.sent,e.setFullDrinkInfo(r.drinks[0]),e.setShowModal(!0);case 6:case"end":return n.stop()}}),n)})))},a.strDrink))})))}a(18);function E(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],s=a[1];return r.a.createElement("div",{className:"modal"},r.a.createElement("div",{className:"modal-content",onMouseEnter:Object(h.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n=e.fullDrinkInfo.strDrink,fetch("https://youtube-search1.p.rapidapi.com/how%2520to%2520make%2520".concat(n,"%2520drink"),{method:"GET",headers:{"x-rapidapi-host":"youtube-search1.p.rapidapi.com","x-rapidapi-key":"8618e17941mshc832839b43572f9p1a882bjsn30e7e367eddd"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){console.log(e)}));case 2:a=t.sent,s(a.items[0].url);case 4:case"end":return t.stop()}var n}),t)})))},r.a.createElement("img",{className:"modalImage",src:e.fullDrinkInfo.strDrinkThumb}),r.a.createElement("div",{className:"drinkName"},e.fullDrinkInfo.strDrink),r.a.createElement("hr",null),r.a.createElement("p",{className:"alcoholContent"},"Alcoholic or non-alcoholic? ",e.fullDrinkInfo.strAlcoholic),r.a.createElement("p",{className:"glassType"},"Type of glass? ",e.fullDrinkInfo.strGlass),r.a.createElement("p",{className:"drinkCategory"},"Category: ",e.fullDrinkInfo.strCategory," "),r.a.createElement("hr",null),function(e){for(var t={},a=1;a<=15;a++)null!==e["strIngredient".concat(a)]&&(t[e["strMeasure".concat(a)]]=e["strIngredient".concat(a)]);return r.a.createElement("div",{className:"ingredientListContainer"},"Ingredients",Object.keys(t).map((function(e){return"null"===e?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"individualIngredient",value:e},"To taste"," -"," ",r.a.createElement("a",{href:"https://search.rakuten.co.jp/search/mall/".concat(t[e]),target:"_blank"},t[e]))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"individualIngredient",value:e},e," -"," ",r.a.createElement("a",{href:"https://search.rakuten.co.jp/search/mall/".concat(t[e]),target:"_blank"},t[e])))})))}(e.fullDrinkInfo),r.a.createElement("hr",null),r.a.createElement("p",{className:"instructions"},"Instructions: ",e.fullDrinkInfo.strInstructions),r.a.createElement("p",null,"Click"," ",r.a.createElement("a",{href:c,target:"_blank"},"here")," ","to watch a tutorial video on making the drink!"),r.a.createElement("button",{type:"button",className:"button",onClick:function(){console.log("typeof setshowmodal",typeof setShowModal),e.setShowModal(!1)}},"Close")))}var b=function(e){return s.a.createPortal(E(e),document.body)};a(19);function g(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(""),o=Object(u.a)(s,2),i=o[0],l=o[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),h=d[0],E=d[1],g=Object(n.useState)(""),v=Object(u.a)(g,2),N=v[0],w=v[1],D=Object(n.useState)(""),I=Object(u.a)(D,2),j=I[0],y=I[1],O=Object(n.useState)(""),x=Object(u.a)(O,2),S=x[0],C=x[1],M=Object(n.useState)(!1),R=Object(u.a)(M,2),T=R[0],L=R[1];return r.a.createElement("div",{className:"MainPage"},r.a.createElement("div",{className:"allButtons"},r.a.createElement(p,{className:"randomButton",drinkResults:i,setDrinkResults:l}),r.a.createElement(f,{className:"searchByIngredient",setIngredient:c,ingredient:a,drinkResults:i,setDrinkResults:l,setSearchError:L})),r.a.createElement(k,{drinkResults:i,setDrinkResults:l,setShowModal:E,drinkId:N,setDrinkId:w,fullDrinkInfo:j,setFullDrinkInfo:y,youtubeLink:S,setYoutubeLink:C,searchError:T}),r.a.createElement("div",null,h?r.a.createElement(b,{showModal:h,setShowModal:E,drinkId:N,fullDrinkInfo:j,setFullDrinkInfo:y,youtubeLink:S,setYoutubeLink:C}):null))}a(20);function v(){return r.a.createElement("div",{className:"footer"},"Made with \u2764\ufe0f by:"," ",r.a.createElement("a",{href:"https://twitter.com/HaleePagel",className:"nameLinks",target:"_blank"},"Halee"),", ",r.a.createElement("a",{href:"https://twitter.com/bentley449",className:"nameLinks",target:"_blank"},"Jeff"),", ",r.a.createElement("a",{href:"https://twitter.com/softwaredevtam",className:"nameLinks",target:"_blank"},"Tam"),", and ",r.a.createElement("a",{href:"https://twitter.com/KapakahiCoder",className:"nameLinks",target:"_blank"},"Garrett"))}var N=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l,{className:"navbar"}),r.a.createElement(g,{className:"mainPage"}),r.a.createElement(v,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9f9a4d82.chunk.js.map