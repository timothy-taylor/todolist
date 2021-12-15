(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(81),o=t.n(r),a=t(645),c=t.n(a)()(o());c.push([e.id,"* {\n    font-family: sans-serif;\n    font-weight: 100;\n    font-size: 100%;\n}\n\nbody {\n    display: flex;\n    justify-content: center;\n}\n\n.container {\n    max-width: 500px;\n    width: calc(100vw - 12px);\n}\n\nheader {\n    background-color: whitesmoke;\n    border-radius: 4px;\n    height: 4em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 4em;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nh1 {\n    font-size: 2.3em;\n    letter-spacing: 2px;\n    color: dimgray;\n}\n\n#nav {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n}\n\nbutton {\n    width: 100%;\n    height: 3em;\n    background-color: cornflowerblue;\n    border: none;\n    color: whitesmoke;\n    text-align: center;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-size: 1em;\n    font-weight: normal;\n    margin-top: 4px;\n}\n\nbutton:hover, button:focus {\n    border: 1px solid blue;\n    color: white;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\nmain {\n    margin-top: 4em;\n}\n\nmain ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n}\n\nmain h2 {\n   font-size: 1.7em;\n   text-align: center;\n}\n\nmain li {\n    border: 1px solid cornflowerblue;\n    border-radius: 4px;\n    text-align: center;\n    background-color: whitesmoke;\n    margin-top: 1em;\n}\n\nmain li h3 {\n    font-size: 1.6em;\n}\n\nmain li h4 {\n    font-style: italic;\n}\n\nmain li p {\n    margin: 2em;\n    text-align: justify;\n}\n\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0,0,0,0.4);\n}\n\nform, .modalcontent {\n    background-color: whitesmoke;\n    border-radius: 4px;\n    margin: 5% 10%;\n    padding: 5%;\n}\n\ninput, select, textarea {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-sizing: border-box;\n}\n\ninput[type=submit] {\n    background-color: cornflowerblue;\n    color: whitesmoke;\n    text-transform: uppercase;\n}\n\ninput[type=submit]:hover {\n    color: white;\n    text-decoration: underline;\n}\n\nlabel {\n    font-style: italic;\n}\n\nform h2 {\n    font-size: 2em;\n    text-align: center;\n}\n\nfooter {\n    background-color: whitesmoke;\n    border-radius: 4px;\n    display: flex;\n    justify-content: center;\n    align-content: center;\n    padding: 2em;\n    margin-top: 4em;\n    letter-spacing: 4px;\n}\n",""]);const i=c},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&c[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],s=r.base?d[0]+r.base:d[0],l=a[s]||0,p="".concat(s," ").concat(l);a[s]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=o(u,r);r.byIndex=i,n.splice(i,0,{identifier:p,updater:f,references:1})}c.push(p)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=r(e,o),s=0;s<a.length;s++){var l=t(a[s]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(e,n=[]){const t={title:e,list:n};return{project:t,rename:e=>{t.title=e},get:t=>{switch(t){case"title":return e;case"list":return n;default:return[e,n]}},add:e=>{n.push(e)},remove:e=>{n.splice(e,1)}}}function n(e,n,t,r){return{item:{title:e,description:n,dueDate:t,priority:r},get:o=>{switch(o){case"title":return e;case"description":return n;case"dueDate":return t;case"priority":return r;default:return[e,n,t,r]}},set:(o,a)=>{switch(o){case"title":e=a;break;case"description":n=a;break;case"dueDate":t=a;case"priority":r=a}}}}function r(n=[e("starter project")],t=0){return{projects:n,active_project_ix:t,add:e=>n.push(e),remove:e=>{n.splice(e,1)},save:function(){localStorage.setItem("todo-library",JSON.stringify(this))}}}function o(){return(t=>{if(t){const o=JSON.parse(t);return r(o.projects.map((t=>{const r=t.project.list.map((e=>n(e.item.title,e.item.description,e.item.dueDate,e.item.priority)));return e(t.project.title,r)})),o.active_project_ix)}return r()})(localStorage.getItem("todo-library"))}const a=o();var c=t(379),i=t.n(c),d=t(795),s=t.n(d),l=t(569),p=t.n(l),m=t(565),u=t.n(m),f=t(216),h=t.n(f),v=t(589),g=t.n(v),y=t(426),b={};b.styleTagTransform=g(),b.setAttributes=u(),b.insert=p().bind(null,"head"),b.domAPI=s(),b.insertStyleElement=h(),i()(y.Z,b),y.Z&&y.Z.locals&&y.Z.locals;const x=o();console.log(x);const E=document.createElement("DIV");E.classList.add("container"),document.body.appendChild(E),E.appendChild(function(){const e=document.createElement("HEADER");e.id="header";const n=document.createElement("H1");return n.innerText="todos",e.appendChild(n),e}()),E.appendChild(function(e){const n=document.createElement("DIV");return n.id="mostmodals",n.appendChild(function(){const e=document.createElement("DIV");e.classList.add("modal"),e.id="itemModal";const n=document.createElement("FORM");n.name="itemform";const t=document.createElement("H2");t.innerHTML="New task";const r=document.createElement("INPUT");r.required=!0,r.placeholder="Title",r.maxLength=25;const o=document.createElement("TEXTAREA");o.placeholder="Description";const a=document.createElement("INPUT");a.type="date";const c=document.createElement("LABEL");c.for="priority",c.innerHTML="Priority:";const i=document.createElement("INPUT");i.type="range",i.name="priority";const d=document.createElement("INPUT");return d.value="Create",d.type="submit",d.id="submit",n.appendChild(t),n.appendChild(r),n.appendChild(o),n.appendChild(a),n.appendChild(c),n.appendChild(i),n.appendChild(d),e.appendChild(n),e}()),n.appendChild(function(){const e=document.createElement("DIV");e.classList.add("modal"),e.id="projectModal";const n=document.createElement("FORM");n.name="projform";const t=document.createElement("H2");t.innerHTML="New project";const r=document.createElement("INPUT");r.required=!0,r.placeholder="Title",r.maxLength=25;const o=document.createElement("INPUT");return o.value="Create",o.type="submit",o.id="submit",n.appendChild(t),n.appendChild(r),n.appendChild(o),e.appendChild(n),e}()),n.appendChild(function(e){const n=document.createElement("DIV");n.classList.add("modal"),n.id="renameProject";const t=document.createElement("FORM");t.name="renameform";const r=document.createElement("H2");r.innerHTML="Rename project";const o=document.createElement("INPUT");o.placeholder=e.get("title"),o.maxLength=25;const a=document.createElement("INPUT");return a.value="Rename",a.type="submit",a.id="submit",t.appendChild(r),t.appendChild(o),t.appendChild(a),n.appendChild(t),n}(e)),n.appendChild(function(){const e=document.createElement("DIV");e.classList.add("modal"),e.id="viewAllModal";const n=document.createElement("FORM");n.name="chooseform";const t=document.createElement("LABEL");t.for="Projects";const r=document.createElement("SELECT");r.id="Projects",a.projects.forEach(((e,n)=>{const t=document.createElement("OPTION");t.value=n,t.innerHTML=e.get("title"),r.appendChild(t)}));const o=document.createElement("INPUT");return o.value="Load",o.type="submit",o.id="submit",n.appendChild(t),n.appendChild(r),n.appendChild(o),e.appendChild(n),e}()),n}(x.projects[x.active_project_ix]));const C=document.getElementById("itemModal"),j=document.getElementById("projectModal"),T=document.getElementById("viewAllModal"),w=document.getElementById("renameProject");E.appendChild(function(e,n,t,r){const o=document.createElement("UL");o.id="nav";const a=["New task","Rename current project","Delete current project","Choose project","New project"];return a.forEach((c=>{const i=document.createElement("LI"),d=document.createElement("BUTTON");d.innerHTML=c,d.id=c,d.onclick=o=>{switch(o.target.id){case a[0]:e.style.display="block";break;case a[1]:r.style.display="block";break;case a[2]:break;case a[3]:t.style.display="block";break;case a[4]:n.style.display="block"}},i.appendChild(d),o.appendChild(i)})),window.addEventListener("click",(o=>{[e,n,t,r].includes(o.target)&&(e.style.display="none",n.style.display="none",t.style.display="none",r.style.display="none")})),o}(C,j,T,w)),E.appendChild(function(e,n,t){const r=document.createElement("MAIN");if(r.id="content",e){const o=document.createElement("H2");o.innerText=parseInt(n)+1+"/"+t+": "+e.get("title");const a=document.createElement("UL");e.get("list").forEach(((e,n)=>{const t=document.createElement("LI"),r=document.createElement("H3");r.innerHTML=e.get("title");const o=document.createElement("H4");o.innerHTML=e.get("dueDate");const c=document.createElement("P");c.innerHTML=e.get("description");const i=document.createElement("BUTTON");i.innerHTML="done / delete",i.id=n,t.appendChild(r),t.appendChild(o),t.appendChild(c),t.appendChild(i),a.appendChild(t)})),r.appendChild(o),r.appendChild(a)}else{const e=document.createElement("H2");e.innerTEXT="no existing projects",r.appendChild(e)}return r}(x.projects[x.active_project_ix],x.active_project_ix,x.projects.length)),E.appendChild(function(){const e=document.createElement("FOOTER");return e.innerHTML="TGT / 2021",e}());const L=document.forms.chooseform;L.addEventListener("submit",(()=>{x.active_project_ix=L.elements[0].value,x.save()}));const I=document.forms.itemform;I.addEventListener("submit",(()=>{const e=n(I.elements[0].value,I.elements[1].value,I.elements[2].value,I.elements[3].value);x.projects[x.active_project_ix].add(e),x.save()}));const k=document.forms.projform;k.addEventListener("submit",(()=>{const n=e(k.elements[0].value);x.add(n),x.active_project_ix=x.projects.length-1,x.save()})),document.forms.renameform.addEventListener("submit",(()=>{const e=renameform.elements[0].value;x.projects[x.active_project_ix].rename(e),x.save()})),document.getElementById("Delete current project").addEventListener("click",(()=>{if(confirm("Are you sure?")&&x.projects.length>1){const e=x.active_project_ix;x.active_project_ix=0,x.remove(e),x.save(),window.location.reload()}})),document.getElementById("content").addEventListener("click",(e=>{"BUTTON"===e.target.nodeName&&confirm("Are you sure?")&&(x.projects[x.active_project_ix].remove(e.target.id),x.save(),window.location.reload())}))})()})();