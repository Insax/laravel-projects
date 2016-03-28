/*!
 * vue-charts v0.1.0
 * (c) 2016 Hayden Bickerton
 * Released under the MIT License.
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],e):t.VueCharts=e(t._)}(this,function(t){"use strict";function e(t){arguments.length<=1||void 0===arguments[1]?{}:arguments[1];t.component("vue-chart",l)}t="default"in t?t["default"]:t;var a=!1,r=!1,n=function(){var t=null,e=null,a=new Promise(function(a,r){t=a,e=r});return{promise:a,resolve:t,reject:e}},i=n(),o=function(t,e){if(a||r)return i.promise;a=!0;var n=document.createElement("script");return n.setAttribute("src","https://www.gstatic.com/charts/loader.js"),n.onreadystatechange=n.onload=function(){google.charts.load(e,{packages:t}),google.charts.setOnLoadCallback(function(){a=!1,r=!0,i.resolve()})},document.getElementsByTagName("head")[0].appendChild(n),i.promise},u=function(t,e,a){for(var r in a){var n=r,i=a[r];"ready"===n?i():google.visualization.events.addListener(e,n,i)}},c=function(e,a){t.each(a,function(a,r){var n=a.type;e.$watch(r,function(){e.drawChart()},{deep:t.isObject(n)})})},d={packages:{type:Array,"default":function(){return["corechart"]}},version:{"default":"current",coerce:function(e){return t.toString(e)}},chartType:{required:!0,type:String,"default":function(){return"LineChart"}},chartEvents:{type:Object,"default":function(){return{}}},columns:{required:!0,type:Array},rows:{type:Array,"default":function(){return[]}},options:{type:Object,"default":function(){return{colors:{type:Array,"default":function(){return[]}},chart:{title:"Chart Title",subtitle:"Subtitle"},hAxis:{title:"X Label"},vAxis:{title:"Y Label"},width:"400px",height:"300px",animation:{duration:500,easing:"out"}}}}},l={name:"vue-chart",props:d,template:'<div class="vue-chart-container"><div class="vue-chart" id="{{ chartId }}"></div></div>',data:function(){return{chart:null,chartId:"X"+this._uid,wrapper:null,dataTable:[],hiddenColumns:[]}},ready:function(){var t=this;o(t.packages,t.version).then(t.drawChart).then(function(){var e=d;delete e.bounds,c(t,e),u(t,t.chart,t.chartEvents)})["catch"](function(t){throw t})},methods:{buildDataTable:function(){var e=this,a=new google.visualization.DataTable;return t.each(e.columns,function(t){a.addColumn(t)}),t.isEmpty(e.rows)||a.addRows(e.rows),a},updateDataTable:function(){var e=this;e.dataTable.removeRows(0,e.dataTable.getNumberOfRows()),e.dataTable.removeColumns(0,e.dataTable.getNumberOfColumns()),t.each(e.columns,function(t){e.dataTable.addColumn(t)}),t.isEmpty(e.rows)||e.dataTable.addRows(e.rows)},buildWrapper:function(t,e,a,r){var n=new google.visualization.ChartWrapper({chartType:t,dataTable:e,options:a,containerId:r});return n},buildChart:function(){var e=this,a=t.isEmpty(e.dataTable)?e.buildDataTable():e.dataTable;e.wrapper=e.buildWrapper(e.chartType,a,e.options,e.chartId),e.dataTable=e.wrapper.getDataTable(),google.visualization.events.addOneTimeListener(e.wrapper,"ready",function(){e.chart=e.wrapper.getChart()})},drawChart:function(){var e=this;!t.isEmpty(e.rows)&&!t.isObjectLike(e.rows)||t.isEmpty(e.columns)||(t.isNull(e.chart)?e.buildChart():e.updateDataTable(),e.wrapper.draw())}}};return e});