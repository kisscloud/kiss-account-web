(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{362:function(e,s,o){},377:function(e,s,o){"use strict";var r=o(362);o.n(r).a},387:function(e,s,o){"use strict";o.r(s);var r=o(33),t=o.n(r),a=o(52),i=o.n(a),n=o(111),l=o(53),d=o(23),m=o.n(d),u={parentId:0,name:null,status:"1"},c={moduleId:null,name:null,type:"1",code:null,status:"1",limitFields:""},p={name:"PersmissionUsers",data:function(){return{pageLoading:!1,loading:!1,showPermissionModuleFormModal:!1,showPermissionFormModal:!1,formLabelWidth:"80px",moduleForm:m()({},u),permissionForm:m()({},c),selectModule:{},permissionFormRules:{moduleId:[{required:!0,message:"请选择所属模块",trigger:"change"}],name:[{required:!0,message:"请输入权限名称",trigger:"change"}],type:[{required:!0,message:"请选择权限类型",trigger:"change"}],code:[{required:!0,message:"请输入权限码",trigger:"change"}]},moduleFormRules:{name:[{required:!0,message:"请输入模块名称",trigger:"change"}]},showPermissions:[],permissions:[],moduleTree:[],moduleFormModules:[{id:0,name:"无"}],permissionFormModules:[],defaultProps:{children:"children",label:"label"}}},mounted:function(){var e=i()(t.a.mark(function e(){var s,o=this;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.pageLoading=!0,e.next=3,n.m();case 3:(s=e.sent).code===l.b&&(this.permissions=s.data.permissions,this.showPermissions=s.data.permissions,this.permissionFormModules=s.data.modules,this.appendModuleTreeNode({id:0,name:"所有模块"}),this.$refs.moduleTree.setCurrentKey({id:0}),s.data.modules.forEach(function(e){o.appendModuleTreeNode(e),o.moduleFormModules.push(e)})),this.pageLoading=!1;case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),methods:{submitPermissionForm:function(){var e,s=this;this.$refs.permissionForm.validate((e=i()(t.a.mark(function e(o){var r;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s.loading=!0,!o){e.next=13;break}if((r=m()({},s.permissionForm)).moduleId=parseInt(s.permissionForm.moduleId),r.status=parseInt(s.permissionForm.status),!r.id){e.next=9;break}return e.delegateYield(t.a.mark(function e(){var o,a,i,d,u;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.G(r);case 2:if((o=e.sent).code!==l.b){e.next=16;break}s.showPermissionFormModal=!1,a=0;case 6:if(!(a<s.permissions.length)){e.next=13;break}if(s.permissions[a].id!==o.data.id){e.next=10;break}return s.permissions[a]=m()(s.permissions[a],o.data),e.abrupt("break",13);case 10:a++,e.next=6;break;case 13:s.$message({message:"权限更新成功",type:"success"}),e.next=17;break;case 16:if(o.code===l.c){for(u in i=m.a.recursive(!0,{},s.permissionFormRules),d=function(e){void 0===s.permissionFormRules[e]&&(s.permissionFormRules[e]=[]),s.permissionFormRules[e].push({validator:function(s,r,t){t(new Error(o.data[e][0]))},trigger:"blur"}),s.$refs.permissionForm.validateField(e)},o.data)d(u);s.permissionFormRules=m.a.recursive(!0,{},i)}else s.$message({message:o.message,type:"warning"});case 17:case"end":return e.stop()}},e,s)})(),"t0",7);case 7:e.next=10;break;case 9:return e.delegateYield(t.a.mark(function e(){var o,a,i,d;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.t(r);case 2:if((o=e.sent).code===l.b)s.showPermissionFormModal=!1,s.permissions.push(o.data),s.showPermissions.push(o.data),s.$message({message:"权限添加成功",type:"success"});else if(o.code===l.c){for(d in a=m.a.recursive(!0,{},s.permissionFormRules),i=function(e){void 0===s.permissionFormRules[e]&&(s.permissionFormRules[e]=[]),s.permissionFormRules[e].push({validator:function(s,r,t){t(new Error(o.data[e][0]))},trigger:"blur"}),s.$refs.permissionForm.validateField(e)},o.data)i(d);s.permissionFormRules=m.a.recursive(!0,{},a)}else s.$message({message:o.message,type:"warning"});case 4:case"end":return e.stop()}},e,s)})(),"t1",10);case 10:s.loading=!1,e.next=15;break;case 13:return console.log("error submit!!"),e.abrupt("return",!1);case 15:case"end":return e.stop()}},e,s)})),function(s){return e.apply(this,arguments)}))},submitModuleForm:function(){var e,s=this;this.$refs.moduleForm.validate((e=i()(t.a.mark(function e(o){var r;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=11;break}if((r=m()({},s.moduleForm)).parentId=parseInt(s.moduleForm.parentId),r.status=parseInt(s.moduleForm.status),!s.moduleForm.id){e.next=8;break}return e.delegateYield(t.a.mark(function e(){var o,a,i,d,u,c,p,f;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.H(r);case 2:if((o=e.sent).code!==l.b){e.next=29;break}s.showPermissionModuleFormModal=!1,a=0;case 6:if(!(a<s.permissionFormModules.length)){e.next=13;break}if(s.permissionFormModules[a].id!==o.data.id){e.next=10;break}return s.permissionFormModules[a]=o.data,e.abrupt("break",13);case 10:a++,e.next=6;break;case 13:i=0;case 14:if(!(i<s.moduleFormModules.length)){e.next=21;break}if(s.moduleFormModules[i].id!==o.data.id){e.next=18;break}return s.moduleFormModules[i]=o.data,e.abrupt("break",21);case 18:i++,e.next=14;break;case 21:(d=s.$refs.moduleTree.getNode({id:o.data.id})).data.name=o.data.name,d.data.label=o.data.name,d.data.status=o.data.status,o.data.parentId!==d.data.parentId&&(d.parentId=o.data.parentId,s.$refs.moduleTree.remove(d),u=s.$refs.moduleTree.getNode({id:o.data.parentId}),s.$refs.moduleTree.append(d,u)),s.$message({message:"模块更新成功",type:"success"}),e.next=30;break;case 29:if(o.code===l.c){for(f in c=m.a.recursive(!0,{},s.moduleFormRules),p=function(e){void 0===s.moduleFormRules[e]&&(s.moduleFormRules[e]=[]),s.moduleFormRules[e].push({validator:function(s,r,t){t(new Error(o.data[e][0]))},trigger:"blur"}),s.$refs.moduleForm.validateField(e)},o.data)p(f);s.moduleFormRules=m.a.recursive(!0,{},c)}else s.$message({message:o.message,type:"warning"});case 30:case"end":return e.stop()}},e,s)})(),"t0",6);case 6:e.next=9;break;case 8:return e.delegateYield(t.a.mark(function e(){var o,r,a,i;return t.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.u(s.moduleForm);case 2:if((o=e.sent).code===l.b)s.showPermissionModuleFormModal=!1,s.permissionFormModules.push(o.data),s.moduleFormModules.push(o.data),s.appendModuleTreeNode(o.data),s.$message({message:"模块添加成功",type:"success"});else if(o.code===l.c){for(i in r=m.a.recursive(!0,{},s.moduleFormRules),a=function(e){void 0===s.moduleFormRules[e]&&(s.moduleFormRules[e]=[]),s.moduleFormRules[e].push({validator:function(s,r,t){t(new Error(o.data[e][0]))},trigger:"blur"}),s.$refs.moduleForm.validateField(e)},o.data)a(i);s.moduleFormRules=m.a.recursive(!0,{},r)}else s.$message({message:o.message,type:"warning"});case 4:case"end":return e.stop()}},e,s)})(),"t1",9);case 9:e.next=13;break;case 11:return console.log("error submit!!"),e.abrupt("return",!1);case 13:case"end":return e.stop()}},e,s)})),function(s){return e.apply(this,arguments)}))},openPermissionModuleFormModal:function(){this.showPermissionModuleFormModal=!0,this.moduleForm=m()({},u),void 0!==this.$refs.moduleForm&&this.$refs.moduleForm.resetFields(),this.moduleForm.parentId=this.selectModule.id},openPermissionModuleEditModal:function(e){this.showPermissionModuleFormModal=!0,e.status=""+e.status,this.moduleForm=m()({},e),void 0!==this.$refs.moduleForm&&this.$refs.moduleForm.resetFields()},openPermissionFormModal:function(){this.showPermissionFormModal=!0,this.permissionForm=m()({},c),void 0!==this.$refs.permissionForm&&this.$refs.permissionForm.resetFields(),this.permissionForm.moduleId=this.selectModule.id},openPermissionEditModal:function(e){this.showPermissionFormModal=!0,e.status=""+e.status,e.type=""+e.type,this.permissionForm=m()({},e),void 0!==this.$refs.permissionForm&&this.$refs.permissionForm.resetFields()},deletePermission:function(e){var s=this;this.$confirm("删除 "+e.name+" ？","删除权限",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(i()(t.a.mark(function o(){var r,a;return t.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.e(e.id);case 2:if(o.sent.code!==l.b){o.next=22;break}r=0;case 5:if(!(r<s.permissions.length)){o.next=12;break}if(s.permissions[r].id!==e.id){o.next=9;break}return s.permissions.splice(r,1),o.abrupt("break",12);case 9:r++,o.next=5;break;case 12:a=0;case 13:if(!(a<s.showPermissions.length)){o.next=20;break}if(s.showPermissions[a].id!==e.id){o.next=17;break}return s.showPermissions.splice(a,1),o.abrupt("break",20);case 17:a++,o.next=13;break;case 20:s.showRoleFormModal=!1,s.$message({type:"success",message:"已删除 "+e.name});case 22:case"end":return o.stop()}},o,s)})))},deleteModule:function(e){var s=this;this.$confirm("删除 "+e.name+" ？","删除权限模块",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(i()(t.a.mark(function o(){var r,a,i,d;return t.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,n.f(e.id);case 2:if((r=o.sent).code!==l.b){o.next=33;break}a=0;case 5:if(!(a<s.permissionFormModules.length)){o.next=12;break}if(s.permissionFormModules[a].id!==e.id){o.next=9;break}return s.permissionFormModules.splice(a,1),o.abrupt("break",12);case 9:a++,o.next=5;break;case 12:i=0;case 13:if(!(i<s.permissions.length)){o.next=20;break}if(s.permissions[i].id!==e.id){o.next=17;break}return s.permissions.splice(i,1),o.abrupt("break",20);case 17:i++,o.next=13;break;case 20:d=0;case 21:if(!(d<s.showPermissions.length)){o.next=28;break}if(s.showPermissions[d].id!==e.id){o.next=25;break}return s.showPermissions.splice(d,1),o.abrupt("break",28);case 25:d++,o.next=21;break;case 28:s.$refs.moduleTree.remove({id:e.id}),s.showPermissionModuleFormModal=!1,s.$message({type:"success",message:"已删除 "+e.name}),o.next=34;break;case 33:s.$message({type:"warning",message:r.message});case 34:case"end":return o.stop()}},o,s)})))},handleCommand:function(e){switch(e){case"permission":this.openPermissionFormModal();break;case"module":this.openPermissionModuleFormModal()}},appendModuleTreeNode:function(e){0!==e.id?this.$refs.moduleTree.append({id:e.id,label:e.name,name:e.name,parentId:e.parentId,status:e.status},{id:e.parentId}):this.$refs.moduleTree.append({id:e.id,label:e.name,name:e.name,parentId:e.parentId,status:e.status})},clickModule:function(e){var s=this;this.selectModule=e,0===e.id?this.showPermissions=this.permissions:(this.showPermissions=[],this.permissions.forEach(function(o){var r=s.getModuleLevel(o.moduleId);(o.moduleId===e.id||r.indexOf(e.id+",")>-1)&&s.showPermissions.push(m()({},o))}))},getModuleLevel:function(e){for(var s=0;s<this.moduleFormModules.length;s++)if(this.moduleFormModules[s].id===e)return this.moduleFormModules[s].level;return""},handleDragStart:function(e,s){console.log("drag start",e)},handleDragEnter:function(e,s,o){console.log("tree drag enter: ",s.label)},handleDragLeave:function(e,s,o){console.log("tree drag leave: ",s.label)},handleDragOver:function(e,s,o){console.log("tree drag over: ",s.label)},handleDragEnd:function(e,s,o,r){console.log("tree drag end: ",s&&s.label,o)},handleDrop:function(e,s,o,r){console.log("tree drop: ",s.label,o)},allowDrop:function(e,s,o){return"二级 3-1"!==s.data.label||"inner"!==o},allowDrag:function(e){return-1===e.data.label.indexOf("三级 3-2-2")}}},f=(o(377),o(0)),h=Object(f.a)(p,function(){var e=this,s=e.$createElement,o=e._self._c||s;return o("c-main",{attrs:{id:"page-permissions"}},[o("header",{staticClass:"toolbar"},[o("c-level",[o("template",{slot:"left"},[o("div",{staticClass:"cell"},[o("div",{staticClass:"cell__content"},[o("h1",{staticClass:"toolbar__title"},[e._v("权限管理 "),o("span",[e._v("管理平台所有的权限和模块")])])])])]),e._v(" "),o("template",{slot:"right"},[o("el-dropdown",{on:{command:e.handleCommand}},[o("el-button",{attrs:{type:"primary",size:"small"}},[e._v("\n      添加\n    ")]),e._v(" "),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{command:"permission"}},[e._v("添加权限")]),e._v(" "),o("el-dropdown-item",{attrs:{command:"module"}},[e._v("添加模块")])],1)],1)],1)],2)],1),e._v(" "),o("el-container",[o("el-aside",{},[o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[e._v("模块列表")])]),e._v(" "),o("el-tree",{ref:"moduleTree",attrs:{data:e.moduleTree,"node-key":"id","default-expand-all":"","highlight-current":!0,"expand-on-click-node":!1,"allow-drop":e.allowDrop,"allow-drag":e.allowDrag},on:{"node-drag-start":e.handleDragStart,"node-drag-enter":e.handleDragEnter,"node-drag-leave":e.handleDragLeave,"node-drag-over":e.handleDragOver,"node-drag-end":e.handleDragEnd,"node-drop":e.handleDrop,"node-click":e.clickModule},scopedSlots:e._u([{key:"default",fn:function(s){var r=s.node,t=s.data;return o("span",{staticClass:"custom-tree-node"},[o("span",[e._v(e._s(r.label))]),e._v(" "),o("span",[0!==t.id?o("el-button",{staticClass:"icon-pen5",attrs:{type:"text",size:"mini"},on:{click:function(s){e.openPermissionModuleEditModal(t)}}}):e._e()],1)])}}])})],1)],1),e._v(" "),o("el-main",[o("el-card",{staticClass:"box-card"},[o("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[o("span",[e._v("权限列表")])]),e._v(" "),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.pageLoading,expression:"pageLoading"}],staticStyle:{width:"100%"},attrs:{data:e.showPermissions,border:""}},[o("el-table-column",{attrs:{prop:"name",label:"权限名称",width:"180"}}),e._v(" "),o("el-table-column",{attrs:{prop:"moduleName",label:"权限模块",width:"180"}}),e._v(" "),o("el-table-column",{attrs:{prop:"typeText",label:"类型"}}),e._v(" "),o("el-table-column",{attrs:{prop:"code",width:"500",label:"权限码"}}),e._v(" "),o("el-table-column",{attrs:{prop:"statusText",label:"状态"}}),e._v(" "),o("el-table-column",{attrs:{align:"center",label:"操作",width:"100"},scopedSlots:e._u([{key:"default",fn:function(s){return o("span",{staticStyle:{width:"100%"}},[o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){e.openPermissionEditModal(s.row)}}},[e._v("编辑")]),e._v(" "),o("el-button",{attrs:{type:"text",size:"small"},on:{click:function(o){e.deletePermission(s.row)}}},[e._v("删除")])],1)}}])})],1)],1)],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"添加权限",visible:e.showPermissionFormModal},on:{"update:visible":function(s){e.showPermissionFormModal=s}}},[o("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"permissionForm",attrs:{model:e.permissionForm,rules:e.permissionFormRules,"validate-on-rule-change":!1}},[o("el-form-item",{attrs:{label:"所属模块","label-width":e.formLabelWidth,prop:"moduleId"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择权限模块"},model:{value:e.permissionForm.moduleId,callback:function(s){e.$set(e.permissionForm,"moduleId",s)},expression:"permissionForm.moduleId"}},e._l(e.permissionFormModules,function(e){return o("el-option",{key:"permissionForm_"+e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"权限名称","label-width":e.formLabelWidth,prop:"name"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.permissionForm.name,callback:function(s){e.$set(e.permissionForm,"name",s)},expression:"permissionForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"权限类型","label-width":e.formLabelWidth,prop:"type"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择权限类型"},model:{value:e.permissionForm.type,callback:function(s){e.$set(e.permissionForm,"type",s)},expression:"permissionForm.type"}},[o("el-option",{attrs:{label:"接口",value:"1"}}),e._v(" "),o("el-option",{attrs:{label:"页面",value:"2"}}),e._v(" "),o("el-option",{attrs:{label:"组件",value:"3"}}),e._v(" "),o("el-option",{attrs:{label:"授权",value:"4"}})],1)],1),e._v(" "),o("el-form-item",{attrs:{label:"权限码","label-width":e.formLabelWidth,prop:"code"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.permissionForm.code,callback:function(s){e.$set(e.permissionForm,"code",s)},expression:"permissionForm.code"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"权限描述","label-width":e.formLabelWidth}},[o("el-input",{attrs:{type:"textarea",rows:2,placeholder:"请输入权限描述，用于绑定权限时提示使用"},model:{value:e.permissionForm.limitFields,callback:function(s){e.$set(e.permissionForm,"limitFields",s)},expression:"permissionForm.limitFields"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"权限状态","label-width":e.formLabelWidth}},[o("el-radio-group",{model:{value:e.permissionForm.status,callback:function(s){e.$set(e.permissionForm,"status",s)},expression:"permissionForm.status"}},[o("el-radio",{attrs:{label:"1"}},[e._v("有效")]),e._v(" "),o("el-radio",{attrs:{label:"0"}},[e._v("无效")])],1)],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(s){e.showPermissionFormModal=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(s){e.submitPermissionForm()}}},[e._v("确 定")])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"添加权限模块",visible:e.showPermissionModuleFormModal},on:{"update:visible":function(s){e.showPermissionModuleFormModal=s}}},[o("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"moduleForm",attrs:{model:e.moduleForm,rules:e.moduleFormRules,"validate-on-rule-change":!1}},[o("el-form-item",{attrs:{label:"父模块","label-width":e.formLabelWidth}},[o("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择父模块"},model:{value:e.moduleForm.parentId,callback:function(s){e.$set(e.moduleForm,"parentId",s)},expression:"moduleForm.parentId"}},e._l(e.moduleFormModules,function(e){return o("el-option",{key:"moduleForm_"+e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"模块名称","label-width":e.formLabelWidth,prop:"name"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.moduleForm.name,callback:function(s){e.$set(e.moduleForm,"name",s)},expression:"moduleForm.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"模块状态","label-width":e.formLabelWidth}},[o("el-radio-group",{model:{value:e.moduleForm.status,callback:function(s){e.$set(e.moduleForm,"status",s)},expression:"moduleForm.status"}},[o("el-radio",{attrs:{label:"1"}},[e._v("有效")]),e._v(" "),o("el-radio",{attrs:{label:"0"}},[e._v("无效")])],1)],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{staticStyle:{float:"left"},on:{click:function(s){e.deleteModule(e.moduleForm)}}},[e._v("删除模块")]),e._v(" "),o("el-button",{on:{click:function(s){e.showPermissionModuleFormModal=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(s){e.submitModuleForm()}}},[e._v("确 定")])],1)],1)],1)},[],!1,null,null,null);h.options.__file="permissions.vue";s.default=h.exports}}]);