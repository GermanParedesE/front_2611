"use strict";(self.webpackChunkskeleton=self.webpackChunkskeleton||[]).push([[202],{7202:(u,r,i)=>{i.r(r),i.d(r,{ReportsComponent:()=>g});var l=i(6814),n=i(25),h=i(7818),e=i(9468),d=i(6270);let g=(()=>{class o{constructor(t){this.agrupationService=t,this.view=[1200,400],this.totalMembers=0,this.colorScheme="vivid",this.single=[],this.singleType=[],this.showXAxis=!0,this.showYAxis=!0,this.gradient=!1,this.showLegend=!0,this.showXAxisLabel=!0,this.showYAxisLabel=!0}ngOnInit(){this.agrupationService.getAgrupacionesPorRegion().subscribe(t=>{this.single=t.cantidadAgrupacionesPorRegion.map(a=>({name:a.nameregion,value:a.cantidad_agrupaciones}))}),this.agrupationService.getTotalMembers().subscribe(t=>{this.totalMembers=t.totalMembers},t=>{console.error("Error al obtener el total de miembros",t)})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(d.a))};static#s=this.\u0275cmp=e.Xpm({type:o,selectors:[["app-reports"]],standalone:!0,features:[e.jDz],decls:11,vars:12,consts:[[1,"card"],[1,"card-header"],[1,"card-body"],[1,"card-title"],[1,"card-text","total-members"],[3,"view","scheme","results","gradient","xAxis","yAxis","legend","showXAxisLabel","xAxisLabel","showYAxisLabel","yAxisLabel"]],template:function(a,s){1&a&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2," Total de Miembros "),e.qZA(),e.TgZ(3,"div",2)(4,"h5",3),e._uU(5,"Total Comunidad"),e.qZA(),e.TgZ(6,"p",4),e._uU(7),e.qZA()()(),e.TgZ(8,"h2"),e._uU(9,"Agrupaciones por regi\xf3n"),e.qZA(),e._UZ(10,"ngx-charts-bar-vertical",5)),2&a&&(e.xp6(7),e.Oqu(s.totalMembers),e.xp6(3),e.Q6J("view",s.view)("scheme",s.colorScheme)("results",s.single)("gradient",s.gradient)("xAxis",s.showXAxis)("yAxis",s.showYAxis)("legend",s.showLegend)("showXAxisLabel",s.showXAxisLabel)("xAxisLabel","Regi\xf3n")("showYAxisLabel",s.showYAxisLabel)("yAxisLabel","Cantidad de Agrupaciones "))},dependencies:[l.ez,h.m,n.a4,n.K$],styles:[".total-members[_ngcontent-%COMP%]{font-size:80px;color:#661726;font-weight:900}"]})}return o})()}}]);