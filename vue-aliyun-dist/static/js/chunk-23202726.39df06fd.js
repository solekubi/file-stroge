(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23202726"],{"0feb":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"f",(function(){return c})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"g",(function(){return l}));var a=n("b775"),r=n("365c");function i(e){return Object(a["b"])({url:r["b"].Permission+"/getPermList",data:e,method:"get"})}function c(e){return Object(a["b"])({url:r["b"].Permission+"/savePerm",data:e,method:"post"})}function s(e){return Object(a["b"])({url:r["b"].Permission+"/delPerm",data:e,method:"post"})}function o(e){return Object(a["b"])({url:r["b"].Permission+"/getPermSettingList",data:e,method:"get"})}function u(e){return Object(a["b"])({url:r["b"].Permission+"/getRoleList",data:e,method:"get"})}function d(e){return Object(a["b"])({url:r["b"].Permission+"/getUserList",data:e,method:"get"})}function l(e){return Object(a["b"])({url:r["b"].Permission+"/savePermSetting",data:e,method:"post"})}},"4e2b":function(e,t,n){},6024:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{attrs:{bordered:!1}},[n("div",{staticClass:"table-operator"},[n("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:function(t){return e.addRec()}}},[e._v("新建")]),n("a-button",{attrs:{type:"danger",icon:"delete"},on:{click:function(t){return e.handleDel(e.$refs.permTable.selectedRowKeys)}}},[e._v("删除")])],1),n("s-table",{ref:"permTable",attrs:{columns:e.columns,"load-data":e.loadData,dataSource:e.dataSource,multiSelect:!0},on:{"update:dataSource":function(t){e.dataSource=t},"update:data-source":function(t){e.dataSource=t}},scopedSlots:e._u([{key:"serial",fn:function(t,a,r){return n("span",{},[e._v(" "+e._s(e.queryParam.pageSize*(e.queryParam.pageNo-1)+r+1)+" ")])}},e._l(["name","permission","description"],(function(t){return{key:t,fn:function(a,r){return[n("span",{key:t},[r.editable?n("a-input",{staticStyle:{margin:"-5px 0"},attrs:{size:"small",value:r[t]},on:{"update:value":function(n){return e.$set(r,t,n)},change:function(n){return e.handleChange(n.target.value,r.id,t)}}}):[e._v(e._s(a)+" ")]],2)]}}})),{key:"status",fn:function(t,a){return n("span",{},[n("sample-switch",{attrs:{value:a.status,disabled:!a.editable},on:{"update:value":function(t){return e.$set(a,"status",t)}}})],1)}},{key:"action",fn:function(t,a){return n("span",{},[a.editable?[n("a",{on:{click:function(t){return e.handleSave(a)}}},[e._v("保存")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:"是否要取消编辑此行？"},on:{confirm:function(t){return e.handleCancel(a.id)}}},[n("a",[e._v("取消")])])]:[n("a",{on:{click:function(t){return e.handleEdit(a.id)}}},[e._v("修改")]),n("a-divider",{attrs:{type:"vertical"}}),n("a-popconfirm",{attrs:{title:"是否要删除此行？",placement:"right"},on:{confirm:function(t){return e.handleDel([a.id])}}},[n("a",[e._v("删除")])])]],2)}}],null,!0)})],1)},r=[],i=(n("4de4"),n("c740"),n("caad"),n("a434"),n("d3b7"),n("2532"),n("2af9")),c=n("ca00"),s=n("0feb"),o=n("c1df"),u=n.n(o),d={name:"PermList",components:{STable:i["g"]},data:function(){return{queryParam:{},dataSource:[],columns:[{title:"#",scopedSlots:{customRender:"serial"}},{title:"名称",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"编码",dataIndex:"permission",scopedSlots:{customRender:"permission"}},{title:"状态",dataIndex:"status",scopedSlots:{filterIcon:"filterIcon",customRender:"status"},filters:[{text:"启用",value:"1"},{text:"禁用",value:"0"}]},{title:"描述",dataIndex:"description",scopedSlots:{customRender:"description"}},{title:"创建时间",dataIndex:"create_date"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"}}]}},methods:{doSearch:function(){this.$refs.permTable.doSearch(this.queryParam)},addRec:function(){this.dataSource.splice(0,0,{id:"add_"+u.a.now(),name:"",status:"1",permission:"",create_date:Object(c["a"])(u()()),description:"",editable:!0})},handleCancel:function(e){e.includes("add_")?this.dataSource.splice(this.dataSource.findIndex((function(t){return t.id===e})),1):(delete this.dataSource.filter((function(t){return t.id===e}))[0].editable,this.$forceUpdate())},handleSave:function(e){var t=this,n=this;Object(s["f"])(e).then((function(a){n.$message.success(a.message),t.dataSource.filter((function(t){return t.id===e.id}))[0].id=a.result.id,t.handleCancel(a.result.id)}))},handleEdit:function(e){this.dataSource.filter((function(t){return t.id===e}))[0].editable=!0,this.$forceUpdate()},handleDel:function(e){var t=this,n=this;if(0===e.length)return this.$notification["warning"]({message:"提示",description:"请先勾选一条记录",duration:4}),!1;var a=n.$refs.permTable.selectedRowKeys;a.length===e.length?n.$confirm({title:"删除?",content:"是否要删除勾选的行？",onOk:function(){return new Promise((function(t,a){Object(s["a"])({ids:e}).then((function(e){n.$message.success(e.message),n.$refs.permTable.clearSelected(),n.doSearch(),t()}))})).catch((function(){}))}}):Object(s["a"])({ids:e}).then((function(e){t.$message.success(e.message),t.doSearch()}))},handleChange:function(e,t,n){this.dataSource.filter((function(e){return e.id===t}))[0][n]=e,this.$forceUpdate()},loadData:function(e){return this.queryParam=Object.assign(this.queryParam,e),Object(s["b"])(Object.assign({},this.queryParam,{create_date:Object(c["a"])(this.queryParam.create_date)})).then((function(e){return e.result}))}}},l=d,f=(n("673e"),n("2877")),m=Object(f["a"])(l,a,r,!1,null,"5146e3ea",null);t["default"]=m.exports},"673e":function(e,t,n){"use strict";var a=n("4e2b"),r=n.n(a);r.a}}]);