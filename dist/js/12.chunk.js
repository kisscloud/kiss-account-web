(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(e,t,s){},384:function(e,t,s){"use strict";var a=s(366);s.n(a).a},391:function(e,t,s){"use strict";s.r(t);var a=s(33),n=s.n(a),r=s(52),l=s.n(r),i=s(111),o=s(53),c=s(23),d=s.n(c),u=(s(3),{clientName:null,status:"1"}),m={},p={name:"Clients",data:function(){return{pageLoading:!1,showClientFormModal:!1,showClientModuleModal:!1,showPassowrdFormModal:!1,tabActiveName:"first",selectClient:{},selectModules:[],editClientModules:[],modules:[],accounts:[],selectAccounts:[],filterMethod:function(e,t){return t.label.indexOf(e)>-1},clientForm:d()({},u),roleModuleForm:d()({},m),clientFormRules:{clientName:[{required:!0,message:"请输入客户端名称",trigger:"change"}]},passwordForm:{password:null},passwordFormRules:{password:[{required:!0,message:"请输入用户密码",trigger:"change"}]},clients:[],moduleTree:[],defaultProps:{children:"children",label:"label"},authServers:[{ip:"192.168.0.102",remark:"Nest1"},{ip:"192.168.0.103",remark:"Nest2"}]}},mounted:function(){var e=l()(n.a.mark(function e(){var t;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.pageLoading=!0,e.next=3,i.k();case 3:(t=e.sent).code===o.b&&(this.clients=t.data.clients||[],this.selectModules=t.data.firstClientModules||[],this.modules=t.data.allModules||[],this.generateModuleTree()),this.pageLoading=!1;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{submitClientForm:function(){var e,t=this;this.$refs.clientForm.validate((e=l()(n.a.mark(function e(s){return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=8;break}if(!t.clientForm.id){e.next=5;break}return e.delegateYield(n.a.mark(function e(){var s,a,r,l,c;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.clientForm.status=parseInt(t.clientForm.status),e.next=3,i.E(t.clientForm);case 3:if((s=e.sent).code!==o.b){e.next=18;break}t.showClientFormModal=!1,a=0;case 7:if(!(a<t.clients.length)){e.next=15;break}if(t.clients[a].id!==s.data.id){e.next=12;break}return t.clients[a].clientName=s.data.clientName,t.clients[a].status=s.data.status,e.abrupt("break",15);case 12:a++,e.next=7;break;case 15:t.$message({message:"客户端更新成功",type:"success"}),e.next=19;break;case 18:if(s.code===o.c){for(c in t.clientForm.status=""+t.clientForm.status,r=d.a.recursive(!0,{},t.clientFormRules),l=function(e){void 0===t.clientFormRules[e]&&(t.clientFormRules[e]=[]),t.clientFormRules[e].push({validator:function(t,a,n){n(new Error(s.data[e][0]))},trigger:"blur"}),t.$refs.clientForm.validateField(e)},s.data)l(c);t.clientFormRules=d.a.recursive(!0,{},r)}else t.$message({message:s.message,type:"warning"});case 19:case"end":return e.stop()}},e,t)})(),"t0",3);case 3:e.next=6;break;case 5:return e.delegateYield(n.a.mark(function e(){var s,a,r,l;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.s(t.clientForm);case 2:if((s=e.sent).code===o.b)t.showClientFormModal=!1,t.clients.push(s.data),1==t.clients.length&&(t.selectClient=s.data),t.$message({message:"客户端添加成功",type:"success"});else if(s.code===o.c){for(l in t.clientForm.status=""+t.clientForm.status,a=d.a.recursive(!0,{},t.clientFormRules),r=function(e){void 0===t.clientFormRules[e]&&(t.clientFormRules[e]=[]),t.clientFormRules[e].push({validator:function(t,a,n){n(new Error(s.data[e][0]))},trigger:"blur"}),t.$refs.clientForm.validateField(e)},s.data)r(l);t.clientFormRules=d.a.recursive(!0,{},a)}else t.$message({message:s.message,type:"warning"});case 4:case"end":return e.stop()}},e,t)})(),"t1",6);case 6:e.next=10;break;case 8:return console.log("error submit!!"),e.abrupt("return",!1);case 10:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},generateModuleTree:function(){var e=this;this.modules.length>0&&this.appendModuleTreeNode({id:0,name:"全部模块"}),this.modules.forEach(function(t){e.appendModuleTreeNode(t)}),this.clients.length>0&&(this.selectClient=this.clients[0],this.$refs.roleTable.setCurrentRow(this.clients[0]))},openClientFormModal:function(){this.showClientFormModal=!0,this.clientForm=d()({},u),this.$refs.clientForm&&this.$refs.clientForm.resetFields()},openEditClientModal:function(e){this.showClientFormModal=!0,this.$refs.clientForm&&this.$refs.clientForm.resetFields(),this.clientForm=d()({},e),this.clientForm.status=""+e.status},openPasswordModal:function(){var e,t=this,s=this;this.$prompt(null,"输入用户密码",{confirmButtonText:"确定",cancelButtonText:"取消",inputType:"password"}).then((e=l()(n.a.mark(function e(a){var r,l=a.value;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.i({id:s.selectClient.id,password:l});case 2:(r=e.sent).code===o.b?(s.showPassowrdFormModal=!1,s.passwordForm.password=null,s.$set(s.selectClient,"clientSecret",r.data)):t.$message({message:r.message,type:"warning"});case 4:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}))},addClientModule:function(){this.$refs.moduleTree.getNode({id:this.roleModuleForm.id});this.showClientModuleModal=!1},appendModuleTreeNode:function(e){0!==e.id?this.$refs.moduleTree.append({id:e.id,label:e.name},{id:e.parentId}):this.$refs.moduleTree.append({id:e.id,label:e.name,code:e.code,description:e.description})},saveModules:function(){var e=l()(n.a.mark(function e(){var t,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=[],this.$refs.moduleTree.getCheckedNodes().forEach(function(e){0!==e.id&&t.push(e.id)}),0!==t.length){e.next=5;break}return this.$message({message:"请选择权限模块",type:"info"}),e.abrupt("return");case 5:return e.next=7,i.F({clientId:this.selectClient.id,moduleIds:t});case 7:(s=e.sent).code===o.b?this.$message({message:"权限模块绑定成功",type:"success"}):this.$message({message:s.message,type:"warning"});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),handleCurrentChange:function(){var e=l()(n.a.mark(function e(t){var s,a,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.selectClient=t,this.pageLoading=!0,e.next=4,i.h({id:t.id});case 4:if((s=e.sent).code===o.b){if(this.$refs.moduleTree){for(a=[],r=0;r<s.data.length;r++)a.push(s.data[r].moduleId),this.$refs.moduleTree.getNode({id:s.data[r].moduleId});this.$refs.moduleTree.setCheckedKeys(a)}}else this.$message({message:s.message,type:"warning"});this.pageLoading=!1;case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),deleteClient:function(e){var t=this;this.$confirm("删除 "+e.clientName+" ？","删除客户端",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(l()(n.a.mark(function s(){var a;return n.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,i.d(e.id);case 2:if(s.sent.code!==o.b){s.next=14;break}a=0;case 5:if(!(a<t.clients.length)){s.next=12;break}if(t.clients[a].id!==e.id){s.next=9;break}return t.clients.splice(a,1),s.abrupt("break",12);case 9:a++,s.next=5;break;case 12:t.showClientFormModal=!1,t.$message({type:"success",message:"已删除 "+e.clientName});case 14:case"end":return s.stop()}},s,t)})))},deleteAuthServer:function(e){}}},h=(s(384),s(0)),f=Object(h.a)(p,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("c-main",{attrs:{id:"page-clients"}},[s("header",{staticClass:"toolbar"},[s("c-level",[s("template",{slot:"left"},[s("div",{staticClass:"cell"},[s("div",{staticClass:"cell__content"},[s("h1",{staticClass:"toolbar__title"},[e._v("\n              授权管理\n              "),s("span",[e._v("子系统接入授权管理")])])])])]),e._v(" "),s("template",{slot:"right"},[s("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.openClientFormModal()}}},[e._v("添加客户端")])],1)],2)],1),e._v(" "),s("el-container",[s("el-aside",{},[s("el-card",{staticClass:"box-card"},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[e._v("客户端列表")])]),e._v(" "),s("el-table",{ref:"roleTable",staticStyle:{width:"100%"},attrs:{data:e.clients,"show-header":!1,"highlight-current-row":!0},on:{"current-change":e.handleCurrentChange}},[s("el-table-column",{attrs:{prop:"clientName",label:"客户端名称"}}),e._v(" "),s("el-table-column",{attrs:{width:"60px",align:"right",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return s("span",{staticStyle:{float:"right"}},[s("el-button",{staticClass:"icon-pen5",attrs:{type:"text",size:"mini"},on:{click:function(s){e.openEditClientModal(t.row)}}})],1)}}])})],1)],1)],1),e._v(" "),s("el-main",[s("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:e.pageLoading,expression:"pageLoading"}],attrs:{type:"border-card"},model:{value:e.tabActiveName,callback:function(t){e.tabActiveName=t},expression:"tabActiveName"}},[s("el-tab-pane",{attrs:{label:"客户端信息",name:"first"}},[s("dl",{directives:[{name:"show",rawName:"v-show",value:e.clients.length>0,expression:"clients.length>0"}],staticClass:"client-info"},[s("li",[s("dt",[e._v("客户端名称")]),e._v(" "),s("dd",[e._v(e._s(e.selectClient.clientName))])]),e._v(" "),s("li",[s("dt",[e._v("Client ID")]),e._v(" "),s("dd",[e._v(e._s(e.selectClient.clientId))])]),e._v(" "),s("li",[s("dt",[e._v("Client Secret")]),e._v(" "),s("dd",[e._v("\n                "+e._s(e.selectClient.clientSecret||"********")+"\n                "),s("el-button",{staticClass:"icon-eye",attrs:{type:"text",size:"mini",circle:""},on:{click:function(t){e.openPasswordModal()}}})],1)])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:0===e.clients.length,expression:"clients.length ===0"}],staticStyle:{padding:"14px",color:"#97999f"}},[e._v("暂无数据")])]),e._v(" "),s("el-tab-pane",{attrs:{label:"权限模块",name:"second"}},[s("el-tree",{ref:"moduleTree",attrs:{data:e.moduleTree,"show-checkbox":"","node-key":"id","default-expand-all":!0,"default-checked-keys":e.selectModules,props:e.defaultProps},scopedSlots:e._u([{key:"default",fn:function(t){t.node;var a=t.data;return s("span",{staticClass:"custom-tree-node"},[s("span",[e._v(e._s(a.label))])])}}])}),e._v(" "),s("br"),e._v(" "),s("el-button",{directives:[{name:"show",rawName:"v-show",value:0!=e.moduleTree.length,expression:"moduleTree.length != 0"}],attrs:{size:"small",type:"primary"},on:{click:function(t){e.saveModules()}}},[e._v("绑定模块")])],1),e._v(" "),s("el-tab-pane",{attrs:{label:"授权对象",name:"thrid"}},[s("el-table",{attrs:{data:e.authServers,id:"authServersTable"}},[s("el-table-column",{attrs:{prop:"ip",label:"IP 地址","min-width":"120"}}),e._v(" "),s("el-table-column",{attrs:{prop:"remark",width:"180",label:"备注"}}),e._v(" "),s("el-table-column",{attrs:{width:"180",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return s("span",{staticStyle:{"text-align":"center",display:"block",width:"100%"}},[s("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(s){e.deleteAuthServer(t.row)}}},[e._v("删除")])],1)}}])})],1),e._v(" "),s("el-button",{staticStyle:{"margin-left":"7px","margin-top":"10px"},attrs:{size:"small",type:"text"}},[e._v("添加对象")])],1)],1)],1)],1),e._v(" "),s("el-dialog",{attrs:{title:e.clientForm.id?"编辑客户端":"添加客户端",visible:e.showClientFormModal},on:{"update:visible":function(t){e.showClientFormModal=t}}},[s("el-form",{ref:"clientForm",attrs:{model:e.clientForm,rules:e.clientFormRules,"validate-on-rule-change":!1}},[s("el-form-item",{attrs:{label:"客户端名称","label-width":"120px",prop:"clientName"}},[s("el-input",{attrs:{autocomplete:"off"},model:{value:e.clientForm.clientName,callback:function(t){e.$set(e.clientForm,"clientName",t)},expression:"clientForm.clientName"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"客户端状态","label-width":"120px"}},[s("el-radio-group",{model:{value:e.clientForm.status,callback:function(t){e.$set(e.clientForm,"status",t)},expression:"clientForm.status"}},[s("el-radio",{attrs:{label:"1"}},[e._v("有效")]),e._v(" "),s("el-radio",{attrs:{label:"0"}},[e._v("无效")])],1)],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{directives:[{name:"show",rawName:"v-show",value:e.clientForm.id,expression:"clientForm.id"}],staticStyle:{float:"left"},on:{click:function(t){e.deleteClient(e.clientForm)}}},[e._v("删除客户端")]),e._v(" "),s("el-button",{on:{click:function(t){e.showClientFormModal=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitClientForm()}}},[e._v(e._s(e.clientForm.id?"保存":"添加"))])],1)],1),e._v(" "),s("el-dialog",{attrs:{title:"查看私钥",visible:e.showPassowrdFormModal,width:"40%"},on:{"update:visible":function(t){e.showPassowrdFormModal=t}}},[s("el-form",{ref:"passwordForm",attrs:{model:e.passwordForm,rules:e.passwordFormRules,"validate-on-rule-change":!1}},[s("el-form-item",{attrs:{label:"用户密码","label-width":"120px",prop:"password"}},[s("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.passwordForm.password,callback:function(t){e.$set(e.passwordForm,"password",t)},expression:"passwordForm.password"}})],1)],1),e._v(" "),s("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.showPassowrdFormModal=!1}}},[e._v("取 消")]),e._v(" "),s("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitPasswordForm()}}},[e._v("查看")])],1)],1)],1)},[],!1,null,null,null);f.options.__file="clients.vue";t.default=f.exports}}]);