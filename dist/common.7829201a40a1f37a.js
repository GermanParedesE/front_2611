"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[592],{2738:(u,r,a)=>{a.d(r,{$:()=>s});var t=a(9468),o=a(2624);let s=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-confirm-dialog"]],decls:9,vars:1,consts:[["mat-dialog-title",""],[1,"dialog-buttons"],["mat-button","","mat-dialog-close","",1,"btn","btn-outline-primary"],["mat-button","","cdkFocusInitial","",1,"btn","btn-primary",3,"mat-dialog-close"]],template:function(i,c){1&i&&(t.TgZ(0,"h2",0),t._uU(1,"Confirmar Eliminaci\xf3n"),t.qZA(),t.TgZ(2,"mat-dialog-content"),t._uU(3,"\xbfEst\xe1s seguro de que deseas eliminar esta agrupaci\xf3n?"),t.qZA(),t.TgZ(4,"mat-dialog-actions",1)(5,"button",2),t._uU(6,"No"),t.qZA(),t.TgZ(7,"button",3),t._uU(8,"S\xed"),t.qZA()()),2&i&&(t.xp6(7),t.Q6J("mat-dialog-close",!0))},dependencies:[o.ZT,o.uh,o.xY,o.H8],styles:[".dialog-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center}.dialog-buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:0 10px;padding:5px 20px}"]})}return n})()},6270:(u,r,a)=>{a.d(r,{a:()=>s});var t=a(9468),o=a(9862);let s=(()=>{class n{constructor(e){this.http=e,this.apiUrl="http://localhost:3000/dev"}crearAgrupation(e){return this.http.post(`${this.apiUrl}/insertAgrupation`,e)}crearRepresentative(e){return this.http.post(`${this.apiUrl}/insertRepresentative`,e)}deleteAgrupation(e){return this.http.delete(`${this.apiUrl}/deleteAgrupation/${e}`)}listAgrupations(){return this.http.get(`${this.apiUrl}/listAgrupations`)}getTotalMembers(){return this.http.get(`${this.apiUrl}/total-members`)}getAgrupacionesPorRegion(){return this.http.get(`${this.apiUrl}/agrupaciones-por-region`)}getAgrupacionesPorTipo(){return this.http.get(`${this.apiUrl}/agrupaciones-por-tipo`)}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(o.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},6138:(u,r,a)=>{a.d(r,{r:()=>s});var t=a(9468),o=a(9862);let s=(()=>{class n{constructor(e){this.http=e,this.apiUrl="http://localhost:3000/dev"}registerUser(e){return this.http.post(`${this.apiUrl}/insertAccount`,e)}validateAccount(e,i){return this.http.post(`${this.apiUrl}/validateAccount`,{emailaccount:e,passaccount:i})}listAccounts(){return this.http.get(`${this.apiUrl}/getAccounts`)}deleteAccount(e){return this.http.delete(`${this.apiUrl}/deleteAccount/${e}`)}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(o.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()}}]);